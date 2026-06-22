const sheetTabs = document.querySelector("#popoutAssignmentSheetTabs");
const status = document.querySelector("#popoutAssignmentStatus");
const path = document.querySelector("#popoutAssignmentPath");
const tableWrap = document.querySelector("#popoutAssignmentTableWrap");
const popInBtn = document.querySelector("#popInAssignmentsBtn");
const disconnected = document.querySelector("#popoutDisconnected");

let lastSnapshotSignature = "";
let refreshTimer = null;
let closingForPopIn = false;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function mainApi() {
  try {
    return window.opener && !window.opener.closed ? window.opener.RoboAssignmentsPopout : null;
  } catch {
    return null;
  }
}

function setDisconnected() {
  disconnected.hidden = false;
  sheetTabs.hidden = true;
  status.hidden = true;
  tableWrap.hidden = true;
  popInBtn.disabled = true;
}

function renderSnapshot(snapshot, { force = false } = {}) {
  if (!snapshot?.projectOpen) {
    setDisconnected();
    return;
  }
  const signature = JSON.stringify(snapshot);
  if (!force && signature === lastSnapshotSignature) return;
  if (!force && document.activeElement?.classList?.contains("assignment-description-input")) return;
  lastSnapshotSignature = signature;
  disconnected.hidden = true;
  sheetTabs.hidden = false;
  status.hidden = false;
  tableWrap.hidden = false;
  popInBtn.disabled = false;
  document.title = `Data Assignments - ${snapshot.projectName || "Robo Programmer V5.0"}`;
  document.body.dataset.theme = snapshot.theme || "dark";
  path.textContent = snapshot.path || "Spreadsheet path unavailable";
  status.textContent = snapshot.status || "";
  sheetTabs.innerHTML = (snapshot.sheets || []).map((sheet) => `
    <button type="button" role="tab" data-sheet="${escapeHtml(sheet.name)}" aria-selected="${sheet.name === snapshot.activeSheet}" title="Show ${escapeHtml(sheet.label)} Data Assignments.">
      ${escapeHtml(sheet.label)}
    </button>
  `).join("");
  tableWrap.innerHTML = (snapshot.ranges || []).map((range) => `
    <section class="assignment-range-section">
      <h3>${escapeHtml(range.type)} (${range.rows.length})</h3>
      <table class="assignment-table">
        <thead><tr><th>Type</th><th>Number</th><th>Description</th></tr></thead>
        <tbody>${range.rows.length ? range.rows.map((row) => `
          <tr>
            <td class="assignment-type">${escapeHtml(row.type)}</td>
            <td class="assignment-index">${escapeHtml(row.index)}</td>
            <td><input class="assignment-description-input" type="text" maxlength="32" value="${escapeHtml(row.description || "")}" data-type="${escapeHtml(row.type)}" data-index="${escapeHtml(row.index)}" aria-label="${escapeHtml(`${row.type}[${row.index}] description`)}"></td>
          </tr>
        `).join("") : `<tr><td colspan="3" class="assignment-empty">No ${escapeHtml(range.type)} rows were found in this workbook sheet.</td></tr>`}</tbody>
      </table>
    </section>
  `).join("") || `<div class="assignment-empty">No mapped ranges are configured for ${escapeHtml(snapshot.activeSheet || "this sheet")}.</div>`;
}

async function refreshSnapshot(options) {
  const api = mainApi();
  if (!api) {
    setDisconnected();
    if (refreshTimer) clearInterval(refreshTimer);
    return;
  }
  renderSnapshot(await api.getSnapshot(), options);
}

sheetTabs.addEventListener("click", async (event) => {
  const button = event.target.closest("button[data-sheet]");
  if (!button) return;
  const api = mainApi();
  if (!api) return setDisconnected();
  renderSnapshot(await api.selectSheet(button.dataset.sheet), { force: true });
});

tableWrap.addEventListener("change", async (event) => {
  const input = event.target.closest(".assignment-description-input");
  if (!input) return;
  const api = mainApi();
  if (!api) return setDisconnected();
  if (input.dataset.saving === "true") return;
  input.dataset.saving = "true";
  input.setAttribute("aria-busy", "true");
  try {
    const snapshot = await api.saveDescription(input.dataset.type, Number(input.dataset.index), input.value);
    lastSnapshotSignature = JSON.stringify(snapshot);
    status.textContent = snapshot.status || "";
    const savedRow = (snapshot.ranges || [])
      .flatMap((range) => range.rows || [])
      .find((row) => row.type === input.dataset.type && Number(row.index) === Number(input.dataset.index));
    if (savedRow) input.value = savedRow.description || "";
  } catch (error) {
    status.textContent = `Unable to save assignment: ${error.message}`;
  } finally {
    delete input.dataset.saving;
    input.removeAttribute("aria-busy");
  }
});

popInBtn.addEventListener("click", () => {
  const api = mainApi();
  if (!api) return setDisconnected();
  closingForPopIn = true;
  api.popIn();
});

function commitFocusedInput() {
  const input = document.activeElement?.closest?.(".assignment-description-input");
  const api = mainApi();
  if (!input || !api) return;
  api.saveDescription(input.dataset.type, Number(input.dataset.index), input.value).catch(() => {});
}

window.addEventListener("beforeunload", () => {
  commitFocusedInput();
  if (closingForPopIn) return;
  const api = mainApi();
  if (api) api.notifyClosed();
});

refreshSnapshot({ force: true }).catch(setDisconnected);
refreshTimer = setInterval(() => refreshSnapshot().catch(setDisconnected), 750);
