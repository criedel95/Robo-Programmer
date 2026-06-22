const { app, BrowserWindow, dialog, shell } = require("electron");
const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");

const APP_NAME = "Robo Programmer";
const APP_ID = "com.crcontrols.roboprogrammer";
const APP_ROOT = __dirname;
const ICON_PATH = path.join(APP_ROOT, "assets", "robo-programmer.ico");

let mainWindow;
let localServer;
let appOrigin;

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".txt": "text/plain; charset=utf-8",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
};

function sendResponse(response, statusCode, body, contentType = "text/plain; charset=utf-8") {
  response.writeHead(statusCode, {
    "Cache-Control": "no-store",
    "Content-Length": body.length,
    "Content-Type": contentType
  });
  response.end(body);
}

function resolveRequestPath(requestUrl) {
  const pathname = decodeURIComponent(new URL(requestUrl, appOrigin).pathname);
  const relativePath = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const resolvedPath = path.resolve(APP_ROOT, relativePath);
  const relativeToRoot = path.relative(APP_ROOT, resolvedPath);

  if (relativeToRoot.startsWith("..") || path.isAbsolute(relativeToRoot)) return null;
  return resolvedPath;
}

function startLocalServer() {
  return new Promise((resolve, reject) => {
    localServer = http.createServer((request, response) => {
      if (!["GET", "HEAD"].includes(request.method)) {
        sendResponse(response, 405, Buffer.from("Method not allowed."));
        return;
      }

      if (new URL(request.url, appOrigin).pathname === "/app-root.json") {
        const body = Buffer.from(JSON.stringify({ root: APP_ROOT, version: app.getVersion() }));
        sendResponse(response, 200, request.method === "HEAD" ? Buffer.alloc(0) : body, contentTypes[".json"]);
        return;
      }

      const filePath = resolveRequestPath(request.url);
      if (!filePath || !fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
        sendResponse(response, 404, Buffer.from("File not found."));
        return;
      }

      const body = request.method === "HEAD" ? Buffer.alloc(0) : fs.readFileSync(filePath);
      sendResponse(response, 200, body, contentTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream");
    });

    localServer.once("error", reject);
    localServer.listen(0, "127.0.0.1", () => {
      const address = localServer.address();
      appOrigin = `http://127.0.0.1:${address.port}`;
      resolve(appOrigin);
    });
  });
}

function configureFolderAccess(window) {
  const session = window.webContents.session;

  session.setPermissionCheckHandler((_webContents, permission, requestingOrigin) => {
    return permission === "fileSystem" && requestingOrigin === appOrigin;
  });

  session.setPermissionRequestHandler((_webContents, permission, callback, details) => {
    callback(permission === "fileSystem" && details.requestingUrl?.startsWith(`${appOrigin}/`));
  });

  session.on("file-system-access-restricted", async (_event, details, callback) => {
    const result = await dialog.showMessageBox(window, {
      type: "warning",
      title: "Confirm Folder Access",
      message: "Robo Programmer needs access to this protected folder.",
      detail: details.path,
      buttons: ["Allow", "Choose Another Folder", "Cancel"],
      defaultId: 0,
      cancelId: 2,
      noLink: true
    });

    if (result.response === 0) callback("allow");
    else if (result.response === 1) callback("tryAgain");
    else callback("deny");
  });
}

async function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1500,
    height: 960,
    minWidth: 1050,
    minHeight: 700,
    autoHideMenuBar: true,
    backgroundColor: "#101821",
    icon: ICON_PATH,
    show: false,
    title: `${APP_NAME} V${app.getVersion()}`,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  configureFolderAccess(mainWindow);

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (!url.startsWith(`${appOrigin}/`)) shell.openExternal(url);
    return { action: "deny" };
  });

  mainWindow.webContents.on("will-navigate", (event, url) => {
    if (!url.startsWith(`${appOrigin}/`)) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });

  await mainWindow.loadURL(`${appOrigin}/`);
  mainWindow.maximize();
  mainWindow.show();
}

app.setName(APP_NAME);
app.setAppUserModelId(APP_ID);

const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
} else {
  app.on("second-instance", () => {
    if (!mainWindow) return;
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
  });

  app.whenReady().then(async () => {
    await startLocalServer();
    await createMainWindow();
  }).catch((error) => {
    dialog.showErrorBox("Robo Programmer could not start", error.message);
    app.quit();
  });

  app.on("window-all-closed", () => {
    app.quit();
  });

  app.on("before-quit", () => {
    localServer?.close();
  });
}
