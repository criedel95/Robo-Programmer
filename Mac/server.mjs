import { createHash } from "node:crypto";
import { createServer } from "node:http";
import { Socket } from "node:net";
import { spawn } from "node:child_process";
import { readdir, readFile, stat } from "node:fs/promises";
import { createReadStream } from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const serverApiVersion = 28;
const args = process.argv.slice(2);
const noBrowser = args.includes("--no-browser");
const portArg = args.find((arg) => arg === "--port" || arg.startsWith("--port="));
const portValue = portArg?.includes("=") ? portArg.split("=")[1] : args[args.indexOf("--port") + 1];
const requestedPort = Number.parseInt(portValue || process.env.PORT || "4220", 10);
const pathArg = args.find((arg) => arg === "--path" || arg.startsWith("--path="));
const launchPathValue = pathArg?.includes("=") ? pathArg.split("=")[1] : args[args.indexOf("--path") + 1];
const launchPath = launchPathValue || "/";
const textDecoder = new TextDecoder("utf-8");

const contentTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "application/javascript; charset=utf-8"],
  [".mjs", "application/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".txt", "text/plain; charset=utf-8"],
  [".md", "text/markdown; charset=utf-8"],
  [".xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".ico", "image/x-icon"],
  [".svg", "image/svg+xml"]
]);

function parseRobotAddress(robotAddress) {
  if (!robotAddress || !String(robotAddress).trim()) throw new Error("Robot address is required.");
  const url = new URL(String(robotAddress));
  if (!["http:", "https:"].includes(url.protocol) || !url.hostname) {
    throw new Error("Robot address must be a valid HTTP or HTTPS address.");
  }
  return {
    httpOrigin: url.origin,
    ftpHost: url.hostname
  };
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function htmlToText(html) {
  return String(html)
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(?:tr|p|div|li|h\d)>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, "\"")
    .replace(/&#39;/g, "'")
    .replace(/\r\n|\r/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/^[ \t]+|[ \t]+$/gm, "")
    .trim();
}

async function robotRawTextPage(httpOrigin, pagePath, timeoutMs = 15000) {
  if (!pagePath?.startsWith("/")) throw new Error("Robot page paths must start with /.");
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(`${httpOrigin}${pagePath}`, { signal: controller.signal });
    if (!response.ok) throw new Error(`Robot returned HTTP ${response.status} for ${pagePath}.`);
    return await response.text();
  } finally {
    clearTimeout(timeout);
  }
}

async function robotPlainTextPage(httpOrigin, pagePath) {
  return htmlToText(await robotRawTextPage(httpOrigin, pagePath));
}

async function getRobotHtcgOrigin(httpOrigin) {
  const homePage = await robotRawTextPage(httpOrigin, "/", 10000);
  const portMatch = homePage.match(/htcg_port\s*=\s*parseInt\(["'](\d+)["']\)/i);
  if (!portMatch) throw new Error("The robot homepage did not advertise its iRProgrammer service port.");
  const url = new URL(httpOrigin);
  url.port = portMatch[1];
  url.pathname = "/";
  url.search = "";
  url.hash = "";
  return url.origin;
}

async function sendRobotCometVariable(htcgOrigin, programName, variableName, value) {
  if (!programName || !variableName) throw new Error("Invalid robot variable write request.");
  const query = new URLSearchParams({
    func: "VMIP_WRITEVA",
    prog_name: programName,
    var_name: variableName,
    value: String(value),
    _: String(Date.now())
  });
  const text = await robotRawTextPage(htcgOrigin, `/COMET/rpc?${query}`, 15000);
  let result;
  try {
    result = JSON.parse(text);
  } catch {
    throw new Error("The robot returned an invalid response to the variable write.");
  }
  const rpc = Array.isArray(result?.FANUC?.RPC) ? result.FANUC.RPC[0] : result?.FANUC?.RPC;
  if (!rpc || !["0", "0x0"].includes(String(rpc.status))) {
    throw new Error(`The robot rejected the variable write: ${rpc?.message || "Unknown controller error."}`);
  }
}

async function sendRobotIoValue(htcgOrigin, ioType, index, value) {
  if (ioType < 1 || index < 1 || ![0, 1].includes(value)) throw new Error("Invalid robot I/O write request.");
  const query = new URLSearchParams({
    func: "IOVALSET",
    type: String(ioType),
    index: String(index),
    value: String(value),
    _: String(Date.now())
  });
  const text = await robotRawTextPage(htcgOrigin, `/COMET/rpc?${query}`, 15000);
  let result;
  try {
    result = JSON.parse(text);
  } catch {
    throw new Error("The robot returned an invalid response to the I/O write.");
  }
  const rpc = Array.isArray(result?.FANUC?.RPC) ? result.FANUC.RPC[0] : result?.FANUC?.RPC;
  if (!rpc || !["0", "0x0"].includes(String(rpc.status))) {
    throw new Error(`The robot rejected the I/O write: ${rpc?.message || "Unknown controller error."}`);
  }
}

class FtpClient {
  constructor(host) {
    this.host = host;
    this.socket = null;
  }

  async connect() {
    this.socket = new Socket();
    this.socket.setTimeout(15000);
    await new Promise((resolve, reject) => {
      this.socket.once("error", reject);
      this.socket.once("timeout", () => reject(new Error("FTP connection timed out.")));
      this.socket.connect(21, this.host, resolve);
    });
    await this.readReply();
    await this.command("USER anonymous");
    await this.command("PASS robo-programmer@localhost");
    await this.command("TYPE I");
  }

  close() {
    try { this.socket?.end(); } catch {}
    this.socket = null;
  }

  async readReply() {
    let buffer = "";
    while (true) {
      const chunk = await new Promise((resolve, reject) => {
        const onData = (data) => cleanup(() => resolve(data));
        const onError = (error) => cleanup(() => reject(error));
        const onTimeout = () => cleanup(() => reject(new Error("FTP read timed out.")));
        const cleanup = (next) => {
          this.socket.off("data", onData);
          this.socket.off("error", onError);
          this.socket.off("timeout", onTimeout);
          next();
        };
        this.socket.once("data", onData);
        this.socket.once("error", onError);
        this.socket.once("timeout", onTimeout);
      });
      buffer += chunk.toString("binary");
      const lines = buffer.split(/\r?\n/).filter(Boolean);
      const firstCode = lines[0]?.slice(0, 3);
      if (firstCode && lines.some((line) => line.startsWith(`${firstCode} `))) {
        const code = Number.parseInt(firstCode, 10);
        if (code >= 400) throw new Error(lines.join(" "));
        return { code, message: lines.join("\n") };
      }
    }
  }

  async command(commandText) {
    this.socket.write(`${commandText}\r\n`, "binary");
    return this.readReply();
  }

  async passiveSocket() {
    const reply = await this.command("PASV");
    const match = reply.message.match(/\((\d+),(\d+),(\d+),(\d+),(\d+),(\d+)\)/);
    if (!match) throw new Error("FTP server did not return a passive data address.");
    const host = `${match[1]}.${match[2]}.${match[3]}.${match[4]}`;
    const port = Number(match[5]) * 256 + Number(match[6]);
    const socket = new Socket();
    socket.setTimeout(15000);
    await new Promise((resolve, reject) => {
      socket.once("error", reject);
      socket.once("timeout", () => reject(new Error("FTP passive connection timed out.")));
      socket.connect(port, host, resolve);
    });
    return socket;
  }

  async list() {
    const dataSocket = await this.passiveSocket();
    const chunks = [];
    const dataDone = new Promise((resolve, reject) => {
      dataSocket.on("data", (chunk) => chunks.push(chunk));
      dataSocket.once("error", reject);
      dataSocket.once("timeout", () => reject(new Error("FTP list timed out.")));
      dataSocket.once("end", resolve);
    });
    await this.command("NLST");
    await dataDone;
    await this.readReply();
    return Buffer.concat(chunks).toString("ascii").split(/\r?\n/).map((item) => item.trim().toUpperCase()).filter(Boolean);
  }

  async download(fileName) {
    const dataSocket = await this.passiveSocket();
    const chunks = [];
    const dataDone = new Promise((resolve, reject) => {
      dataSocket.on("data", (chunk) => chunks.push(chunk));
      dataSocket.once("error", reject);
      dataSocket.once("timeout", () => reject(new Error(`FTP download timed out for ${fileName}.`)));
      dataSocket.once("end", resolve);
    });
    await this.command(`RETR ${fileName}`);
    await dataDone;
    await this.readReply();
    return Buffer.concat(chunks);
  }

  async upload(fileName, content) {
    const dataSocket = await this.passiveSocket();
    const bytes = Buffer.from(String(content).replace(/\r?\n/g, "\r\n"), "ascii");
    const dataDone = new Promise((resolve, reject) => {
      dataSocket.once("error", reject);
      dataSocket.once("timeout", () => reject(new Error(`FTP upload timed out for ${fileName}.`)));
      dataSocket.once("close", resolve);
    });
    await this.command(`STOR ${fileName}`);
    dataSocket.end(bytes);
    await dataDone;
    await this.readReply();
  }
}

async function withFtp(host, action) {
  const client = new FtpClient(host);
  try {
    await client.connect();
    return await action(client);
  } finally {
    client.close();
  }
}

async function getRobotFtpFiles(host) {
  return withFtp(host, (client) => client.list());
}

async function getRobotFtpFile(host, fileName) {
  return withFtp(host, (client) => client.download(fileName));
}

async function sendRobotFtpFile(host, fileName, content) {
  return withFtp(host, (client) => client.upload(fileName, content));
}

async function getRobotTextFile(connection, fileName) {
  try {
    return await robotRawTextPage(connection.httpOrigin, `/MD/${fileName}`, 15000);
  } catch {
    const bytes = await getRobotFtpFile(connection.ftpHost, fileName);
    return bytes.toString("ascii");
  }
}

function parseNumericRegisters(text) {
  const normalized = htmlToText(text).replace(/\r\n|\r/g, "\n");
  const registers = [];
  for (const rawLine of normalized.split("\n")) {
    const line = rawLine.trim();
    if (!line) continue;
    let match = line.match(/^\s*\[(\d+)\]\s*=\s*([-+]?(?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][-+]?\d+)?)\s*(?:'([^']*)')?/i);
    if (match) {
      registers.push({ index: Number(match[1]), value: Number(match[2]), comment: (match[3] || "").trim() });
      continue;
    }
    match = line.match(/^\s*R\[(\d+)(?::([^\]]*))?\]\s*[:=]\s*([-+]?(?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][-+]?\d+)?)/i);
    if (match) registers.push({ index: Number(match[1]), value: Number(match[3]), comment: (match[2] || "").trim() });
  }
  return registers.sort((a, b) => a.index - b.index);
}

function parseFlagStates(text) {
  const normalized = htmlToText(text).replace(/\r\n|\r/g, "\n");
  const flags = [];
  for (const rawLine of normalized.split("\n")) {
    const matches = Array.from(rawLine.matchAll(/\bFLG\[\s*(\d+)\]\s+(ON|OFF)\b/gi));
    matches.forEach((match, idx) => {
      const commentStart = match.index + match[0].length;
      const commentEnd = matches[idx + 1]?.index ?? rawLine.length;
      flags.push({
        index: Number(match[1]),
        state: match[2].toUpperCase(),
        comment: rawLine.slice(commentStart, commentEnd).trim()
      });
    });
  }
  return flags.sort((a, b) => a.index - b.index);
}

function parsePositionRegisters(text) {
  const normalized = String(text).replace(/\r\n|\r/g, "\n");
  const matches = Array.from(normalized.matchAll(/^\s*\[(\d+),(\d+)\]\s*=\s*'([^']*)'\s*([^\n]*)$/gm));
  return matches.map((match, matchIndex) => {
    const blockEnd = matches[matchIndex + 1]?.index ?? normalized.length;
    const block = normalized.slice(match.index, blockEnd).trimEnd();
    const values = {};
    for (const valueMatch of block.matchAll(/\b(J\d+|X|Y|Z|W|P|R)\s*[:=]\s*([+-]?(?:\d+(?:\.\d*)?|\.\d+))/gi)) {
      values[valueMatch[1].toUpperCase()] = Number(valueMatch[2]);
    }
    const configMatch = block.match(/\bConfig:\s*([NF]\s+[UD]\s+[TB]\s*,\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+)/i);
    const uninitialized = /\bUninitialized\b/i.test(block);
    return {
      group: Number(match[1]),
      index: Number(match[2]),
      comment: match[3].trim(),
      mode: uninitialized ? "uninitialized" : /^\s*J\d+\s*=/im.test(block) ? "joint" : "cartesian",
      config: configMatch ? configMatch[1].trim().replace(/\s+/g, " ") : "N U T, 0, 0, 0",
      values
    };
  });
}

function numericValueText(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) throw new Error("Numeric Register value must be a finite number.");
  return String(Number(number.toPrecision(15)));
}

async function readBody(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  if (chunks.reduce((total, chunk) => total + chunk.length, 0) > 20 * 1024 * 1024) {
    throw new Error("Request body is too large.");
  }
  const text = Buffer.concat(chunks).toString("utf8");
  return text ? JSON.parse(text) : {};
}

function sendJson(response, statusCode, data) {
  const body = Buffer.from(JSON.stringify(data), "utf8");
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": body.length,
    "Cache-Control": "no-store"
  });
  response.end(body);
}

function sendError(response, error) {
  sendJson(response, 400, { ok: false, error: error?.message || String(error) });
}

async function handleRobotComments(target, payload, response) {
  const connection = parseRobotAddress(payload.robotAddress);
  if (target === "/robot-comments/read") {
    const pages = [];
    for (const category of payload.categories || []) {
      const readCode = String(category.readCode || "");
      const range = String(category.range || "");
      if (!/^\d+$/.test(readCode)) throw new Error("Invalid robot comment read code.");
      if (range && !/^&[A-Za-z0-9_=&%-]*$/.test(range)) throw new Error("Invalid robot comment range.");
      pages.push({
        readCode,
        range,
        html: await robotRawTextPage(connection.httpOrigin, `/karel/ComGet?sFc=${readCode}${range}`, 20000)
      });
    }
    sendJson(response, 200, { ok: true, pages });
    return;
  }
  if (target === "/robot-comments/set") {
    const index = Number(payload.index);
    const writeCode = String(payload.writeCode || "");
    if (index < 1) throw new Error("Invalid robot comment index.");
    if (!/^\d+$/.test(writeCode)) throw new Error("Invalid robot comment write code.");
    const query = new URLSearchParams({ sComment: String(payload.comment ?? ""), sIndx: String(index), sFc: writeCode });
    await robotRawTextPage(connection.httpOrigin, `/karel/ComSet?${query}`, 20000);
    sendJson(response, 200, { ok: true });
    return;
  }
  throw new Error("Unsupported robot comment action.");
}

async function handleNumericRegisters(target, payload, response) {
  const connection = parseRobotAddress(payload.robotAddress);
  const registers = parseNumericRegisters(await getRobotTextFile(connection, "NUMREG.VA"));
  if (target === "/robot-numeric-registers/read") {
    sendJson(response, 200, { ok: true, registers, count: registers.length, capturedAt: new Date().toISOString() });
    return;
  }
  if (target === "/robot-numeric-registers/set") {
    const index = Number(payload.register?.index);
    const value = Number(payload.register?.value);
    if (index < 1) throw new Error("Invalid Numeric Register index.");
    if (!registers.some((item) => item.index === index)) throw new Error(`R[${index}] was not found on the online robot.`);
    const htcgOrigin = await getRobotHtcgOrigin(connection.httpOrigin);
    const writeErrors = [];
    for (const programName of ["*NUMREG*", "*SYSTEM*"]) {
      try {
        await sendRobotCometVariable(htcgOrigin, programName, `$NUMREG[${index}]`, numericValueText(value));
        writeErrors.length = 0;
        break;
      } catch (error) {
        writeErrors.push(`${programName}: ${error.message}`);
      }
    }
    if (writeErrors.length) throw new Error(`Numeric Register write failed. ${writeErrors.join(" ")}`);
    let actual = null;
    for (const delay of [150, 350, 750]) {
      await sleep(delay);
      actual = parseNumericRegisters(await getRobotTextFile(connection, "NUMREG.VA")).find((item) => item.index === index);
      if (actual && Math.abs(Number(actual.value) - value) <= 0.000001) break;
    }
    if (!actual || Math.abs(Number(actual.value) - value) > 0.000001) {
      throw new Error(`The controller did not report R[${index}] = ${numericValueText(value)} after the live write (actual: ${actual ? actual.value : "not found"}).`);
    }
    sendJson(response, 200, { ok: true, register: actual });
    return;
  }
  throw new Error("Unsupported Numeric Register action.");
}

async function handleFlags(target, payload, response) {
  const connection = parseRobotAddress(payload.robotAddress);
  const flags = parseFlagStates(await getRobotTextFile(connection, "IOSTATE.DG"));
  if (target === "/robot-flags/read") {
    sendJson(response, 200, { ok: true, flags, count: flags.length, capturedAt: new Date().toISOString() });
    return;
  }
  if (target === "/robot-flags/set") {
    const index = Number(payload.flag?.index);
    const state = String(payload.flag?.state || "").trim().toUpperCase();
    if (index < 1) throw new Error("Invalid Flag index.");
    if (!["ON", "OFF"].includes(state)) throw new Error("Flag state must be ON or OFF.");
    if (!flags.some((item) => item.index === index)) throw new Error(`F[${index}] was not found on the online robot.`);
    await sendRobotIoValue(await getRobotHtcgOrigin(connection.httpOrigin), 35, index, state === "ON" ? 1 : 0);
    let actual = null;
    for (const delay of [150, 350, 750]) {
      await sleep(delay);
      actual = parseFlagStates(await getRobotTextFile(connection, "IOSTATE.DG")).find((item) => item.index === index);
      if (actual?.state === state) break;
    }
    if (actual?.state !== state) {
      throw new Error(`The controller did not report F[${index}] = ${state} after the live write (actual: ${actual ? actual.state : "not found"}).`);
    }
    sendJson(response, 200, { ok: true, flag: actual });
    return;
  }
  throw new Error("Unsupported Flag action.");
}

async function handlePositionRegisters(target, payload, response) {
  const connection = parseRobotAddress(payload.robotAddress);
  const registers = parsePositionRegisters(await getRobotTextFile(connection, "POSREG.VA"));
  if (target === "/robot-position-registers/read") {
    sendJson(response, 200, { ok: true, registers, count: registers.length });
    return;
  }
  if (target === "/robot-position-registers/set") {
    throw new Error("Position Register writes are not enabled in this first Mac Node test build.");
  }
  throw new Error("Unsupported Position Register action.");
}

async function handleLiveState(payload, response) {
  const connection = parseRobotAddress(payload.robotAddress);
  const warnings = [];
  let summary = null;
  let alarms = [];
  try {
    const text = await robotPlainTextPage(connection.httpOrigin, "/MD/SUMMARY.DG?_TEMPLATE=FRS:SUMMTMP");
    const findValue = (...patterns) => {
      for (const pattern of patterns) {
        const match = text.match(pattern);
        if (match) return match[1].trim();
      }
      return "";
    };
    summary = {
      options: {
        asciiProgramLoader: /Ascii\s+Program\s+Loader/i.test(text),
        ftpInterface: /FTP|File\s+Transfer/i.test(text)
      },
      state: {
        mode: findValue(/\bMode\s*[:=]\s*([^\n]+)/i, /\bRemote\/Local\s*[:=]\s*([^\n]+)/i),
        program: findValue(/\bProgram\s*[:=]\s*([^\n]+)/i, /\bSelected\s+Program\s*[:=]\s*([^\n]+)/i),
        runState: findValue(/\bRun\s*State\s*[:=]\s*([^\n]+)/i, /\bCycle\s*[:=]\s*([^\n]+)/i, /\bState\s*[:=]\s*([^\n]+)/i),
        servo: findValue(/\bServo\s*[:=]\s*([^\n]+)/i, /\bServo\s+Power\s*[:=]\s*([^\n]+)/i),
        override: findValue(/\bOverride\s*[:=]\s*([^\n]+)/i, /\bSpeed\s+Override\s*[:=]\s*([^\n]+)/i)
      },
      rawHighlights: text.split("\n").map((line) => line.trim()).filter((line) => /(mode|program|state|cycle|servo|override|fault|alarm|error|hold|remote|local)/i.test(line)).slice(0, 12)
    };
  } catch (error) {
    warnings.push(`Summary unavailable: ${error.message}`);
  }
  try {
    const alarmText = await robotPlainTextPage(connection.httpOrigin, "/MD/ERRALL.LS");
    alarms = alarmText.split("\n").map((line) => line.trim()).filter((line) => /(SRVO-|INTP-|MOTN-|PROG-|SYST-|HOST-|ASBN-|WARN|ALARM|FAULT|ERROR)/i.test(line)).slice(0, 20);
  } catch (error) {
    warnings.push(`Alarms unavailable: ${error.message}`);
  }
  sendJson(response, 200, {
    ok: true,
    capturedAt: new Date().toISOString(),
    robotAddress: connection.httpOrigin,
    position: { robotAddress: connection.httpOrigin },
    summary,
    alarms,
    warnings
  });
}

async function handleProgramMonitor(payload, response) {
  const connection = parseRobotAddress(payload.robotAddress);
  const text = await robotPlainTextPage(connection.httpOrigin, "/MD/PRGSTATE.DG");
  sendJson(response, 200, {
    ok: true,
    capturedAt: new Date().toISOString(),
    robotAddress: connection.httpOrigin,
    primaryTask: null,
    tasks: [],
    source: [],
    warnings: [`Program monitor parsing is minimal in the Mac Node test build. Raw page length: ${text.length}.`],
    counts: { total: 0, running: 0, active: 0, tp: 0, vision: 0, hiddenPc: 0 }
  });
}

async function handleRobotBackup(target, payload, response) {
  const connection = parseRobotAddress(payload.robotAddress);
  if (target === "/robot-backup/inventory") {
    const files = await getRobotFtpFiles(connection.ftpHost);
    sendJson(response, 200, { ok: true, files });
    return;
  }
  if (target === "/robot-backup/file" || target === "/robot-backup/download") {
    const fileName = String(payload.fileName || payload.name || "").toUpperCase();
    if (!/^[A-Z0-9_.-]+$/.test(fileName)) throw new Error("Invalid robot backup filename.");
    const bytes = await getRobotFtpFile(connection.ftpHost, fileName);
    sendJson(response, 200, { ok: true, name: fileName, contentBase64: bytes.toString("base64") });
    return;
  }
  throw new Error("Unsupported robot backup action.");
}

function convertToRobotCompatibleLs(content) {
  let compatibleContent = String(content).replace(/\r?\n/g, "\r\n");
  const updates = [];
  if (!/^\s*TCD:\s+STACK_SIZE/im.test(compatibleContent)) {
    const programName = compatibleContent.match(/^\s*\/PROG\s+([A-Z][A-Z0-9_]*)\s*$/im)?.[1] || "";
    const lineCount = compatibleContent.match(/^\s*LINE_COUNT\s*=\s*(\d+)\s*;/im)?.[1] || "0";
    const standardHeader = [
      `/PROG  ${programName}`,
      "/ATTR",
      "OWNER\t\t= MNEDITOR;",
      "COMMENT\t\t= \"\";",
      "PROG_SIZE\t= 163;",
      "CREATE\t\t= DATE 25-09-11  TIME 23:06:10;",
      "MODIFIED\t= DATE 25-09-11  TIME 23:06:10;",
      "FILE_NAME\t= ;",
      "VERSION\t\t= 0;",
      `LINE_COUNT\t= ${lineCount};`,
      "MEMORY_SIZE\t= 407;",
      "PROTECT\t\t= READ_WRITE;",
      "STORAGE\t\t= SHADOW;",
      "TCD:  STACK_SIZE\t= 0,",
      "      TASK_PRIORITY\t= 50,",
      "      TIME_SLICE\t= 0,",
      "      BUSY_LAMP_OFF\t= 0,",
      "      ABORT_REQUEST\t= 0,",
      "      PAUSE_REQUEST\t= 0;",
      "DEFAULT_GROUP\t= 1,*,*,*,*;",
      "CONTROL_CODE\t= 00000000 00000000;",
      "LOCAL_REGISTERS\t= 0,0,0;"
    ].join("\r\n");
    compatibleContent = compatibleContent.replace(/^\s*\/PROG\s+[^\r\n]+\s*\r?\n\/ATTR\s*\r?\n[\s\S]*?(?=^\/MN\s*$)/im, `${standardHeader}\r\n`);
    updates.push("Rebuilt the older minimal LS header in the controller-compatible format.");
  }
  if (!/^\s*\/APPL\s*$/im.test(compatibleContent) && /^\s*\/MN\s*$/im.test(compatibleContent)) {
    const appl = "/APPL\r\n\r\nAUTO_SINGULARITY_HEADER;\r\n  ENABLE_SINGULARITY_AVOIDANCE   : TRUE;\r\n";
    compatibleContent = compatibleContent.replace(/^\s*\/MN\s*$/im, `${appl}/MN`);
    updates.push("Added the /APPL compatibility header required by the target controller.");
  }
  if (!compatibleContent.endsWith("\r\n")) compatibleContent += "\r\n";
  return { content: compatibleContent, updates };
}

async function testAsciiProgramLoader(httpOrigin) {
  return /Ascii Program Loader/i.test(await robotRawTextPage(httpOrigin, "/MD/SUMMARY.DG?_TEMPLATE=FRS:SUMMTMP", 15000));
}

async function robotAsciiLoaderErrors(httpOrigin) {
  const content = await robotRawTextPage(httpOrigin, "/MD/ERRALL.LS", 15000);
  return Array.from(content.matchAll(/^[^\r\n]*ASBN-\d+[^\r\n]*$/gm)).map((match) => match[0].trim());
}

function byteHash(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

async function handleRobotExport(target, payload, response) {
  const connection = parseRobotAddress(payload.robotAddress);
  if (target === "/robot-export/preflight") {
    let ftpAvailable = false;
    let ftpMessage = "";
    let files = [];
    try {
      files = await getRobotFtpFiles(connection.ftpHost);
      ftpAvailable = true;
      ftpMessage = "FTP connection succeeded and the robot file directory was inventoried.";
    } catch (error) {
      ftpMessage = error.message;
    }
    let asciiProgramLoader = false;
    let asciiMessage = "";
    try {
      asciiProgramLoader = await testAsciiProgramLoader(connection.httpOrigin);
      asciiMessage = asciiProgramLoader ? "The robot reports the ASCII Program Loader option." : "The robot did not report the ASCII Program Loader option.";
    } catch (error) {
      asciiMessage = error.message;
    }
    sendJson(response, 200, {
      ok: true,
      ready: ftpAvailable && asciiProgramLoader,
      ftpHost: connection.ftpHost,
      requirements: {
        ftpInterface: { available: ftpAvailable, message: ftpMessage },
        asciiProgramLoader: { available: asciiProgramLoader, message: asciiMessage }
      },
      files
    });
    return;
  }
  if (!(await testAsciiProgramLoader(connection.httpOrigin))) throw new Error("The robot did not report the ASCII Program Loader option.");
  let existingFiles = await getRobotFtpFiles(connection.ftpHost);
  const results = [];
  for (const file of payload.files || []) {
    const name = String(file.name || "").toUpperCase();
    if (!/^[A-Z][A-Z0-9_]{0,35}\.LS$/.test(name)) {
      results.push({ name, success: false, tpPresent: false, error: "Invalid FANUC LS filename." });
      continue;
    }
    const programName = name.slice(0, -3);
    const tpName = `${programName}.TP`;
    const existingProgram = existingFiles.includes(name) || existingFiles.includes(tpName);
    const overwriteAuthorized = Boolean(payload.allowOverwrite) && Boolean(file.allowOverwrite);
    if (!overwriteAuthorized && existingProgram) {
      results.push({ name, success: false, tpPresent: existingFiles.includes(tpName), error: "This existing robot program was not authorized for replacement. Enable overwrite, select it again, and confirm the replacement warning." });
      continue;
    }
    const beforeErrors = await robotAsciiLoaderErrors(connection.httpOrigin).catch(() => []);
    const beforeTpHash = existingFiles.includes(tpName) ? await getRobotFtpFile(connection.ftpHost, tpName).then(byteHash).catch(() => "") : "";
    const compatibleLs = convertToRobotCompatibleLs(file.content || "");
    try {
      await sendRobotFtpFile(connection.ftpHost, name, compatibleLs.content);
      let verifiedFiles = [];
      let tpPresent = false;
      let tpUpdated = false;
      for (let attempt = 0; attempt < 10; attempt += 1) {
        await sleep(750);
        verifiedFiles = await getRobotFtpFiles(connection.ftpHost);
        tpPresent = verifiedFiles.includes(tpName);
        if (tpPresent) {
          if (!beforeTpHash) {
            tpUpdated = true;
            break;
          }
          tpUpdated = await getRobotFtpFile(connection.ftpHost, tpName).then((bytes) => byteHash(bytes) !== beforeTpHash).catch(() => false);
          if (tpUpdated) break;
        }
      }
      const afterErrors = await robotAsciiLoaderErrors(connection.httpOrigin).catch(() => []);
      let newErrors = afterErrors.filter((item) => !beforeErrors.includes(item)).slice(0, 3);
      if (!new RegExp(programName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).test(newErrors.join(" "))) newErrors = [];
      const lsPresent = verifiedFiles.includes(name);
      results.push({
        name,
        success: lsPresent && tpPresent && newErrors.length === 0,
        lsPresent,
        tpPresent,
        tpUpdated,
        compatibilityUpdates: compatibleLs.updates,
        loaderErrors: newErrors,
        error: newErrors.length ? newErrors.join(" | ") : !lsPresent ? "Uploaded LS file was not found during verification." : !tpPresent ? "ASCII Program Loader did not create a TP program." : beforeTpHash && !tpUpdated ? "TP exists, but Robo Programmer could not confirm that it was rebuilt." : ""
      });
      existingFiles = verifiedFiles;
    } catch (error) {
      const filesAfterFailure = await getRobotFtpFiles(connection.ftpHost).catch(() => []);
      results.push({
        name,
        success: false,
        lsPresent: filesAfterFailure.includes(name),
        tpPresent: filesAfterFailure.includes(tpName),
        tpUpdated: false,
        compatibilityUpdates: compatibleLs.updates,
        loaderErrors: [],
        error: error.message
      });
    }
  }
  sendJson(response, 200, { ok: true, files: existingFiles, results });
}

async function handleProjectPath(payload, response) {
  const projectName = String(payload.projectName || "").trim();
  if (!projectName) throw new Error("Invalid project name.");
  const safeNames = new Set([projectName, projectName.replace(/[<>:"/\\|?*\x00-\x1F]/g, "_")]);
  const roots = [
    process.env.ROBO_PROGRAMMER_PROJECT_ROOT,
    path.join(os.homedir(), "Documents"),
    path.join(os.homedir(), "Desktop"),
    path.join(os.homedir(), "OneDrive"),
    os.homedir()
  ].filter(Boolean);
  const matches = [];
  async function walk(directory, depth) {
    if (depth < 0 || matches.length > 1) return;
    let entries = [];
    try {
      entries = await readdir(directory, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const fullPath = path.join(directory, entry.name);
      if (safeNames.has(entry.name)) matches.push(fullPath);
      if (depth > 0 && !["Library", "Applications", "System", "node_modules", ".git"].includes(entry.name)) {
        await walk(fullPath, depth - 1);
      }
    }
  }
  for (const searchRoot of roots) await walk(searchRoot, 4);
  const uniqueMatches = [...new Set(matches)];
  if (uniqueMatches.length === 1) {
    sendJson(response, 200, { ok: true, path: uniqueMatches[0] });
    return;
  }
  if (uniqueMatches.length > 1) throw new Error("Multiple matching project folders were found.");
  throw new Error("No matching project folder was found in common Mac locations.");
}

async function serveStatic(request, response, url) {
  let requestPath = decodeURIComponent(url.pathname);
  if (!requestPath || requestPath === "/") requestPath = "/index.html";
  const fullPath = path.resolve(root, `.${requestPath}`);
  if (!fullPath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }
  try {
    const info = await stat(fullPath);
    if (!info.isFile()) throw new Error("Not a file.");
    response.writeHead(200, {
      "Content-Type": contentTypes.get(path.extname(fullPath).toLowerCase()) || "application/octet-stream",
      "Content-Length": info.size,
      "Cache-Control": "no-store"
    });
    createReadStream(fullPath).pipe(response);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
}

async function route(request, response) {
  const url = new URL(request.url, "http://127.0.0.1");
  const target = url.pathname;
  if (request.method === "GET" && target === "/app-root.json") {
    sendJson(response, 200, { ok: true, root, serverApiVersion, platform: process.platform, server: "node" });
    return;
  }
  if (request.method !== "POST") {
    await serveStatic(request, response, url);
    return;
  }
  try {
    const payload = await readBody(request);
    if (["/robot-export/preflight", "/robot-export/upload"].includes(target)) return handleRobotExport(target, payload, response);
    if (["/robot-backup/inventory", "/robot-backup/file", "/robot-backup/download"].includes(target)) return handleRobotBackup(target, payload, response);
    if (target === "/project-path/resolve") return handleProjectPath(payload, response);
    if (["/robot-comments/read", "/robot-comments/set"].includes(target)) return handleRobotComments(target, payload, response);
    if (["/robot-numeric-registers/read", "/robot-numeric-registers/set"].includes(target)) return handleNumericRegisters(target, payload, response);
    if (["/robot-flags/read", "/robot-flags/set"].includes(target)) return handleFlags(target, payload, response);
    if (["/robot-position-registers/read", "/robot-position-registers/set"].includes(target)) return handlePositionRegisters(target, payload, response);
    if (target === "/robot-live/state") return handleLiveState(payload, response);
    if (target === "/robot-program-monitor/state") return handleProgramMonitor(payload, response);
    if (target === "/robot-position/current") return handleLiveState(payload, response);
    throw new Error(`Unsupported endpoint: ${target}`);
  } catch (error) {
    sendError(response, error);
  }
}

function openBrowser(url) {
  if (process.platform === "darwin") {
    spawn("open", [url], { detached: true, stdio: "ignore" }).unref();
  } else if (process.platform === "win32") {
    spawn("cmd", ["/c", "start", "", url], { detached: true, stdio: "ignore" }).unref();
  } else {
    spawn("xdg-open", [url], { detached: true, stdio: "ignore" }).unref();
  }
}

async function start() {
  for (let port = requestedPort; port <= requestedPort + 20; port += 1) {
    const server = createServer((request, response) => {
      route(request, response).catch((error) => sendError(response, error));
    });
    const started = await new Promise((resolve) => {
      server.once("error", () => resolve(false));
      server.listen(port, "127.0.0.1", () => resolve(true));
    });
    if (!started) continue;
    const baseUrl = `http://127.0.0.1:${port}`;
    const launchUrl = `${baseUrl}${launchPath}`;
    console.log("Robo Programmer V5.0 Mac Test Build");
    console.log(`Serving from: ${root}`);
    console.log(`Opening: ${launchUrl}`);
    console.log("Keep this terminal open while using the tool.");
    if (!noBrowser) openBrowser(launchUrl);
    return;
  }
  throw new Error("Unable to find an available local port for Robo Programmer.");
}

start().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
