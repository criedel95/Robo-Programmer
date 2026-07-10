const editor = document.querySelector("#editor");
const highlightedCode = document.querySelector("#highlightedCode");
const mainEditorPrompt = document.querySelector("#mainEditorPrompt");
const diagnosticsEl = document.querySelector("#diagnostics");
const suggestionsEl = document.querySelector("#suggestions");
const cursorStatus = document.querySelector("#cursorStatus");
const undoBtn = document.querySelector("#undoBtn");
const redoBtn = document.querySelector("#redoBtn");
const exportCurrentFileBtn = document.querySelector("#exportCurrentFileBtn");
const decreaseEditorFontBtn = document.querySelector("#decreaseEditorFontBtn");
const increaseEditorFontBtn = document.querySelector("#increaseEditorFontBtn");
const themeSelect = document.querySelector("#themeSelect");
const startScreen = document.querySelector("#startScreen");
const topbarActions = document.querySelector("#topbarActions");
const goOnlineControl = document.querySelector("#goOnlineControl");
const goOnlineBtn = document.querySelector("#goOnlineBtn");
const goOnlineLabel = document.querySelector("#goOnlineLabel");
const robotOnlineAddressButton = document.querySelector("#robotOnlineAddressButton");
const robotOnlineAddressButtonText = document.querySelector("#robotOnlineAddressButtonText");
const robotOnlineAddressChevron = document.querySelector("#robotOnlineAddressChevron");
const robotOnlineAddressMenu = document.querySelector("#robotOnlineAddressMenu");
const recentProjectsList = document.querySelector("#recentProjectsList");
const clearRecentProjectsBtn = document.querySelector("#clearRecentProjectsBtn");
const editorLayout = document.querySelector(".editor-layout");
const workspaceTabs = document.querySelector("#workspaceTabs");
const editorWorkspaceTab = document.querySelector("#editorWorkspaceTab");
const assignmentsWorkspaceTab = document.querySelector("#assignmentsWorkspaceTab");
const assignmentsView = document.querySelector("#assignmentsView");
const robotExportWorkspaceTab = document.querySelector("#robotExportWorkspaceTab");
const robotExportView = document.querySelector("#robotExportView");
const robotExportProgramsTab = document.querySelector("#robotExportProgramsTab");
const robotExportCommentsTab = document.querySelector("#robotExportCommentsTab");
const robotExportProgramsPanel = document.querySelector("#robotExportProgramsPanel");
const robotExportCommentsPanel = document.querySelector("#robotExportCommentsPanel");
const robotExportInstructionsToggle = document.querySelector("#robotExportInstructionsToggle");
const robotExportInstructionsContent = document.querySelector("#robotExportInstructionsContent");
const robotExportAddressInput = document.querySelector("#robotExportAddressInput");
const rememberRobotExportAddress = document.querySelector("#rememberRobotExportAddress");
const checkRobotExportBtn = document.querySelector("#checkRobotExportBtn");
const exportSelectedProgramsBtn = document.querySelector("#exportSelectedProgramsBtn");
const importSelectedProgramsBtn = document.querySelector("#importSelectedProgramsBtn");
const selectAllRobotExportBtn = document.querySelector("#selectAllRobotExportBtn");
const clearRobotExportBtn = document.querySelector("#clearRobotExportBtn");
const robotExportStatus = document.querySelector("#robotExportStatus");
const robotExportRequirementsStatus = document.querySelector("#robotExportRequirementsStatus");
const robotExportSummary = document.querySelector("#robotExportSummary");
const robotExportTableWrap = document.querySelector("#robotExportTableWrap");
const robotBackupWorkspaceTab = document.querySelector("#robotBackupWorkspaceTab");
const robotBackupView = document.querySelector("#robotBackupView");
const robotBackupMode = document.querySelector("#robotBackupMode");
const robotBackupAddressInput = document.querySelector("#robotBackupAddressInput");
const inventoryRobotBackupBtn = document.querySelector("#inventoryRobotBackupBtn");
const backupSelectedRobotFilesBtn = document.querySelector("#backupSelectedRobotFilesBtn");
const selectAllRobotBackupBtn = document.querySelector("#selectAllRobotBackupBtn");
const clearRobotBackupBtn = document.querySelector("#clearRobotBackupBtn");
const robotBackupStatus = document.querySelector("#robotBackupStatus");
const robotBackupProgressWrap = document.querySelector("#robotBackupProgressWrap");
const robotBackupProgress = document.querySelector("#robotBackupProgress");
const robotBackupProgressText = document.querySelector("#robotBackupProgressText");
const robotBackupSort = document.querySelector("#robotBackupSort");
const robotBackupSummary = document.querySelector("#robotBackupSummary");
const robotBackupTableWrap = document.querySelector("#robotBackupTableWrap");
const robotPositionWorkspaceTab = document.querySelector("#robotPositionWorkspaceTab");
const robotPositionView = document.querySelector("#robotPositionView");
const robotLiveOverviewTab = document.querySelector("#robotLiveOverviewTab");
const robotLiveProgramTab = document.querySelector("#robotLiveProgramTab");
const robotLiveNumericTab = document.querySelector("#robotLiveNumericTab");
const robotLivePrTab = document.querySelector("#robotLivePrTab");
const robotLiveOverviewPanel = document.querySelector("#robotLiveOverviewPanel");
const robotLiveProgramPanel = document.querySelector("#robotLiveProgramPanel");
const robotLiveNumericPanel = document.querySelector("#robotLiveNumericPanel");
const robotLivePrPanel = document.querySelector("#robotLivePrPanel");
const robotProgramMonitorStatus = document.querySelector("#robotProgramMonitorStatus");
const robotProgramMonitorHero = document.querySelector("#robotProgramMonitorHero");
const robotProgramTaskCount = document.querySelector("#robotProgramTaskCount");
const robotProgramTaskList = document.querySelector("#robotProgramTaskList");
const robotProgramSource = document.querySelector("#robotProgramSource");
const liveRobotOverviewInstructionsToggle = document.querySelector("#liveRobotOverviewInstructionsToggle");
const liveRobotOverviewInstructionsContent = document.querySelector("#liveRobotOverviewInstructionsContent");
const robotPositionAddressInput = document.querySelector("#robotPositionAddressInput");
const rememberRobotPositionAddress = document.querySelector("#rememberRobotPositionAddress");
const robotPositionInterval = document.querySelector("#robotPositionInterval");
const readRobotPositionBtn = document.querySelector("#readRobotPositionBtn");
const startRobotPositionBtn = document.querySelector("#startRobotPositionBtn");
const stopRobotPositionBtn = document.querySelector("#stopRobotPositionBtn");
const robotPositionStatus = document.querySelector("#robotPositionStatus");
const robotPositionSummary = document.querySelector("#robotPositionSummary");
const robotPositionJoints = document.querySelector("#robotPositionJoints");
const robotPositionUserFrame = document.querySelector("#robotPositionUserFrame");
const robotPositionWorld = document.querySelector("#robotPositionWorld");
const liveRobotAlarms = document.querySelector("#liveRobotAlarms");
const robotPrStatus = document.querySelector("#robotPrStatus");
const robotPrEditToggle = document.querySelector("#robotPrEditToggle");
const robotPrSearch = document.querySelector("#robotPrSearch");
const robotPrList = document.querySelector("#robotPrList");
const robotPrDetails = document.querySelector("#robotPrDetails");
const robotNumericTableWrap = document.querySelector("#robotNumericTableWrap");
const robotFlagTableWrap = document.querySelector("#robotFlagTableWrap");
const robotRegistersEditToggle = document.querySelector("#robotRegistersEditToggle");
const decreaseRobotNumericFontBtn = document.querySelector("#decreaseRobotNumericFontBtn");
const increaseRobotNumericFontBtn = document.querySelector("#increaseRobotNumericFontBtn");
const assignmentSheetTabs = document.querySelector("#assignmentSheetTabs");
const assignmentStatus = document.querySelector("#assignmentStatus");
const assignmentPath = document.querySelector("#assignmentPath");
const assignmentTableWrap = document.querySelector("#assignmentTableWrap");
const popOutAssignmentsBtn = document.querySelector("#popOutAssignmentsBtn");
const focusAssignmentsPopoutBtn = document.querySelector("#focusAssignmentsPopoutBtn");
const assignmentsPopoutPlaceholder = document.querySelector("#assignmentsPopoutPlaceholder");
const reloadAssignmentsBtn = document.querySelector("#reloadAssignmentsBtn");
const pushAssignmentsMenuBtn = document.querySelector("#pushAssignmentsMenuBtn");
const syncAssignmentsMenuBtn = document.querySelector("#syncAssignmentsMenuBtn");


const robotAddressInput = document.querySelector("#robotAddressInput");
const rememberRobotAddress = document.querySelector("#rememberRobotAddress");
const compareRobotCommentsBtn = document.querySelector("#compareRobotCommentsBtn");
const pushRobotCommentsBtn = document.querySelector("#pushRobotCommentsBtn");
const robotCommentsStatus = document.querySelector("#robotCommentsStatus");
const robotCommentTypeFilter = document.querySelector("#robotCommentTypeFilter");
const robotCommentDifferenceFilter = document.querySelector("#robotCommentDifferenceFilter");
const selectVisibleRobotCommentsBtn = document.querySelector("#selectVisibleRobotCommentsBtn");
const clearVisibleRobotCommentsBtn = document.querySelector("#clearVisibleRobotCommentsBtn");
const robotCommentsSummary = document.querySelector("#robotCommentsSummary");
const robotCommentsTableWrap = document.querySelector("#robotCommentsTableWrap");
const projectStatus = document.querySelector("#projectStatus");
const projectNameEl = document.querySelector("#projectName");
const currentFileNameEl = document.querySelector("#currentFileName");
const copyCurrentPathBtn = document.querySelector("#copyCurrentPathBtn");
const creatorCredit = document.querySelector("#creatorCredit");
const fileListEl = document.querySelector("#fileList");
const newLsBtn = document.querySelector("#newLsBtn");
const loadLsFromRobotBtn = document.querySelector("#loadLsFromRobotBtn");
const saveCurrentLsBtn = document.querySelector("#saveCurrentLsBtn");
const deleteLsBtn = document.querySelector("#deleteLsBtn");
const splitEditorBtn = document.querySelector("#splitEditorBtn");
const splitEditorPane = document.querySelector("#splitEditorPane");
const closeSplitEditorBtn = document.querySelector("#closeSplitEditorBtn");
const splitFileSelect = document.querySelector("#splitFileSelect");
const splitEditor = document.querySelector("#splitEditor");
const splitHighlightedCode = document.querySelector("#splitHighlightedCode");
const splitEditorPrompt = document.querySelector("#splitEditorPrompt");
const splitCursorStatus = document.querySelector("#splitCursorStatus");
const splitToggleHeaderBtn = document.querySelector("#splitToggleHeaderBtn");
const splitFooterToggleBar = document.querySelector("#splitFooterToggleBar");
const splitToggleFooterBtn = document.querySelector("#splitToggleFooterBtn");
const folderInput = document.querySelector("#folderInput");
const diagnosticsToggle = document.querySelector("#diagnosticsToggle");
const diagnosticsContent = document.querySelector("#diagnosticsContent");
const projectToolsToggle = document.querySelector("#projectToolsToggle");
const projectToolsContent = document.querySelector("#projectToolsContent");
const referenceSearchInput = document.querySelector("#referenceSearchInput");
const referenceSearchBtn = document.querySelector("#referenceSearchBtn");
const referenceSearchSummary = document.querySelector("#referenceSearchSummary");
const referenceSearchResults = document.querySelector("#referenceSearchResults");
const reassignFromInput = document.querySelector("#reassignFromInput");
const reassignToInput = document.querySelector("#reassignToInput");
const previewReassignBtn = document.querySelector("#previewReassignBtn");
const reassignStatus = document.querySelector("#reassignStatus");
const projectResizeHandle = document.querySelector("#projectResizeHandle");
const diagnosticsResizeHandle = document.querySelector("#diagnosticsResizeHandle");
const toggleHeaderBtn = document.querySelector("#toggleHeaderBtn");
const footerToggleBar = document.querySelector("#footerToggleBar");
const toggleFooterBtn = document.querySelector("#toggleFooterBtn");
const fileMenuBtn = document.querySelector("#fileMenuBtn");
const fileMenu = document.querySelector("#fileMenu");
const openProjectBtn = document.querySelector("#openProjectBtn");
const newProjectBtn = document.querySelector("#newProjectBtn");
const saveBtn = document.querySelector("#saveBtn");
const closeProjectBtn = document.querySelector("#closeProjectBtn");
const refreshFilesBtn = document.querySelector("#refreshFilesBtn");
const openRoboProjectBtn = document.querySelector("#openRoboProjectBtn");
const exportRoboProjectBtn = document.querySelector("#exportRoboProjectBtn");
const startOpenRoboProjectBtn = document.querySelector("#startOpenRoboProjectBtn");
const roboPackageInput = document.querySelector("#roboPackageInput");
const motionToolBtn = document.querySelector("#motionToolBtn");
const motionBuilder = document.querySelector("#motionBuilder");
const motionTypeSelect = document.querySelector("#motionTypeSelect");
const motionTargetSelect = document.querySelector("#motionTargetSelect");
const motionPositionInput = document.querySelector("#motionPositionInput");
const motionPosition2Wrap = document.querySelector("#motionPosition2Wrap");
const motionPosition2Input = document.querySelector("#motionPosition2Input");
const motionSpeedInput = document.querySelector("#motionSpeedInput");
const motionSpeedUnitSelect = document.querySelector("#motionSpeedUnitSelect");
const motionTermSelect = document.querySelector("#motionTermSelect");
const motionPreview = document.querySelector("#motionPreview");
const insertMotionBtn = document.querySelector("#insertMotionBtn");
const waitToolBtn = document.querySelector("#waitToolBtn");
const waitBuilder = document.querySelector("#waitBuilder");
const waitTypeSelect = document.querySelector("#waitTypeSelect");
const waitIndexWrap = document.querySelector("#waitIndexWrap");
const waitIndexLabel = document.querySelector("#waitIndexLabel");
const waitIndexInput = document.querySelector("#waitIndexInput");
const waitStateWrap = document.querySelector("#waitStateWrap");
const waitStateSelect = document.querySelector("#waitStateSelect");
const waitCompareWrap = document.querySelector("#waitCompareWrap");
const waitCompareSelect = document.querySelector("#waitCompareSelect");
const waitValueWrap = document.querySelector("#waitValueWrap");
const waitValueInput = document.querySelector("#waitValueInput");
const waitTimeWrap = document.querySelector("#waitTimeWrap");
const waitTimeInput = document.querySelector("#waitTimeInput");
const waitPreview = document.querySelector("#waitPreview");
const insertWaitBtn = document.querySelector("#insertWaitBtn");
const ioToolBtn = document.querySelector("#ioToolBtn");
const ioBuilder = document.querySelector("#ioBuilder");
const ioTypeSelect = document.querySelector("#ioTypeSelect");
const ioIndexInput = document.querySelector("#ioIndexInput");
const ioStateWrap = document.querySelector("#ioStateWrap");
const ioStateSelect = document.querySelector("#ioStateSelect");
const ioValueWrap = document.querySelector("#ioValueWrap");
const ioValueInput = document.querySelector("#ioValueInput");
const ioCompareWrap = document.querySelector("#ioCompareWrap");
const ioCompareSelect = document.querySelector("#ioCompareSelect");
const ioActionWrap = document.querySelector("#ioActionWrap");
const ioActionInput = document.querySelector("#ioActionInput");
const ioPreview = document.querySelector("#ioPreview");
const insertIoBtn = document.querySelector("#insertIoBtn");
const teachPendantToggle = document.querySelector("#teachPendantToggle");
const teachPendantContent = document.querySelector("#teachPendantContent");
const setRegisterBtn = document.querySelector("#setRegisterBtn");
const setPrBtn = document.querySelector("#setPrBtn");
const ifThenBtn = document.querySelector("#ifThenBtn");
const labelBtn = document.querySelector("#labelBtn");
const jumpLabelBtn = document.querySelector("#jumpLabelBtn");
const callBtn = document.querySelector("#callBtn");
const commentBtn = document.querySelector("#commentBtn");
const remarkBtn = document.querySelector("#remarkBtn");
const toggleCommentsBtn = document.querySelector("#toggleCommentsBtn");
const toggleStateBtn = document.querySelector("#toggleStateBtn");
const frameBtn = document.querySelector("#frameBtn");
const timerBtn = document.querySelector("#timerBtn");
const advancedTpToggle = document.querySelector("#advancedTpToggle");
const advancedTpContent = document.querySelector("#advancedTpContent");
const newTpInstTab = document.querySelector("#newTpInstTab");
const newTpEdcmdTab = document.querySelector("#newTpEdcmdTab");
const newTpCategorySelect = document.querySelector("#newTpCategorySelect");
const newTpActions = document.querySelector("#newTpActions");
const newTpHint = document.querySelector("#newTpHint");
const refreshPrompt = document.querySelector("#refreshPrompt");
const refreshPromptMessage = document.querySelector("#refreshPromptMessage");
const refreshPromptSaveBtn = document.querySelector("#refreshPromptSaveBtn");
const refreshPromptDiscardBtn = document.querySelector("#refreshPromptDiscardBtn");
const refreshPromptCancelBtn = document.querySelector("#refreshPromptCancelBtn");
const changePreviewModal = document.querySelector("#changePreviewModal");
const changePreviewTitle = document.querySelector("#changePreviewTitle");
const changePreviewSummary = document.querySelector("#changePreviewSummary");
const changePreviewDetails = document.querySelector("#changePreviewDetails");
const changePreviewApplyBtn = document.querySelector("#changePreviewApplyBtn");
const changePreviewCancelBtn = document.querySelector("#changePreviewCancelBtn");
const editorFontSizeKey = "robo-programmer-editor-font-size";
const minEditorFontSize = 11;
const maxEditorFontSize = 22;
const defaultEditorFontSize = 14;
const robotNumericFontSizeKey = "robo-programmer-robot-numeric-font-size";
const minRobotNumericFontSize = 12;
const maxRobotNumericFontSize = 24;
const defaultRobotNumericFontSize = 14;
const robotExportInstructionsCollapsedKey = "robo-programmer-robot-export-instructions-collapsed";
const liveRobotOverviewInstructionsCollapsedKey = "robo-programmer-live-robot-overview-instructions-collapsed";
const robotProgramHistoryStoragePrefix = "robo-programmer-program-history:";
const robotProgramHistoryLimit = 10;
const robotOnlineAddressKey = "robo-programmer-online-robot-address";
const robotOnlineAddressListKey = "robo-programmer-online-robot-addresses";
const robotOnlineAddressProfilesKey = "robo-programmer-online-robot-profiles";
const robotOnlinePollMs = 5000;

function savedEditorFontSize() {
  const stored = Number(localStorage.getItem(editorFontSizeKey));
  if (!Number.isFinite(stored)) return defaultEditorFontSize;
  return Math.max(minEditorFontSize, Math.min(maxEditorFontSize, stored));
}

function setEditorFontSize(size) {
  const nextSize = Math.max(minEditorFontSize, Math.min(maxEditorFontSize, size));
  document.documentElement.style.setProperty("--editor-font-size", `${nextSize}px`);
  document.documentElement.style.setProperty("--editor-line-height", `${(nextSize * 1.55).toFixed(1)}px`);
  localStorage.setItem(editorFontSizeKey, String(nextSize));
  decreaseEditorFontBtn.disabled = nextSize <= minEditorFontSize;
  increaseEditorFontBtn.disabled = nextSize >= maxEditorFontSize;
  syncHighlightScroll();
  if (!splitEditorPane.hidden) {
    splitHighlightedCode.scrollTop = splitEditor.scrollTop;
    splitHighlightedCode.scrollLeft = splitEditor.scrollLeft;
  }
}

setEditorFontSize(savedEditorFontSize());

function savedRobotNumericFontSize() {
  const stored = Number(localStorage.getItem(robotNumericFontSizeKey));
  if (!Number.isFinite(stored)) return defaultRobotNumericFontSize;
  return Math.max(minRobotNumericFontSize, Math.min(maxRobotNumericFontSize, stored));
}

function setRobotNumericFontSize(size) {
  const nextSize = Math.max(minRobotNumericFontSize, Math.min(maxRobotNumericFontSize, size));
  document.documentElement.style.setProperty("--robot-numeric-font-size", `${nextSize}px`);
  localStorage.setItem(robotNumericFontSizeKey, String(nextSize));
  decreaseRobotNumericFontBtn.disabled = nextSize <= minRobotNumericFontSize;
  increaseRobotNumericFontBtn.disabled = nextSize >= maxRobotNumericFontSize;
}

setRobotNumericFontSize(savedRobotNumericFontSize());

const sampleProgram = `/PROG  PICK_PLACE
/ATTR
OWNER       = MNEDITOR;
COMMENT     = "Starter template";
PROG_SIZE   = 0;
CREATE      = DATE 24-01-01  TIME 00:00:00;
MODIFIED    = DATE 24-01-01  TIME 00:00:00;
FILE_NAME   = ;
VERSION     = 0;
LINE_COUNT  = 8;
MEMORY_SIZE = 0;
PROTECT     = READ_WRITE;
STORAGE     = SHADOW;
TCD:  STACK_SIZE    = 0,
      TASK_PRIORITY = 50,
      TIME_SLICE    = 0,
      BUSY_LAMP_OFF = 0,
      ABORT_REQUEST = 0,
      PAUSE_REQUEST = 0;
DEFAULT_GROUP = 1,*,*,*,*;
CONTROL_CODE  = 00000000 00000000;
LOCAL_REGISTERS = 0,0,0;
/APPL

AUTO_SINGULARITY_HEADER;
  ENABLE_SINGULARITY_AVOIDANCE   : TRUE;
/MN
   1:  UFRAME_NUM=1 ;
   2:  UTOOL_NUM=1 ;
   3:  J P[1] 50% FINE ;
   4:  L P[2] 250mm/sec CNT50 ;
   5:  DO[1]=ON ;
   6:  WAIT DI[1]=ON ;
   7:  CALL HOME ;
   8:  JMP LBL[100] ;
   9:  LBL[100] ;
/POS
P[1]{
   GP1:
      UF : 1, UT : 1,        CONFIG : 'N U T, 0, 0, 0',
      X =   100.000  mm,     Y =   200.000  mm,     Z =   300.000  mm,
      W =     0.000 deg,     P =     0.000 deg,     R =     0.000 deg
};
P[2]{
   GP1:
      UF : 1, UT : 1,        CONFIG : 'N U T, 0, 0, 0',
      X =   150.000  mm,     Y =   250.000  mm,     Z =   300.000  mm,
      W =     0.000 deg,     P =     0.000 deg,     R =     0.000 deg
};
/END`;

const coreCompletions = [
  ["J P[] 50% FINE ;", "Joint move"],
  ["L P[] 250mm/sec CNT50 ;", "Linear move"],
  ["C P[] P[] 250mm/sec FINE ;", "Circular move"],
  ["UFRAME_NUM=", "Set user frame"],
  ["UTOOL_NUM=", "Set tool frame"],
  ["CALL ", "Call program"],
  ["LBL[] ;", "Label"],
  ["JMP LBL[] ;", "Jump"],
  ["IF  THEN ;", "Conditional"],
  ["WAIT DI[]=ON ;", "Wait input"],
  ["DO[]=ON ;", "Set output"],
  ["DO[]=OFF ;", "Clear output"],
  ["R[]=", "Register"],
  ["PR[]=", "Position register"],
  ["FINE", "Termination"],
  ["CNT50", "Termination"],
  ["/PROG", "Section"],
  ["/ATTR", "Section"],
  ["/MN", "Section"],
  ["/POS", "Section"],
  ["/END", "Section"]
];

const teachPendantCompletions = [
  ["J P[] 50% FINE ;", "Motion: joint P"],
  ["J PR[] 50% FINE ;", "Motion: joint PR"],
  ["L P[] 250mm/sec CNT50 ;", "Motion: linear P"],
  ["L PR[] 250mm/sec CNT50 ;", "Motion: linear PR"],
  ["C P[] P[] 250mm/sec FINE ;", "Motion: circular P"],
  ["C PR[] PR[] 250mm/sec FINE ;", "Motion: circular PR"],
  ["WAIT DI[]=ON ;", "WAIT digital input"],
  ["WAIT RI[]=ON ;", "WAIT robot input"],
  ["WAIT R[]=0 ;", "WAIT register value"],
  ["WAIT 1.00(sec) ;", "WAIT time"],
  ["DO[]=ON ;", "Digital output on"],
  ["DO[]=OFF ;", "Digital output off"],
  ["DI[]=ON ;", "Digital input on"],
  ["DI[]=OFF ;", "Digital input off"],
  ["RO[]=ON ;", "Robot output on"],
  ["RO[]=OFF ;", "Robot output off"],
  ["RI[]=ON ;", "Robot input on"],
  ["RI[]=OFF ;", "Robot input off"],
  ["GO[]=0 ;", "Group output value"],
  ["GI[]=0 ;", "Group input value"],
  ["AO[]=0 ;", "Analog output value"],
  ["AI[]=0 ;", "Analog input value"],
  ["IF DI[]=ON,JMP LBL[] ;", "I/O condition"],
  ["IF RI[]=ON,JMP LBL[] ;", "Robot input condition"],
  ["IF GI[]=0,JMP LBL[] ;", "Group input condition"],
  ["IF AI[]=0,JMP LBL[] ;", "Analog input condition"],
  ["R[]=0 ;", "R register assign"],
  ["R[]=R[]+1 ;", "R register math"],
  ["F[]=(ON) ;", "Flag On"],
  ["F[]=(OFF) ;", "Flag Off"],
  ["PR[]=P[] ;", "PR assign"],
  ["PR[,X]=0 ;", "PR element"],
  ["IF  THEN ;", "IF / THEN block"],
  ["IF ,JMP LBL[] ;", "IF action"],
  ["ENDIF ;", "End IF block"],
  ["LBL[] ;", "Label"],
  ["JMP LBL[] ;", "Jump label"],
  ["CALL  ;", "Call program"],
  ["RUN  ;", "Run program"],
  ["!  ;", "Comment"],
  ["//", "Remark"],
  ["UFRAME_NUM= ;", "User frame"],
  ["UTOOL_NUM= ;", "Tool frame"],
  ["PAYLOAD[] ;", "Payload"],
  ["TIMER[]=START ;", "Timer start"],
  ["TIMER[]=STOP ;", "Timer stop"],
  ["TIMER[]=RESET ;", "Timer reset"]
];

const advancedTpCompletions = [
  ["L P[] 500mm/sec FINE ;", "Advanced TP: motion J/L/C"],
  ["L P[] 500mm/sec FINE OFFSET PR[] ;", "Advanced TP: offset motion"],
  ["L P[] 500mm/sec FINE TOOL_OFFSET,PR[] ;", "Advanced TP: tool offset"],
  ["SKIP CONDITION DI[]=ON ;", "Advanced TP: skip condition"],
  ["PULSE DO[],0.50sec ;", "Advanced TP: pulse output"],
  ["SELECT R[]=1,JMP LBL[],ELSE,JMP LBL[] ;", "Advanced TP: SELECT"],
  ["FOR R[]=1 TO 10 ;", "Advanced TP: FOR"],
  ["ENDFOR ;", "Advanced TP: ENDFOR"],
  ["MESSAGE[] ;", "Advanced TP: message"],
  ["UALM[] ;", "Advanced TP: user alarm"],
  ["PAUSE ;", "Advanced TP: pause"]
];

let activeSuggestion = 0;
let visibleSuggestions = [];
let project = null;
let currentFileId = null;
let splitFileId = null;
let activeEditorName = "main";
let headerVisible = false;
let footerVisible = false;
let splitHeaderVisible = false;
let splitFooterVisible = false;
let sessionPersistTimer = null;
let undoStack = [];
let redoStack = [];
let historySuppressed = false;
let lastEditorValue = "";
let lastSplitEditorValue = "";
let newTpMode = "inst";
let activeWorkspaceView = "editor";
let activeAssignmentSheet = "";
let assignmentWorkbookData = null;
let assignmentsPopoutWindow = null;
let assignmentsPopoutMonitor = null;
let robotCommentComparison = [];
let robotCommentTypeFilterValue = "all";
let robotCommentDifferenceFilterValue = "all";
let robotExportPrograms = [];
let robotExportRemoteFiles = [];
let robotExportConnected = false;
let robotBackupInventory = [];
let robotBackupConnected = false;
let robotBackupActive = false;
let robotPositionTimer = null;
let robotPositionRequestActive = false;
let robotProgramMonitorRequestActive = false;
let robotProgramHistoryAddress = "";
let robotProgramHistory = [];
let robotProgramCurrentEntry = null;
let robotPositionLive = false;
let robotOnlineTimer = null;
let robotOnlineChecking = false;
let robotOnlineStatus = "offline";
let robotOnlineAddress = "";
let robotOnlineAbortController = null;
let robotExportAutoCheckedAddress = "";
let robotPositionRegisters = [];
let selectedRobotPositionRegisterKey = "";
let robotPositionRegistersAddress = "";
let robotPositionRegistersLoading = false;
let robotPositionRegisterCommitActive = false;
let robotNumericRegisters = [];
let robotNumericRegistersAddress = "";
let robotNumericRegistersLoading = false;
let robotNumericRegistersUpdatedAt = "";
let robotNumericCommentSaving = false;
let robotNumericValueSaving = false;
let robotFlags = [];
let robotFlagsAddress = "";
let robotFlagsLoading = false;
let robotFlagCommentSaving = false;
let robotFlagStateSaving = false;
let robotLsLoadActive = false;
const robotOfflineActionTitle = "Go Online with Robot to Use";

function robotRegisterEditsEnabled() {
  return Boolean(robotRegistersEditToggle?.checked);
}

function setRobotOnlineActionState(button, disabled, enabledTitle = "") {
  button.disabled = Boolean(disabled);
  button.title = robotOnlineStatus === "online"
    ? enabledTitle || button.dataset.enabledTitle || ""
    : robotOfflineActionTitle;
}

function enforceRobotOnlineActionState() {
  if (robotOnlineStatus === "online") return;
  [
    checkRobotExportBtn,
    exportSelectedProgramsBtn,
    importSelectedProgramsBtn,
    selectAllRobotExportBtn,
    clearRobotExportBtn,
    compareRobotCommentsBtn,
    pushRobotCommentsBtn,
    selectVisibleRobotCommentsBtn,
    clearVisibleRobotCommentsBtn,
    inventoryRobotBackupBtn,
    backupSelectedRobotFilesBtn,
    selectAllRobotBackupBtn,
    clearRobotBackupBtn
  ].forEach((button) => setRobotOnlineActionState(button, true));
}
let activeRobotExportTool = "programs";
let activeLiveRobotTool = "overview";
let tagStateCache = new Map();
let tagDisplayPreferences = new Map();
let flashLineIndex = null;
let flashLineTimer = null;
let ifPairHighlight = null;
let diagnosticsTimer = null;
let dismissedDiagnosticKeys = new Set();
let pendingChangePreview = null;

const sessionKey = "robo-programmer-session";
const activeSessionKey = "robo-programmer-active-session";
const recentProjectsDbName = "robo-programmer-v4";
const recentProjectsStoreName = "recent-projects";
const sessionSnapshotsStoreName = "session-snapshots";
const activeSessionPointerKey = "active-session";
const appRootPath = (() => {
  const params = new URLSearchParams(window.location.search);
  const rootFromUrl = params.get("appRoot");
  if (rootFromUrl) localStorage.setItem("robo-programmer-app-root", rootFromUrl);
  return rootFromUrl
    || localStorage.getItem("robo-programmer-app-root")
    || "C:\\Users\\criedelsheimer\\Documents\\Fanuc Programmer Project\\V5.0";
})();
const editorHistoryLimit = 100;
const tpCommentLimit = 32;
const assignmentTemplateFileName = "Data Assignments.xlsx";
const currentProjectConfigVersion = 2;
const currentRoboProgrammerVersion = "5.0";
const roboManifestFileName = "robo-project.json";
const roboPackageFormatVersion = 1;
const maxRoboEntryCount = 5000;
const maxRoboEntryBytes = 100 * 1024 * 1024;
const maxRoboPackageBytes = 500 * 1024 * 1024;

const assignmentRanges = [
  { type: "DI", sheet: "DI DO", indexCol: "A", descCol: "B" },
  { type: "DO", sheet: "DI DO", indexCol: "F", descCol: "G" },
  { type: "AI", sheet: "AI AO", indexCol: "A", descCol: "B" },
  { type: "AO", sheet: "AI AO", indexCol: "F", descCol: "G" },
  { type: "GI", sheet: "GI GO", indexCol: "A", descCol: "B" },
  { type: "GO", sheet: "GI GO", indexCol: "F", descCol: "G" },
  { type: "RI", sheet: "RI RO", indexCol: "A", descCol: "B" },
  { type: "RO", sheet: "RI RO", indexCol: "F", descCol: "G" },
  { type: "UI", sheet: "UI UO", indexCol: "A", descCol: "B" },
  { type: "UO", sheet: "UI UO", indexCol: "F", descCol: "G" },
  { type: "SI", sheet: "SI SO", indexCol: "A", descCol: "B" },
  { type: "SO", sheet: "SI SO", indexCol: "F", descCol: "G" },
  { type: "F", sheet: "Flag", indexCol: "A", descCol: "B" },
  { type: "R", sheet: "Numeric Registers", indexCol: "A", descCol: "B" },
  { type: "UF", sheet: "UF TF", indexCol: "A", descCol: "B" },
  { type: "TF", sheet: "UF TF", indexCol: "F", descCol: "G" },
  { type: "PR", sheet: "PR", indexCol: "A", descCol: "B" },
  { type: "SR", sheet: "String Registers", indexCol: "A", descCol: "B" },
  { type: "TIMER", sheet: "Timers", indexCol: "A", descCol: "B" }
];

const assignmentSheetNames = [
  "DI DO",
  "Numeric Registers",
  "PR",
  "GI GO",
  "RI RO",
  "UI UO",
  "SI SO",
  "Flag",
  "UF TF",
  "String Registers",
  "Timers",
  "AI AO"
];

const robotCommentCategories = [
  { readCode: 28, types: [{ type: "R", writeCode: 1, limit: 16 }] },
  { readCode: 80, range: "&sStartIdx=1&sEndIdx=1000", types: [{ type: "PR", writeCode: 3, limit: 16 }] },
  { readCode: 30, types: [{ type: "SR", writeCode: 14, limit: 16 }] },
  { readCode: 32, types: [{ type: "RI", writeCode: 6, limit: 24 }, { type: "RO", writeCode: 7, limit: 24 }] },
  { readCode: 33, types: [{ type: "DI", writeCode: 8, limit: 24 }, { type: "DO", writeCode: 9, limit: 24 }] },
  { readCode: 34, types: [{ type: "GI", writeCode: 10, limit: 24 }, { type: "GO", writeCode: 11, limit: 24 }] },
  { readCode: 35, types: [{ type: "AI", writeCode: 12, limit: 24 }, { type: "AO", writeCode: 13, limit: 24 }] },
  { readCode: 76, types: [{ type: "F", writeCode: 19, limit: 24 }] }
];

function assignmentSheetLabel(sheetName) {
  return sheetName === "PR" ? "Position Registers" : sheetName;
}

function createProgramTemplate(name) {
  const programName = name.toUpperCase().replace(/[^A-Z0-9_]/g, "_").slice(0, 30) || "MAIN";
  return `/PROG  ${programName}
/ATTR
OWNER		= MNEDITOR;
COMMENT		= "";
PROG_SIZE	= 163;
CREATE		= DATE 25-09-11  TIME 23:06:10;
MODIFIED	= DATE 25-09-11  TIME 23:06:10;
FILE_NAME	= ;
VERSION		= 0;
LINE_COUNT	= 3;
MEMORY_SIZE	= 407;
PROTECT		= READ_WRITE;
STORAGE		= SHADOW;
TCD:  STACK_SIZE	= 0,
      TASK_PRIORITY	= 50,
      TIME_SLICE	= 0,
      BUSY_LAMP_OFF	= 0,
      ABORT_REQUEST	= 0,
      PAUSE_REQUEST	= 0;
DEFAULT_GROUP	= 1,*,*,*,*;
CONTROL_CODE	= 00000000 00000000;
LOCAL_REGISTERS	= 0,0,0;
/APPL

AUTO_SINGULARITY_HEADER;
  ENABLE_SINGULARITY_AVOIDANCE   : TRUE;
/MN
   1:  UFRAME_NUM=1 ;
   2:  UTOOL_NUM=1 ;
   3:  !Add robot logic here ;
/POS
/END
`;
}

function normalizeLsFileName(name) {
  const withoutExtension = String(name || "").trim().replace(/\.LS$/i, "");
  const programName = withoutExtension.toUpperCase().replace(/[^A-Z0-9_]/g, "_").slice(0, 30);
  return programName ? `${programName}.LS` : "";
}

function trashTimestamp(date = new Date()) {
  const pad = (value, length = 2) => String(value).padStart(length, "0");
  return [
    date.getFullYear(),
    pad(date.getMonth() + 1),
    pad(date.getDate()),
    "-",
    pad(date.getHours()),
    pad(date.getMinutes()),
    pad(date.getSeconds()),
    "-",
    pad(date.getMilliseconds(), 3)
  ].join("");
}

function timestampedTrashFileName(fileName, date = new Date()) {
  const baseName = fileName.replace(/\.LS$/i, "");
  return `${baseName}_${trashTimestamp(date)}.LS`;
}

function getSection(line) {
  const trimmed = line.trim().toUpperCase();
  if (trimmed.startsWith("/PROG")) return "PROG";
  if (trimmed.startsWith("/ATTR")) return "ATTR";
  if (trimmed.startsWith("/APPL")) return "APPL";
  if (trimmed.startsWith("/MN")) return "MN";
  if (trimmed.startsWith("/POS")) return "POS";
  if (trimmed.startsWith("/END")) return "END";
  return null;
}

function projectSessionKey(name) {
  return `${sessionKey}:${encodeURIComponent(name)}`;
}

function projectSessionKeys(name) {
  return Array.from(new Set([
    projectSessionKey(name),
    projectSessionKey(safeFolderName(name))
  ]));
}

function tagStateStorageKey(name) {
  return `robo-programmer-tag-states:${encodeURIComponent(safeFolderName(name))}`;
}

function loadStoredTagStates(name) {
  try {
    return new Map(JSON.parse(localStorage.getItem(tagStateStorageKey(name)) || "[]"));
  } catch {
    return new Map();
  }
}

function persistTagStates() {
  if (!project) return;
  try {
    localStorage.setItem(tagStateStorageKey(project.name), JSON.stringify(Array.from(tagStateCache.entries())));
  } catch {
  }
}

function requestedProjectName() {
  return new URLSearchParams(window.location.search).get("project");
}

function normalizeSystemPath(path) {
  return String(path || "").trim().replaceAll("\\", "/").replace(/\/+$/g, "");
}

function systemPathBaseName(path) {
  const normalized = normalizeSystemPath(path);
  return normalized ? normalized.split("/").filter(Boolean).at(-1) || "" : "";
}

function requestedProjectRootPath() {
  return normalizeSystemPath(new URLSearchParams(window.location.search).get("projectRoot"));
}

function trustedProjectRootPath(directoryHandle) {
  const rootPath = requestedProjectRootPath();
  if (!rootPath || !directoryHandle?.name) return "";
  return systemPathBaseName(rootPath).toUpperCase() === directoryHandle.name.toUpperCase()
    ? rootPath
    : "";
}

function currentLsFileSystemPath() {
  const file = getCurrentFile();
  const rootPath = normalizeSystemPath(project?.projectRootPath);
  if (!file || !rootPath) return "";
  const lsFolder = project?.lsDirectoryHandle === project?.directoryHandle ? "" : "LS Files";
  return [rootPath, lsFolder, file.name].filter(Boolean).join("/");
}

function projectRootCacheKey(projectName) {
  return `robo-programmer-project-root:${encodeURIComponent(safeFolderName(projectName))}`;
}

function cachedProjectRootPath(projectName) {
  try {
    return normalizeSystemPath(localStorage.getItem(projectRootCacheKey(projectName)));
  } catch {
    return "";
  }
}

function cacheProjectRootPath(projectName, rootPath) {
  const normalized = normalizeSystemPath(rootPath);
  if (!normalized) return;
  try {
    localStorage.setItem(projectRootCacheKey(projectName), normalized);
  } catch {
  }
}

async function resolveProjectRootPath(projectName, files) {
  try {
    const response = await fetch("/project-path/resolve", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        projectName,
        lsFiles: files.map((file) => file.name).slice(0, 200)
      })
    });
    if (!response.ok) return "";
    const result = await response.json();
    return result?.ok && result.path ? normalizeSystemPath(result.path) : "";
  } catch {
    return "";
  }
}

function resolveProjectRootPathInBackground(projectToResolve) {
  if (!projectToResolve || projectToResolve.projectRootPath || projectToResolve.pathResolvePending) return;
  projectToResolve.pathResolvePending = true;
  resolveProjectRootPath(projectToResolve.name, projectToResolve.files).then((rootPath) => {
    if (!rootPath) return;
    cacheProjectRootPath(projectToResolve.name, rootPath);
    if (project === projectToResolve) {
      project.projectRootPath = rootPath;
      project.pathResolvePending = false;
      updateCopyCurrentPathButton();
    }
  }).catch(() => {
  }).finally(() => {
    if (projectToResolve) projectToResolve.pathResolvePending = false;
  });
}

function safeFolderName(name) {
  return name.trim().replace(/[<>:"/\\|?*]+/g, "_").replace(/\s+/g, " ") || "New Robot Project";
}

function openRecentProjectsDb() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error("Recent projects are not supported in this browser."));
      return;
    }

    const request = indexedDB.open(recentProjectsDbName, 2);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(recentProjectsStoreName)) {
        db.createObjectStore(recentProjectsStoreName, { keyPath: "name" });
      }
      if (!db.objectStoreNames.contains(sessionSnapshotsStoreName)) {
        db.createObjectStore(sessionSnapshotsStoreName, { keyPath: "key" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function withSessionSnapshotsStore(mode, callback) {
  const db = await openRecentProjectsDb();
  try {
    return await new Promise((resolve, reject) => {
      const transaction = db.transaction(sessionSnapshotsStoreName, mode);
      const store = transaction.objectStore(sessionSnapshotsStoreName);
      const result = callback(store);
      transaction.oncomplete = () => resolve(result);
      transaction.onerror = () => reject(transaction.error);
      transaction.onabort = () => reject(transaction.error);
    });
  } finally {
    db.close();
  }
}

function sessionSnapshotKey(name) {
  return `project:${encodeURIComponent(safeFolderName(name))}`;
}

async function withRecentProjectsStore(mode, callback) {
  const db = await openRecentProjectsDb();
  try {
    return await new Promise((resolve, reject) => {
      const transaction = db.transaction(recentProjectsStoreName, mode);
      const store = transaction.objectStore(recentProjectsStoreName);
      const result = callback(store);
      transaction.oncomplete = () => resolve(result);
      transaction.onerror = () => reject(transaction.error);
      transaction.onabort = () => reject(transaction.error);
    });
  } finally {
    db.close();
  }
}

function requestToPromise(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getRecentProjects() {
  try {
    const projects = await withRecentProjectsStore("readonly", (store) => requestToPromise(store.getAll()));
    return projects
      .sort((a, b) => String(b.openedAt).localeCompare(String(a.openedAt)))
      .slice(0, 5);
  } catch {
    return [];
  }
}

async function saveRecentProject(directoryHandle) {
  if (!directoryHandle) return;
  try {
    const projects = await getRecentProjects();
    const nextProjects = [
      { name: directoryHandle.name, handle: directoryHandle, openedAt: new Date().toISOString() },
      ...projects.filter((item) => item.name !== directoryHandle.name)
    ].slice(0, 5);

    await withRecentProjectsStore("readwrite", (store) => {
      store.clear();
      nextProjects.forEach((item) => store.put(item));
    });
    renderRecentProjects();
  } catch {
  }
}

async function clearRecentProjects() {
  try {
    await withRecentProjectsStore("readwrite", (store) => store.clear());
  } catch {
  }
  renderRecentProjects();
}

async function ensureDirectoryPermission(directoryHandle) {
  if (!directoryHandle?.queryPermission || !directoryHandle?.requestPermission) return true;
  const options = { mode: "readwrite" };
  if (await directoryHandle.queryPermission(options) === "granted") return true;
  return await directoryHandle.requestPermission(options) === "granted";
}

async function loadProjectFromDirectoryHandle(directoryHandle) {
  const hasPermission = await ensureDirectoryPermission(directoryHandle);
  if (!hasPermission) {
    projectStatus.textContent = "Permission is needed to reopen that recent project folder.";
    return;
  }

  const projectMetadata = await readProjectMetadata(directoryHandle);
  const migration = await migrateProjectConfig(directoryHandle, projectMetadata);
  const { files, lsDirectoryHandle } = await readLsFilesFromDirectory(directoryHandle, projectMetadata.favoriteFiles);
  const launcherRootPath = trustedProjectRootPath(directoryHandle);
  const resolvedRootPath = launcherRootPath || cachedProjectRootPath(directoryHandle.name);

  const nextProject = await attachSpreadsheetHandle({
    name: directoryHandle.name,
    files,
    directoryHandle,
    lsDirectoryHandle,
    projectRootPath: resolvedRootPath,
    robotAddress: String(projectMetadata.data?.robotAddress || ""),
    robotBackupsDirectoryHandle: await directoryHandle.getDirectoryHandle("Robot Backups", { create: true }),
    canSave: true,
    source: "folder"
  }, directoryHandle, false);
  loadProject(nextProject);
  if (migration.warning) {
    projectStatus.textContent = `${directoryHandle.name} opened, but its project config could not be fully updated: ${migration.warning}`;
  } else if (migration.updated) {
    projectStatus.textContent = `${directoryHandle.name} was updated to Robo Programmer project config v${currentProjectConfigVersion}: ${migration.changes.join(", ")}.`;
  }
  if (launcherRootPath) cacheProjectRootPath(directoryHandle.name, launcherRootPath);
  else resolveProjectRootPathInBackground(nextProject);
  await saveRecentProject(directoryHandle);
}

async function renderRecentProjects() {
  const recentProjects = await getRecentProjects();
  if (!recentProjects.length) {
    recentProjectsList.innerHTML = "<p>No recent projects yet.</p>";
    clearRecentProjectsBtn.disabled = true;
    return;
  }

  clearRecentProjectsBtn.disabled = false;
  recentProjectsList.innerHTML = recentProjects.map((item) => `
    <button type="button" data-project-name="${escapeHtml(item.name)}">
      <span>${escapeHtml(item.name)}</span>
      <small>${escapeHtml(new Date(item.openedAt).toLocaleDateString())}</small>
    </button>
  `).join("");
}

async function writeTextFile(directoryHandle, fileName, content) {
  const fileHandle = await directoryHandle.getFileHandle(fileName, { create: true });
  const writable = await fileHandle.createWritable();
  await writable.write(content);
  await writable.close();
  return fileHandle;
}

async function writeBinaryFile(directoryHandle, fileName, content) {
  const fileHandle = await directoryHandle.getFileHandle(fileName, { create: true });
  const writable = await fileHandle.createWritable();
  await writable.write(content);
  await writable.close();
  return fileHandle;
}

function uint16(value) {
  const bytes = new Uint8Array(2);
  new DataView(bytes.buffer).setUint16(0, value, true);
  return bytes;
}

function uint32(value) {
  const bytes = new Uint8Array(4);
  new DataView(bytes.buffer).setUint32(0, value >>> 0, true);
  return bytes;
}

function zipDateTime(date = new Date()) {
  const year = Math.max(1980, date.getFullYear());
  return {
    date: ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate(),
    time: (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2)
  };
}

async function compressZipEntry(bytes) {
  if (!window.CompressionStream) return { bytes, method: 0 };
  try {
    const stream = new Blob([bytes]).stream().pipeThrough(new CompressionStream("deflate-raw"));
    const compressed = new Uint8Array(await new Response(stream).arrayBuffer());
    return compressed.length < bytes.length
      ? { bytes: compressed, method: 8 }
      : { bytes, method: 0 };
  } catch {
    return { bytes, method: 0 };
  }
}

async function createZipBlob(entries) {
  const encoder = new TextEncoder();
  const localParts = [];
  const centralParts = [];
  let offset = 0;

  for (const entry of entries) {
    const nameBytes = encoder.encode(entry.path);
    const sourceBytes = entry.bytes instanceof Uint8Array ? entry.bytes : new Uint8Array(entry.bytes);
    const compressed = await compressZipEntry(sourceBytes);
    const checksum = crc32(sourceBytes);
    const stamp = zipDateTime(entry.lastModified ? new Date(entry.lastModified) : new Date());
    const localHeader = new Blob([
      uint32(0x04034b50), uint16(20), uint16(0x0800), uint16(compressed.method),
      uint16(stamp.time), uint16(stamp.date), uint32(checksum), uint32(compressed.bytes.length),
      uint32(sourceBytes.length), uint16(nameBytes.length), uint16(0), nameBytes
    ]);
    localParts.push(localHeader, compressed.bytes);
    centralParts.push(new Blob([
      uint32(0x02014b50), uint16(20), uint16(20), uint16(0x0800), uint16(compressed.method),
      uint16(stamp.time), uint16(stamp.date), uint32(checksum), uint32(compressed.bytes.length),
      uint32(sourceBytes.length), uint16(nameBytes.length), uint16(0), uint16(0), uint16(0),
      uint16(0), uint32(0), uint32(offset), nameBytes
    ]));
    offset += localHeader.size + compressed.bytes.length;
  }

  const centralSize = centralParts.reduce((total, part) => total + part.size, 0);
  return new Blob([
    ...localParts,
    ...centralParts,
    uint32(0x06054b50), uint16(0), uint16(0), uint16(entries.length), uint16(entries.length),
    uint32(centralSize), uint32(offset), uint16(0)
  ], { type: "application/zip" });
}

function safeRoboEntryPath(rawPath) {
  const path = String(rawPath).replaceAll("\\", "/").replace(/^\/+/, "");
  const parts = path.split("/").filter(Boolean);
  if (!parts.length || parts.some((part) => part === "." || part === "..")) {
    throw new Error(`Unsafe package path: ${rawPath}`);
  }
  return parts.join("/");
}

async function decompressZipEntry(bytes, method) {
  if (method === 0) return bytes;
  if (method !== 8 || !window.DecompressionStream) {
    throw new Error("This ROBO package uses an unsupported ZIP compression method.");
  }
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

async function readRoboZipEntries(file) {
  if (file.size > maxRoboPackageBytes) throw new Error("ROBO package exceeds the 500 MB safety limit.");
  const bytes = new Uint8Array(await file.arrayBuffer());
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let endOffset = -1;

  for (let offset = bytes.length - 22; offset >= Math.max(0, bytes.length - 65557); offset -= 1) {
    if (view.getUint32(offset, true) === 0x06054b50) {
      endOffset = offset;
      break;
    }
  }
  if (endOffset < 0) throw new Error("The selected file is not a valid ZIP-based ROBO package.");

  const entryCount = view.getUint16(endOffset + 10, true);
  const centralOffset = view.getUint32(endOffset + 16, true);
  if (entryCount > maxRoboEntryCount) throw new Error("ROBO package contains too many files.");

  const decoder = new TextDecoder();
  const entries = new Map();
  let offset = centralOffset;
  let totalBytes = 0;

  for (let index = 0; index < entryCount; index += 1) {
    if (view.getUint32(offset, true) !== 0x02014b50) throw new Error("ROBO package directory is damaged.");
    const flags = view.getUint16(offset + 8, true);
    const method = view.getUint16(offset + 10, true);
    const checksum = view.getUint32(offset + 16, true);
    const compressedSize = view.getUint32(offset + 20, true);
    const uncompressedSize = view.getUint32(offset + 24, true);
    const nameLength = view.getUint16(offset + 28, true);
    const extraLength = view.getUint16(offset + 30, true);
    const commentLength = view.getUint16(offset + 32, true);
    const localOffset = view.getUint32(offset + 42, true);
    const rawPath = decoder.decode(bytes.slice(offset + 46, offset + 46 + nameLength));
    offset += 46 + nameLength + extraLength + commentLength;

    if (rawPath.endsWith("/") || rawPath.endsWith("\\")) continue;
    if (flags & 1) throw new Error("Encrypted ROBO packages are not supported.");
    if (uncompressedSize > maxRoboEntryBytes) throw new Error(`${rawPath} exceeds the 100 MB file safety limit.`);
    totalBytes += uncompressedSize;
    if (totalBytes > maxRoboPackageBytes) throw new Error("ROBO package expands beyond the 500 MB safety limit.");
    if (view.getUint32(localOffset, true) !== 0x04034b50) throw new Error("ROBO package file data is damaged.");

    const localNameLength = view.getUint16(localOffset + 26, true);
    const localExtraLength = view.getUint16(localOffset + 28, true);
    const dataOffset = localOffset + 30 + localNameLength + localExtraLength;
    const content = await decompressZipEntry(bytes.slice(dataOffset, dataOffset + compressedSize), method);
    if (content.length !== uncompressedSize || crc32(content) !== checksum) {
      throw new Error(`${rawPath} failed package integrity validation.`);
    }
    entries.set(safeRoboEntryPath(rawPath), content);
  }

  return entries;
}

async function collectDirectoryEntries(directoryHandle, prefix = "", entries = [], directories = []) {
  for await (const entry of directoryHandle.values()) {
    const path = safeRoboEntryPath(prefix ? `${prefix}/${entry.name}` : entry.name);
    if (entry.kind === "directory") {
      directories.push(path);
      await collectDirectoryEntries(entry, path, entries, directories);
      continue;
    }
    const file = await entry.getFile();
    entries.push({ path, bytes: new Uint8Array(await file.arrayBuffer()), lastModified: file.lastModified });
  }
  return entries;
}

async function collectRoboProjectEntries() {
  saveCurrentBuffer();
  saveSplitBuffer();
  const directories = [];
  const entries = project.directoryHandle
    ? await collectDirectoryEntries(project.directoryHandle, "", [], directories)
    : [];
  const entryMap = new Map(entries.map((entry) => [entry.path.toUpperCase(), entry]));
  const lsPrefix = project.lsDirectoryHandle?.name === "LS Files" ? "LS Files/" : "";

  project.files.forEach((file) => {
    const path = safeRoboEntryPath(`${lsPrefix}${file.name}`);
    entryMap.set(path.toUpperCase(), {
      path,
      bytes: new TextEncoder().encode(file.content),
      lastModified: Date.now()
    });
  });

  const manifest = {
    format: "robo-project",
    formatVersion: roboPackageFormatVersion,
    app: "Robo Programmer",
    projectName: project.name,
    exportedAt: new Date().toISOString(),
    fileCount: entryMap.size,
    directories: directories.sort((a, b) => a.localeCompare(b))
  };
  entryMap.set(roboManifestFileName.toUpperCase(), {
    path: roboManifestFileName,
    bytes: new TextEncoder().encode(JSON.stringify(manifest, null, 2)),
    lastModified: Date.now()
  });
  return Array.from(entryMap.values()).sort((a, b) => a.path.localeCompare(b.path));
}

async function saveBlobAs(blob, suggestedName, types) {
  if (window.showSaveFilePicker) {
    const handle = await window.showSaveFilePicker({ suggestedName, types });
    const writable = await handle.createWritable();
    await writable.write(blob);
    await writable.close();
    return;
  }
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = suggestedName;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

async function exportRoboProject() {
  if (!project) {
    projectStatus.textContent = "Open a project before exporting a ROBO package.";
    return;
  }
  projectStatus.textContent = `Packaging ${project.name}...`;
  const entries = await collectRoboProjectEntries();
  const blob = await createZipBlob(entries);
  const fileName = `${safeFolderName(project.name)}.ROBO`;
  await saveBlobAs(blob, fileName, [{
    description: "Robo Programmer project package",
    accept: { "application/zip": [".ROBO", ".robo"] }
  }]);
  projectStatus.textContent = `Exported ${fileName} with ${entries.length - 1} project file${entries.length === 2 ? "" : "s"}.`;
}

async function createUniqueImportDirectory(parentHandle, requestedName) {
  const baseName = safeFolderName(requestedName) || "Imported Robo Project";
  for (let suffix = 0; suffix < 1000; suffix += 1) {
    const name = suffix === 0 ? baseName : `${baseName} (${suffix + 1})`;
    try {
      await parentHandle.getDirectoryHandle(name, { create: false });
    } catch (error) {
      if (error.name === "NotFoundError") {
        return parentHandle.getDirectoryHandle(name, { create: true });
      }
      throw error;
    }
  }
  throw new Error("Unable to find an available destination folder name.");
}

async function writeRoboEntries(directoryHandle, entries) {
  for (const [path, bytes] of entries) {
    const parts = safeRoboEntryPath(path).split("/");
    let targetDirectory = directoryHandle;
    for (const part of parts.slice(0, -1)) {
      targetDirectory = await targetDirectory.getDirectoryHandle(part, { create: true });
    }
    await writeBinaryFile(targetDirectory, parts.at(-1), bytes);
  }
}

async function createRoboDirectories(directoryHandle, directories) {
  for (const path of directories) {
    const parts = safeRoboEntryPath(path).split("/");
    let targetDirectory = directoryHandle;
    for (const part of parts) {
      targetDirectory = await targetDirectory.getDirectoryHandle(part, { create: true });
    }
  }
}

async function importRoboProjectFile(file) {
  if (!window.showDirectoryPicker) {
    throw new Error("This browser cannot unpack ROBO packages. Open the desktop app or use Edge/Chrome.");
  }
  projectStatus.textContent = `Validating ${file.name}...`;
  const entries = await readRoboZipEntries(file);
  const manifestBytes = entries.get(roboManifestFileName);
  if (!manifestBytes) throw new Error(`ROBO package is missing ${roboManifestFileName}.`);

  let manifest;
  try {
    manifest = JSON.parse(new TextDecoder().decode(manifestBytes));
  } catch {
    throw new Error("ROBO package manifest is not valid JSON.");
  }
  if (manifest.format !== "robo-project" || manifest.formatVersion !== roboPackageFormatVersion) {
    throw new Error(`Unsupported ROBO package format version: ${manifest.formatVersion ?? "unknown"}.`);
  }
  const directories = Array.isArray(manifest.directories)
    ? manifest.directories.map(safeRoboEntryPath)
    : [];

  projectStatus.textContent = "Choose where to unpack the ROBO project.";
  const parentHandle = await window.showDirectoryPicker({ mode: "readwrite" });
  const directoryHandle = await createUniqueImportDirectory(parentHandle, manifest.projectName || file.name.replace(/\.robo$/i, ""));
  projectStatus.textContent = `Unpacking ${file.name}...`;
  await createRoboDirectories(directoryHandle, directories);
  await writeRoboEntries(directoryHandle, entries);
  await loadProjectFromDirectoryHandle(directoryHandle);
  projectStatus.textContent = `Unpacked and opened ${directoryHandle.name}.`;
}

async function chooseAndImportRoboProject() {
  if (window.showOpenFilePicker) {
    const [handle] = await window.showOpenFilePicker({
      multiple: false,
      types: [{
        description: "Robo Programmer project package",
        accept: { "application/zip": [".ROBO", ".robo"] }
      }]
    });
    await importRoboProjectFile(await handle.getFile());
    return;
  }
  roboPackageInput.click();
}

async function loadAssignmentTemplateBytes() {
  const response = await fetch(assignmentTemplateFileName);
  if (!response.ok) throw new Error("Unable to load assignment template.");
  return new Uint8Array(await response.arrayBuffer());
}

async function writeAssignmentTemplate(spreadsheetDirectoryHandle) {
  const bytes = await loadAssignmentTemplateBytes();
  return writeBinaryFile(spreadsheetDirectoryHandle, assignmentTemplateFileName, bytes);
}

async function attachSpreadsheetHandle(projectData, directoryHandle, createIfMissing = false) {
  try {
    const spreadsheetDirectoryHandle = await directoryHandle.getDirectoryHandle("Spreadsheet", { create: createIfMissing });
    let assignmentFileHandle;

    try {
      assignmentFileHandle = await spreadsheetDirectoryHandle.getFileHandle(assignmentTemplateFileName, { create: false });
    } catch {
      if (!createIfMissing) throw new Error("Assignment workbook not found.");
      assignmentFileHandle = await writeAssignmentTemplate(spreadsheetDirectoryHandle);
    }

    projectData.spreadsheetDirectoryHandle = spreadsheetDirectoryHandle;
    projectData.assignmentFileHandle = assignmentFileHandle;
  } catch {
    projectData.spreadsheetDirectoryHandle = null;
    projectData.assignmentFileHandle = null;
  }

  return projectData;
}

async function readProjectMetadata(directoryHandle) {
  try {
    for await (const entry of directoryHandle.values()) {
      if (entry.kind !== "file" || !entry.name.toLowerCase().endsWith(".roboproject")) continue;
      const data = JSON.parse(await (await entry.getFile()).text());
      return {
        data,
        manifestFileName: entry.name,
        configVersion: Number(data.configVersion ?? data.version) || 0,
        favoriteFiles: Array.isArray(data.favoriteFiles)
          ? data.favoriteFiles.map((name) => String(name).toUpperCase())
          : []
      };
    }
  } catch {
  }
  return { data: {}, manifestFileName: "", configVersion: 0, favoriteFiles: [] };
}

async function directoryEntryExists(directoryHandle, name, kind) {
  try {
    if (kind === "directory") await directoryHandle.getDirectoryHandle(name, { create: false });
    else await directoryHandle.getFileHandle(name, { create: false });
    return true;
  } catch {
    return false;
  }
}

async function rootContainsLsFiles(directoryHandle) {
  for await (const entry of directoryHandle.values()) {
    if (entry.kind === "file" && entry.name.toUpperCase().endsWith(".LS")) return true;
  }
  return false;
}

async function ensureCurrentProjectStructure(directoryHandle) {
  const changes = [];
  const hasLsFolder = await directoryEntryExists(directoryHandle, "LS Files", "directory");
  const flatLayout = !hasLsFolder && await rootContainsLsFiles(directoryHandle);
  let lsDirectoryHandle = directoryHandle;
  let lsFolder = ".";
  let trashFolder = "Trash";

  if (!flatLayout) {
    lsDirectoryHandle = await directoryHandle.getDirectoryHandle("LS Files", { create: true });
    lsFolder = "LS Files";
    trashFolder = "LS Files\\Trash";
    if (!hasLsFolder) changes.push("added LS Files folder");
  }

  if (!await directoryEntryExists(lsDirectoryHandle, "Trash", "directory")) {
    await lsDirectoryHandle.getDirectoryHandle("Trash", { create: true });
    changes.push("added Trash folder");
  }
  if (!await directoryEntryExists(directoryHandle, "History", "directory")) {
    await directoryHandle.getDirectoryHandle("History", { create: true });
    changes.push("added History folder");
  }
  if (!await directoryEntryExists(directoryHandle, "Robot Backups", "directory")) {
    await directoryHandle.getDirectoryHandle("Robot Backups", { create: true });
    changes.push("added Robot Backups folder");
  }

  const hasSpreadsheetFolder = await directoryEntryExists(directoryHandle, "Spreadsheet", "directory");
  const spreadsheetDirectoryHandle = await directoryHandle.getDirectoryHandle("Spreadsheet", { create: true });
  if (!hasSpreadsheetFolder) changes.push("added Spreadsheet folder");
  if (!await directoryEntryExists(spreadsheetDirectoryHandle, assignmentTemplateFileName, "file")) {
    await writeAssignmentTemplate(spreadsheetDirectoryHandle);
    changes.push(`added ${assignmentTemplateFileName}`);
  }

  return { changes, layout: { lsFolder, trashFolder } };
}

async function migrateProjectConfig(directoryHandle, metadata) {
  const changes = [];
  try {
    const structure = await ensureCurrentProjectStructure(directoryHandle);
    changes.push(...structure.changes);
    const launcherName = `Launch ${safeFolderName(directoryHandle.name)}.command`;
    const needsConfigUpgrade = metadata.configVersion < currentProjectConfigVersion
      || metadata.data?.roboProgrammerVersion !== currentRoboProgrammerVersion
      || !metadata.manifestFileName;
    const launcherMissing = !await directoryEntryExists(directoryHandle, launcherName, "file");
    let launcherNeedsPathUpdate = false;
    if (!launcherMissing) {
      try {
        const launcherFile = await (await directoryHandle.getFileHandle(launcherName, { create: false })).getFile();
        launcherNeedsPathUpdate = !(await launcherFile.text()).includes("projectRoot=");
      } catch {
        launcherNeedsPathUpdate = true;
      }
    }

    if (needsConfigUpgrade || changes.length) {
      const manifestFileName = metadata.manifestFileName || `${safeFolderName(directoryHandle.name)}.roboproject`;
      await writeTextFile(
        directoryHandle,
        manifestFileName,
        createProjectManifest(directoryHandle.name, metadata.favoriteFiles, metadata.data, structure.layout)
      );
      changes.unshift(`updated project config to v${currentProjectConfigVersion}`);
    }
    if (needsConfigUpgrade || launcherMissing || launcherNeedsPathUpdate) {
      await writeTextFile(directoryHandle, launcherName, createProjectLauncher(directoryHandle.name));
      changes.push(launcherMissing ? "added current project launcher" : "updated project launcher");
    }
    return { updated: changes.length > 0, changes };
  } catch (error) {
    return { updated: changes.length > 0, changes, warning: error?.message || "Unknown update error." };
  }
}

async function writeProjectFiles(directoryHandle, name, favoriteFiles = [], existingData = {}, layout = {}) {
  await writeTextFile(directoryHandle, `${safeFolderName(name)}.roboproject`, createProjectManifest(name, favoriteFiles, existingData, layout));
  await writeTextFile(directoryHandle, `Launch ${safeFolderName(name)}.command`, createProjectLauncher(name));
}

async function persistProjectFavorites() {
  if (!project?.directoryHandle) return false;
  const favorites = project.files.filter((file) => file.favorite).map((file) => file.name);
  const metadata = await readProjectMetadata(project.directoryHandle);
  const flatLayout = project.lsDirectoryHandle === project.directoryHandle;
  await writeTextFile(
    project.directoryHandle,
    metadata.manifestFileName || `${safeFolderName(project.name)}.roboproject`,
    createProjectManifest(project.name, favorites, metadata.data, flatLayout
      ? { lsFolder: ".", trashFolder: "Trash" }
      : { lsFolder: "LS Files", trashFolder: "LS Files\\Trash" })
  );
  return true;
}

async function persistProjectRobotSettings(robotAddress) {
  if (!project?.directoryHandle) return false;
  const metadata = await readProjectMetadata(project.directoryHandle);
  const flatLayout = project.lsDirectoryHandle === project.directoryHandle;
  const existingData = { ...metadata.data };
  if (robotAddress !== undefined) {
    if (robotAddress) existingData.robotAddress = robotAddress;
    else delete existingData.robotAddress;
  }
  await writeTextFile(
    project.directoryHandle,
    metadata.manifestFileName || `${safeFolderName(project.name)}.roboproject`,
    createProjectManifest(project.name, project.files.filter((file) => file.favorite).map((file) => file.name), existingData, flatLayout
      ? { lsFolder: ".", trashFolder: "Trash" }
      : { lsFolder: "LS Files", trashFolder: "LS Files\\Trash" })
  );
  if (robotAddress !== undefined) project.robotAddress = robotAddress;
  return true;
}

function createProjectManifest(name, favoriteFiles = [], existingData = {}, layout = {}) {
  return JSON.stringify({
    ...existingData,
    app: "Robo Programmer",
    version: currentProjectConfigVersion,
    configVersion: currentProjectConfigVersion,
    roboProgrammerVersion: currentRoboProgrammerVersion,
    projectName: name,
    lsFolder: layout.lsFolder || "LS Files",
    trashFolder: layout.trashFolder || "LS Files\\Trash",
    spreadsheetFolder: "Spreadsheet",
    assignmentWorkbook: assignmentTemplateFileName,
    historyFolder: "History",
    robotBackupsFolder: "Robot Backups",
    favoriteFiles: [...new Set(favoriteFiles.map((fileName) => String(fileName).toUpperCase()))].sort()
  }, null, 2);
}

function createProjectLauncher(name) {
  const port = new URL(window.location.href).port || "4220";
  const encodedAppRoot = encodeURIComponent(appRootPath);
  const encodedProject = encodeURIComponent(name);
  return `#!/bin/zsh
APP_ROOT="${appRootPath.replaceAll('"', '\\"')}"
PORT="${port}"
PROJECT_ROOT="$(cd "$(dirname "$0")" && pwd)"

if [ ! -f "$APP_ROOT/server.mjs" ]; then
  echo "Robo Programmer could not find server.mjs in:"
  echo "$APP_ROOT"
  echo
  echo "Move this project launcher next to a valid Robo Programmer Mac test build, or recreate it from the app."
  read "?Press Return to close."
  exit 1
fi

ENCODED_PROJECT_ROOT="$(node -e 'process.stdout.write(encodeURIComponent(process.argv[1]))' "$PROJECT_ROOT")"
node "$APP_ROOT/server.mjs" --port "$PORT" --path "/?project=${encodedProject}&appRoot=${encodedAppRoot}&projectRoot=$ENCODED_PROJECT_ROOT"
`;
}

async function readLsFilesFromDirectory(directoryHandle, favoriteFiles = []) {
  const lsDirectoryHandle = await getLsDirectoryHandle(directoryHandle);
  const favorites = new Set(favoriteFiles.map((name) => String(name).toUpperCase()));
  const files = [];

  for await (const entry of lsDirectoryHandle.values()) {
    if (entry.kind !== "file" || !entry.name.toUpperCase().endsWith(".LS")) continue;
    const file = await entry.getFile();
    const content = await file.text();
    files.push({
      id: entry.name,
      name: entry.name,
      content,
      savedContent: content,
      handle: entry,
      favorite: favorites.has(entry.name.toUpperCase()),
      dirty: false
    });
  }

  return { files: sortFiles(files), lsDirectoryHandle };
}

async function saveFileToDisk(file) {
  if (!file?.handle?.createWritable && project?.lsDirectoryHandle) {
    file.handle = await project.lsDirectoryHandle.getFileHandle(file.name, { create: true });
  }

  if (!file?.handle?.createWritable) return false;

  const writable = await file.handle.createWritable();
  await writable.write(file.content);
  await writable.close();
  file.dirty = false;
  file.savedContent = file.content;
  if (file.id === currentFileId) renderHighlight();
  if (!splitEditorPane.hidden && file.id === splitFileId) renderSplitHighlight();
  return true;
}

async function createNewLsFile() {
  if (!project) {
    projectStatus.textContent = "Open a project before creating an LS file.";
    return;
  }

  const requestedName = prompt("New LS file name", "NEW_PROGRAM");
  if (requestedName === null) return;

  const fileName = normalizeLsFileName(requestedName);
  if (!fileName) {
    projectStatus.textContent = "Enter a valid LS file name.";
    return;
  }

  if (project.files.some((file) => file.name.toUpperCase() === fileName)) {
    projectStatus.textContent = `${fileName} already exists in this project.`;
    return;
  }

  saveCurrentBuffer();
  saveSplitBuffer();
  const content = createProgramTemplate(fileName.replace(/\.LS$/i, ""));
  const newFile = {
    id: fileName,
    name: fileName,
    content,
    savedContent: "",
    favorite: false,
    dirty: true
  };

  if (project.lsDirectoryHandle) {
    try {
      await project.lsDirectoryHandle.getFileHandle(fileName, { create: false });
      projectStatus.textContent = `${fileName} already exists in LS Files. Refresh the project file list to show it.`;
      return;
    } catch (error) {
      if (error.name !== "NotFoundError") throw error;
    }
    newFile.handle = await writeTextFile(project.lsDirectoryHandle, fileName, content);
    newFile.dirty = false;
    newFile.savedContent = content;
  }

  project.files.push(newFile);
  sortFiles(project.files);
  renderFileList();
  switchFile(newFile.id);
  projectStatus.textContent = newFile.dirty
    ? `Created ${fileName} in the browser working copy. Save it after reconnecting the project folder.`
    : `Created ${fileName} in LS Files.`;
  persistSession();
}

async function deleteCurrentLsFile() {
  const file = getCurrentFile();
  if (!project || !file) {
    projectStatus.textContent = "Select an LS file before deleting.";
    return;
  }

  if (!project.lsDirectoryHandle?.getDirectoryHandle || !project.lsDirectoryHandle?.removeEntry) {
    projectStatus.textContent = "Reconnect the project folder before deleting an LS file so it can be moved to Trash.";
    return;
  }

  const shouldDelete = confirm(`Delete ${file.name}?\n\nThe file will be moved to LS Files\\Trash with a timestamped name.`);
  if (!shouldDelete) {
    projectStatus.textContent = `Delete cancelled for ${file.name}.`;
    return;
  }

  saveCurrentBuffer();
  saveSplitBuffer();
  const deletedIndex = project.files.findIndex((item) => item.id === file.id);
  const trashDirectoryHandle = await project.lsDirectoryHandle.getDirectoryHandle("Trash", { create: true });
  const trashFileName = timestampedTrashFileName(file.name);
  await writeTextFile(trashDirectoryHandle, trashFileName, file.content);

  try {
    await project.lsDirectoryHandle.removeEntry(file.name);
  } catch (error) {
    if (error.name !== "NotFoundError") throw error;
  }

  project.files = project.files.filter((item) => item.id !== file.id);
  await persistProjectFavorites();
  currentFileId = null;

  if (project.files.length === 0) {
    splitFileId = null;
    setSplitEditorOpen(false);
    currentFileNameEl.textContent = "No LS files found";
    clearEditorState("No LS files found.");
    renderFileList();
  } else {
    const nextFile = project.files[Math.min(deletedIndex, project.files.length - 1)];
    switchFile(nextFile.id);
  }

  projectStatus.textContent = `Moved ${file.name} to LS Files\\Trash as ${trashFileName}.`;
  persistSession();
}

function updateLoadLsFromRobotButton() {
  loadLsFromRobotBtn.hidden = robotOnlineStatus !== "online";
  loadLsFromRobotBtn.disabled = robotLsLoadActive || !project || !getCurrentFile();
}

function updateCopyCurrentPathButton() {
  const file = getCurrentFile();
  copyCurrentPathBtn.disabled = !file;
  if (!file) {
    copyCurrentPathBtn.title = "Select an LS file before copying its path.";
  } else if (project?.projectRootPath) {
    copyCurrentPathBtn.title = `Copy the Mac path for ${file.name}`;
  } else if (project?.pathResolvePending) {
    copyCurrentPathBtn.title = "Robo Programmer is still resolving this project's Mac path.";
  } else {
    copyCurrentPathBtn.title = "Robo Programmer could not resolve this project's full Mac path.";
  }
}

async function copyCurrentLsPath() {
  if (!getCurrentFile()) {
    projectStatus.textContent = "Select an LS file before copying its path.";
    updateCopyCurrentPathButton();
    return;
  }
  let filePath = currentLsFileSystemPath();
  if (!filePath) {
    projectStatus.textContent = "Resolving this project's Mac path...";
    const rootPath = await resolveProjectRootPath(project.name, project.files);
    if (rootPath) {
      project.projectRootPath = rootPath;
      project.pathResolvePending = false;
      cacheProjectRootPath(project.name, rootPath);
      updateCopyCurrentPathButton();
      filePath = currentLsFileSystemPath();
    }
    if (!filePath) {
      projectStatus.textContent = project?.pathResolvePending
        ? "Robo Programmer is still resolving this project's Mac path. Try Copy Path again in a moment."
        : "Robo Programmer could not resolve this project's full Mac path. Open it from its generated launcher, then reconnect the project folder if prompted.";
      return;
    }
  }

  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(filePath);
  } else {
    const textarea = document.createElement("textarea");
    textarea.value = filePath;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.append(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    if (!copied) throw new Error("Clipboard copy was blocked by the browser.");
  }

  projectStatus.textContent = `Copied path: ${filePath}`;
}

async function downloadRobotLsProgram(robotOrigin, remoteName) {
  const response = await fetch("/robot-backup/file", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ robotAddress: robotOrigin, file: remoteName })
  });
  if (!response.ok) {
    const result = await response.json().catch(() => ({}));
    throw new Error(result.error || `Robot file download returned HTTP ${response.status}.`);
  }

  const robotContent = new TextDecoder("utf-8")
    .decode(new Uint8Array(await response.arrayBuffer()))
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n");
  if (!/^\s*\/PROG\s+/im.test(robotContent) || !/^\s*\/END\s*$/im.test(robotContent)) {
    throw new Error(`${remoteName} was downloaded, but it does not contain a complete FANUC LS program.`);
  }
  return robotContent;
}

async function archiveAndReplaceProjectLs(file, robotContent, archiveDate = new Date()) {
  const trashDirectoryHandle = await project.lsDirectoryHandle.getDirectoryHandle("Trash", { create: true });
  const trashFileName = timestampedTrashFileName(file.name, archiveDate);
  await writeTextFile(trashDirectoryHandle, trashFileName, file.content);
  const replacementHandle = await writeTextFile(project.lsDirectoryHandle, file.name, robotContent);
  file.handle = replacementHandle;
  file.content = robotContent;
  file.savedContent = robotContent;
  file.dirty = false;
  tagDisplayPreferences.delete(file.id);
  return trashFileName;
}

async function createProjectLsFromRobot(remoteName, robotContent) {
  const fileName = normalizeLsFileName(remoteName);
  if (!fileName) throw new Error(`Invalid robot LS filename: ${remoteName}`);
  if (project.files.some((file) => file.name.toUpperCase() === fileName)) {
    throw new Error(`${fileName} already exists in this project. Refresh the project file list and try again.`);
  }

  const handle = await writeTextFile(project.lsDirectoryHandle, fileName, robotContent);
  const file = {
    id: fileName,
    name: fileName,
    content: robotContent,
    savedContent: robotContent,
    handle,
    favorite: false,
    dirty: false
  };
  project.files.push(file);
  sortFiles(project.files);
  tagDisplayPreferences.delete(file.id);
  return file;
}

function refreshAfterRobotLsImports(importedFileIds) {
  dismissedDiagnosticKeys = new Set();
  if (importedFileIds.has(currentFileId)) {
    loadCurrentFileIntoEditor();
    currentFileNameEl.textContent = getCurrentFile()?.name || "No file selected";
  }
  if (!splitEditorPane.hidden && importedFileIds.has(splitFileId)) loadSplitFileIntoEditor();
  renderFileList();
  renderSplitFileSelect();
  renderDiagnostics();
  persistSession();
}

async function loadCurrentLsFromRobot() {
  const file = getCurrentFile();
  if (!project || !file) {
    projectStatus.textContent = "Select an LS file before loading it from the robot.";
    return;
  }
  if (!project.lsDirectoryHandle?.getDirectoryHandle) {
    projectStatus.textContent = "Reconnect the project folder before loading from the robot so the current LS file can be archived in Trash.";
    return;
  }

  const robotOrigin = requireOnlineRobot("load an LS file from the robot");
  const shouldReplace = confirm(
    `Replace ${file.name} in this project with the active robot copy?\n\n`
    + `The current project version, including any unsaved editor changes, will first be archived in Trash with a timestamp.\n\n`
    + `This action will then overwrite ${file.name} in LS Files. Continue?`
  );
  if (!shouldReplace) {
    projectStatus.textContent = `Load from Robot cancelled for ${file.name}.`;
    return;
  }

  robotLsLoadActive = true;
  updateLoadLsFromRobotButton();
  updateRobotExportButtons();
  projectStatus.textContent = `Checking for ${file.name} on ${robotOnlineAddress}...`;
  try {
    saveCurrentBuffer();
    saveSplitBuffer();
    const remoteName = file.name.toUpperCase();
    const inventory = await callRobotExportApi("/robot-backup/inventory", { robotAddress: robotOrigin });
    const availableFiles = new Set((inventory.files || []).map((name) => String(name).toUpperCase()));
    if (!availableFiles.has(remoteName)) {
      throw new Error(`${remoteName} does not exist on the online robot.`);
    }

    projectStatus.textContent = `Downloading ${remoteName} from ${robotOnlineAddress}...`;
    const robotContent = await downloadRobotLsProgram(robotOrigin, remoteName);
    const trashFileName = await archiveAndReplaceProjectLs(file, robotContent);
    refreshAfterRobotLsImports(new Set([file.id]));
    projectStatus.textContent = `Loaded ${remoteName} from ${robotOnlineAddress}. The previous project copy was archived as Trash\\${trashFileName}.`;
  } finally {
    robotLsLoadActive = false;
    updateLoadLsFromRobotButton();
    updateRobotExportButtons();
  }
}

function reconnectFileHandles(filesFromDisk) {
  const diskFileMap = new Map(filesFromDisk.map((file) => [file.name.toUpperCase(), file]));

  project.files.forEach((file) => {
    const diskFile = diskFileMap.get(file.name.toUpperCase());
    if (diskFile) file.handle = diskFile.handle;
  });
}

function promptDirtyFileChoice(fileName) {
  refreshPromptMessage.textContent = `${fileName} has unsaved changes. Save those changes before refreshing, or discard them and reload the version currently saved in the project folder.`;
  refreshPrompt.hidden = false;
  refreshPromptSaveBtn.focus();

  return new Promise((resolve) => {
    const finish = (choice) => {
      refreshPrompt.hidden = true;
      refreshPromptSaveBtn.removeEventListener("click", onSave);
      refreshPromptDiscardBtn.removeEventListener("click", onDiscard);
      refreshPromptCancelBtn.removeEventListener("click", onCancel);
      document.removeEventListener("keydown", onKeydown);
      resolve(choice);
    };
    const onSave = () => finish("save");
    const onDiscard = () => finish("discard");
    const onCancel = () => finish("cancel");
    const onKeydown = (event) => {
      if (event.key === "Escape") finish("cancel");
    };

    refreshPromptSaveBtn.addEventListener("click", onSave);
    refreshPromptDiscardBtn.addEventListener("click", onDiscard);
    refreshPromptCancelBtn.addEventListener("click", onCancel);
    document.addEventListener("keydown", onKeydown);
  });
}

async function getLsDirectoryHandle(directoryHandle) {
  try {
    return await directoryHandle.getDirectoryHandle("LS Files");
  } catch {
    return directoryHandle;
  }
}

async function resolveDirtyFilesBeforeRefresh() {
  saveCurrentBuffer();
  const dirtyFiles = project?.files.filter((file) => file.dirty) || [];
  if (dirtyFiles.length === 0) return true;

  for (const file of dirtyFiles) {
    const choice = await promptDirtyFileChoice(file.name);

    if (choice === "cancel") return false;

    if (choice === "discard") {
      file.dirty = false;
      continue;
    }

    const saved = await saveFileToDisk(file);
    if (!saved) {
      projectStatus.textContent = `${file.name} could not be saved. Refresh cancelled.`;
      return false;
    }
  }

  return true;
}

async function refreshProjectFiles() {
  if (!project) return;
  saveSplitBuffer();

  if (!project.directoryHandle) {
    if (!window.showDirectoryPicker) {
      projectStatus.textContent = "This project was restored from browser memory. Use File > Open Project to reconnect the folder before refreshing.";
      return;
    }

    projectStatus.textContent = "Select the project folder to reconnect before refreshing.";
    const directoryHandle = await window.showDirectoryPicker({ mode: "readwrite" });
    const favorites = project.files.filter((file) => file.favorite).map((file) => file.name);
    const { files, lsDirectoryHandle } = await readLsFilesFromDirectory(directoryHandle, favorites);
    project.directoryHandle = directoryHandle;
    project.lsDirectoryHandle = lsDirectoryHandle;
    project.canSave = true;
    reconnectFileHandles(files);
  }

  const canRefresh = await resolveDirtyFilesBeforeRefresh();
  if (!canRefresh) {
    projectStatus.textContent = "Refresh cancelled.";
    renderFileList();
    return;
  }

  const previousFileId = currentFileId;
  const previousSplitFileId = splitFileId;
  const favorites = project.files.filter((file) => file.favorite).map((file) => file.name);
  const { files, lsDirectoryHandle } = await readLsFilesFromDirectory(project.directoryHandle, favorites);
  project.files = files;
  project.lsDirectoryHandle = lsDirectoryHandle;
  currentFileId = null;
  renderFileList();

  if (files.length === 0) {
    currentFileNameEl.textContent = "No LS files found";
    clearEditorState("No LS files found.");
    setSplitEditorOpen(false);
    projectStatus.textContent = "Refreshed. No .LS files were found in LS Files.";
    persistSession();
    return;
  }

  const nextFileId = files.some((file) => file.id === previousFileId)
    ? previousFileId
    : null;
  if (nextFileId) {
    switchFile(nextFileId);
  } else {
    currentFileNameEl.textContent = "No file selected";
    setMainEditorEmptyState("Select an LS file from the Project list to begin editing.");
    clearEditorState("Select an LS file from the Project list.");
    renderFileList();
  }
  if (!splitEditorPane.hidden) {
    splitFileId = files.some((file) => file.id === previousSplitFileId && file.id !== currentFileId)
      ? previousSplitFileId
      : null;
    loadSplitFileIntoEditor();
  }
  projectStatus.textContent = `Refreshed ${files.length} LS file${files.length === 1 ? "" : "s"} from disk.`;
  persistSession();
}

async function openProjectFolder() {
  if (window.showDirectoryPicker) {
    try {
      const directoryHandle = await window.showDirectoryPicker({ mode: "readwrite" });
      await loadProjectFromDirectoryHandle(directoryHandle);
    } catch (error) {
      if (error.name !== "AbortError") {
        showProjectMessage("Unable to open that folder.");
      }
    }
    return;
  }

  folderInput.click();
}

async function importFolderFiles(fileList) {
  const files = Array.from(fileList)
    .filter((file) => file.name.toUpperCase().endsWith(".LS"));

  const importedFiles = await Promise.all(files.map(async (file) => {
    const content = await file.text();
    return {
      id: file.webkitRelativePath || file.name,
      name: file.name,
      content,
      savedContent: content,
      favorite: false,
      dirty: false
    };
  }));

  const firstPath = files[0]?.webkitRelativePath || "";
  const projectName = firstPath.includes("/") ? firstPath.split("/")[0] : "Imported LS Files";

  loadProject({
    name: projectName,
    files: sortFiles(importedFiles),
    canSave: false,
    source: "import"
  });
}

async function createNewProject() {
  if (!window.showDirectoryPicker) {
    projectStatus.textContent = "This browser cannot create project folders. Open the app in Microsoft Edge or Chrome from the launcher, then choose New Project again.";
    return;
  }

  try {
    projectStatus.textContent = "Choose where to create the new project folder.";
    const parentDirectoryHandle = await window.showDirectoryPicker({
      mode: "readwrite"
    });
    const name = prompt("New project name", "New Robot Project");
    if (!name) {
      projectStatus.textContent = "New project cancelled.";
      return;
    }
    const folderName = safeFolderName(name);
    const directoryHandle = await parentDirectoryHandle.getDirectoryHandle(folderName, { create: true });
    const lsDirectoryHandle = await directoryHandle.getDirectoryHandle("LS Files", { create: true });
    await lsDirectoryHandle.getDirectoryHandle("Trash", { create: true });
    const spreadsheetDirectoryHandle = await directoryHandle.getDirectoryHandle("Spreadsheet", { create: true });
    await directoryHandle.getDirectoryHandle("History", { create: true });
    const robotBackupsDirectoryHandle = await directoryHandle.getDirectoryHandle("Robot Backups", { create: true });

    const mainContent = createProgramTemplate("MAIN");
    const mainFileHandle = await writeTextFile(lsDirectoryHandle, "MAIN.LS", mainContent);
    const assignmentFileHandle = await writeAssignmentTemplate(spreadsheetDirectoryHandle);
    let launcherCreated = true;

    try {
      await writeProjectFiles(directoryHandle, name, []);
    } catch {
      launcherCreated = false;
    }

    loadProject({
      name,
      files: [{
        id: "MAIN.LS",
        name: "MAIN.LS",
        content: mainContent,
        savedContent: mainContent,
        handle: mainFileHandle,
        favorite: false,
        dirty: false
      }],
      directoryHandle,
      lsDirectoryHandle,
      spreadsheetDirectoryHandle,
      assignmentFileHandle,
      robotBackupsDirectoryHandle,
      canSave: true,
      source: "folder"
    });
    projectStatus.textContent = launcherCreated
      ? `${name} created in a new folder with LS Files, Trash, Spreadsheet, History, Robot Backups, Data Assignments.xlsx, and a project launcher.`
      : `${name} created in a new folder. The browser blocked the launcher file, but the project folders, Robot Backups, Trash, MAIN.LS, and Data Assignments.xlsx were created.`;
    await saveRecentProject(directoryHandle);
  } catch (error) {
    if (error.name === "AbortError") {
      projectStatus.textContent = "New project folder selection cancelled.";
      return;
    }
    projectStatus.textContent = `Unable to create the project folder structure: ${error.message}`;
  }
}

function closeProject() {
  if (robotBackupActive) {
    alert("A robot backup is currently running. Wait for it to finish before closing the project.");
    return;
  }
  stopRobotPositionLive();
  if (project?.files.some((file) => file.dirty)) {
    const shouldClose = confirm("Close this project? Unsaved browser working-copy changes will be cleared from this session.");
    if (!shouldClose) return;
  }

  popInAssignments();

  project = null;
  currentFileId = null;
  splitFileId = null;
  assignmentWorkbookData = null;
  robotCommentComparison = [];
  robotExportConnected = false;
  robotExportPrograms = [];
  robotExportRemoteFiles = [];
  robotExportAutoCheckedAddress = "";
  robotBackupInventory = [];
  robotBackupConnected = false;
  robotBackupTableWrap.innerHTML = "";
  robotBackupStatus.textContent = "Go Online, then inventory the robot before selecting files to back up.";
  resetRobotPositionDisplay();
  renderRobotExportRequirements();
  tagStateCache = new Map();
  tagDisplayPreferences = new Map();
  activeAssignmentSheet = "";
  editor.value = "";
  splitEditor.value = "";
  lastEditorValue = "";
  lastSplitEditorValue = "";
  setSplitEditorOpen(false);
  currentFileNameEl.textContent = "No file selected";
  projectNameEl.textContent = "No project";
  projectStatus.textContent = "Open or create a robot project to begin.";
  fileListEl.innerHTML = "";
  diagnosticsEl.className = "diagnostics empty";
  diagnosticsEl.textContent = "No checks run yet.";
  setWorkspaceView("editor");
  assignmentSheetTabs.innerHTML = "";
  assignmentTableWrap.innerHTML = "";
  assignmentStatus.textContent = "Open a project to view Data Assignments.xlsx.";
  robotCommentsSummary.textContent = "";
  robotCommentsTableWrap.innerHTML = "";
  resetRobotCommentTypeFilter();
  robotCommentsStatus.textContent = "Go Online before comparing robot comments.";
  setRobotOnlineActionState(pushRobotCommentsBtn, true);
  updateAssignmentPathDisplay();
  clearActiveSessionSnapshot();
  renderHighlight();
  updateCursorStatus();
  renderRecentProjects();
  updateProjectActionVisibility();
}

function loadProject(nextProject) {
  project = nextProject;
  project.files.forEach((file) => {
    file.favorite = Boolean(file.favorite);
  });
  sortFiles(project.files);
  tagStateCache = loadStoredTagStates(nextProject.name);
  tagDisplayPreferences = new Map();
  (nextProject.tagStates || []).forEach(([key, state]) => tagStateCache.set(key, state));
  currentFileId = null;
  splitFileId = null;
  assignmentWorkbookData = null;
  robotCommentComparison = [];
  robotBackupInventory = [];
  robotBackupConnected = false;
  robotExportAutoCheckedAddress = "";
  robotBackupTableWrap.innerHTML = "";
  robotBackupStatus.textContent = "Go Online, then inventory the robot before selecting files to back up.";
  robotAddressInput.value = project.robotAddress || "";
  robotExportAddressInput.value = project.robotAddress || "";
  robotBackupAddressInput.value = project.robotAddress || "";
  robotPositionAddressInput.value = project.robotAddress || "";
  if (project.robotAddress && robotOnlineStatus !== "online") {
    robotOnlineAddress = project.robotAddress;
    setRobotOnlineUi(robotOnlineStatus, `Robot: ${robotOnlineAddress}`);
  }
  resetRobotPositionDisplay();
  robotCommentsSummary.textContent = "";
  robotCommentsTableWrap.innerHTML = "";
  resetRobotCommentTypeFilter();
  robotCommentsStatus.textContent = "Go Online before comparing robot comments.";
  setRobotOnlineActionState(pushRobotCommentsBtn, true);
  setSplitEditorOpen(false);
  startScreen.hidden = true;
  activeWorkspaceView = "editor";
  setWorkspaceView("editor");
  updateProjectActionVisibility();
  updateAssignmentPathDisplay();
  projectNameEl.textContent = project.name;
  projectStatus.textContent = project.canSave
    ? `${project.name} is open. Changes can be saved back to the selected folder.`
    : `${project.name} is open. Imported files stay in the browser unless exported later.`;
  renderFileList();

  if (project.files.length > 0) {
    currentFileNameEl.textContent = "No file selected";
    setMainEditorEmptyState("Select an LS file from the Project list to begin editing.");
    clearEditorState("Select an LS file from the Project list.");
  } else {
    currentFileNameEl.textContent = "No LS files found";
    setMainEditorEmptyState("No LS files were found in this project.");
    clearEditorState("No LS files found.");
    showProjectMessage("No .LS files were found in this project folder.");
  }
  persistSession();
  primeAssignmentWorkbookData(nextProject).catch(() => {});
  if (robotOnlineStatus === "online") {
    runRobotExportAutoCheck().catch(() => {});
  }
}

function sortFiles(files) {
  return files.sort((a, b) => (
    Number(Boolean(b.favorite)) - Number(Boolean(a.favorite))
    || a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: "base" })
  ));
}

function buildSessionSnapshot() {
  if (!project) return null;
  saveCurrentBuffer();
  saveSplitBuffer();
  persistTagStates();
  return {
    version: 2,
    project: {
      name: project.name,
      source: "session",
      canSave: false,
      projectSessionKey: projectSessionKey(project.name),
      robotAddress: project.robotAddress || "",
      files: project.files.map((file) => ({
        id: file.id,
        name: file.name,
        content: file.content,
        savedContent: file.savedContent,
        favorite: Boolean(file.favorite),
        dirty: file.dirty
      })),
      tagStates: Array.from(tagStateCache.entries())
    },
    currentFileId,
    splitFileId,
    splitEditorOpen: !splitEditorPane.hidden,
    headerVisible,
    footerVisible,
    splitHeaderVisible,
    splitFooterVisible,
    savedAt: new Date().toISOString()
  };
}

async function clearActiveSessionSnapshot() {
  try {
    await withSessionSnapshotsStore("readwrite", (store) => store.delete(activeSessionPointerKey));
  } catch {
  }
  localStorage.removeItem(activeSessionKey);
  localStorage.removeItem(sessionKey);
}

async function persistSession() {
  if (sessionPersistTimer) {
    clearTimeout(sessionPersistTimer);
    sessionPersistTimer = null;
  }

  if (!project) {
    await clearActiveSessionSnapshot();
    return;
  }

  const snapshot = buildSessionSnapshot();
  const key = sessionSnapshotKey(project.name);
  try {
    await withSessionSnapshotsStore("readwrite", (store) => {
      store.put({ key, snapshot, savedAt: snapshot.savedAt });
      store.put({ key: activeSessionPointerKey, projectKey: key, savedAt: snapshot.savedAt });
    });
    localStorage.removeItem(activeSessionKey);
    localStorage.removeItem(sessionKey);
    projectSessionKeys(project.name).forEach((legacyKey) => localStorage.removeItem(legacyKey));
  } catch {
    projectStatus.textContent = "Automatic session recovery could not be saved. Save important changes to disk.";
  }
}

function scheduleSessionPersist() {
  if (sessionPersistTimer) clearTimeout(sessionPersistTimer);
  sessionPersistTimer = setTimeout(() => {
    persistSession().catch(() => {
      projectStatus.textContent = "Automatic session recovery could not be saved. Save important changes to disk.";
    });
  }, 400);
}

async function readIndexedDbSessionSnapshot(projectName) {
  try {
    return await withSessionSnapshotsStore("readonly", async (store) => {
      let key = projectName ? sessionSnapshotKey(projectName) : null;
      if (!key) {
        const pointer = await requestToPromise(store.get(activeSessionPointerKey));
        key = pointer?.projectKey;
      }
      if (!key) return null;
      return (await requestToPromise(store.get(key)))?.snapshot || null;
    });
  } catch {
    return null;
  }
}

function readLegacySessionSnapshot(projectName) {
  const raw = projectName
    ? projectSessionKeys(projectName).map((key) => localStorage.getItem(key)).find(Boolean)
    : localStorage.getItem(activeSessionKey) || localStorage.getItem(sessionKey);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

async function restoreSession() {
  const projectName = requestedProjectName();
  const snapshot = await readIndexedDbSessionSnapshot(projectName) || readLegacySessionSnapshot(projectName);
  if (!snapshot) return false;

  try {
    if (!snapshot?.project?.files?.length) return false;

    headerVisible = Boolean(snapshot.headerVisible);
    footerVisible = Boolean(snapshot.footerVisible);
    splitHeaderVisible = Boolean(snapshot.splitHeaderVisible);
    splitFooterVisible = Boolean(snapshot.splitFooterVisible);
    updateHeaderToggle();
    updateSplitHeaderToggle();
    loadProject({
      ...snapshot.project,
      currentFileId: snapshot.currentFileId,
      splitFileId: snapshot.splitFileId,
      splitEditorOpen: Boolean(snapshot.splitEditorOpen),
      files: snapshot.project.files.map((file) => ({
        ...file,
        savedContent: typeof file.savedContent === "string"
          ? file.savedContent
          : file.dirty ? "" : file.content,
        favorite: Boolean(file.favorite),
        dirty: Boolean(file.dirty)
      }))
    });
    projectStatus.textContent = `Restored ${snapshot.project.name} from your last session.`;
    persistSession();
    return true;
  } catch {
    await clearActiveSessionSnapshot();
    return false;
  }
}

function splitFileSections(source) {
  const normalized = source.replace(/\r\n/g, "\n");
  const lines = normalized.split("\n");
  const mnIndex = lines.findIndex((line) => /^\/MN\b/i.test(line.trim()));
  const numberedBodyIndex = lines.findIndex((line) => /^\s*1:\s*/.test(line));
  const bodyIndex = mnIndex >= 0 ? mnIndex + 1 : numberedBodyIndex;
  const endIndex = lines.findIndex((line) => /^\/END\b/i.test(line.trim()));
  const searchStart = bodyIndex >= 0 ? bodyIndex : 0;
  const posIndex = lines.findIndex((line, index) => index >= searchStart && /^\/POS\b/i.test(line.trim()));
  const legacyFooterIndex = endIndex >= 0 && endIndex < lines.length - 1 ? endIndex + 1 : -1;
  const footerIndex = posIndex >= 0 ? posIndex : legacyFooterIndex;
  const footer = footerIndex >= 0 ? lines.slice(footerIndex).join("\n") : "";

  if (bodyIndex < 0) {
    const bodyEnd = footerIndex >= 0 ? footerIndex : lines.length;
    return { header: "", body: lines.slice(0, bodyEnd).join("\n"), footer };
  }

  const bodyEnd = footerIndex >= bodyIndex ? footerIndex : lines.length;

  return {
    header: bodyIndex > 0 ? `${lines.slice(0, bodyIndex).join("\n")}\n` : "",
    body: lines.slice(bodyIndex, bodyEnd).join("\n"),
    footer
  };
}

function getVisibleContent(source, showHeader = headerVisible, showFooter = footerVisible) {
  const sections = splitFileSections(source);
  const header = showHeader ? sections.header : "";
  const footer = showFooter && sections.footer ? `\n${sections.footer}` : "";
  return `${header}${sections.body}${footer}`;
}

function mergeVisibleContent(source, visibleContent, showHeader = headerVisible, showFooter = footerVisible) {
  const originalSections = splitFileSections(source);
  const visibleSections = splitFileSections(visibleContent);
  const header = showHeader ? visibleSections.header : originalSections.header;
  const footer = showFooter ? visibleSections.footer : originalSections.footer;
  return `${header}${visibleSections.body}${footer ? `\n${footer}` : ""}`;
}

function assignmentKey(type, index) {
  return `${type.toUpperCase()}:${Number(index)}`;
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function columnNumber(column) {
  return column.split("").reduce((total, letter) => total * 26 + letter.charCodeAt(0) - 64, 0);
}

function cellColumn(cellRef) {
  return cellRef.replace(/\d+/g, "");
}

function cellRow(cellRef) {
  return Number(cellRef.replace(/\D+/g, ""));
}

function crc32(bytes) {
  if (!crc32.table) {
    crc32.table = Array.from({ length: 256 }, (_, index) => {
      let value = index;
      for (let bit = 0; bit < 8; bit += 1) {
        value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
      }
      return value >>> 0;
    });
  }

  let crc = 0xffffffff;
  for (const byte of bytes) {
    crc = crc32.table[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function getUint16(view, offset) {
  return view.getUint16(offset, true);
}

function getUint32(view, offset) {
  return view.getUint32(offset, true);
}

function setUint16(target, offset, value) {
  target[offset] = value & 0xff;
  target[offset + 1] = (value >>> 8) & 0xff;
}

function setUint32(target, offset, value) {
  target[offset] = value & 0xff;
  target[offset + 1] = (value >>> 8) & 0xff;
  target[offset + 2] = (value >>> 16) & 0xff;
  target[offset + 3] = (value >>> 24) & 0xff;
}

async function inflateRaw(bytes) {
  if (!window.DecompressionStream) throw new Error("This browser cannot read compressed XLSX files.");
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

async function readZipEntries(buffer) {
  const bytes = new Uint8Array(buffer);
  const view = new DataView(bytes.buffer);
  let eocdOffset = -1;

  for (let offset = bytes.length - 22; offset >= Math.max(0, bytes.length - 66000); offset -= 1) {
    if (getUint32(view, offset) === 0x06054b50) {
      eocdOffset = offset;
      break;
    }
  }

  if (eocdOffset < 0) throw new Error("Invalid XLSX zip.");

  const entryCount = getUint16(view, eocdOffset + 10);
  let centralOffset = getUint32(view, eocdOffset + 16);
  const decoder = new TextDecoder();
  const entries = new Map();

  for (let entryIndex = 0; entryIndex < entryCount; entryIndex += 1) {
    if (getUint32(view, centralOffset) !== 0x02014b50) throw new Error("Invalid XLSX central directory.");

    const method = getUint16(view, centralOffset + 10);
    const compressedSize = getUint32(view, centralOffset + 20);
    const uncompressedSize = getUint32(view, centralOffset + 24);
    const nameLength = getUint16(view, centralOffset + 28);
    const extraLength = getUint16(view, centralOffset + 30);
    const commentLength = getUint16(view, centralOffset + 32);
    const localOffset = getUint32(view, centralOffset + 42);
    const name = decoder.decode(bytes.slice(centralOffset + 46, centralOffset + 46 + nameLength));

    const localNameLength = getUint16(view, localOffset + 26);
    const localExtraLength = getUint16(view, localOffset + 28);
    const dataOffset = localOffset + 30 + localNameLength + localExtraLength;
    const compressed = bytes.slice(dataOffset, dataOffset + compressedSize);
    let data;

    if (method === 0) {
      data = compressed;
    } else if (method === 8) {
      data = await inflateRaw(compressed);
    } else {
      throw new Error(`Unsupported XLSX compression method ${method}.`);
    }

    if (uncompressedSize && data.length !== uncompressedSize) {
      data = data.slice(0, uncompressedSize);
    }

    entries.set(name, data);
    centralOffset += 46 + nameLength + extraLength + commentLength;
  }

  return entries;
}

function writeZipEntries(entries) {
  const encoder = new TextEncoder();
  const localParts = [];
  const centralParts = [];
  let offset = 0;

  for (const [name, data] of entries) {
    const nameBytes = encoder.encode(name);
    const fileBytes = data instanceof Uint8Array ? data : encoder.encode(String(data));
    const crc = crc32(fileBytes);
    const local = new Uint8Array(30 + nameBytes.length + fileBytes.length);

    setUint32(local, 0, 0x04034b50);
    setUint16(local, 4, 20);
    setUint16(local, 6, 0);
    setUint16(local, 8, 0);
    setUint32(local, 14, crc);
    setUint32(local, 18, fileBytes.length);
    setUint32(local, 22, fileBytes.length);
    setUint16(local, 26, nameBytes.length);
    local.set(nameBytes, 30);
    local.set(fileBytes, 30 + nameBytes.length);
    localParts.push(local);

    const central = new Uint8Array(46 + nameBytes.length);
    setUint32(central, 0, 0x02014b50);
    setUint16(central, 4, 20);
    setUint16(central, 6, 20);
    setUint16(central, 10, 0);
    setUint32(central, 16, crc);
    setUint32(central, 20, fileBytes.length);
    setUint32(central, 24, fileBytes.length);
    setUint16(central, 28, nameBytes.length);
    setUint32(central, 42, offset);
    central.set(nameBytes, 46);
    centralParts.push(central);

    offset += local.length;
  }

  const centralOffset = offset;
  const centralSize = centralParts.reduce((total, part) => total + part.length, 0);
  const end = new Uint8Array(22);
  setUint32(end, 0, 0x06054b50);
  setUint16(end, 8, entries.size);
  setUint16(end, 10, entries.size);
  setUint32(end, 12, centralSize);
  setUint32(end, 16, centralOffset);

  const output = new Uint8Array(centralOffset + centralSize + end.length);
  let cursor = 0;
  [...localParts, ...centralParts, end].forEach((part) => {
    output.set(part, cursor);
    cursor += part.length;
  });
  return output;
}

function parseXmlDocument(text) {
  return new DOMParser().parseFromString(text, "application/xml");
}

function serializeXmlDocument(doc) {
  return new XMLSerializer().serializeToString(doc);
}

function sheetTargetsFromWorkbook(entries) {
  const decoder = new TextDecoder();
  const workbook = parseXmlDocument(decoder.decode(entries.get("xl/workbook.xml")));
  const rels = parseXmlDocument(decoder.decode(entries.get("xl/_rels/workbook.xml.rels")));
  const relMap = new Map(Array.from(rels.querySelectorAll("Relationship")).map((rel) => [
    rel.getAttribute("Id"),
    rel.getAttribute("Target")
  ]));
  const sheetMap = new Map();

  workbook.querySelectorAll("sheet").forEach((sheet) => {
    const name = sheet.getAttribute("name");
    const relId = sheet.getAttribute("r:id");
    const target = relMap.get(relId);
    if (name && target) {
      sheetMap.set(name, `xl/${target.replace(/^\/?xl\//, "")}`);
    }
  });

  return sheetMap;
}

function sharedStringsFromWorkbook(entries) {
  const shared = entries.get("xl/sharedStrings.xml");
  if (!shared) return [];
  const doc = parseXmlDocument(new TextDecoder().decode(shared));
  return Array.from(doc.querySelectorAll("si")).map((item) => (
    Array.from(item.querySelectorAll("t")).map((node) => node.textContent || "").join("")
  ));
}

function cellText(cell, sharedStrings) {
  if (!cell) return "";
  const type = cell.getAttribute("t");
  if (type === "s") {
    const index = Number(cell.querySelector("v")?.textContent || 0);
    return sharedStrings[index] || "";
  }
  if (type === "inlineStr") {
    return Array.from(cell.querySelectorAll("t")).map((node) => node.textContent || "").join("");
  }
  return cell.querySelector("v")?.textContent || "";
}

function worksheetCellMap(sheetDoc) {
  const cells = new Map();
  sheetDoc.querySelectorAll("c").forEach((cell) => {
    const ref = cell.getAttribute("r");
    if (ref) cells.set(ref, cell);
  });
  return cells;
}

function createWorksheetElement(sheetDoc, tagName) {
  return sheetDoc.createElementNS(sheetDoc.documentElement.namespaceURI, tagName);
}

function ensureWorksheetRow(sheetDoc, rowNumber) {
  const sheetData = sheetDoc.querySelector("sheetData");
  let row = sheetData.querySelector(`row[r="${rowNumber}"]`);
  if (row) return row;

  row = createWorksheetElement(sheetDoc, "row");
  row.setAttribute("r", String(rowNumber));
  const rows = Array.from(sheetData.querySelectorAll("row"));
  const nextRow = rows.find((candidate) => Number(candidate.getAttribute("r")) > rowNumber);
  sheetData.insertBefore(row, nextRow || null);
  return row;
}

function setInlineCellValue(sheetDoc, rowNumber, column, value) {
  const ref = `${column}${rowNumber}`;
  const row = ensureWorksheetRow(sheetDoc, rowNumber);
  let cell = row.querySelector(`c[r="${ref}"]`);

  if (cell && cell.namespaceURI !== sheetDoc.documentElement.namespaceURI) {
    cell.remove();
    cell = null;
  }

  if (!cell) {
    cell = createWorksheetElement(sheetDoc, "c");
    cell.setAttribute("r", ref);
    const columnOrder = columnNumber(column);
    const nextCell = Array.from(row.querySelectorAll("c")).find((candidate) => columnNumber(cellColumn(candidate.getAttribute("r"))) > columnOrder);
    row.insertBefore(cell, nextCell || null);
  }

  while (cell.firstChild) cell.removeChild(cell.firstChild);
  cell.setAttribute("t", "inlineStr");
  const inline = createWorksheetElement(sheetDoc, "is");
  const text = createWorksheetElement(sheetDoc, "t");
  text.textContent = value;
  inline.append(text);
  cell.append(inline);
}

async function readAssignmentWorkbook(bytes) {
  const entries = await readZipEntries(bytes.buffer || bytes);
  const decoder = new TextDecoder();
  const sheetTargets = sheetTargetsFromWorkbook(entries);
  const sharedStrings = sharedStringsFromWorkbook(entries);
  const assignments = new Map();
  const assignmentCells = new Map();
  const sheetDocs = new Map();

  for (const range of assignmentRanges) {
    const target = sheetTargets.get(range.sheet);
    if (!target || !entries.has(target)) continue;
    const sheetDoc = sheetDocs.get(target) || parseXmlDocument(decoder.decode(entries.get(target)));
    sheetDocs.set(target, sheetDoc);
    const cells = worksheetCellMap(sheetDoc);

    sheetDoc.querySelectorAll("row").forEach((row) => {
      const rowNumber = Number(row.getAttribute("r"));
      if (rowNumber < 4) return;
      const indexText = cellText(cells.get(`${range.indexCol}${rowNumber}`), sharedStrings).trim();
      const index = Number.parseInt(indexText, 10);
      if (!Number.isFinite(index)) return;
      const description = cleanAssignmentName(cellText(cells.get(`${range.descCol}${rowNumber}`), sharedStrings));
      assignmentCells.set(assignmentKey(range.type, index), {
        type: range.type,
        index,
        description,
        sheet: range.sheet,
        target,
        rowNumber,
        descCol: range.descCol
      });
      if (description) assignments.set(assignmentKey(range.type, index), description);
    });
  }

  return { entries, sheetTargets, sheetDocs, sharedStrings, assignments, assignmentCells };
}

function writeAssignmentWorkbook(workbookData, assignments) {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  for (const range of assignmentRanges) {
    const target = workbookData.sheetTargets.get(range.sheet);
    if (!target || !workbookData.entries.has(target)) continue;
    const sheetDoc = workbookData.sheetDocs.get(target) || parseXmlDocument(decoder.decode(workbookData.entries.get(target)));
    workbookData.sheetDocs.set(target, sheetDoc);
    const cells = worksheetCellMap(sheetDoc);

    sheetDoc.querySelectorAll("row").forEach((row) => {
      const rowNumber = Number(row.getAttribute("r"));
      if (rowNumber < 4) return;
      const indexText = cellText(cells.get(`${range.indexCol}${rowNumber}`), workbookData.sharedStrings || []).trim();
      const index = Number.parseInt(indexText, 10);
      if (!Number.isFinite(index)) return;
      const key = assignmentKey(range.type, index);
      if (!assignments.has(key)) return;
      setInlineCellValue(sheetDoc, rowNumber, range.descCol, assignments.get(key) || "");
    });

    workbookData.entries.set(target, encoder.encode(serializeXmlDocument(sheetDoc)));
  }

  return writeZipEntries(workbookData.entries);
}

function cleanAssignmentName(name) {
  return stripAssignmentExportPrefix(name)
    .replace(/[\]\r\n]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 32);
}

function isAssignmentExportPrefix(value) {
  const normalized = String(value || "").trim();
  return /^(?:ON|OFF)$/i.test(normalized) || /^[-+]?\d+(?:\.\d+)?$/.test(normalized);
}

function stripAssignmentExportPrefix(name) {
  const parts = String(name || "").split(":").map((part) => part.trim());
  while (parts.length && isAssignmentExportPrefix(parts[0])) {
    parts.shift();
  }

  return parts.join(":");
}

function lsReferenceName(type, extra) {
  return cleanAssignmentName(extra);
}

function parseLsReferenceExtra(extra) {
  const parts = String(extra || "").split(":").map((part) => part.trim());
  const state = parts.length && isAssignmentExportPrefix(parts[0]) ? parts.shift() : "";
  return {
    state,
    comment: cleanAssignmentName(parts.join(":"))
  };
}

function formatLsReferenceParts(type, index, state, comment) {
  const upperType = type.toUpperCase();
  const cleanedState = String(state || "").trim();
  const cleanedComment = cleanAssignmentName(comment);
  if (cleanedState && cleanedComment) return `${upperType}[${index}:${cleanedState}:${cleanedComment}]`;
  if (cleanedState) return `${upperType}[${index}:${cleanedState}]`;
  if (cleanedComment) return `${upperType}[${index}:${cleanedComment}]`;
  return `${upperType}[${index}]`;
}

function formatLsReference(type, index, extra, assignment) {
  const { state } = parseLsReferenceExtra(extra);
  return formatLsReferenceParts(type, index, state, assignment);
}

function extractAssignmentsFromLs(content) {
  const assignments = new Map();
  const pattern = /\b(DI|DO|AI|AO|GI|GO|RI|RO|UI|UO|SI|SO|PR|SR|R|F|TIMER)\[(\d+)(?::([^\]\r\n]+))?\]/gi;
  let match;

  while ((match = pattern.exec(content)) !== null) {
    const type = match[1].toUpperCase();
    const index = Number(match[2]);
    const name = lsReferenceName(type, match[3] || "");
    if (name) assignments.set(assignmentKey(type, index), name);
  }

  return assignments;
}

function applyAssignmentsToLs(content, assignments) {
  const pattern = /\b(DI|DO|AI|AO|GI|GO|RI|RO|UI|UO|SI|SO|PR|SR|R|F|TIMER)\[(\d+)(?::([^\]\r\n]+))?\]/gi;
  return content.replace(pattern, (fullMatch, rawType, rawIndex, rawExtra = "") => {
    const type = rawType.toUpperCase();
    const index = Number(rawIndex);
    const key = assignmentKey(type, index);
    if (!assignments.has(key)) return fullMatch;
    const assignment = cleanAssignmentName(assignments.get(key) || "");
    return formatLsReference(type, index, rawExtra, assignment);
  });
}

function transformLsTagDisplay(content, assignments, showComments, showState, stateScope = "") {
  const pattern = /\b(DI|DO|AI|AO|GI|GO|RI|RO|UI|UO|SI|SO|PR|SR|R|F|TIMER)\[(\d+)(?::([^\]\r\n]+))?\]/gi;
  return content.replace(pattern, (fullMatch, rawType, rawIndex, rawExtra = "") => {
    const type = rawType.toUpperCase();
    const index = Number(rawIndex);
    const key = assignmentKey(type, index);
    const stateKey = `${stateScope}|${key}`;
    const parsed = parseLsReferenceExtra(rawExtra);
    if (parsed.state) tagStateCache.set(stateKey, parsed.state);
    const state = showState ? parsed.state || tagStateCache.get(stateKey) || "" : "";
    const comment = showComments ? assignments.get(key) || parsed.comment : "";
    return formatLsReferenceParts(type, index, state, comment);
  });
}

function tagDisplayPreference(lsFile) {
  if (!lsFile) return null;
  if (!tagDisplayPreferences.has(lsFile.id)) {
    tagDisplayPreferences.set(lsFile.id, {
      assignments: new Map([
        ...extractAssignmentsFromLs(lsFile.content),
        ...(assignmentWorkbookData?.assignments || [])
      ]),
      commentsVisible: true,
      statesVisible: false
    });
  }
  return tagDisplayPreferences.get(lsFile.id);
}

function displayedFileContent(lsFile, showHeader = headerVisible, showFooter = footerVisible) {
  if (!lsFile) return "";
  const preference = tagDisplayPreference(lsFile);
  const displayContent = transformLsTagDisplay(
    lsFile.content,
    preference.assignments,
    preference.commentsVisible,
    preference.statesVisible,
    lsFile.id
  );
  return getVisibleContent(displayContent, showHeader, showFooter);
}

function addAssignmentCommentToCompletedReference(textarea, lsFile) {
  if (!lsFile || textarea.selectionStart !== textarea.selectionEnd) return false;
  const preference = tagDisplayPreference(lsFile);
  if (!preference.commentsVisible) return false;

  const caret = textarea.selectionStart;
  const lineStart = textarea.value.lastIndexOf("\n", caret - 1) + 1;
  const nextLineBreak = textarea.value.indexOf("\n", caret);
  const lineEnd = nextLineBreak >= 0 ? nextLineBreak : textarea.value.length;
  const lineBeforeCaret = textarea.value.slice(lineStart, caret);
  const lineAfterCaret = textarea.value.slice(caret, lineEnd);
  const openReference = lineBeforeCaret.match(/\b(DI|DO|AI|AO|GI|GO|RI|RO|UI|UO|SI|SO|PR|SR|R|F|TIMER)\[(\d+)$/i);
  const existingTail = lineAfterCaret.match(/^((?::[^\]\r\n]*)?)\]/);

  if (openReference && existingTail) {
    const type = openReference[1].toUpperCase();
    const indexText = openReference[2];
    const key = assignmentKey(type, Number(indexText));
    const existingExtra = existingTail[1].replace(/^:/, "");
    const parsed = parseLsReferenceExtra(existingExtra);
    const comment = cleanAssignmentName(
      preference.assignments.get(key) || assignmentWorkbookData?.assignments.get(key) || ""
    );
    if (!comment && !parsed.comment) return false;

    if (comment) preference.assignments.set(key, comment);
    const replacement = formatLsReferenceParts(type, indexText, parsed.state, comment);
    const referenceStart = caret - openReference[0].length;
    const referenceEnd = caret + existingTail[0].length;
    if (textarea.value.slice(referenceStart, referenceEnd) === replacement) return false;

    textarea.value = `${textarea.value.slice(0, referenceStart)}${replacement}${textarea.value.slice(referenceEnd)}`;
    const nextCaret = referenceStart + `${type}[${indexText}`.length;
    textarea.setSelectionRange(nextCaret, nextCaret);
    return true;
  }

  if (caret < 1 || textarea.value[caret - 1] !== "]") return false;
  const match = lineBeforeCaret.match(/\b(DI|DO|AI|AO|GI|GO|RI|RO|UI|UO|SI|SO|PR|SR|R|F|TIMER)\[(\d+)\]$/i);
  if (!match) return false;

  const type = match[1].toUpperCase();
  const index = Number(match[2]);
  const key = assignmentKey(type, index);
  const comment = cleanAssignmentName(
    preference.assignments.get(key) || assignmentWorkbookData?.assignments.get(key) || ""
  );
  if (!comment) return false;

  preference.assignments.set(key, comment);
  const replacement = formatLsReferenceParts(type, index, "", comment);
  const referenceStart = caret - match[0].length;
  textarea.value = `${textarea.value.slice(0, referenceStart)}${replacement}${textarea.value.slice(caret)}`;
  const nextCaret = referenceStart + replacement.length;
  textarea.setSelectionRange(nextCaret, nextCaret);
  return true;
}

function restoreSourceTagDisplay(source, displayedContent, previousDisplayedContent = "") {
  const sourceTags = new Map();
  const previousDisplayedTags = new Map();
  const pattern = /\b(DI|DO|AI|AO|GI|GO|RI|RO|UI|UO|SI|SO|PR|SR|R|F|TIMER)\[(\d+)(?::([^\]\r\n]+))?\]/gi;
  let match;

  while ((match = pattern.exec(source)) !== null) {
    const key = assignmentKey(match[1], Number(match[2]));
    if (!sourceTags.has(key)) sourceTags.set(key, []);
    sourceTags.get(key).push(parseLsReferenceExtra(match[3] || ""));
  }

  while ((match = pattern.exec(previousDisplayedContent || "")) !== null) {
    const key = assignmentKey(match[1], Number(match[2]));
    if (!previousDisplayedTags.has(key)) previousDisplayedTags.set(key, []);
    previousDisplayedTags.get(key).push(parseLsReferenceExtra(match[3] || ""));
  }

  const occurrence = new Map();
  return displayedContent.replace(pattern, (fullMatch, rawType, rawIndex, rawExtra = "") => {
    const type = rawType.toUpperCase();
    const index = Number(rawIndex);
    const key = assignmentKey(type, index);
    const position = occurrence.get(key) || 0;
    occurrence.set(key, position + 1);
    const sourceTag = sourceTags.get(key)?.[position];
    const previousTag = previousDisplayedTags.get(key)?.[position];
    if (!sourceTag) return fullMatch;
    if (!previousTag) return formatLsReferenceParts(type, index, sourceTag.state, sourceTag.comment);

    const displayedTag = parseLsReferenceExtra(rawExtra);
    const state = displayedTag.state !== previousTag.state ? displayedTag.state : sourceTag.state;
    const comment = displayedTag.comment !== previousTag.comment ? displayedTag.comment : sourceTag.comment;
    return formatLsReferenceParts(type, index, state, comment);
  });
}

function mergeDisplayedContent(source, displayedContent, showHeader = headerVisible, showFooter = footerVisible, previousDisplayedContent = "") {
  return restoreSourceTagDisplay(source, mergeVisibleContent(source, displayedContent, showHeader, showFooter), previousDisplayedContent);
}

function updateTagDisplayPreferenceAssignment(lsFile, key, description) {
  const preference = tagDisplayPreference(lsFile);
  const cleaned = cleanAssignmentName(description);
  if (cleaned) preference.assignments.set(key, cleaned);
  else preference.assignments.delete(key);
}

function updateTagDisplayPreferenceAssignments(lsFile, assignments) {
  const preference = tagDisplayPreferences.get(lsFile.id);
  if (!preference) return;
  preference.assignments = new Map(assignments);
}

function refreshEditorAfterTagToggle(state) {
  state.textarea.value = state.name === "split"
    ? displayedFileContent(state.file, splitHeaderVisible, splitFooterVisible)
    : displayedFileContent(state.file);
  if (state.name === "main") {
    refreshEditor();
  } else {
    renderSplitHighlight();
    updateSplitCursorStatus();
  }
  renderFileList();
  renderSplitFileSelect();
  persistSession();
}

function applyTagDisplayToggle(state, assignments, showComments, showState) {
  tagDisplayPreferences.set(state.file.id, {
    assignments: new Map(assignments),
    commentsVisible: showComments,
    statesVisible: showState
  });
  refreshEditorAfterTagToggle(state);
  return true;
}

async function primeAssignmentWorkbookData(projectToLoad = project) {
  const assignmentFileHandle = projectToLoad?.assignmentFileHandle;
  if (!assignmentFileHandle) return null;
  const file = await assignmentFileHandle.getFile();
  const workbookData = await readAssignmentWorkbook(new Uint8Array(await file.arrayBuffer()));
  if (project !== projectToLoad) return null;

  assignmentWorkbookData = workbookData;
  tagDisplayPreferences.forEach((preference) => {
    preference.assignments = new Map([
      ...preference.assignments,
      ...workbookData.assignments
    ]);
  });
  const currentFile = getCurrentFile();
  if (currentFile && tagDisplayPreferences.has(currentFile.id)) {
    refreshEditorAfterAssignmentChange(editor, currentFile, headerVisible, footerVisible, true);
  }
  const splitFile = getSplitFile();
  if (!splitEditorPane.hidden && splitFile && tagDisplayPreferences.has(splitFile.id)) {
    refreshEditorAfterAssignmentChange(splitEditor, splitFile, splitHeaderVisible, splitFooterVisible, false);
  }
  return workbookData;
}

async function loadAssignmentsAndBackfillFromLs(lsFile) {
  const assignmentFileHandle = await ensureAssignmentFileHandle();
  if (!assignmentFileHandle) throw new Error("No Data Assignments.xlsx workbook is connected for this project.");

  const file = await assignmentFileHandle.getFile();
  const workbookData = await readAssignmentWorkbook(new Uint8Array(await file.arrayBuffer()));
  const assignments = new Map(workbookData.assignments);
  let backfilledCount = 0;

  extractAssignmentsFromLs(lsFile.content).forEach((name, key) => {
    const cell = workbookData.assignmentCells.get(key);
    if (!cell || assignments.has(key)) return;
    assignments.set(key, name);
    backfilledCount += 1;
  });

  if (backfilledCount) {
    const writable = await assignmentFileHandle.createWritable();
    await writable.write(writeAssignmentWorkbook(workbookData, assignments));
    await writable.close();
  }

  workbookData.assignments = new Map(assignments);
  assignmentWorkbookData = workbookData;

  return { assignments, backfilledCount };
}

async function toggleTagComments() {
  saveCurrentBuffer();
  saveSplitBuffer();
  const state = activeEditorState();
  if (!activeEditorCanEdit(state)) return;
  const { commentsVisible, statesVisible } = tagDisplayPreference(state.file);
  const { assignments, backfilledCount } = await loadAssignmentsAndBackfillFromLs(state.file);
  const showComments = !commentsVisible;
  applyTagDisplayToggle(state, assignments, showComments, statesVisible);
  projectStatus.textContent = `${showComments ? "Shown" : "Hidden"} tag comments in ${state.file.name}; backfilled ${backfilledCount} blank spreadsheet description${backfilledCount === 1 ? "" : "s"}.`;
}

function toggleTagState() {
  saveCurrentBuffer();
  saveSplitBuffer();
  const state = activeEditorState();
  if (!activeEditorCanEdit(state)) return;
  const preference = tagDisplayPreference(state.file);
  const { commentsVisible, statesVisible } = preference;
  const showState = !statesVisible;
  applyTagDisplayToggle(state, preference.assignments, commentsVisible, showState);
  projectStatus.textContent = `${showState ? "Shown" : "Hidden"} tag state in ${state.file.name}.`;
}

async function ensureAssignmentFileHandle() {
  if (project?.assignmentFileHandle) return project.assignmentFileHandle;
  if (!project || !window.showDirectoryPicker) return null;

  projectStatus.textContent = "Select the project folder to reconnect the Spreadsheet folder.";
  const directoryHandle = await window.showDirectoryPicker({ mode: "readwrite" });
  await attachSpreadsheetHandle(project, directoryHandle, true);
  project.directoryHandle = directoryHandle;
  try {
    project.lsDirectoryHandle = await getLsDirectoryHandle(directoryHandle);
  } catch {
  }
  updateAssignmentPathDisplay();
  return project.assignmentFileHandle || null;
}

function assignmentSpreadsheetPath() {
  if (!project) return "No project open";
  if (!project.assignmentFileHandle) return "Spreadsheet not connected";

  const projectName = project.directoryHandle?.name || project.name || "Project";
  const spreadsheetFolder = project.spreadsheetDirectoryHandle?.name || "Spreadsheet";
  const spreadsheetFile = project.assignmentFileHandle?.name || assignmentTemplateFileName;
  return `${projectName}\\${spreadsheetFolder}\\${spreadsheetFile}`;
}

function updateAssignmentPathDisplay() {
  assignmentPath.textContent = `Spreadsheet path: ${assignmentSpreadsheetPath()}`;
}

async function syncDataAssignments() {
  if (!project) {
    projectStatus.textContent = "Open a project before syncing data assignments.";
    return;
  }

  saveCurrentBuffer();
  saveSplitBuffer();

  const assignmentFileHandle = await ensureAssignmentFileHandle();
  if (!assignmentFileHandle) {
    projectStatus.textContent = "No Data Assignments.xlsx workbook is connected for this project.";
    return;
  }

  const file = await assignmentFileHandle.getFile();
  const workbookData = await readAssignmentWorkbook(new Uint8Array(await file.arrayBuffer()));
  const assignments = new Map(workbookData.assignments);
  const lsAssignments = new Map();
  let backfilledCount = 0;
  let missingSpreadsheetEntryCount = 0;
  let updatedFileCount = 0;

  project.files.forEach((lsFile) => {
    extractAssignmentsFromLs(lsFile.content).forEach((name, key) => {
      if (!lsAssignments.has(key)) {
        lsAssignments.set(key, name);
      }
    });
  });

  lsAssignments.forEach((name, key) => {
    const workbookCell = workbookData.assignmentCells.get(key);

    if (workbookCell && !workbookCell.description) {
      assignments.set(key, name);
      backfilledCount += 1;
      return;
    }

    if (!workbookCell && !assignments.has(key)) {
      missingSpreadsheetEntryCount += 1;
    }
  });

  project.files.forEach((lsFile) => {
    const nextContent = applyAssignmentsToLs(lsFile.content, assignments);
    if (nextContent !== lsFile.content) {
      lsFile.content = nextContent;
      updateTagDisplayPreferenceAssignments(lsFile, assignments);
      lsFile.dirty = true;
      updatedFileCount += 1;
    }
  });

  const nextWorkbook = writeAssignmentWorkbook(workbookData, assignments);
  const writable = await assignmentFileHandle.createWritable();
  await writable.write(nextWorkbook);
  await writable.close();

  if (getCurrentFile()) {
    editor.value = displayedFileContent(getCurrentFile());
    lastEditorValue = editor.value;
    refreshEditor();
  }
  if (!splitEditorPane.hidden && getSplitFile()) {
    splitEditor.value = displayedFileContent(getSplitFile(), splitHeaderVisible, splitFooterVisible);
    lastSplitEditorValue = splitEditor.value;
    renderSplitHighlight();
    updateSplitCursorStatus();
  }

  renderFileList();
  persistSession();
  const missingMessage = missingSpreadsheetEntryCount
    ? ` ${missingSpreadsheetEntryCount} LS name${missingSpreadsheetEntryCount === 1 ? " was" : "s were"} outside the spreadsheet template range.`
    : "";
  projectStatus.textContent = `Synced Data Assignments.xlsx. Updated ${updatedFileCount} LS file${updatedFileCount === 1 ? "" : "s"} and backfilled ${backfilledCount} blank spreadsheet name${backfilledCount === 1 ? "" : "s"}.${missingMessage}`;
}

function syncAssignmentChangeToLsFiles(type, index, description) {
  if (!project) return 0;
  const key = assignmentKey(type, index);
  const assignments = new Map([[key, cleanAssignmentName(description)]]);
  const changedFileIds = new Set();
  let updatedFileCount = 0;

  project.files.forEach((lsFile) => {
    const referencesAssignment = new RegExp(`\\b${String(type).toUpperCase()}\\[${Number(index)}(?=[:\\]])`, "i").test(lsFile.content);
    if (!referencesAssignment) return;
    const nextContent = applyAssignmentsToLs(lsFile.content, assignments);
    updateTagDisplayPreferenceAssignment(lsFile, key, description);
    changedFileIds.add(lsFile.id);
    if (nextContent !== lsFile.content) {
      lsFile.content = nextContent;
      lsFile.dirty = true;
      updatedFileCount += 1;
    }
  });

  const currentFile = getCurrentFile();
  if (currentFile && changedFileIds.has(currentFile.id)) {
    refreshEditorAfterAssignmentChange(editor, currentFile, headerVisible, footerVisible, true);
  }
  const splitFile = getSplitFile();
  if (!splitEditorPane.hidden && splitFile && changedFileIds.has(splitFile.id)) {
    refreshEditorAfterAssignmentChange(splitEditor, splitFile, splitHeaderVisible, splitFooterVisible, false);
  }

  if (updatedFileCount) {
    renderFileList();
    renderSplitFileSelect();
    updateSaveCurrentLsButton();
    persistSession();
  }

  return updatedFileCount;
}

function refreshEditorAfterAssignmentChange(textarea, lsFile, showHeader, showFooter, isMainEditor) {
  const preference = tagDisplayPreference(lsFile);
  if (!preference.commentsVisible) return;

  const selectionStart = lineColumnFromIndex(textarea.value, textarea.selectionStart);
  const selectionEnd = lineColumnFromIndex(textarea.value, textarea.selectionEnd);
  const scrollTop = textarea.scrollTop;
  const scrollLeft = textarea.scrollLeft;
  const nextValue = displayedFileContent(lsFile, showHeader, showFooter);
  if (nextValue === textarea.value) return;

  textarea.value = nextValue;
  const nextLines = nextValue.replace(/\r\n/g, "\n").split("\n");
  textarea.setSelectionRange(
    indexFromLineColumn(nextLines, selectionStart.line, selectionStart.column),
    indexFromLineColumn(nextLines, selectionEnd.line, selectionEnd.column)
  );
  textarea.scrollTop = scrollTop;
  textarea.scrollLeft = scrollLeft;

  if (isMainEditor) {
    lastEditorValue = textarea.value;
    refreshEditor();
  } else {
    lastSplitEditorValue = textarea.value;
    renderSplitHighlight();
    updateSplitCursorStatus();
  }

  textarea.scrollTop = scrollTop;
  textarea.scrollLeft = scrollLeft;
}

function setWorkspaceView(view) {
  activeWorkspaceView = ["assignments", "robot-export", "robot-backup", "robot-position"].includes(view) ? view : "editor";
  if (activeWorkspaceView === "robot-position" && robotOnlineStatus !== "online") {
    activeWorkspaceView = "editor";
  }
  editorWorkspaceTab.setAttribute("aria-pressed", String(activeWorkspaceView === "editor"));
  assignmentsWorkspaceTab.setAttribute("aria-pressed", String(activeWorkspaceView === "assignments"));
  robotExportWorkspaceTab.setAttribute("aria-pressed", String(activeWorkspaceView === "robot-export"));
  robotBackupWorkspaceTab.setAttribute("aria-pressed", String(activeWorkspaceView === "robot-backup"));
  robotPositionWorkspaceTab.setAttribute("aria-pressed", String(activeWorkspaceView === "robot-position"));
  robotPositionWorkspaceTab.hidden = robotOnlineStatus !== "online";

  if (!project) {
    startScreen.hidden = false;
    editorLayout.hidden = true;
    assignmentsView.hidden = true;
    robotExportView.hidden = true;
    robotBackupView.hidden = true;
    robotPositionView.hidden = true;
    workspaceTabs.hidden = true;
    return;
  }

  startScreen.hidden = true;
  workspaceTabs.hidden = false;
  editorLayout.hidden = activeWorkspaceView !== "editor";
  assignmentsView.hidden = activeWorkspaceView !== "assignments";
  robotExportView.hidden = activeWorkspaceView !== "robot-export";
  robotBackupView.hidden = activeWorkspaceView !== "robot-backup";
  robotPositionView.hidden = activeWorkspaceView !== "robot-position";

  if (activeWorkspaceView === "assignments") {
    loadAssignmentsView();
  } else if (activeWorkspaceView === "robot-export") {
    renderRobotExportPrograms();
  }
}
function updateProjectActionVisibility() {
  const projectOpen = Boolean(project);
  topbarActions.hidden = !projectOpen;
  goOnlineControl.hidden = !projectOpen;
  creatorCredit.hidden = projectOpen;
  openProjectBtn.hidden = projectOpen;
  newProjectBtn.hidden = projectOpen;
  openRoboProjectBtn.hidden = projectOpen;
  exportRoboProjectBtn.hidden = !projectOpen;
  saveBtn.hidden = !projectOpen;
  reloadAssignmentsBtn.hidden = !projectOpen;
  pushAssignmentsMenuBtn.hidden = !projectOpen;
  syncAssignmentsMenuBtn.hidden = !projectOpen;
  closeProjectBtn.hidden = !projectOpen;
  updateCopyCurrentPathButton();
}

function assignmentRangesForSheet(sheetName) {
  return assignmentRanges.filter((range) => range.sheet === sheetName);
}

function assignmentRowsForRange(workbookData, range) {
  return Array.from(workbookData.assignmentCells.values())
    .filter((cell) => cell.sheet === range.sheet && cell.type === range.type)
    .sort((a, b) => a.index - b.index);
}

function renderAssignmentSheetTabs() {
  assignmentSheetTabs.innerHTML = assignmentSheetNames.map((sheetName) => `
    <button type="button" role="tab" data-sheet="${escapeHtml(sheetName)}" aria-selected="${sheetName === activeAssignmentSheet}" title="Show ${escapeHtml(assignmentSheetLabel(sheetName))} Data Assignments.">
      ${escapeHtml(assignmentSheetLabel(sheetName))}
    </button>
  `).join("");
}

function renderAssignmentsTable() {
  if (!assignmentWorkbookData) {
    assignmentTableWrap.innerHTML = "";
    return;
  }

  const ranges = assignmentRangesForSheet(activeAssignmentSheet);
  const sections = ranges.map((range) => {
    const rows = assignmentRowsForRange(assignmentWorkbookData, range);
    const body = rows.length ? rows.map((row) => `
      <tr>
        <td class="assignment-type">${escapeHtml(row.type)}</td>
        <td class="assignment-index">${row.index}</td>
        <td>
          <input
            class="assignment-description-input"
            type="text"
            maxlength="32"
            value="${escapeHtml(row.description)}"
            data-type="${escapeHtml(row.type)}"
            data-index="${row.index}"
            aria-label="${escapeHtml(`${row.type}[${row.index}] description`)}">
        </td>
      </tr>
    `).join("") : `
      <tr>
        <td colspan="3" class="assignment-empty">No ${escapeHtml(range.type)} rows were found in this workbook sheet.</td>
      </tr>
    `;

    return `
      <section class="assignment-range-section">
        <h3>${escapeHtml(range.type)} (${rows.length})</h3>
        <table class="assignment-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Number</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>${body}</tbody>
        </table>
      </section>
    `;
  }).join("");

  assignmentTableWrap.innerHTML = sections || `<div class="assignment-empty">No mapped ranges are configured for ${escapeHtml(activeAssignmentSheet)}.</div>`;
}

async function loadAssignmentsView(forceReload = false) {
  if (!project) return;
  if (assignmentWorkbookData && !forceReload) {
    renderAssignmentSheetTabs();
    renderAssignmentsTable();
    return;
  }

  assignmentStatus.textContent = "Loading Data Assignments.xlsx...";
  assignmentTableWrap.innerHTML = "";

  try {
    const assignmentFileHandle = await ensureAssignmentFileHandle();
    updateAssignmentPathDisplay();
    if (!assignmentFileHandle) {
      assignmentWorkbookData = null;
      assignmentStatus.textContent = "No Data Assignments.xlsx workbook is connected for this project.";
      renderAssignmentSheetTabs();
      return;
    }

    const file = await assignmentFileHandle.getFile();
    assignmentWorkbookData = await readAssignmentWorkbook(new Uint8Array(await file.arrayBuffer()));
    activeAssignmentSheet = activeAssignmentSheet && assignmentSheetNames.includes(activeAssignmentSheet)
      ? activeAssignmentSheet
      : assignmentSheetNames[0];
    renderAssignmentSheetTabs();
    renderAssignmentsTable();
    assignmentStatus.textContent = `Loaded ${assignmentTemplateFileName}. Edit a description cell to update the spreadsheet.`;
  } catch (error) {
    assignmentWorkbookData = null;
    assignmentStatus.textContent = `Unable to load Data Assignments.xlsx: ${error.message}`;
    assignmentTableWrap.innerHTML = "";
  }
}

function assignmentsPopoutIsOpen() {
  return Boolean(assignmentsPopoutWindow && !assignmentsPopoutWindow.closed);
}

function assignmentPopoutSnapshot() {
  const ranges = assignmentWorkbookData ? assignmentRangesForSheet(activeAssignmentSheet).map((range) => ({
    type: range.type,
    rows: assignmentRowsForRange(assignmentWorkbookData, range).map((row) => ({
      type: row.type,
      index: row.index,
      description: row.description || ""
    }))
  })) : [];
  return {
    projectOpen: Boolean(project),
    projectName: project?.name || "",
    theme: document.body.dataset.theme || "dark",
    path: assignmentPath.textContent,
    status: assignmentStatus.textContent,
    activeSheet: activeAssignmentSheet,
    sheets: assignmentSheetNames.map((name) => ({ name, label: assignmentSheetLabel(name) })),
    ranges
  };
}

function setAssignmentsPopoutUi(poppedOut) {
  assignmentsView.classList.toggle("is-popped-out", poppedOut);
  assignmentsPopoutPlaceholder.hidden = !poppedOut;
  popOutAssignmentsBtn.textContent = poppedOut ? "Focus Pop-out" : "Pop-out";
  popOutAssignmentsBtn.title = poppedOut
    ? "Bring the open Data Assignments pop-out window to the front."
    : "Move Data Assignments into a separate browser window and return the main window to the LS Editor.";
  popOutAssignmentsBtn.setAttribute("aria-pressed", String(poppedOut));
}

function stopAssignmentsPopoutMonitor() {
  if (!assignmentsPopoutMonitor) return;
  clearInterval(assignmentsPopoutMonitor);
  assignmentsPopoutMonitor = null;
}

function restoreAssignmentsEmbeddedView() {
  assignmentsPopoutWindow = null;
  stopAssignmentsPopoutMonitor();
  setAssignmentsPopoutUi(false);
  renderAssignmentSheetTabs();
  renderAssignmentsTable();
}

function popInAssignments() {
  const popup = assignmentsPopoutWindow;
  restoreAssignmentsEmbeddedView();
  if (popup && !popup.closed) popup.close();
}

function focusAssignmentsPopout() {
  if (!assignmentsPopoutIsOpen()) {
    restoreAssignmentsEmbeddedView();
    return false;
  }
  assignmentsPopoutWindow.focus();
  return true;
}

function popOutAssignments() {
  if (focusAssignmentsPopout()) return;
  const popup = window.open("assignments-popout.html", "roboProgrammerAssignments", "popup=yes,width=1220,height=820,resizable=yes,scrollbars=yes");
  if (!popup) {
    assignmentStatus.textContent = "The Data Assignments pop-out was blocked. Allow pop-ups for Robo Programmer and try again.";
    return;
  }
  assignmentsPopoutWindow = popup;
  setAssignmentsPopoutUi(true);
  setWorkspaceView("editor");
  stopAssignmentsPopoutMonitor();
  assignmentsPopoutMonitor = setInterval(() => {
    if (!assignmentsPopoutIsOpen()) restoreAssignmentsEmbeddedView();
  }, 500);
  loadAssignmentsView().catch((error) => {
    assignmentStatus.textContent = `Unable to load Data Assignments.xlsx: ${error.message}`;
  });
}

async function saveAssignmentDescriptionFromPopout(type, index, description) {
  const cleaned = cleanAssignmentName(description);
  const changed = await saveAssignmentDescription(type, index, cleaned);
  if (changed) {
    const updatedFileCount = syncAssignmentChangeToLsFiles(type, index, cleaned);
    assignmentStatus.textContent = `Saved ${type}[${index}] to ${assignmentTemplateFileName} and synced ${updatedFileCount} LS file${updatedFileCount === 1 ? "" : "s"}.`;
    renderFileList();
    renderDiagnostics();
    persistSession();
  }
  renderAssignmentsTable();
  return assignmentPopoutSnapshot();
}

window.RoboAssignmentsPopout = Object.freeze({
  getSnapshot: () => assignmentPopoutSnapshot(),
  selectSheet: (sheetName) => {
    if (assignmentSheetNames.includes(sheetName)) activeAssignmentSheet = sheetName;
    renderAssignmentSheetTabs();
    renderAssignmentsTable();
    return assignmentPopoutSnapshot();
  },
  saveDescription: (type, index, description) => saveAssignmentDescriptionFromPopout(type, index, description),
  popIn: () => popInAssignments(),
  notifyClosed: () => restoreAssignmentsEmbeddedView()
});

function setAssignmentWorkbookDescription(type, index, description) {
  const key = assignmentKey(type, index);
  const cell = assignmentWorkbookData.assignmentCells.get(key);
  if (!cell) return false;

  const cleaned = cleanAssignmentName(description);
  if (cleaned === cleanAssignmentName(cell.description || "")) return false;

  const sheetDoc = assignmentWorkbookData.sheetDocs.get(cell.target);
  if (!sheetDoc) return false;

  setInlineCellValue(sheetDoc, cell.rowNumber, cell.descCol, cleaned);
  assignmentWorkbookData.entries.set(cell.target, new TextEncoder().encode(serializeXmlDocument(sheetDoc)));
  cell.description = cleaned;
  if (cleaned) assignmentWorkbookData.assignments.set(key, cleaned);
  else assignmentWorkbookData.assignments.delete(key);
  return true;
}

function collectVisibleAssignmentEdits() {
  let count = 0;
  const changedKeys = new Set();
  assignmentTableWrap.querySelectorAll(".assignment-description-input").forEach((input) => {
    input.value = cleanAssignmentName(input.value);
    const key = assignmentKey(input.dataset.type, Number(input.dataset.index));
    if (setAssignmentWorkbookDescription(input.dataset.type, Number(input.dataset.index), input.value)) {
      count += 1;
      changedKeys.add(key);
    }
  });
  return { count, changedKeys };
}

function writeAllAssignmentDataToWorkbook() {
  if (!assignmentWorkbookData) return 0;
  let writeCount = 0;

  assignmentWorkbookData.assignmentCells.forEach((cell, key) => {
    const description = assignmentWorkbookData.assignments.get(key) || cell.description || "";
    if (setAssignmentWorkbookDescription(cell.type, cell.index, description)) {
      writeCount += 1;
    }
  });

  return writeCount;
}

async function writeAssignmentWorkbookData() {
  const assignmentFileHandle = await ensureAssignmentFileHandle();
  if (!assignmentFileHandle) throw new Error("No Data Assignments.xlsx workbook is connected for this project.");

  const writable = await assignmentFileHandle.createWritable();
  await writable.write(writeZipEntries(assignmentWorkbookData.entries));
  await writable.close();
}

function pushLsAssignmentsIntoWorkbookData(skipKeys = new Set()) {
  if (!project || !assignmentWorkbookData) return 0;
  const lsAssignments = new Map();
  let pushedCount = 0;

  project.files.forEach((lsFile) => {
    extractAssignmentsFromLs(lsFile.content).forEach((name, key) => {
      if (!lsAssignments.has(key)) lsAssignments.set(key, name);
    });
  });

  lsAssignments.forEach((name, key) => {
    if (skipKeys.has(key)) return;
    const cell = assignmentWorkbookData.assignmentCells.get(key);
    if (!cell) return;
    if (setAssignmentWorkbookDescription(cell.type, cell.index, name)) {
      pushedCount += 1;
    }
  });

  return pushedCount;
}

async function pushAssignmentsToSpreadsheet() {
  if (!project) {
    assignmentStatus.textContent = "Open a project before pushing Data Assignments.xlsx.";
    return;
  }

  saveCurrentBuffer();
  saveSplitBuffer();

  if (!assignmentWorkbookData) {
    await loadAssignmentsView(true);
  }
  if (!assignmentWorkbookData) return;

  const visibleEdits = collectVisibleAssignmentEdits();
  const lsPushCount = pushLsAssignmentsIntoWorkbookData(visibleEdits.changedKeys);
  const visibleEditCount = visibleEdits.count;
  const changedCount = visibleEditCount + lsPushCount;
  if (!changedCount) {
    assignmentStatus.textContent = `${assignmentTemplateFileName} is already up to date. No spreadsheet rows changed.`;
    renderAssignmentsTable();
    return;
  }

  await writeAssignmentWorkbookData();
  renderAssignmentsTable();
  assignmentStatus.textContent = `Pushed Data Assignments.xlsx. Updated ${changedCount} changed row${changedCount === 1 ? "" : "s"}: ${visibleEditCount} visible edit${visibleEditCount === 1 ? "" : "s"}, ${lsPushCount} LS-derived name${lsPushCount === 1 ? "" : "s"}.`;
}

async function saveAssignmentDescription(type, index, description) {
  if (!project || !assignmentWorkbookData) return false;

  if (!setAssignmentWorkbookDescription(type, index, description)) return false;
  await writeAssignmentWorkbookData();
  assignmentStatus.textContent = `Saved ${type}[${index}] to ${assignmentTemplateFileName}.`;
  return true;
}

function normalizeRobotAddress(value) {
  const trimmed = String(value || "").trim().replace(/\/+$/, "");
  if (!trimmed) throw new Error("Enter a robot IP address or hostname.");
  const withProtocol = /^[a-z]+:\/\//i.test(trimmed) ? trimmed : `http://${trimmed}`;
  const url = new URL(withProtocol);
  if (!["http:", "https:"].includes(url.protocol)) throw new Error("Robot addresses must use HTTP or HTTPS.");
  if (url.username || url.password || url.pathname !== "/" || url.search || url.hash) {
    throw new Error("Enter only the robot IP address or hostname, without a page path or credentials.");
  }
  return url.origin;
}

function encodeRobotComment(comment) {
  return Array.from(String(comment || ""))
    .map((character) => encodeURIComponent(character))
    .join("");
}

function robotCommentsMatch(expected, actual) {
  return String(expected || "").trimEnd() === String(actual || "").trimEnd();
}

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function fetchRobotPage(robotOrigin, path, timeoutMs = 15000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(`${robotOrigin}${path}`, {
      cache: "no-store",
      mode: "cors",
      signal: controller.signal
    });
    if (!response.ok) throw new Error(`Robot returned HTTP ${response.status}.`);
    return await response.text();
  } catch (error) {
    if (error.name === "AbortError") throw new Error("The robot connection timed out.");
    throw error;
  } finally {
    clearTimeout(timer);
  }
}

function parseRobotCommentPage(html, category) {
  const documentNode = new DOMParser().parseFromString(html, "text/html");
  const comments = new Map();
  documentNode.querySelectorAll("tr").forEach((row) => {
    const references = [...row.textContent.matchAll(/\b([A-Z]+)\[(\d+)\]/g)];
    const inputs = [...row.querySelectorAll('input[name^="strComment"]')];
    references.forEach((reference, index) => {
      const type = reference[1].toUpperCase();
      const typeConfig = category.types.find((item) => item.type === type);
      const input = inputs[index];
      if (!typeConfig || !input) return;
      const itemIndex = Number(reference[2]);
      let state = "";
      if (type === "F") {
        const checkbox = row.querySelector('input[type="checkbox"]');
        if (checkbox) {
          state = checkbox.checked ? "ON" : "OFF";
        } else {
          const nearbyText = row.textContent.slice(reference.index + reference[0].length, reference.index + reference[0].length + 32);
          const stateMatch = nearbyText.match(/\b(ON|OFF)\b/i);
          state = stateMatch ? stateMatch[1].toUpperCase() : "";
        }
      }
      comments.set(assignmentKey(type, itemIndex), {
        type,
        index: itemIndex,
        robotComment: input.value || "",
        state,
        writeCode: typeConfig.writeCode,
        limit: Number(input.maxLength) > 0 ? Number(input.maxLength) : typeConfig.limit
      });
    });
  });
  return comments;
}

async function readRobotComments(robotOrigin, categories = robotCommentCategories) {
  const comments = new Map();
  const result = await callRobotExportApi("/robot-comments/read", {
    robotAddress: robotOrigin,
    categories: categories.map((category) => ({
      readCode: category.readCode,
      range: category.range || ""
    }))
  });
  const categoryByRequest = new Map(categories.map((category) => [`${category.readCode}|${category.range || ""}`, category]));
  (result.pages || []).forEach((page) => {
    const category = categoryByRequest.get(`${page.readCode}|${page.range || ""}`);
    if (!category) return;
    parseRobotCommentPage(page.html || "", category).forEach((item, key) => comments.set(key, item));
  });
  return comments;
}

function buildRobotCommentComparison(robotComments) {
  const comparison = [];
  assignmentWorkbookData.assignmentCells.forEach((cell, key) => {
    const robotItem = robotComments.get(key);
    if (!robotItem) return;
    const spreadsheetComment = cleanAssignmentName(cell.description || "");
    const tooLong = spreadsheetComment.length > robotItem.limit;
    const different = !robotCommentsMatch(spreadsheetComment, robotItem.robotComment);
    const blankClear = !spreadsheetComment && Boolean(String(robotItem.robotComment || "").trimEnd());
    comparison.push({
      ...robotItem,
      spreadsheetComment,
      different,
      selected: different && !tooLong,
      status: tooLong
        ? `Too long (${spreadsheetComment.length}/${robotItem.limit})`
        : !different
          ? "Matches"
          : blankClear
            ? "Clear robot"
            : "Change"
    });
  });
  return comparison.sort((a, b) => a.type.localeCompare(b.type) || a.index - b.index);
}

function robotCommentIsPushable(item) {
  return Boolean(item?.different) && !String(item?.status || "").startsWith("Too long");
}

function resetRobotCommentTypeFilter() {
  robotCommentTypeFilterValue = "all";
  robotCommentDifferenceFilterValue = "all";
  robotCommentTypeFilter.innerHTML = `<option value="all">All Types</option>`;
  robotCommentTypeFilter.disabled = true;
  robotCommentDifferenceFilter.value = "all";
  robotCommentDifferenceFilter.disabled = true;
}

function updateRobotCommentTypeFilterOptions() {
  const types = [...new Set(robotCommentComparison.map((item) => item.type))].sort((a, b) => a.localeCompare(b));
  const currentValue = types.includes(robotCommentTypeFilterValue) ? robotCommentTypeFilterValue : "all";
  robotCommentTypeFilterValue = currentValue;
  robotCommentTypeFilter.disabled = types.length === 0;
  robotCommentTypeFilter.innerHTML = `
    <option value="all">All Types</option>
    ${types.map((type) => `<option value="${escapeHtml(type)}" ${type === currentValue ? "selected" : ""}>${escapeHtml(type)}</option>`).join("")}
  `;
  robotCommentDifferenceFilterValue = robotCommentDifferenceFilterValue === "differences" ? "differences" : "all";
  robotCommentDifferenceFilter.value = robotCommentDifferenceFilterValue;
  robotCommentDifferenceFilter.disabled = robotCommentComparison.length === 0;
}

function robotCommentVisibleComparison() {
  return robotCommentComparison
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => robotCommentTypeFilterValue === "all" || item.type === robotCommentTypeFilterValue)
    .filter(({ item }) => robotCommentDifferenceFilterValue !== "differences" || item.different);
}

function renderRobotCommentComparison() {
  updateRobotCommentTypeFilterOptions();
  const visibleComparison = robotCommentVisibleComparison();
  const differences = robotCommentComparison.filter((item) => item.different).length;
  const pushable = robotCommentComparison.filter(robotCommentIsPushable);
  const selectedChanges = robotCommentComparison.filter((item) => item.selected && robotCommentIsPushable(item));
  const matching = robotCommentComparison.filter((item) => item.status === "Matches").length;
  const clears = robotCommentComparison.filter((item) => item.status === "Clear robot").length;
  const invalid = robotCommentComparison.filter((item) => item.status.startsWith("Too long")).length;
  const activeFilters = [
    robotCommentTypeFilterValue === "all" ? "" : robotCommentTypeFilterValue,
    robotCommentDifferenceFilterValue === "differences" ? "differences only" : ""
  ].filter(Boolean);
  const filterMessage = activeFilters.length
    ? ` Showing ${visibleComparison.length} row${visibleComparison.length === 1 ? "" : "s"} for ${activeFilters.join(" and ")}.`
    : "";
  const visibleSelected = visibleComparison.filter(({ item }) => item.selected && robotCommentIsPushable(item));
  robotCommentsSummary.textContent = `${differences} difference${differences === 1 ? "" : "s"} (${pushable.length} pushable, ${clears} clear${clears === 1 ? "" : "s"}), ${matching} matching, ${invalid} over-length.${filterMessage}`;
  const robotOnline = robotOnlineStatus === "online";
  setRobotOnlineActionState(pushRobotCommentsBtn, !robotOnline || selectedChanges.length === 0);
  setRobotOnlineActionState(selectVisibleRobotCommentsBtn, !robotOnline || visibleComparison.length === 0);
  setRobotOnlineActionState(clearVisibleRobotCommentsBtn, !robotOnline || visibleSelected.length === 0);
  robotCommentsTableWrap.innerHTML = robotCommentComparison.length ? visibleComparison.length ? `
    <table class="robot-comments-table">
      <thead>
        <tr><th>Push</th><th>Assignment</th><th>Spreadsheet</th><th>Robot</th><th>Status</th></tr>
      </thead>
      <tbody>
        ${visibleComparison.map(({ item, index }) => `
          <tr class="${robotCommentIsPushable(item) ? "robot-comment-change" : ""}">
            <td><input type="checkbox" data-robot-comment-index="${index}" aria-label="Push ${escapeHtml(`${item.type}[${item.index}]`)}" ${item.selected ? "checked" : ""} ${robotCommentIsPushable(item) ? "" : "disabled"}></td>
            <td>${escapeHtml(`${item.type}[${item.index}]`)}</td>
            <td>${escapeHtml(item.spreadsheetComment || "(blank)")}</td>
            <td>${escapeHtml(item.robotComment || "(blank)")}</td>
            <td>${escapeHtml(item.status)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  ` : `<div class="assignment-empty">No robot comment assignments match the current filters.</div>` : `<div class="assignment-empty">No supported robot comment assignments were found.</div>`;
}

async function compareRobotComments() {
  if (!project) throw new Error("Open a project before connecting to a robot.");
  if (!assignmentWorkbookData) await loadAssignmentsView(true);
  if (!assignmentWorkbookData) throw new Error("Data Assignments.xlsx could not be loaded.");
  collectVisibleAssignmentEdits();
  const robotOrigin = requireOnlineRobot("compare robot comments");
  compareRobotCommentsBtn.disabled = true;
  pushRobotCommentsBtn.disabled = true;
  robotCommentsStatus.textContent = `Connecting to ${robotOrigin} and reading supported comments...`;
  try {
    const robotComments = await readRobotComments(robotOrigin);
    robotCommentComparison = buildRobotCommentComparison(robotComments);
    robotCommentTypeFilterValue = "all";
    robotCommentDifferenceFilterValue = "all";
    renderRobotCommentComparison();

    robotCommentsStatus.textContent = `Connected to ${robotOrigin}. Review the comparison before pushing selected comments.`;
  } finally {
    setRobotOnlineActionState(compareRobotCommentsBtn, robotOnlineStatus !== "online");
  }
}

async function pushSelectedRobotComments() {
  const selected = robotCommentComparison.filter((item) => item.selected && robotCommentIsPushable(item));
  if (!selected.length) return;
  const robotOrigin = requireOnlineRobot("push robot comments");
  const shouldPush = confirm(`Push ${selected.length} selected comment${selected.length === 1 ? "" : "s"} to ${robotOnlineAddress}? This action will change comments on the online robot.`);
  if (!shouldPush) {
    robotCommentsStatus.textContent = "Robot comment push cancelled.";
    return;
  }

  compareRobotCommentsBtn.disabled = true;
  pushRobotCommentsBtn.disabled = true;
  const failures = [];
  for (let index = 0; index < selected.length; index += 1) {
    const item = selected[index];
    robotCommentsStatus.textContent = `Pushing ${index + 1} of ${selected.length}: ${item.type}[${item.index}]...`;
    try {
      await callRobotExportApi("/robot-comments/set", {
        robotAddress: robotOrigin,
        comment: item.spreadsheetComment,
        index: item.index,
        writeCode: item.writeCode
      });
      await wait(75);
    } catch (error) {
      failures.push(`${item.type}[${item.index}]: ${error.message}`);
    }
  }

  robotCommentsStatus.textContent = "Verifying robot comments...";
  let robotComments = new Map();
  let verificationFailures = [];
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    await wait(attempt === 1 ? 500 : 1000);
    robotComments = await readRobotComments(robotOrigin);
    verificationFailures = selected.filter((item) => {
      const actual = robotComments.get(assignmentKey(item.type, item.index))?.robotComment;
      return !robotCommentsMatch(item.spreadsheetComment, actual);
    });
    if (!verificationFailures.length) break;
    if (attempt < 3) robotCommentsStatus.textContent = `Verification attempt ${attempt} found ${verificationFailures.length} pending mismatch${verificationFailures.length === 1 ? "" : "es"}. Checking again...`;
  }
  robotCommentComparison = buildRobotCommentComparison(robotComments);
  renderRobotCommentComparison();
  setRobotOnlineActionState(compareRobotCommentsBtn, robotOnlineStatus !== "online");
  robotCommentsStatus.textContent = failures.length || verificationFailures.length
    ? `Push completed with issues. Request failures: ${failures.join("; ") || "none"}. Verification failures: ${verificationFailures.map((item) => {
      const actual = robotComments.get(assignmentKey(item.type, item.index))?.robotComment || "(blank)";
      return `${item.type}[${item.index}] expected "${item.spreadsheetComment}", robot has "${actual}"`;
    }).join("; ") || "none"}.`
    : `Pushed and verified ${selected.length} robot comment${selected.length === 1 ? "" : "s"}.`;
}

function robotExportProgramName(file) {
  const match = String(file.content || "").match(/^\s*\/PROG\s+([A-Z][A-Z0-9_]*)\s*$/im);
  return match ? match[1].toUpperCase() : "";
}

function robotExportProgramNameFromRemoteFile(fileName) {
  const match = String(fileName || "").toUpperCase().match(/^([A-Z][A-Z0-9_]{0,35})\.(LS|TP)$/);
  return match ? match[1] : "";
}

function robotExportStringList(value) {
  if (Array.isArray(value)) return value.filter(Boolean).map(String);
  return value ? [String(value)] : [];
}

function robotExportErrorLocation(exported) {
  const structuredLine = Number(exported?.sourceLine || exported?.line);
  const structuredColumn = Number(exported?.sourceColumn || exported?.column);
  if (structuredLine > 0 && structuredColumn > 0) {
    return { line: structuredLine, column: structuredColumn };
  }

  const errorText = [
    exported?.error || "",
    ...robotExportStringList(exported?.loaderErrors)
  ].filter(Boolean).join(" | ");
  const lineThenColumn = errorText.match(/\b(?:line|ln)\s*(?:number|no\.?|#)?\s*[:=]?\s*(\d+)[^\d\r\n]{0,32}\b(?:column|col)\s*(?:number|no\.?|#)?\s*[:=]?\s*(\d+)/i);
  const columnThenLine = errorText.match(/\b(?:column|col)\s*(?:number|no\.?|#)?\s*[:=]?\s*(\d+)[^\d\r\n]{0,32}\b(?:line|ln)\s*(?:number|no\.?|#)?\s*[:=]?\s*(\d+)/i);
  const line = Number(lineThenColumn?.[1] || columnThenLine?.[2]);
  const column = Number(lineThenColumn?.[2] || columnThenLine?.[1]);
  return line > 0 && column > 0 ? { line, column } : null;
}

async function callRobotExportApi(path, payload, options = {}) {
  const response = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: options.signal
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok || result.ok === false) {
    if (response.status === 405 || response.status === 404) {
      throw new Error("The running Robo Programmer server is outdated. Close its server window, then launch Robo Programmer again before using live robot tools.");
    }
    throw new Error(result.error || `Local Robot Export service returned HTTP ${response.status}.`);
  }
  return result;
}

function savedRobotOnlineAddress() {
  return project?.robotAddress || localStorage.getItem(robotOnlineAddressKey) || "";
}

function requireOnlineRobot(actionLabel = "use this tool") {
  if (robotOnlineStatus !== "online" || !robotOnlineAddress) {
    enforceRobotOnlineActionState();
    throw new Error(`Go Online with a robot before you ${actionLabel}.`);
  }
  const robotOrigin = normalizeRobotAddress(robotOnlineAddress);
  const displayAddress = robotOrigin.replace(/^https?:\/\//i, "");
  robotOnlineAddress = displayAddress;
  robotAddressInput.value = displayAddress;
  robotExportAddressInput.value = displayAddress;
  robotBackupAddressInput.value = displayAddress;
  robotPositionAddressInput.value = displayAddress;
  return robotOrigin;
}

function robotProfileAddress(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  try {
    return normalizeRobotAddress(text).replace(/^https?:\/\//i, "");
  } catch {
    return text.replace(/^https?:\/\//i, "").replace(/\/+$/, "");
  }
}

function normalizeRobotProfile(profile) {
  const address = robotProfileAddress(typeof profile === "string" ? profile : profile?.address);
  if (!address) return null;
  return {
    address,
    name: cleanAssignmentName(typeof profile === "object" ? profile?.name || "" : "").slice(0, 32),
    lastConnected: Number(typeof profile === "object" ? profile?.lastConnected : 0) || 0
  };
}

function robotOnlineProfiles() {
  const profiles = [];
  try {
    const storedProfiles = JSON.parse(localStorage.getItem(robotOnlineAddressProfilesKey) || "[]");
    if (Array.isArray(storedProfiles)) profiles.push(...storedProfiles);
  } catch {
  }
  try {
    const storedAddresses = JSON.parse(localStorage.getItem(robotOnlineAddressListKey) || "[]");
    if (Array.isArray(storedAddresses)) profiles.push(...storedAddresses);
  } catch {
  }
  profiles.push(project?.robotAddress || "", robotOnlineAddress || "", localStorage.getItem(robotOnlineAddressKey) || "");

  const byAddress = new Map();
  profiles.map(normalizeRobotProfile).filter(Boolean).forEach((profile) => {
    const existing = byAddress.get(profile.address);
    byAddress.set(profile.address, {
      address: profile.address,
      name: profile.name || existing?.name || "",
      lastConnected: Math.max(profile.lastConnected || 0, existing?.lastConnected || 0)
    });
  });

  return [...byAddress.values()].sort((a, b) => {
    if ((b.lastConnected || 0) !== (a.lastConnected || 0)) return (b.lastConnected || 0) - (a.lastConnected || 0);
    const aLabel = a.name || a.address;
    const bLabel = b.name || b.address;
    return aLabel.localeCompare(bLabel, undefined, { numeric: true, sensitivity: "base" });
  });
}

function saveRobotOnlineProfiles(profiles) {
  const byAddress = new Map();
  profiles.map(normalizeRobotProfile).filter(Boolean).forEach((profile) => {
    const existing = byAddress.get(profile.address);
    byAddress.set(profile.address, {
      address: profile.address,
      name: profile.name || existing?.name || "",
      lastConnected: Math.max(profile.lastConnected || 0, existing?.lastConnected || 0)
    });
  });
  const cleanProfiles = [...byAddress.values()];
  localStorage.setItem(robotOnlineAddressProfilesKey, JSON.stringify(cleanProfiles));
  localStorage.setItem(robotOnlineAddressListKey, JSON.stringify(cleanProfiles.map((profile) => profile.address)));
}

function upsertRobotOnlineProfile(address, updates = {}) {
  const displayAddress = robotProfileAddress(address);
  if (!displayAddress) return;
  const profiles = robotOnlineProfiles();
  const existing = profiles.find((profile) => profile.address === displayAddress);
  if (existing) {
    Object.assign(existing, updates, { address: displayAddress });
  } else {
    profiles.push({
      address: displayAddress,
      name: cleanAssignmentName(updates.name || "").slice(0, 32),
      lastConnected: Number(updates.lastConnected) || 0
    });
  }
  saveRobotOnlineProfiles(profiles);
}

function selectedRobotProfile() {
  const current = robotProfileAddress(robotOnlineAddress || savedRobotOnlineAddress());
  return robotOnlineProfiles().find((profile) => profile.address === current) || null;
}

function robotProfileLabel(profile) {
  return profile?.name || profile?.address || "No robot IP";
}

function renderRobotOnlineAddressSelect() {
  const profiles = robotOnlineProfiles();
  const current = robotProfileAddress(robotOnlineAddress || savedRobotOnlineAddress());
  const currentProfile = profiles.find((profile) => profile.address === current) || profiles[0] || null;
  if (!current && currentProfile) robotOnlineAddress = currentProfile.address;
  robotOnlineAddressButtonText.textContent = currentProfile ? robotProfileLabel(currentProfile) : "No robot IP";
  robotOnlineAddressButton.title = currentProfile?.name
    ? `${currentProfile.name} (${currentProfile.address})`
    : currentProfile?.address || "Choose a saved robot";
  robotOnlineAddressMenu.innerHTML = `
    ${profiles.length ? profiles.map((profile) => `
      <div class="robot-address-menu-row${profile.address === current ? " selected" : ""}" role="menuitem" data-address="${escapeHtml(profile.address)}" tabindex="-1">
        <button class="robot-address-choice" type="button" data-address="${escapeHtml(profile.address)}">
          <span>${escapeHtml(robotProfileLabel(profile))}</span>
          ${profile.name ? `<small>${escapeHtml(profile.address)}</small>` : ""}
        </button>
        <button class="robot-address-rename" type="button" data-address="${escapeHtml(profile.address)}" title="Rename saved robot" aria-label="${escapeHtml(`Rename ${robotProfileLabel(profile)}`)}">Edit</button>
        <button class="robot-address-remove" type="button" data-address="${escapeHtml(profile.address)}" title="Remove saved robot" aria-label="${escapeHtml(`Remove ${robotProfileLabel(profile)}`)}">x</button>
      </div>
    `).join("") : `<div class="robot-address-empty">No saved robots</div>`}
    <button class="robot-address-menu-action" type="button" data-action="add" role="menuitem">Add robot...</button>
  `;
}

function setRobotOnlineUi(status, message = "") {
  robotOnlineStatus = status;
  const robotActionsEnabled = status === "online";
  goOnlineBtn.classList.remove("offline", "connecting", "online", "failed");
  goOnlineBtn.classList.add(status);
  goOnlineBtn.disabled = false;
  setRobotOnlineActionState(compareRobotCommentsBtn, !robotActionsEnabled);
  setRobotOnlineActionState(checkRobotExportBtn, !robotActionsEnabled);
  if (!robotBackupActive) setRobotOnlineActionState(inventoryRobotBackupBtn, !robotActionsEnabled);
  updateRobotExportButtons();
  renderRobotCommentComparison();
  updateRobotBackupButtons();
  enforceRobotOnlineActionState();
  const labels = {
    offline: "Go Online",
    connecting: "Cancel",
    online: "Online",
    failed: "Retry"
  };
  goOnlineLabel.textContent = labels[status] || "Go Online";
  goOnlineBtn.title = message || (robotOnlineAddress ? `Robot: ${robotOnlineAddress}` : "Connect to a robot");
  robotPositionWorkspaceTab.hidden = status !== "online";
  updateLoadLsFromRobotButton();
  if (status !== "online" && activeWorkspaceView === "robot-position") {
    setWorkspaceView("editor");
  }
  renderRobotOnlineAddressSelect();
}

async function rememberRobotOnlineAddress(address) {
  const normalized = normalizeRobotAddress(address);
  const displayAddress = normalized.replace(/^https?:\/\//i, "");
  robotOnlineAddress = displayAddress;
  localStorage.setItem(robotOnlineAddressKey, displayAddress);
  upsertRobotOnlineProfile(displayAddress, { lastConnected: Date.now() });
  robotAddressInput.value = displayAddress;
  robotExportAddressInput.value = displayAddress;
  robotBackupAddressInput.value = displayAddress;
  robotPositionAddressInput.value = displayAddress;
  if (project?.directoryHandle) {
    await persistProjectRobotSettings(displayAddress);
  } else if (project) {
    project.robotAddress = displayAddress;
  }
  return normalized;
}

async function selectRobotOnlineAddress(address, { persist = true } = {}) {
  const displayAddress = robotProfileAddress(address);
  robotOnlineAddress = displayAddress;
  localStorage.setItem(robotOnlineAddressKey, displayAddress);
  robotAddressInput.value = displayAddress;
  robotExportAddressInput.value = displayAddress;
  robotBackupAddressInput.value = displayAddress;
  robotPositionAddressInput.value = displayAddress;
  upsertRobotOnlineProfile(displayAddress);
  if (persist && project?.directoryHandle) {
    await persistProjectRobotSettings(displayAddress);
  } else if (persist && project) {
    project.robotAddress = displayAddress;
  }
  renderRobotOnlineAddressSelect();
}

function closeRobotAddressMenu() {
  robotOnlineAddressMenu.hidden = true;
  robotOnlineAddressButton.setAttribute("aria-expanded", "false");
  robotOnlineAddressChevron.textContent = "v";
}

function toggleRobotAddressMenu(forceOpen = null) {
  const open = forceOpen === null ? robotOnlineAddressMenu.hidden : Boolean(forceOpen);
  renderRobotOnlineAddressSelect();
  robotOnlineAddressMenu.hidden = !open;
  robotOnlineAddressButton.setAttribute("aria-expanded", String(open));
  robotOnlineAddressChevron.textContent = open ? "^" : "v";
}

function goOffline() {
  if (robotOnlineTimer) {
    clearInterval(robotOnlineTimer);
    robotOnlineTimer = null;
  }
  robotOnlineChecking = false;
  robotExportAutoCheckedAddress = "";
  robotExportConnected = false;
  robotExportRemoteFiles = [];
  robotBackupConnected = false;
  robotBackupInventory = [];
  robotBackupTableWrap.innerHTML = "";
  setRobotOnlineUi("offline", robotOnlineAddress ? `Offline. Saved robot: ${robotOnlineAddress}` : "Offline.");
  renderRobotExportRequirements();
  renderRobotExportPrograms();
  renderRobotBackupFiles();
  enforceRobotOnlineActionState();
  stopRobotPositionLive();
  resetRobotPositionDisplay();
  robotExportStatus.textContent = "Robot is offline. Go Online before exporting programs.";
  robotBackupStatus.textContent = "Robot is offline. Go Online before backing up files.";
}

async function checkRobotOnline({ manual = false } = {}) {
  if (robotOnlineChecking) return;
  let address = robotOnlineAddress || selectedRobotProfile()?.address || savedRobotOnlineAddress();
  if (!address && manual) {
    address = prompt("Enter the robot IP address or hostname:", "");
    if (address === null) return;
  }
  if (!address) {
    setRobotOnlineUi("offline", "No robot address has been saved yet.");
    return;
  }

  robotOnlineChecking = true;
  robotOnlineAbortController = new AbortController();
  if (manual || robotOnlineStatus === "offline") {
    setRobotOnlineUi("connecting", `Connecting to ${address}...`);
  }
  try {
    const robotOrigin = await rememberRobotOnlineAddress(address);
    const liveState = await callRobotExportApi("/robot-live/state", { robotAddress: robotOrigin }, { signal: robotOnlineAbortController.signal });
    renderLiveRobotState(liveState);
    robotPositionStatus.textContent = `Live Robot data refreshed from ${robotOnlineAddress}.`;
    setRobotOnlineUi("online", `Online with ${robotOnlineAddress}. Refreshing every ${robotOnlinePollMs / 1000} seconds.`);
    startRobotOnlineMonitor();
    try {
      await readRobotProgramMonitor();
    } catch {
    }
    if (activeLiveRobotTool === "numeric-registers") {
      try {
        await readRobotRegistersAndFlags({ force: true });
      } catch {
      }
    } else {
      try {
        await readRobotPositionRegisters();
      } catch {
      }
    }
    await runRobotExportAutoCheck({ force: manual });
  } catch (error) {
    if (error.name === "AbortError") {
      setRobotOnlineUi("offline", robotOnlineAddress ? `Connection canceled. Saved robot: ${robotOnlineAddress}` : "Connection canceled.");
      if (manual) projectStatus.textContent = "Robot connection canceled.";
      return;
    }
    setRobotOnlineUi("offline", `Connection failed: ${error.message}`);
    if (manual) {
      projectStatus.textContent = `Robot connection failed: ${error.message}`;
    }
  } finally {
    robotOnlineChecking = false;
    robotOnlineAbortController = null;
  }
}

function startRobotOnlineMonitor() {
  if (robotOnlineTimer) clearInterval(robotOnlineTimer);
  robotOnlineTimer = setInterval(() => {
    checkRobotOnline().catch(() => {});
  }, robotOnlinePollMs);
}

async function runRobotExportAutoCheck({ force = false } = {}) {
  if (!project || !robotOnlineAddress) return;
  if (!force && robotExportAutoCheckedAddress === robotOnlineAddress) return;
  robotExportAutoCheckedAddress = robotOnlineAddress;
  robotExportAddressInput.value = robotOnlineAddress;
  try {
    await checkRobotExportConnection({ automatic: true });
  } catch (error) {
    robotExportConnected = false;
    robotExportRemoteFiles = [];
    renderRobotExportRequirements({
      ftpInterface: { available: false, message: error.message },
      asciiProgramLoader: { available: false, message: error.message }
    });
    robotExportStatus.textContent = `Automatic Robot Export connection check failed: ${error.message}`;
    renderRobotExportPrograms();
  }
}

function updateRobotExportButtons() {
  const selectable = robotExportPrograms.filter((item) => item.valid);
  const selected = selectable.filter((item) => item.selected);
  const exportableSelected = selected.filter((item) => item.canExport);
  const importableSelected = selected.filter((item) => item.canImport);
  const robotOnline = robotOnlineStatus === "online";
  setRobotOnlineActionState(selectAllRobotExportBtn, !robotOnline || !robotExportConnected || selectable.length === 0);
  setRobotOnlineActionState(clearRobotExportBtn, !robotOnline || selected.length === 0);
  setRobotOnlineActionState(exportSelectedProgramsBtn, !robotOnline || robotLsLoadActive || !robotExportConnected || exportableSelected.length === 0);
  setRobotOnlineActionState(
    importSelectedProgramsBtn,
    !robotOnline || robotLsLoadActive || !robotExportConnected || importableSelected.length === 0,
    "Download the selected LS programs from the online robot, create missing project files, and archive each replaced project copy in Trash."
  );
  robotExportSummary.textContent = `${selected.length} selected of ${selectable.length} available program${selectable.length === 1 ? "" : "s"} (${exportableSelected.length} exportable, ${importableSelected.length} importable).`;
}

function renderRobotExportRequirements(requirements = null) {
  const items = [
    ["FTP Interface (R796)", requirements?.ftpInterface],
    ["ASCII Program Loader (J716)", requirements?.asciiProgramLoader]
  ];
  robotExportRequirementsStatus.innerHTML = items.map(([label, requirement]) => {
    const status = requirement?.available === true
      ? ["Available", "requirement-available"]
      : requirement?.available === false
        ? ["Not available", "requirement-missing"]
        : ["Not checked", "requirement-unknown"];
    const title = requirement?.message ? ` title="${escapeHtml(requirement.message)}"` : "";
    return `<div><span>${escapeHtml(label)}</span><strong class="${status[1]}"${title}>${status[0]}</strong></div>`;
  }).join("");
}

function setRobotExportTool(tool) {
  activeRobotExportTool = tool === "comments" ? "comments" : "programs";
  const commentsActive = activeRobotExportTool === "comments";
  robotExportProgramsTab.setAttribute("aria-selected", String(!commentsActive));
  robotExportCommentsTab.setAttribute("aria-selected", String(commentsActive));
  robotExportProgramsPanel.hidden = commentsActive;
  robotExportCommentsPanel.hidden = !commentsActive;
}
function setLiveRobotTool(tool) {
  activeLiveRobotTool = ["overview", "program-monitor", "numeric-registers", "position-registers"].includes(tool) ? tool : "overview";
  const overviewActive = activeLiveRobotTool === "overview";
  const programActive = activeLiveRobotTool === "program-monitor";
  const numericActive = activeLiveRobotTool === "numeric-registers";
  const prActive = activeLiveRobotTool === "position-registers";
  robotLiveOverviewTab.setAttribute("aria-selected", String(overviewActive));
  robotLiveProgramTab.setAttribute("aria-selected", String(programActive));
  robotLiveNumericTab.setAttribute("aria-selected", String(numericActive));
  robotLivePrTab.setAttribute("aria-selected", String(prActive));
  robotLiveOverviewPanel.hidden = !overviewActive;
  robotLiveProgramPanel.hidden = !programActive;
  robotLiveNumericPanel.hidden = !numericActive;
  robotLivePrPanel.hidden = !prActive;
  if (programActive && robotOnlineStatus === "online") readRobotProgramMonitor().catch(() => {});
  if (numericActive) readRobotRegistersAndFlags({ force: true }).catch(() => {});
  if (prActive) readRobotPositionRegisters().catch(() => {});
}
function setRobotExportInstructionsOpen(open) {
  robotExportInstructionsContent.hidden = !open;
  robotExportInstructionsToggle.setAttribute("aria-expanded", String(open));
  robotExportInstructionsToggle.querySelector("span:last-child").textContent = open ? "-" : "+";
  localStorage.setItem(robotExportInstructionsCollapsedKey, String(!open));
}

function setLiveRobotOverviewInstructionsOpen(open) {
  liveRobotOverviewInstructionsContent.hidden = !open;
  liveRobotOverviewInstructionsToggle.setAttribute("aria-expanded", String(open));
  liveRobotOverviewInstructionsToggle.querySelector("span:last-child").textContent = open ? "-" : "+";
  localStorage.setItem(liveRobotOverviewInstructionsCollapsedKey, String(!open));
}

function renderRobotExportPrograms(remoteFiles = null) {
  if (!project) {
    robotExportPrograms = [];
    robotExportRemoteFiles = [];
    robotExportTableWrap.innerHTML = "";
    updateRobotExportButtons();
    return;
  }
  saveCurrentBuffer();
  saveSplitBuffer();
  if (remoteFiles) robotExportRemoteFiles = remoteFiles.map((name) => String(name).toUpperCase());
  const inventoryFiles = remoteFiles ? robotExportRemoteFiles : robotExportRemoteFiles;
  const existingSelection = new Map(robotExportPrograms.map((item) => [item.key || item.fileId, item.selected]));
  const existingResults = new Map(robotExportPrograms.map((item) => [item.key || item.fileId, item.result]));
  const existingErrorLocations = new Map(robotExportPrograms.map((item) => [item.key || item.fileId, item.errorLocation]));
  const remoteSet = inventoryFiles.length ? new Set(inventoryFiles) : null;
  const remotePrograms = new Map();
  inventoryFiles.forEach((name) => {
    const remoteName = String(name || "").toUpperCase();
    const programName = robotExportProgramNameFromRemoteFile(remoteName);
    if (!programName) return;
    const entry = remotePrograms.get(programName) || { programName, remoteLs: false, remoteTp: false };
    if (remoteName.endsWith(".LS")) entry.remoteLs = true;
    if (remoteName.endsWith(".TP")) entry.remoteTp = true;
    remotePrograms.set(programName, entry);
  });
  const projectProgramNames = new Set();
  const projectRows = project.files.map((file) => {
    const programName = robotExportProgramName(file);
    const valid = Boolean(programName) && programName.length <= 36;
    if (valid) projectProgramNames.add(programName);
    const remoteLs = valid && remoteSet?.has(`${programName}.LS`);
    const remoteTp = valid && remoteSet?.has(`${programName}.TP`);
    const key = `project:${file.id}`;
    return {
      key,
      fileId: file.id,
      file,
      programName,
      remoteName: valid ? `${programName}.LS` : "",
      valid,
      canExport: valid,
      canImport: valid && Boolean(remoteLs || remoteTp),
      projectMissing: false,
      remoteLs: Boolean(remoteLs),
      remoteTp: Boolean(remoteTp),
      selected: valid && Boolean(existingSelection.get(key)),
      result: existingResults.get(key) || "",
      errorLocation: existingErrorLocations.get(key) || null
    };
  });
  const remoteOnlyRows = [...remotePrograms.values()]
    .filter((item) => !projectProgramNames.has(item.programName))
    .sort((a, b) => a.programName.localeCompare(b.programName, undefined, { numeric: true, sensitivity: "base" }))
    .map((item) => {
      const key = `robot:${item.programName}`;
      return {
        key,
        fileId: "",
        file: null,
        programName: item.programName,
        remoteName: `${item.programName}.LS`,
        valid: true,
        canExport: false,
        canImport: Boolean(item.remoteLs || item.remoteTp),
        projectMissing: true,
        remoteLs: Boolean(item.remoteLs),
        remoteTp: Boolean(item.remoteTp),
        selected: Boolean(existingSelection.get(key)),
        result: existingResults.get(key) || "",
        errorLocation: existingErrorLocations.get(key) || null
      };
    });
  robotExportPrograms = [...projectRows, ...remoteOnlyRows];

  robotExportTableWrap.innerHTML = robotExportPrograms.length ? `
    <table class="robot-comments-table">
      <thead><tr><th>Select</th><th>Project File</th><th>Robot Program</th><th>Robot Status</th><th>Result</th></tr></thead>
      <tbody>
        ${robotExportPrograms.map((item, index) => {
          const exists = item.remoteLs || item.remoteTp;
          const robotStatus = !item.valid
            ? "Invalid or missing /PROG name"
            : item.projectMissing
              ? `Available on robot, not in project${item.remoteLs ? " LS" : ""}${item.remoteTp ? " TP" : ""}`
              : exists
              ? `Exists${item.remoteLs ? " LS" : ""}${item.remoteTp ? " TP" : ""} - will be replaced`
              : robotExportConnected ? "New program" : "Connection not checked";
          return `
            <tr>
              <td><input type="checkbox" data-robot-export-index="${index}" ${item.selected ? "checked" : ""} ${!item.valid || !robotExportConnected ? "disabled" : ""} aria-label="Select ${escapeHtml(item.programName || item.file?.name || "program")}"></td>
              <td>${item.file ? `${escapeHtml(item.file.name)}${item.file.dirty ? " *" : ""}` : `<span class="muted-position">Not in project</span>`}</td>
              <td>${escapeHtml(item.programName || "(invalid)")}</td>
              <td class="${item.projectMissing ? "robot-export-success" : item.remoteLs || item.remoteTp ? "robot-export-overwrite" : ""}">${escapeHtml(robotStatus)}</td>
              <td class="${item.result?.startsWith("Success") ? "robot-export-success" : item.result ? "robot-export-failure" : ""}">
                <div>${escapeHtml(item.result || "")}</div>
                ${item.errorLocation ? `<button class="robot-export-go-to-error" type="button" data-robot-export-error-index="${index}">Go to Error (Ln ${item.errorLocation.line}, Col ${item.errorLocation.column})</button>` : ""}
              </td>
            </tr>
          `;
        }).join("")}
      </tbody>
    </table>
  ` : `<div class="assignment-empty">No LS files are available in this project.</div>`;
  updateRobotExportButtons();
}

async function checkRobotExportConnection({ automatic = false } = {}) {
  if (!project) throw new Error("Open a project before connecting to a robot.");
  const robotOrigin = requireOnlineRobot("check Robot Export");
  checkRobotExportBtn.disabled = true;
  exportSelectedProgramsBtn.disabled = true;
  importSelectedProgramsBtn.disabled = true;
  robotExportStatus.textContent = `${automatic ? "Go Online connected. Checking" : "Checking"} FTP and ASCII Program Loader at ${robotOrigin}...`;
  renderRobotExportRequirements();
  try {
    const result = await callRobotExportApi("/robot-export/preflight", { robotAddress: robotOrigin });
    renderRobotExportRequirements(result.requirements);
    robotExportConnected = Boolean(result.ready);
    renderRobotExportPrograms(result.files || []);
    await persistProjectRobotSettings(robotOnlineAddress);
    robotExportStatus.textContent = result.ready
      ? `${automatic ? "Automatic check complete. " : ""}Robot Export is ready at ${result.ftpHost}. Both required options are available and ${result.files.length} robot files were inventoried.`
      : `${automatic ? "Automatic check complete. " : ""}Robot Export is not ready at ${result.ftpHost}. Review the required-option results above.`;
  } finally {
    setRobotOnlineActionState(checkRobotExportBtn, robotOnlineStatus !== "online");
  }
}

async function exportSelectedPrograms() {
  saveCurrentBuffer();
  saveSplitBuffer();
  const selected = robotExportPrograms.filter((item) => item.selected && item.valid && item.canExport);
  if (!selected.length) return;
  const overwrite = selected.filter((item) => item.remoteLs || item.remoteTp);
  const robotOrigin = requireOnlineRobot("export programs");
  const dirty = selected.filter((item) => item.file.dirty);
  const warning = [
    `Export ${selected.length} selected LS program${selected.length === 1 ? "" : "s"} to ${robotOnlineAddress}?`,
    overwrite.length ? `REPLACE EXISTING ROBOT PROGRAMS: ${overwrite.map((item) => item.programName).join(", ")}.` : "",
    dirty.length ? `Current unsaved editor contents will be exported for: ${dirty.map((item) => item.file.name).join(", ")}.` : "",
    "Do not continue if any target program is running or selected for execution."
  ].filter(Boolean).join("\n\n");
  if (!confirm(warning)) {
    robotExportStatus.textContent = "Robot Export cancelled.";
    return;
  }

  checkRobotExportBtn.disabled = true;
  exportSelectedProgramsBtn.disabled = true;
  importSelectedProgramsBtn.disabled = true;
  robotExportStatus.textContent = `Exporting ${selected.length} LS program${selected.length === 1 ? "" : "s"}...`;
  try {
    const result = await callRobotExportApi("/robot-export/upload", {
      robotAddress: robotOrigin,
      allowOverwrite: true,
      files: selected.map((item) => ({
        name: item.remoteName,
        content: item.file.content,
        allowOverwrite: true
      }))
    });
    const resultMap = new Map(result.results.map((item) => [item.name.toUpperCase(), item]));
    robotExportPrograms.forEach((item) => {
      const exported = resultMap.get(item.remoteName.toUpperCase());
      if (!exported) return;
      const compatibilityUpdates = robotExportStringList(exported.compatibilityUpdates);
      const compatibilityNote = compatibilityUpdates.length
        ? `; ${compatibilityUpdates.join(" ")}`
        : "";
      const successMessage = item.remoteLs || item.remoteTp
        ? `Existing robot program replaced${exported.tpUpdated ? " and TP rebuild verified" : ""}`
        : exported.tpUpdated ? "LS uploaded and TP rebuild verified" : "LS and TP present";
      item.result = exported.success && !exported.error
        ? `Success: ${successMessage}${compatibilityNote}`
        : `${exported.success ? "Review" : "Failed"}: ${exported.error || "upload could not be verified"}`;
      item.errorLocation = exported.success && !exported.error ? null : robotExportErrorLocation(exported);
      item.selected = false;
    });
    renderRobotExportPrograms(result.files || []);
    const failures = result.results.filter((item) => !item.success || !item.tpPresent || item.error);
    robotExportStatus.textContent = failures.length
      ? `Export completed with ${failures.length} item${failures.length === 1 ? "" : "s"} requiring review. Do not run unverified programs.`
      : `Export completed. All ${result.results.length} LS and TP program${result.results.length === 1 ? "" : "s"} were verified on the robot.`;
  } finally {
    setRobotOnlineActionState(checkRobotExportBtn, robotOnlineStatus !== "online");
    updateRobotExportButtons();
  }
}

async function importSelectedPrograms() {
  const selected = robotExportPrograms.filter((item) => item.selected && item.valid && item.canImport);
  if (!selected.length) return;
  if (!project?.lsDirectoryHandle?.getDirectoryHandle) {
    throw new Error("Reconnect the project folder before importing so each current LS file can be archived in Trash.");
  }

  const robotOrigin = requireOnlineRobot("import programs");
  const selectedNames = selected.map((item) => item.remoteName).join(", ");
  const newPrograms = selected.filter((item) => item.projectMissing);
  const replacements = selected.filter((item) => item.file);
  const shouldImport = confirm(
    `Import ${selected.length} selected LS program${selected.length === 1 ? "" : "s"} from ${robotOnlineAddress}?\n\n`
    + `${selectedNames}\n\n`
    + `${replacements.length ? "Existing project copies will first be archived in Trash with a timestamp. " : ""}`
    + `${newPrograms.length ? "Robot-only programs will be added as new LS files in the project. " : ""}`
    + "Continue?"
  );
  if (!shouldImport) {
    robotExportStatus.textContent = "Robot program import cancelled.";
    return;
  }

  saveCurrentBuffer();
  saveSplitBuffer();
  robotLsLoadActive = true;
  checkRobotExportBtn.disabled = true;
  updateLoadLsFromRobotButton();
  updateRobotExportButtons();
  try {
    robotExportStatus.textContent = `Checking ${selected.length} selected LS program${selected.length === 1 ? "" : "s"} on ${robotOnlineAddress}...`;
    const inventory = await callRobotExportApi("/robot-backup/inventory", { robotAddress: robotOrigin });
    const availableFiles = new Set((inventory.files || []).map((name) => String(name).toUpperCase()));
    const missing = selected.filter((item) => (
      !availableFiles.has(item.remoteName.toUpperCase())
      && !availableFiles.has(`${item.programName}.TP`)
    ));
    if (missing.length) {
      throw new Error(`Import cancelled before any project files were changed. Missing robot LS file${missing.length === 1 ? "" : "s"}: ${missing.map((item) => item.remoteName).join(", ")}.`);
    }

    const downloads = [];
    for (let index = 0; index < selected.length; index += 1) {
      const item = selected[index];
      robotExportStatus.textContent = `Downloading ${index + 1} of ${selected.length}: ${item.remoteName}...`;
      downloads.push({ item, content: await downloadRobotLsProgram(robotOrigin, item.remoteName) });
    }

    const importedFileIds = new Set();
    const archiveDate = new Date();
    const addedFiles = [];
    const replacedFiles = [];
    for (let index = 0; index < downloads.length; index += 1) {
      const { item, content } = downloads[index];
      if (item.file) {
        robotExportStatus.textContent = `Replacing ${index + 1} of ${downloads.length}: ${item.file.name}...`;
        const trashFileName = await archiveAndReplaceProjectLs(item.file, content, archiveDate);
        importedFileIds.add(item.fileId);
        replacedFiles.push(item.remoteName);
        item.result = `Success: Imported ${item.remoteName}; previous project copy archived as Trash\\${trashFileName}`;
      } else {
        robotExportStatus.textContent = `Adding ${index + 1} of ${downloads.length}: ${item.remoteName}...`;
        const newFile = await createProjectLsFromRobot(item.remoteName, content);
        importedFileIds.add(newFile.id);
        addedFiles.push(newFile.name);
        item.fileId = newFile.id;
        item.file = newFile;
        item.projectMissing = false;
        item.canExport = true;
        item.result = `Success: Imported ${item.remoteName}; added new project file ${newFile.name}`;
      }
      item.errorLocation = null;
      item.selected = false;
    }

    refreshAfterRobotLsImports(importedFileIds);
    renderRobotExportPrograms(inventory.files || []);
    robotExportStatus.textContent = `Imported ${downloads.length} LS program${downloads.length === 1 ? "" : "s"} from ${robotOnlineAddress}. ${addedFiles.length ? `Added ${addedFiles.length}: ${addedFiles.join(", ")}. ` : ""}${replacedFiles.length ? `Replaced ${replacedFiles.length}; previous project copies were archived in Trash.` : ""}`;
  } finally {
    robotLsLoadActive = false;
    setRobotOnlineActionState(checkRobotExportBtn, robotOnlineStatus !== "online");
    updateLoadLsFromRobotButton();
    updateRobotExportButtons();
  }
}

function goToRobotExportError(item) {
  if (!item?.file || !item.errorLocation) return;
  saveCurrentBuffer();
  saveSplitBuffer();
  if (currentFileId !== item.fileId) switchFile(item.fileId);

  headerVisible = true;
  localStorage.setItem("robo-programmer-header-visible", "true");
  setWorkspaceView("editor");
  setActiveEditor("main");
  loadCurrentFileIntoEditor();

  const lines = editor.value.replace(/\r\n/g, "\n").split("\n");
  const lineIndex = Math.max(0, Math.min(item.errorLocation.line - 1, lines.length - 1));
  const columnIndex = Math.max(0, item.errorLocation.column - 1);
  const target = indexFromLineColumn(lines, lineIndex, columnIndex);
  editor.focus();
  editor.setSelectionRange(target, target);
  const lineHeight = Number.parseFloat(getComputedStyle(editor).lineHeight) || 22;
  editor.scrollTop = Math.max(0, lineIndex * lineHeight - editor.clientHeight / 2);
  hideSuggestions();
  syncHighlightScroll();
  updateCursorStatus();
  flashEditorLine(lineIndex);
  projectStatus.textContent = `Robot Export reported an error in ${item.file.name} at source line ${item.errorLocation.line}, column ${item.errorLocation.column}.`;
}

function robotBackupModeLabel(mode = robotBackupMode.value) {
  if (mode === "ls") return "ASCII Programs";
  if (mode === "tp") return "TP Programs";
  return "All Available Robot Files";
}

function robotBackupModeFiles() {
  const extension = robotBackupMode.value === "ls" ? ".LS" : robotBackupMode.value === "tp" ? ".TP" : "";
  const files = extension
    ? robotBackupInventory.filter((item) => item.name.endsWith(extension))
    : robotBackupInventory;
  return [...files].sort((a, b) => (
    robotBackupSort.value === "type"
      ? a.extension.localeCompare(b.extension, undefined, { sensitivity: "base" })
        || a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: "base" })
      : a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: "base" })
  ));
}

function updateRobotBackupButtons() {
  const files = robotBackupModeFiles();
  const selected = files.filter((item) => item.selected);
  const robotOnline = robotOnlineStatus === "online";
  setRobotOnlineActionState(selectAllRobotBackupBtn, !robotOnline || !robotBackupConnected || !files.length || selected.length === files.length);
  setRobotOnlineActionState(clearRobotBackupBtn, !robotOnline || !selected.length);
  setRobotOnlineActionState(backupSelectedRobotFilesBtn, !robotOnline || robotBackupActive || !robotBackupConnected || !selected.length || !project?.directoryHandle);
  setRobotOnlineActionState(inventoryRobotBackupBtn, !robotOnline || robotBackupActive);
  robotBackupMode.disabled = robotBackupActive;
  robotBackupSort.disabled = robotBackupActive;
  robotBackupSummary.textContent = `${selected.length} selected of ${files.length} available ${robotBackupModeLabel().toLowerCase()}.`;
}

function renderRobotBackupFiles(selectAll = false) {
  const files = robotBackupModeFiles();
  if (selectAll) files.forEach((item) => { item.selected = true; });
  robotBackupTableWrap.innerHTML = files.length ? `
    <table class="robot-comments-table">
      <thead><tr><th>Back Up</th><th>Robot File</th><th>File Type</th></tr></thead>
      <tbody>
        ${files.map((item) => `
          <tr>
            <td><input type="checkbox" data-robot-backup-name="${escapeHtml(item.name)}" ${item.selected ? "checked" : ""} aria-label="Back up ${escapeHtml(item.name)}"></td>
            <td>${escapeHtml(item.name)}</td>
            <td>${escapeHtml(item.extension || "(none)")}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  ` : `<div class="assignment-empty">No files match the selected backup type.</div>`;
  updateRobotBackupButtons();
}

async function inventoryRobotBackupFiles() {
  if (!project?.directoryHandle) throw new Error("Open a saved project folder before backing up a robot.");
  const robotOrigin = requireOnlineRobot("inventory robot files");
  inventoryRobotBackupBtn.disabled = true;
  backupSelectedRobotFilesBtn.disabled = true;
  robotBackupProgressWrap.hidden = true;
  robotBackupStatus.textContent = `Reading the robot file inventory from ${robotOrigin}...`;
  try {
    const result = await callRobotExportApi("/robot-backup/inventory", { robotAddress: robotOrigin });
    robotBackupInventory = result.files.map((name) => {
      const normalized = String(name).toUpperCase();
      return {
        name: normalized,
        extension: normalized.includes(".") ? `.${normalized.split(".").at(-1)}` : "",
        selected: true
      };
    }).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: "base" }));
    robotBackupConnected = true;

    renderRobotBackupFiles(true);
    robotBackupStatus.textContent = `Inventoried ${robotBackupInventory.length} files from ${result.ftpHost}. Review the selected ${robotBackupModeLabel().toLowerCase()} before creating the backup.`;
  } finally {
    setRobotOnlineActionState(inventoryRobotBackupBtn, robotOnlineStatus !== "online");
  }
}

function robotBackupTimestamp(date = new Date()) {
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}-${pad(date.getHours())}${pad(date.getMinutes())}${pad(date.getSeconds())}`;
}

function setRobotBackupProgress(completed, total, message) {
  robotBackupProgressWrap.hidden = false;
  robotBackupProgress.max = Math.max(1, total);
  robotBackupProgress.value = Math.min(completed, total);
  robotBackupProgressText.textContent = message;
}

async function backupSelectedRobotFiles() {
  const selected = robotBackupModeFiles().filter((item) => item.selected);
  if (!selected.length) return;
  if (!project?.directoryHandle) throw new Error("Reconnect the project folder before creating a robot backup.");
  const robotOrigin = requireOnlineRobot("back up robot files");
  const shouldBackup = confirm(`Back up ${selected.length} selected ${robotBackupModeLabel().toLowerCase()} from ${robotOnlineAddress} into this project's Robot Backups folder?`);
  if (!shouldBackup) return;

  robotBackupActive = true;
  updateRobotBackupButtons();
  robotBackupStatus.textContent = `Downloading ${selected.length} robot file${selected.length === 1 ? "" : "s"}...`;
  setRobotBackupProgress(0, selected.length, `Starting download of ${selected.length} files...`);
  try {
    const entries = [];
    const results = [];
    for (let index = 0; index < selected.length; index += 1) {
      const item = selected[index];
      setRobotBackupProgress(index, selected.length, `Downloading ${index + 1} of ${selected.length}: ${item.name}`);
      try {
        const response = await fetch("/robot-backup/file", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ robotAddress: robotOrigin, file: item.name })
        });
        if (!response.ok) {
          const result = await response.json().catch(() => ({}));
          throw new Error(result.error || `HTTP ${response.status}`);
        }
        const bytes = new Uint8Array(await response.arrayBuffer());
        entries.push({ path: item.name, bytes, lastModified: Date.now() });
        results.push({ name: item.name, success: true, bytes: bytes.length, error: "" });
      } catch (error) {
        results.push({ name: item.name, success: false, bytes: 0, error: error.message });
      }
      setRobotBackupProgress(index + 1, selected.length, `Downloaded ${index + 1} of ${selected.length}: ${item.name}`);
    }
    const successful = results.filter((item) => item.success).length;
    const failed = results.length - successful;
    setRobotBackupProgress(selected.length, selected.length, `Packaging ${successful} downloaded files into a ZIP...`);
    const manifest = {
      format: "robo-programmer-robot-backup",
      version: 1,
      createdAt: new Date().toISOString(),
      robotAddress: robotOrigin,
      backupMode: robotBackupMode.value,
      requestedFileCount: results.length,
      successfulFileCount: successful,
      failedFileCount: failed,
      files: results
    };
    entries.push({
      path: "robot-backup-manifest.json",
      bytes: new TextEncoder().encode(JSON.stringify(manifest, null, 2)),
      lastModified: Date.now()
    });
    const backupBlob = await createZipBlob(entries);
    const backupDirectory = project.robotBackupsDirectoryHandle
      || await project.directoryHandle.getDirectoryHandle("Robot Backups", { create: true });
    project.robotBackupsDirectoryHandle = backupDirectory;
    const modeName = robotBackupMode.value === "ls" ? "ASCII Programs" : robotBackupMode.value === "tp" ? "TP Programs" : "All Available Files";
    const fileName = `Robot Backup - ${modeName} - ${robotBackupTimestamp()}.zip`;
    await writeBinaryFile(backupDirectory, fileName, backupBlob);
    setRobotBackupProgress(selected.length, selected.length, `Complete: ${successful} downloaded, ${failed} failed.`);
    robotBackupStatus.textContent = `Backup complete. Saved ${fileName} in the project's Robot Backups folder.${failed ? ` ${failed} file${failed === 1 ? "" : "s"} failed; review the manifest.` : ""}`;
  } finally {
    robotBackupActive = false;
    updateRobotBackupButtons();
  }
}

function formatRobotPositionNumber(value, suffix = "") {
  const number = Number(value);
  if (!Number.isFinite(number)) return "";
  return `${number.toFixed(2)}${suffix}`;
}

function renderRobotPositionPairs(container, pairs, emptyMessage) {
  const rows = pairs.filter((item) => item.value !== "" && item.value !== null && item.value !== undefined);
  container.classList.toggle("muted-position", rows.length === 0);
  container.innerHTML = rows.length
    ? rows.map((item) => `
      <div class="robot-position-value">
        <strong>${escapeHtml(item.label)}</strong>
        <span>${escapeHtml(item.value)}</span>
      </div>
    `).join("")
    : escapeHtml(emptyMessage);
}

function robotPositionValuePairs(values = {}, linearSuffix = " mm", angularSuffix = " deg") {
  return ["X", "Y", "Z", "W", "P", "R"].map((axis) => ({
    label: axis,
    value: formatRobotPositionNumber(values[axis], ["X", "Y", "Z"].includes(axis) ? linearSuffix : angularSuffix)
  }));
}

function robotExtAxisPairs(extAxes = []) {
  const axes = Array.isArray(extAxes) ? extAxes : extAxes ? [extAxes] : [];
  return axes.map((item) => ({
    label: item.axis,
    value: formatRobotPositionNumber(item.value)
  }));
}

function resetRobotPositionDisplay() {
  stopRobotPositionLive();
  robotPositionRequestActive = false;
  robotPositionStatus.textContent = "Go Online to load live robot data.";
  robotPositionSummary.textContent = "";
  robotPositionJoints.classList.add("muted-position");
  robotPositionUserFrame.classList.add("muted-position");
  robotPositionWorld.classList.add("muted-position");
  robotPositionJoints.textContent = "No joint data yet.";
  robotPositionUserFrame.textContent = "No user-frame data yet.";
  robotPositionWorld.textContent = "No world data yet.";
  liveRobotAlarms.classList.add("muted-position");
  liveRobotAlarms.textContent = "Go Online to load alarms.";
  resetRobotPositionRegisters();
  resetRobotNumericRegisters();
  resetRobotFlags();
  readRobotPositionBtn.disabled = false;
  startRobotPositionBtn.disabled = false;
  stopRobotPositionBtn.disabled = true;
  resetRobotProgramMonitor();
}

function renderLiveRobotAlarms(alarms = [], warnings = []) {
  const alarmLines = Array.isArray(alarms) ? alarms.filter(Boolean) : [];
  const warningLines = Array.isArray(warnings) ? warnings.filter(Boolean) : [];
  const lines = alarmLines.length ? alarmLines : warningLines;
  liveRobotAlarms.classList.toggle("muted-position", lines.length === 0);
  liveRobotAlarms.innerHTML = lines.length
    ? lines.map((line) => `
      <div class="robot-position-value live-robot-alarm-line">
        <strong>${alarmLines.length ? "Alarm" : "Note"}</strong>
        <span>${escapeHtml(line)}</span>
      </div>
    `).join("")
    : "No active or recent alarm lines were returned.";
}

function renderLiveRobotState(snapshot) {
  const position = snapshot.position || snapshot;
  renderRobotPosition(position);
  renderLiveRobotAlarms(snapshot.alarms, snapshot.warnings);
}

function robotProgramStatusClass(status) {
  const normalized = String(status || "unknown").toLowerCase();
  return ["running", "paused", "held", "waiting", "aborted", "faulted", "idle"].includes(normalized)
    ? normalized
    : "unknown";
}

function robotProgramStatusBadge(status) {
  const text = String(status || "Unknown").toUpperCase();
  return `<span class="robot-program-status-badge robot-program-status-${robotProgramStatusClass(text)}">${escapeHtml(text)}</span>`;
}

function robotProgramHistoryStorageKey(address) {
  return `${robotProgramHistoryStoragePrefix}${String(address || "unknown").trim().toLowerCase()}`;
}

function loadRobotProgramHistory(address) {
  try {
    const stored = JSON.parse(localStorage.getItem(robotProgramHistoryStorageKey(address)) || "[]");
    const history = Array.isArray(stored) ? stored : stored?.history;
    const current = !Array.isArray(stored) && stored?.current && String(stored.current.type || "").toUpperCase() !== "PC"
      ? stored.current
      : null;
    return {
      history: Array.isArray(history)
        ? history.filter((item) => item && String(item.type || "").toUpperCase() !== "PC").slice(0, robotProgramHistoryLimit)
        : [],
      current
    };
  } catch {
    return { history: [], current: null };
  }
}

function persistRobotProgramHistory() {
  if (!robotProgramHistoryAddress) return;
  localStorage.setItem(robotProgramHistoryStorageKey(robotProgramHistoryAddress), JSON.stringify({
    history: robotProgramHistory.slice(0, robotProgramHistoryLimit),
    current: robotProgramCurrentEntry
  }));
}

function robotProgramHistoryEntry(task, observedAt) {
  const program = String(task?.program || task?.name || "Unknown");
  const type = String(task?.type || "").toUpperCase();
  return {
    key: `${type}|${program}|${task?.number ?? ""}`,
    number: task?.number ?? null,
    name: String(task?.name || program),
    program,
    routine: String(task?.routine || task?.name || ""),
    type,
    status: String(task?.status || "UNKNOWN").toUpperCase(),
    line: task?.line ?? null,
    depth: task?.depth ?? 0,
    startedAt: observedAt,
    lastSeenAt: observedAt
  };
}

function archiveRobotProgramCurrentEntry(observedAt) {
  if (!robotProgramCurrentEntry) return;
  robotProgramHistory.unshift({ ...robotProgramCurrentEntry, endedAt: observedAt });
  robotProgramHistory = robotProgramHistory.slice(0, robotProgramHistoryLimit);
  robotProgramCurrentEntry = null;
  persistRobotProgramHistory();
}

function updateRobotProgramHistory(primary, address, observedAt) {
  const normalizedAddress = String(address || robotOnlineAddress || "unknown").trim().toLowerCase();
  if (robotProgramHistoryAddress !== normalizedAddress) {
    if (robotProgramHistoryAddress && robotProgramCurrentEntry) archiveRobotProgramCurrentEntry(observedAt);
    robotProgramHistoryAddress = normalizedAddress;
    const stored = loadRobotProgramHistory(normalizedAddress);
    robotProgramHistory = stored.history;
    robotProgramCurrentEntry = stored.current;
  }

  const currentTask = primary && primary.active && String(primary.type || "").toUpperCase() !== "PC" ? primary : null;
  if (!currentTask) {
    archiveRobotProgramCurrentEntry(observedAt);
    return { current: null, history: robotProgramHistory };
  }

  const nextEntry = robotProgramHistoryEntry(currentTask, observedAt);
  if (robotProgramCurrentEntry?.key === nextEntry.key) {
    robotProgramCurrentEntry = {
      ...robotProgramCurrentEntry,
      status: nextEntry.status,
      line: nextEntry.line,
      routine: nextEntry.routine,
      depth: nextEntry.depth,
      lastSeenAt: observedAt
    };
    persistRobotProgramHistory();
  } else {
    archiveRobotProgramCurrentEntry(observedAt);
    robotProgramCurrentEntry = nextEntry;
    persistRobotProgramHistory();
  }
  return { current: robotProgramCurrentEntry, history: robotProgramHistory };
}

function robotProgramHistoryTime(value) {
  const date = value ? new Date(value) : null;
  return !date || Number.isNaN(date.getTime()) ? "—" : date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

function resetRobotProgramMonitor() {
  robotProgramMonitorRequestActive = false;
  robotProgramMonitorStatus.textContent = "Open this tab while online to monitor program execution.";
  robotProgramMonitorHero.classList.add("muted-position");
  robotProgramMonitorHero.textContent = "Waiting for live program data.";
  robotProgramTaskCount.textContent = "0 tasks";
  robotProgramTaskList.classList.add("muted-position");
  robotProgramTaskList.textContent = "No task data yet.";
  robotProgramSource.classList.add("muted-position");
  robotProgramSource.textContent = "Source context appears when a TP task is available.";
}

function renderRobotProgramMonitor(snapshot = {}) {
  const tasks = (Array.isArray(snapshot.tasks) ? snapshot.tasks : [])
    .filter((task) => String(task?.type || "").toUpperCase() !== "PC");
  const snapshotPrimary = snapshot.primaryTask?.active && String(snapshot.primaryTask.type || "").toUpperCase() !== "PC"
    ? snapshot.primaryTask
    : null;
  const primary = snapshotPrimary
    || tasks.find((task) => task.status === "RUNNING" && task.type === "TP")
    || tasks.find((task) => task.status === "RUNNING")
    || tasks.find((task) => task.active && task.type === "TP")
    || tasks.find((task) => task.active)
    || null;
  const source = Array.isArray(snapshot.source) ? snapshot.source : [];
  const warnings = Array.isArray(snapshot.warnings) ? snapshot.warnings.filter(Boolean) : [];
  const captured = snapshot.capturedAt ? new Date(snapshot.capturedAt) : new Date();
  const capturedText = Number.isNaN(captured.getTime()) ? "just now" : captured.toLocaleTimeString();
  const observedAt = Number.isNaN(captured.getTime()) ? new Date().toISOString() : captured.toISOString();
  const activity = updateRobotProgramHistory(primary, snapshot.robotAddress || robotOnlineAddress, observedAt);

  robotProgramMonitorStatus.textContent = `Updated ${capturedText} from ${snapshot.robotAddress || robotOnlineAddress}.${warnings.length ? ` ${warnings.join(" ")}` : ""}`;
  robotProgramMonitorHero.classList.toggle("muted-position", !primary);
  robotProgramMonitorHero.innerHTML = primary ? `
    <div class="robot-program-primary">
      <div class="robot-program-primary-main">
        ${robotProgramStatusBadge(primary.status)}
        <div class="robot-program-primary-name">${escapeHtml(primary.program || primary.name || "Unknown task")}</div>
        <div class="robot-program-primary-routine">${escapeHtml(primary.historical ? "Last recorded location" : "Current location")}: ${escapeHtml(primary.routine || primary.name || "Unknown routine")}</div>
      </div>
      <div class="robot-program-metric"><span>Line</span><strong>${escapeHtml(primary.line ?? "—")}</strong></div>
      <div class="robot-program-metric"><span>Task</span><strong>#${escapeHtml(primary.number ?? "—")}</strong></div>
      <div class="robot-program-metric"><span>Type</span><strong>${escapeHtml(primary.type || "—")}</strong></div>
      <div class="robot-program-metric"><span>Call Depth</span><strong>${escapeHtml(primary.depth ?? 0)}</strong></div>
    </div>
  ` : `<div class="robot-program-monitor-note">No TP or vision tasks are currently reported by the controller.</div>`;

  robotProgramTaskCount.textContent = `${activity.current ? "1 current" : "No current program"} · ${activity.history.length} recent`;
  robotProgramTaskList.classList.toggle("muted-position", !activity.current && activity.history.length === 0);
  const currentMarkup = activity.current ? `
    <div class="robot-program-activity-label">Current Program</div>
    <div class="robot-program-task-row is-primary">
      <span class="robot-program-task-number">#${escapeHtml(activity.current.number ?? "—")}</span>
      <strong class="robot-program-task-name" title="${escapeHtml(activity.current.name)}">${escapeHtml(activity.current.name)}</strong>
      ${robotProgramStatusBadge(activity.current.status)}
      <span class="robot-program-task-program" title="${escapeHtml(activity.current.program)}">${escapeHtml(activity.current.program)}</span>
      <span class="robot-program-task-type">${escapeHtml(activity.current.type || "—")}</span>
      <span class="robot-program-task-line">L${escapeHtml(activity.current.line ?? "—")}</span>
    </div>
  ` : "";
  const historyMarkup = activity.history.length ? `
    <div class="robot-program-activity-label robot-program-history-heading">Recent Program History</div>
    ${activity.history.map((entry) => `
      <div class="robot-program-task-row is-history">
        <span class="robot-program-task-number">#${escapeHtml(entry.number ?? "—")}</span>
        <strong class="robot-program-task-name" title="${escapeHtml(entry.name || "")}">${escapeHtml(entry.name || "Unknown")}</strong>
        <span class="robot-program-history-time" title="Ended ${escapeHtml(entry.endedAt || "")}">${escapeHtml(robotProgramHistoryTime(entry.endedAt))}</span>
        <span class="robot-program-task-program" title="${escapeHtml(entry.program || entry.routine || "")}">${escapeHtml(entry.program || entry.routine || "—")}</span>
        <span class="robot-program-task-type">${escapeHtml(entry.type || "—")}</span>
        <span class="robot-program-task-line">L${escapeHtml(entry.line ?? "—")}</span>
      </div>
    `).join("")}
  ` : "";
  robotProgramTaskList.innerHTML = (currentMarkup || historyMarkup)
    ? `${currentMarkup}${historyMarkup}`
    : "No TP or vision program activity has been observed yet.";

  robotProgramSource.classList.toggle("muted-position", source.length === 0);
  robotProgramSource.innerHTML = source.length ? source.map((line) => `
    <div class="robot-program-source-line${line.active ? " is-active" : ""}">
      <span class="robot-program-source-number">${escapeHtml(line.number ?? "")}</span>
      <span class="robot-program-source-code">${escapeHtml(line.text || "")}</span>
    </div>
  `).join("") : `<div class="robot-program-monitor-note">${escapeHtml(primary?.type === "TP"
    ? "No LS source context was returned for this TP task."
    : "Program source context is shown for TP tasks. Vision tasks remain visible in Task Activity.")}</div>`;
}

async function readRobotProgramMonitor() {
  if (robotProgramMonitorRequestActive || robotOnlineStatus !== "online") return;
  robotProgramMonitorRequestActive = true;
  if (!robotProgramTaskList.children.length) robotProgramMonitorStatus.textContent = `Reading program tasks from ${robotOnlineAddress}...`;
  try {
    const robotOrigin = requireOnlineRobot("monitor live programs");
    const snapshot = await callRobotExportApi("/robot-program-monitor/state", { robotAddress: robotOrigin });
    renderRobotProgramMonitor(snapshot);
  } catch (error) {
    robotProgramMonitorStatus.textContent = `Program Monitor unavailable: ${error.message}`;
    throw error;
  } finally {
    robotProgramMonitorRequestActive = false;
  }
}
function renderRobotPosition(snapshot) {
  const localCaptured = snapshot.capturedAt ? new Date(snapshot.capturedAt) : new Date();
  const localText = Number.isNaN(localCaptured.getTime()) ? "just now" : localCaptured.toLocaleTimeString();
  const controllerParts = [
    snapshot.controller?.version ? `Controller: ${snapshot.controller.version}` : "",
    snapshot.controller?.fNumber ? `F No: ${snapshot.controller.fNumber}` : "",
    snapshot.controllerDate ? `Robot time: ${snapshot.controllerDate}` : ""
  ].filter(Boolean);
  robotPositionSummary.innerHTML = `
    <span class="robot-position-live">Updated ${escapeHtml(localText)}</span>
    ${escapeHtml(` | Address: ${snapshot.robotAddress || ""} | Group: ${snapshot.group ?? "?"} | UF: ${snapshot.frame ?? "?"} | Tool: ${snapshot.tool ?? "?"}`)}
    ${controllerParts.length ? `<div class="robot-position-meta">${escapeHtml(controllerParts.join(" | "))}</div>` : ""}
  `;

  renderRobotPositionPairs(robotPositionJoints, [
    ...(snapshot.joints || []).map((item) => ({
      label: item.axis,
      value: formatRobotPositionNumber(item.value, " deg")
    })),
    ...robotExtAxisPairs(snapshot.jointExtAxes || [])
  ], "No joint data was returned by the robot.");

  renderRobotPositionPairs(robotPositionUserFrame, [
    { label: "UF", value: snapshot.userFrame?.frame ?? snapshot.frame ?? "" },
    { label: "Tool", value: snapshot.userFrame?.tool ?? snapshot.tool ?? "" },
    { label: "CFG", value: snapshot.userFrame?.config || "" },
    ...robotPositionValuePairs(snapshot.userFrame?.values || {}),
    ...robotExtAxisPairs(snapshot.userFrame?.extAxes || [])
  ], "No current user-frame position was returned by the robot.");

  renderRobotPositionPairs(robotPositionWorld, [
    { label: "Tool", value: snapshot.world?.tool ?? "" },
    { label: "CFG", value: snapshot.world?.config || "" },
    ...robotPositionValuePairs(snapshot.world?.values || {}),
    ...robotExtAxisPairs(snapshot.world?.extAxes || [])
  ], "No world position was returned by the robot.");
}

function formatRobotNumericValue(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return String(value ?? "");
  if (Number.isInteger(number)) return String(number);
  return number.toFixed(6).replace(/\.?0+$/, "");
}

function resetRobotNumericRegisters() {
  robotNumericRegisters = [];
  robotNumericRegistersAddress = "";
  robotNumericRegistersLoading = false;
  robotNumericRegistersUpdatedAt = "";
  robotNumericTableWrap.innerHTML = "";
}

function resetRobotFlags() {
  robotFlags = [];
  robotFlagsAddress = "";
  robotFlagsLoading = false;
  robotFlagTableWrap.innerHTML = "";
}

function renderRobotNumericRegisters() {
  const visible = robotNumericRegisters;
  const editsDisabled = robotRegisterEditsEnabled() ? "" : " disabled";
  robotNumericTableWrap.innerHTML = visible.length ? `
    <table class="robot-comments-table robot-numeric-table">
      <colgroup>
        <col class="robot-numeric-register-col">
        <col class="robot-numeric-value-col">
        <col class="robot-numeric-comment-col">
      </colgroup>
      <thead><tr><th>Register</th><th>Value</th><th>Comment</th></tr></thead>
      <tbody>
        ${visible.map((register) => {
          const comment = register.comment || "No comment";
          const value = formatRobotNumericValue(register.value);
          const rawComment = register.comment || "";
          return `
            <tr>
              <td><strong>R[${escapeHtml(register.index)}]</strong></td>
              <td>
                <input
                  class="robot-numeric-value-input"
                  type="text"
                  inputmode="decimal"
                  value="${escapeHtml(value)}"
                  data-index="${escapeHtml(register.index)}"
                  data-original="${escapeHtml(value)}"
                  aria-label="${escapeHtml(`R[${register.index}] value`)}"
                  title="${escapeHtml(value)}"${editsDisabled}>
              </td>
              <td>
                <input
                  class="robot-numeric-comment-input"
                  type="text"
                  maxlength="16"
                  value="${escapeHtml(rawComment)}"
                  data-index="${escapeHtml(register.index)}"
                  data-original="${escapeHtml(rawComment)}"
                  aria-label="${escapeHtml(`R[${register.index}] comment`)}"
                  title="${escapeHtml(comment)}"${editsDisabled}>
              </td>
            </tr>
          `;
        }).join("")}
      </tbody>
    </table>
  ` : `<div class="assignment-empty">No Numeric Register data is loaded.</div>`;
}

function robotNumericCommentEditActive() {
  return Boolean(document.activeElement?.closest?.(".robot-numeric-comment-input, .robot-numeric-value-input"));
}

function robotFlagCommentEditActive() {
  return Boolean(document.activeElement?.closest?.(".robot-flag-comment-input, .robot-flag-state-select"));
}

function cleanRobotNumericComment(value) {
  return cleanAssignmentName(value).slice(0, 16);
}

function cleanRobotFlagComment(value) {
  return cleanAssignmentName(value).slice(0, 24);
}

function robotFlagStateClass(state) {
  const normalized = String(state || "").toUpperCase();
  if (normalized === "ON") return "robot-flag-state-on";
  if (normalized === "OFF") return "robot-flag-state-off";
  return "robot-flag-state-unknown";
}

function renderRobotFlags() {
  const visible = robotFlags;
  const editsDisabled = robotRegisterEditsEnabled() ? "" : " disabled";
  robotFlagTableWrap.innerHTML = visible.length ? `
    <table class="robot-comments-table robot-numeric-table robot-flag-table">
      <colgroup>
        <col class="robot-flag-index-col">
        <col class="robot-flag-state-col">
        <col class="robot-flag-comment-col">
      </colgroup>
      <thead><tr><th>Flag</th><th>Status</th><th>Comment</th></tr></thead>
      <tbody>
        ${visible.map((flag) => {
          const state = String(flag.state || "").toUpperCase();
          const displayState = state || "--";
          const comment = flag.comment || "No comment";
          const rawComment = flag.comment || "";
          return `
            <tr>
              <td><strong>F[${escapeHtml(flag.index)}]</strong></td>
              <td>
                <select
                  class="robot-flag-state robot-flag-state-select ${robotFlagStateClass(state)}"
                  data-index="${escapeHtml(flag.index)}"
                  data-original="${escapeHtml(state)}"
                  aria-label="${escapeHtml(`F[${flag.index}] state`)}"
                  title="${escapeHtml(displayState)}"${editsDisabled}>
                  <option value="OFF"${state === "OFF" ? " selected" : ""}>OFF</option>
                  <option value="ON"${state === "ON" ? " selected" : ""}>ON</option>
                </select>
              </td>
              <td>
                <input
                  class="robot-flag-comment-input"
                  type="text"
                  maxlength="24"
                  value="${escapeHtml(rawComment)}"
                  data-index="${escapeHtml(flag.index)}"
                  data-original="${escapeHtml(rawComment)}"
                  aria-label="${escapeHtml(`F[${flag.index}] comment`)}"
                  title="${escapeHtml(comment)}"${editsDisabled}>
              </td>
            </tr>
          `;
        }).join("")}
      </tbody>
    </table>
  ` : `<div class="assignment-empty">No Flag data is loaded.</div>`;
}

function applyRobotRegisterEditState() {
  const disabled = !robotRegisterEditsEnabled();
  robotNumericTableWrap.querySelectorAll(".robot-numeric-value-input, .robot-numeric-comment-input")
    .forEach((input) => { input.disabled = disabled; });
  robotFlagTableWrap.querySelectorAll(".robot-flag-state-select, .robot-flag-comment-input")
    .forEach((input) => { input.disabled = disabled; });
}

function parseRobotNumericValue(value) {
  const text = String(value || "").trim();
  if (!/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][-+]?\d+)?$/.test(text)) {
    throw new Error("Numeric Register value must be a number.");
  }
  const number = Number(text);
  if (!Number.isFinite(number)) throw new Error("Numeric Register value must be a finite number.");
  return number;
}

async function saveRobotNumericValue(index, valueText) {
  if (!project) throw new Error("Open a project before editing Numeric Register values.");
  const value = parseRobotNumericValue(valueText);
  const robotOrigin = requireOnlineRobot("update Numeric Register values");
  const result = await callRobotExportApi("/robot-numeric-registers/set", {
    robotAddress: robotOrigin,
    register: { index, value }
  });
  const updated = result.register || { index, value };
  const register = robotNumericRegisters.find((item) => Number(item.index) === Number(index));
  if (register) register.value = Number(updated.value);
  projectStatus.textContent = `Saved R[${index}] value to robot.`;
  return formatRobotNumericValue(updated.value);
}

async function saveRobotNumericComment(index, comment) {
  if (!project) throw new Error("Open a project before editing Numeric Register comments.");
  if (!assignmentWorkbookData) {
    const workbookData = await primeAssignmentWorkbookData();
    if (!workbookData) throw new Error("No Data Assignments.xlsx workbook is connected for this project.");
  }

  const robotOrigin = requireOnlineRobot("update Numeric Register comments");
  const cleaned = cleanRobotNumericComment(comment);
  await callRobotExportApi("/robot-comments/set", {
    robotAddress: robotOrigin,
    comment: cleaned,
    index,
    writeCode: 1
  });

  const register = robotNumericRegisters.find((item) => Number(item.index) === Number(index));
  if (register) register.comment = cleaned;

  if (assignmentWorkbookData) {
    const changed = await saveAssignmentDescription("R", index, cleaned);
    const updatedFileCount = syncAssignmentChangeToLsFiles("R", index, cleaned);
    if (activeWorkspaceView === "assignments") renderAssignmentsTable();
    assignmentStatus.textContent = changed || updatedFileCount
      ? `Saved R[${index}] to ${assignmentTemplateFileName} and synced ${updatedFileCount} LS file${updatedFileCount === 1 ? "" : "s"}.`
      : `R[${index}] comment already matched ${assignmentTemplateFileName}.`;
  }

  projectStatus.textContent = `Saved R[${index}] comment to robot and project Data Assignments.`;
}

async function saveRobotFlagComment(index, comment) {
  if (!project) throw new Error("Open a project before editing Flag comments.");
  if (!assignmentWorkbookData) {
    const workbookData = await primeAssignmentWorkbookData();
    if (!workbookData) throw new Error("No Data Assignments.xlsx workbook is connected for this project.");
  }

  const robotOrigin = requireOnlineRobot("update Flag comments");
  const cleaned = cleanRobotFlagComment(comment);
  await callRobotExportApi("/robot-comments/set", {
    robotAddress: robotOrigin,
    comment: cleaned,
    index,
    writeCode: 19
  });

  const flag = robotFlags.find((item) => Number(item.index) === Number(index));
  if (flag) flag.comment = cleaned;

  if (assignmentWorkbookData) {
    const changed = await saveAssignmentDescription("F", index, cleaned);
    const updatedFileCount = syncAssignmentChangeToLsFiles("F", index, cleaned);
    if (activeWorkspaceView === "assignments") renderAssignmentsTable();
    assignmentStatus.textContent = changed || updatedFileCount
      ? `Saved F[${index}] to ${assignmentTemplateFileName} and synced ${updatedFileCount} LS file${updatedFileCount === 1 ? "" : "s"}.`
      : `F[${index}] comment already matched ${assignmentTemplateFileName}.`;
  }

  projectStatus.textContent = `Saved F[${index}] comment to robot and project Data Assignments.`;
}

async function saveRobotFlagState(index, state) {
  if (!project) throw new Error("Open a project before editing Flag states.");
  const normalized = String(state || "").trim().toUpperCase();
  if (!["ON", "OFF"].includes(normalized)) throw new Error("Flag state must be ON or OFF.");
  const robotOrigin = requireOnlineRobot("update Flag states");
  const result = await callRobotExportApi("/robot-flags/set", {
    robotAddress: robotOrigin,
    flag: { index, state: normalized }
  });
  const updated = result.flag || { index, state: normalized };
  const flag = robotFlags.find((item) => Number(item.index) === Number(index));
  if (flag) flag.state = String(updated.state || normalized).toUpperCase();
  projectStatus.textContent = `Saved F[${index}] state to robot.`;
  return String(updated.state || normalized).toUpperCase();
}

async function readRobotNumericRegisters({ force = false } = {}) {
  if (robotNumericRegistersLoading) return;
  if (robotNumericCommentSaving || robotNumericValueSaving || robotNumericCommentEditActive()) return;
  if (robotOnlineStatus !== "online") {
    resetRobotNumericRegisters();
    return;
  }
  if (!force && robotNumericRegistersAddress === robotOnlineAddress && robotNumericRegisters.length) return;
  robotNumericRegistersLoading = true;
  try {
    const robotOrigin = requireOnlineRobot("read Numeric Registers");
    const result = await callRobotExportApi("/robot-numeric-registers/read", { robotAddress: robotOrigin });
    robotNumericRegisters = Array.isArray(result.registers)
      ? result.registers.sort((a, b) => Number(a.index) - Number(b.index))
      : [];
    robotNumericRegistersAddress = robotOnlineAddress;
    robotNumericRegistersUpdatedAt = result.capturedAt || new Date().toISOString();
    renderRobotNumericRegisters();
  } catch (error) {
    robotNumericTableWrap.innerHTML = `<div class="assignment-empty">Numeric Register data is unavailable: ${escapeHtml(error.message)}</div>`;
    throw error;
  } finally {
    robotNumericRegistersLoading = false;
  }
}

async function readRobotFlags({ force = false } = {}) {
  if (robotFlagsLoading) return;
  if (robotFlagCommentSaving || robotFlagStateSaving || robotFlagCommentEditActive()) return;
  if (robotOnlineStatus !== "online") {
    resetRobotFlags();
    return;
  }
  if (!force && robotFlagsAddress === robotOnlineAddress && robotFlags.length) return;
  robotFlagsLoading = true;
  try {
    const robotOrigin = requireOnlineRobot("read Flags");
    const flagCategory = robotCommentCategories.find((category) => category.types.some((item) => item.type === "F"));
    const [comments, stateResult] = await Promise.all([
      readRobotComments(robotOrigin, flagCategory ? [flagCategory] : []),
      callRobotExportApi("/robot-flags/read", { robotAddress: robotOrigin })
    ]);
    const flagStates = new Map((Array.isArray(stateResult.flags) ? stateResult.flags : [])
      .map((flag) => [Number(flag.index), flag]));
    const flagIndexes = new Set([
      ...[...comments.values()].filter((item) => item.type === "F").map((item) => Number(item.index)),
      ...flagStates.keys()
    ]);
    robotFlags = [...flagIndexes]
      .filter((index) => Number.isFinite(index) && index > 0)
      .sort((a, b) => a - b)
      .map((index) => {
        const commentItem = comments.get(assignmentKey("F", index));
        const stateItem = flagStates.get(index);
        return {
          index,
          state: stateItem?.state || commentItem?.state || "",
          comment: commentItem?.robotComment ?? stateItem?.comment ?? "",
          limit: commentItem?.limit || 24
        };
      });
    robotFlagsAddress = robotOnlineAddress;
    renderRobotFlags();
  } catch (error) {
    robotFlagTableWrap.innerHTML = `<div class="assignment-empty">Flag data is unavailable: ${escapeHtml(error.message)}</div>`;
    throw error;
  } finally {
    robotFlagsLoading = false;
  }
}

async function readRobotRegistersAndFlags({ force = false } = {}) {
  await Promise.allSettled([
    readRobotNumericRegisters({ force }),
    readRobotFlags({ force })
  ]);
}

function robotPositionRegisterKey(register) {
  return `${Number(register.group) || 1}:${Number(register.index) || 0}`;
}

function robotPositionRegisterConfigParts(config = "") {
  const match = String(config).trim().match(/^([NF])\s+([UD])\s+([TB])\s*,\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*(-?\d+)$/i);
  return match
    ? { flip: match[1].toUpperCase(), up: match[2].toUpperCase(), top: match[3].toUpperCase(), turn1: Number(match[4]), turn2: Number(match[5]), turn3: Number(match[6]) }
    : { flip: "N", up: "U", top: "T", turn1: 0, turn2: 0, turn3: 0 };
}

function editableRobotPositionRegister(register) {
  const sourceValues = register?.values && typeof register.values === "object" ? register.values : {};
  const mode = register?.mode === "joint" ? "joint" : "cartesian";
  const values = {};
  if (mode === "joint") {
    const jointNumbers = Object.keys(sourceValues)
      .map((axis) => /^J(\d+)$/i.exec(axis))
      .filter(Boolean)
      .map((match) => Number(match[1]));
    const jointCount = Math.max(6, ...jointNumbers, 0);
    for (let index = 1; index <= jointCount; index += 1) values[`J${index}`] = Number(sourceValues[`J${index}`]) || 0;
  } else {
    ["X", "Y", "Z", "W", "P", "R"].forEach((axis) => { values[axis] = Number(sourceValues[axis]) || 0; });
  }
  return {
    group: Number(register?.group) || 1,
    index: Number(register?.index) || 0,
    comment: String(register?.comment || ""),
    mode,
    config: mode === "cartesian" ? String(register?.config || "N U T, 0, 0, 0") : "",
    values
  };
}

function selectedRobotPositionRegister() {
  return robotPositionRegisters.find((register) => robotPositionRegisterKey(register) === selectedRobotPositionRegisterKey) || null;
}

function robotPrEditsEnabled() {
  return Boolean(robotPrEditToggle?.checked);
}

function applyRobotPrEditState() {
  const disabled = !robotPrEditsEnabled();
  robotPrDetails.querySelectorAll("#robotPrForm input, #robotPrForm select")
    .forEach((field) => { field.disabled = disabled; });
  updateRobotPositionRegisterDirtyState();
}

function renderRobotPositionRegisterList() {
  const query = robotPrSearch.value.trim().toLowerCase();
  const visible = robotPositionRegisters.filter((register) => {
    const haystack = `pr[${register.index}] ${register.comment || ""} ${register.mode || ""} group ${register.group}`.toLowerCase();
    return !query || haystack.includes(query);
  });
  robotPrList.innerHTML = visible.length ? visible.map((register) => {
    const key = robotPositionRegisterKey(register);
    const selected = key === selectedRobotPositionRegisterKey;
    const label = register.comment || (register.mode === "uninitialized" ? "Uninitialized" : "No comment");
    const modeLabel = register.mode === "joint" ? "Joint" : register.mode === "cartesian" ? "Cartesian" : "Uninitialized";
    return `
      <button class="robot-pr-list-item" type="button" role="option" data-pr-key="${escapeHtml(key)}" aria-selected="${String(selected)}" title="Open PR[${register.index}] (${escapeHtml(label)}) for review and editing.">
        <strong>PR[${register.index}]</strong>
        <span title="${escapeHtml(label)}">${escapeHtml(label)}<small>${escapeHtml(modeLabel)} | Group ${register.group}</small></span>
      </button>
    `;
  }).join("") : `<div class="assignment-empty">No Position Registers match this filter.</div>`;
}

function robotPositionRegisterAxisFields(axes, values) {
  const editsDisabled = robotPrEditsEnabled() ? "" : " disabled";
  return axes.map((axis) => `
    <label class="robot-pr-field">
      <span>${escapeHtml(axis)}</span>
      <input type="number" step="any" data-pr-axis="${escapeHtml(axis)}" value="${escapeHtml(Number(values[axis] || 0).toFixed(3))}"${editsDisabled}>
    </label>
  `).join("");
}

function renderRobotPositionRegisterDetails() {
  const register = selectedRobotPositionRegister();
  if (!register) {
    robotPrDetails.classList.add("muted-position");
    robotPrDetails.textContent = robotPositionRegisters.length ? "Select a Position Register." : "No Position Registers are loaded.";
    return;
  }

  const draft = editableRobotPositionRegister(register);
  const config = robotPositionRegisterConfigParts(draft.config);
  const jointAxes = draft.mode === "joint" ? Object.keys(draft.values) : ["J1", "J2", "J3", "J4", "J5", "J6"];
  const jointValues = draft.mode === "joint" ? draft.values : Object.fromEntries(jointAxes.map((axis) => [axis, 0]));
  const cartesianValues = draft.mode === "cartesian" ? draft.values : { X: 0, Y: 0, Z: 0, W: 0, P: 0, R: 0 };
  const sourceModeLabel = register.mode === "uninitialized" ? "Currently uninitialized" : `${register.mode === "joint" ? "Joint" : "Cartesian"} representation`;
  const editsDisabled = robotPrEditsEnabled() ? "" : " disabled";
  robotPrDetails.classList.remove("muted-position");
  robotPrDetails.innerHTML = `
    <form id="robotPrForm" class="robot-pr-form">
      <div class="robot-pr-form-header">
        <h4>PR[${register.index}]</h4>
        <span>${escapeHtml(sourceModeLabel)} | Group ${register.group}</span>
      </div>
      <div class="robot-pr-fields">
        <label class="robot-pr-field robot-pr-field-wide">
          <span>Comment</span>
          <input id="robotPrComment" type="text" maxlength="16" value="${escapeHtml(draft.comment)}"${editsDisabled}>
        </label>
        <label class="robot-pr-field">
          <span>Representation</span>
          <select id="robotPrMode"${editsDisabled}>
            <option value="cartesian" ${draft.mode === "cartesian" ? "selected" : ""}>Cartesian</option>
            <option value="joint" ${draft.mode === "joint" ? "selected" : ""}>Joint</option>
          </select>
        </label>
      </div>
      <div id="robotPrCartesianFields" class="robot-pr-mode-fields" ${draft.mode === "cartesian" ? "" : "hidden"}>
        <div class="robot-pr-axis-fields">${robotPositionRegisterAxisFields(["X", "Y", "Z", "W", "P", "R"], cartesianValues)}</div>
        <div class="robot-pr-config">
          <div class="robot-pr-config-label">Configuration</div>
          <label class="robot-pr-field"><span>Flip</span><select id="robotPrFlip"${editsDisabled}><option value="N" ${config.flip === "N" ? "selected" : ""}>N</option><option value="F" ${config.flip === "F" ? "selected" : ""}>F</option></select></label>
          <label class="robot-pr-field"><span>Up/Down</span><select id="robotPrUp"${editsDisabled}><option value="U" ${config.up === "U" ? "selected" : ""}>U</option><option value="D" ${config.up === "D" ? "selected" : ""}>D</option></select></label>
          <label class="robot-pr-field"><span>Top/Bottom</span><select id="robotPrTop"${editsDisabled}><option value="T" ${config.top === "T" ? "selected" : ""}>T</option><option value="B" ${config.top === "B" ? "selected" : ""}>B</option></select></label>
          <label class="robot-pr-field"><span>Turn 1</span><input id="robotPrTurn1" type="number" step="1" value="${config.turn1}"${editsDisabled}></label>
          <label class="robot-pr-field"><span>Turn 2</span><input id="robotPrTurn2" type="number" step="1" value="${config.turn2}"${editsDisabled}></label>
          <label class="robot-pr-field"><span>Turn 3</span><input id="robotPrTurn3" type="number" step="1" value="${config.turn3}"${editsDisabled}></label>
        </div>
      </div>
      <div id="robotPrJointFields" class="robot-pr-mode-fields" ${draft.mode === "joint" ? "" : "hidden"}>
        <div class="robot-pr-axis-fields">${robotPositionRegisterAxisFields(jointAxes, jointValues)}</div>
      </div>
      <div class="robot-pr-warning">Committing writes this Position Register to the online robot. Confirm the selected robot, register number, representation, configuration, and values before continuing.</div>
      <div class="robot-pr-actions">
        <span id="robotPrDirtyStatus">No pending changes.</span>
        <button id="robotPrCommitBtn" type="submit" disabled title="Write the edited values for PR[${register.index}] to the online robot after confirmation.">Commit Changes</button>
      </div>
    </form>
  `;
}

function collectRobotPositionRegisterForm() {
  const register = selectedRobotPositionRegister();
  const form = document.querySelector("#robotPrForm");
  if (!register || !form) return null;
  const mode = form.querySelector("#robotPrMode").value;
  const fieldContainer = form.querySelector(mode === "joint" ? "#robotPrJointFields" : "#robotPrCartesianFields");
  const values = {};
  fieldContainer.querySelectorAll("[data-pr-axis]").forEach((input) => {
    const value = Number(input.value);
    if (!Number.isFinite(value)) throw new Error(`${input.dataset.prAxis} must be a valid number.`);
    values[input.dataset.prAxis] = value;
  });
  const turnValues = mode === "cartesian"
    ? ["#robotPrTurn1", "#robotPrTurn2", "#robotPrTurn3"].map((selector) => Number(form.querySelector(selector).value))
    : [];
  if (turnValues.some((value) => !Number.isInteger(value))) throw new Error("Configuration turn values must be whole numbers.");
  const config = mode === "cartesian"
    ? `${form.querySelector("#robotPrFlip").value} ${form.querySelector("#robotPrUp").value} ${form.querySelector("#robotPrTop").value}, ${turnValues.join(", ")}`
    : "";
  return {
    group: Number(register.group),
    index: Number(register.index),
    comment: form.querySelector("#robotPrComment").value.trim(),
    mode,
    config,
    values
  };
}

function updateRobotPositionRegisterDirtyState() {
  const register = selectedRobotPositionRegister();
  const commitButton = document.querySelector("#robotPrCommitBtn");
  const dirtyStatus = document.querySelector("#robotPrDirtyStatus");
  if (!register || !commitButton || !dirtyStatus) return;
  try {
    const current = collectRobotPositionRegisterForm();
    const baseline = editableRobotPositionRegister(register);
    const dirty = JSON.stringify(current) !== JSON.stringify(baseline);
    commitButton.disabled = !robotPrEditsEnabled() || !dirty || robotPositionRegisterCommitActive || robotOnlineStatus !== "online";
    dirtyStatus.textContent = robotPrEditsEnabled()
      ? (dirty ? "Pending changes have not been written." : "No pending changes.")
      : "Enable edits to change this Position Register.";
  } catch (error) {
    commitButton.disabled = true;
    dirtyStatus.textContent = error.message;
  }
}

function resetRobotPositionRegisters() {
  robotPositionRegisters = [];
  selectedRobotPositionRegisterKey = "";
  robotPositionRegistersAddress = "";
  robotPositionRegistersLoading = false;
  robotPositionRegisterCommitActive = false;
  robotPrSearch.value = "";
  robotPrList.innerHTML = "";
  robotPrDetails.classList.add("muted-position");
  robotPrDetails.textContent = "Go Online to load Position Registers.";
  robotPrStatus.textContent = "Go Online to load Position Registers.";
}

async function readRobotPositionRegisters({ force = false } = {}) {
  if (robotPositionRegistersLoading) return;
  if (robotOnlineStatus !== "online") {
    resetRobotPositionRegisters();
    return;
  }
  if (!force && robotPositionRegistersAddress === robotOnlineAddress && robotPositionRegisters.length) return;
  robotPositionRegistersLoading = true;
  robotPrStatus.textContent = "Loading Position Registers from the online robot...";
  try {
    const robotOrigin = requireOnlineRobot("read Position Registers");
    const result = await callRobotExportApi("/robot-position-registers/read", { robotAddress: robotOrigin });
    robotPositionRegisters = Array.isArray(result.registers) ? result.registers.sort((a, b) => Number(a.group) - Number(b.group) || Number(a.index) - Number(b.index)) : [];
    robotPositionRegistersAddress = robotOnlineAddress;
    if (!robotPositionRegisters.some((register) => robotPositionRegisterKey(register) === selectedRobotPositionRegisterKey)) {
      const firstInitialized = robotPositionRegisters.find((register) => register.mode !== "uninitialized") || robotPositionRegisters[0];
      selectedRobotPositionRegisterKey = firstInitialized ? robotPositionRegisterKey(firstInitialized) : "";
    }
    renderRobotPositionRegisterList();
    renderRobotPositionRegisterDetails();
    robotPrStatus.textContent = `Loaded ${robotPositionRegisters.length} Position Registers from ${robotOnlineAddress}.`;
  } catch (error) {
    robotPrStatus.textContent = `Unable to load Position Registers: ${error.message}`;
    robotPrList.innerHTML = "";
    robotPrDetails.classList.add("muted-position");
    robotPrDetails.textContent = "Position Register data is unavailable.";
    throw error;
  } finally {
    robotPositionRegistersLoading = false;
  }
}

async function commitRobotPositionRegister() {
  if (!robotPrEditsEnabled()) return;
  if (robotPositionRegisterCommitActive) return;
  const register = collectRobotPositionRegisterForm();
  if (!register) return;
  const shouldCommit = confirm(`Write PR[${register.index}] (${register.mode}) to the online robot at ${robotOnlineAddress}?\n\nThis changes live controller data immediately.`);
  if (!shouldCommit) return;
  robotPositionRegisterCommitActive = true;
  updateRobotPositionRegisterDirtyState();
  robotPrStatus.textContent = `Writing PR[${register.index}] to ${robotOnlineAddress}...`;
  try {
    const robotOrigin = requireOnlineRobot("write a Position Register");
    const result = await callRobotExportApi("/robot-position-registers/set", { robotAddress: robotOrigin, register });
    const updated = result.register;
    const arrayIndex = robotPositionRegisters.findIndex((item) => robotPositionRegisterKey(item) === robotPositionRegisterKey(updated));
    if (arrayIndex >= 0) robotPositionRegisters[arrayIndex] = updated;
    renderRobotPositionRegisterList();
    renderRobotPositionRegisterDetails();
    robotPrStatus.textContent = `Committed and verified PR[${register.index}] on ${robotOnlineAddress}.`;
  } catch (error) {
    robotPrStatus.textContent = `Unable to commit PR[${register.index}]: ${error.message}`;
    throw error;
  } finally {
    robotPositionRegisterCommitActive = false;
    updateRobotPositionRegisterDirtyState();
  }
}
async function readRobotPosition({ live = false } = {}) {
  if (robotPositionRequestActive) return;
  if (!project) throw new Error("Open a project before reading robot position.");
  robotPositionRequestActive = true;
  readRobotPositionBtn.disabled = true;
  startRobotPositionBtn.disabled = true;
  try {
    const robotOrigin = requireOnlineRobot("read Live Robot data");
    robotPositionStatus.textContent = live ? `Live update running at ${robotOrigin}...` : `Reading current position from ${robotOrigin}...`;
    const result = await callRobotExportApi("/robot-position/current", { robotAddress: robotOrigin });
    renderRobotPosition(result);
    robotPositionStatus.textContent = live
      ? `Live updates active. Last read succeeded at ${new Date().toLocaleTimeString()}.`
      : `Position read succeeded at ${new Date().toLocaleTimeString()}.`;

  } catch (error) {
    robotPositionStatus.innerHTML = `<span class="robot-position-error">Unable to read robot position:</span> ${escapeHtml(error.message)}`;
    if (!live) throw error;
  } finally {
    robotPositionRequestActive = false;
    readRobotPositionBtn.disabled = robotPositionLive;
    startRobotPositionBtn.disabled = robotPositionLive;
  }
}

function stopRobotPositionLive() {
  if (robotPositionTimer) {
    clearInterval(robotPositionTimer);
    robotPositionTimer = null;
  }
  robotPositionLive = false;
  if (stopRobotPositionBtn) stopRobotPositionBtn.disabled = true;
  if (readRobotPositionBtn) readRobotPositionBtn.disabled = false;
  if (startRobotPositionBtn) startRobotPositionBtn.disabled = false;
  if (robotPositionStatus?.textContent?.includes("Live updates active")) {
    robotPositionStatus.textContent = "Live updates stopped.";
  }
}

function startRobotPositionLive() {
  stopRobotPositionLive();
  robotPositionLive = true;
  readRobotPositionBtn.disabled = true;
  startRobotPositionBtn.disabled = true;
  stopRobotPositionBtn.disabled = false;
  const interval = Math.max(500, Number(robotPositionInterval.value) || 1000);
  const poll = () => {
    if (document.hidden || activeWorkspaceView !== "robot-position") return;
    readRobotPosition({ live: true }).catch(() => {});
  };
  poll();
  robotPositionTimer = setInterval(poll, interval);
}

function loadCurrentFileIntoEditor() {
  updateHeaderToggle();
  updateFooterToggle();
  const file = getCurrentFile();
  if (!file) return;
  mainEditorPrompt.hidden = true;
  editor.readOnly = false;
  editor.value = displayedFileContent(file);
  resetEditorHistory();
  refreshEditor();
}

function getSplitFile() {
  return project?.files.find((file) => file.id === splitFileId) || null;
}

function renderSplitFileSelect() {
  if (!project || project.files.length === 0) {
    splitFileSelect.innerHTML = `<option value="">Select an LS file...</option>`;
    splitFileSelect.value = "";
    return;
  }

  splitFileSelect.innerHTML = `<option value="">Select an LS file...</option>${project.files.map((file) => (
    `<option value="${escapeHtml(file.id)}" ${file.id === currentFileId ? "disabled" : ""}>${escapeHtml(file.name)}${file.dirty ? " *" : ""}</option>`
  )).join("")}`;

  if (!getSplitFile() || splitFileId === currentFileId) {
    splitFileId = null;
  }

  splitFileSelect.value = splitFileId || "";
}

function renderSplitHighlight() {
  const pendingLines = pendingVisibleLineIndexes(getSplitFile(), splitHeaderVisible, splitFooterVisible);
  splitHighlightedCode.innerHTML = splitEditor.value
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line, index) => highlightLine(line, index, false, pendingLines.has(index)))
    .join("");
  splitHighlightedCode.scrollTop = splitEditor.scrollTop;
  splitHighlightedCode.scrollLeft = splitEditor.scrollLeft;
}

function updateSplitCursorStatus() {
  const position = lineColumnFromIndex(splitEditor.value, splitEditor.selectionStart);
  splitCursorStatus.textContent = `Ln ${position.line + 1}, Col ${position.column + 1}`;
}

function loadSplitFileIntoEditor() {
  renderSplitFileSelect();
  updateSplitHeaderToggle();
  updateSplitFooterToggle();
  const file = getSplitFile();

  if (!file) {
    splitEditor.value = "";
    splitEditor.readOnly = true;
    splitEditorPrompt.hidden = false;
    splitCursorStatus.textContent = "Ln 1, Col 1";
    renderSplitHighlight();
    return;
  }

  splitEditorPrompt.hidden = true;
  splitEditor.readOnly = file.id === currentFileId;
  splitEditor.value = displayedFileContent(file, splitHeaderVisible, splitFooterVisible);
  lastSplitEditorValue = splitEditor.value;
  renderSplitHighlight();
  updateSplitCursorStatus();
}

function saveSplitBuffer() {
  const file = getSplitFile();
  if (!file || splitEditorPane.hidden) return;
  if (file.id === currentFileId) return;
  file.content = mergeDisplayedContent(file.content, splitEditor.value, splitHeaderVisible, splitFooterVisible, lastSplitEditorValue);
  lastSplitEditorValue = splitEditor.value;
}

function markSplitFileDirty() {
  const file = getSplitFile();
  if (!file) return;
  if (file.id === currentFileId) return;
  file.content = mergeDisplayedContent(file.content, splitEditor.value, splitHeaderVisible, splitFooterVisible, lastSplitEditorValue);
  file.dirty = true;
  renderFileList();
  renderSplitFileSelect();
  scheduleSessionPersist();
  lastSplitEditorValue = splitEditor.value;
}

function setSplitEditorOpen(open) {
  if (open && (!project || project.files.length === 0)) {
    projectStatus.textContent = "Open an LS project before using split view.";
    return;
  }

  if (open) {
    saveCurrentBuffer();
    splitFileId = null;
    splitEditorPane.hidden = false;
    editorLayout.classList.add("split-active");
    splitEditorBtn.setAttribute("aria-pressed", "true");
    loadSplitFileIntoEditor();
    return;
  }

  saveSplitBuffer();
  splitEditorPane.hidden = true;
  editorLayout.classList.remove("split-active");
  splitEditorBtn.setAttribute("aria-pressed", "false");
  splitFileId = null;
  setActiveEditor("main");
  persistSession();
}

function updateHeaderToggle() {
  toggleHeaderBtn.textContent = headerVisible ? "Hide Header" : "Show Header";
  toggleHeaderBtn.setAttribute("aria-pressed", String(headerVisible));
}

function updateFooterToggle() {
  const file = getCurrentFile();
  const footer = file ? splitFileSections(file.content).footer : "";
  const hasFooter = footer.trim().length > 0;
  footerToggleBar.hidden = !hasFooter;
  toggleFooterBtn.textContent = footerVisible ? "Hide Footer" : "Show Footer";
  toggleFooterBtn.setAttribute("aria-pressed", String(footerVisible));
}

function updateSplitHeaderToggle() {
  splitToggleHeaderBtn.textContent = splitHeaderVisible ? "Hide Header" : "Show Header";
  splitToggleHeaderBtn.setAttribute("aria-pressed", String(splitHeaderVisible));
}

function updateSplitFooterToggle() {
  const file = getSplitFile();
  const footer = file ? splitFileSections(file.content).footer : "";
  const hasFooter = footer.trim().length > 0;
  splitFooterToggleBar.hidden = !hasFooter;
  splitToggleFooterBtn.textContent = splitFooterVisible ? "Hide Footer" : "Show Footer";
  splitToggleFooterBtn.setAttribute("aria-pressed", String(splitFooterVisible));
}

function saveCurrentBuffer() {
  const currentFile = getCurrentFile();
  if (!currentFile) return;
  currentFile.content = mergeDisplayedContent(currentFile.content, editor.value, headerVisible, footerVisible, lastEditorValue);
  lastEditorValue = editor.value;
}

function switchFile(fileId) {
  saveCurrentBuffer();
  saveSplitBuffer();
  persistSession();
  currentFileId = fileId;
  const file = getCurrentFile();
  if (!file) return;

  currentFileNameEl.textContent = file.dirty ? `${file.name} *` : file.name;
  mainEditorPrompt.hidden = true;
  editor.readOnly = false;
  renderFileList();
  if (splitEditorPane.hidden) renderSplitFileSelect();
  else loadSplitFileIntoEditor();
  loadCurrentFileIntoEditor();
  persistSession();
}

function getCurrentFile() {
  return project?.files.find((file) => file.id === currentFileId) || null;
}

function markCurrentFileDirty() {
  const file = getCurrentFile();
  if (!file) return;
  file.content = mergeDisplayedContent(file.content, editor.value, headerVisible, footerVisible, lastEditorValue);
  file.dirty = true;
  currentFileNameEl.textContent = `${file.name} *`;
  renderFileList();
  scheduleSessionPersist();
}

function setActiveEditor(name) {
  if (name === "split" && splitEditorPane.hidden) {
    activeEditorName = "main";
    updateSaveCurrentLsButton();
    return;
  }

  activeEditorName = name;
  updateSaveCurrentLsButton();
}

function activeEditorState() {
  const splitActive = activeEditorName === "split" && !splitEditorPane.hidden;
  return {
    name: splitActive ? "split" : "main",
    textarea: splitActive ? splitEditor : editor,
    file: splitActive ? getSplitFile() : getCurrentFile(),
    highlighted: splitActive ? splitHighlightedCode : highlightedCode,
    renderHighlight: splitActive ? renderSplitHighlight : renderHighlight,
    updateCursorStatus: splitActive ? updateSplitCursorStatus : updateCursorStatus,
    markDirty: splitActive ? markSplitFileDirty : markCurrentFileDirty
  };
}

function activeEditorCanEdit(state = activeEditorState()) {
  if (!state.file) return false;
  if (state.name === "split" && state.textarea.readOnly) {
    projectStatus.textContent = "The split editor is read-only for the same file. Choose a different split file before editing.";
    return false;
  }
  return true;
}

function editorSnapshot() {
  return {
    value: editor.value,
    selectionStart: editor.selectionStart,
    selectionEnd: editor.selectionEnd
  };
}

function sameSnapshot(a, b) {
  return Boolean(a && b && a.value === b.value && a.selectionStart === b.selectionStart && a.selectionEnd === b.selectionEnd);
}

function updateHistoryButtons() {
  undoBtn.disabled = undoStack.length === 0;
  redoBtn.disabled = redoStack.length === 0;
}

function resetEditorHistory() {
  undoStack = [];
  redoStack = [];
  lastEditorValue = editor.value;
  updateHistoryButtons();
}

function pushUndoSnapshot() {
  if (historySuppressed) return;
  const snapshot = editorSnapshot();
  if (sameSnapshot(undoStack[undoStack.length - 1], snapshot)) return;
  undoStack.push(snapshot);
  if (undoStack.length > editorHistoryLimit) undoStack.shift();
  redoStack = [];
  updateHistoryButtons();
}

function pushUndoValueSnapshot(value, selectionStart = 0, selectionEnd = selectionStart) {
  if (historySuppressed) return;
  const snapshot = { value, selectionStart, selectionEnd };
  if (sameSnapshot(undoStack[undoStack.length - 1], snapshot)) return;
  undoStack.push(snapshot);
  if (undoStack.length > editorHistoryLimit) undoStack.shift();
  redoStack = [];
  updateHistoryButtons();
}

function restoreEditorSnapshot(snapshot) {
  historySuppressed = true;
  editor.value = snapshot.value;
  editor.setSelectionRange(snapshot.selectionStart, snapshot.selectionEnd);
  lastEditorValue = editor.value;
  historySuppressed = false;
  markCurrentFileDirty();
  renderHighlight();
  renderDiagnostics();
  updateCursorStatus();
  hideSuggestions();
  editor.focus();
}

function undoEditorChange() {
  if (undoStack.length === 0) return;
  redoStack.push(editorSnapshot());
  restoreEditorSnapshot(undoStack.pop());
  updateHistoryButtons();
}

function redoEditorChange() {
  if (redoStack.length === 0) return;
  undoStack.push(editorSnapshot());
  restoreEditorSnapshot(redoStack.pop());
  updateHistoryButtons();
}

function isEditorMutationKey(event) {
  if (event.ctrlKey || event.metaKey || event.altKey) return false;
  if (event.key.length === 1) return true;
  return ["Backspace", "Delete"].includes(event.key);
}

function lineColumnFromIndex(value, index) {
  const before = value.slice(0, index).split("\n");
  return {
    line: before.length - 1,
    column: before[before.length - 1].length
  };
}

function splitInstructionComment(line) {
  const slashIndex = line.indexOf("//");
  const bangCommentMatch = line.match(/^(\s*(?:\d+:\s*)?\s*)(!.*)$/);
  const bangIndex = bangCommentMatch ? bangCommentMatch[1].length : -1;
  const commentIndexes = [bangIndex, slashIndex].filter((index) => index >= 0);
  const commentIndex = commentIndexes.length ? Math.min(...commentIndexes) : -1;
  return {
    code: commentIndex >= 0 ? line.slice(0, commentIndex) : line,
    comment: commentIndex >= 0 ? line.slice(commentIndex) : ""
  };
}

function uncommentedInstructionText(line) {
  return splitInstructionComment(line).code
    .replace(/^\s*\d+:\s*/, "")
    .trim();
}

function isIfBlockStartLine(line) {
  return /^IF\b.*\bTHEN\b/i.test(uncommentedInstructionText(line));
}

function isEndIfLine(line) {
  return /^ENDIF\b/i.test(uncommentedInstructionText(line));
}

function findIfPairHighlight(value, caretIndex) {
  const normalizedValue = String(value || "").replace(/\r\n/g, "\n");
  const lines = normalizedValue.split("\n");
  if (!lines.length) return null;
  const caret = lineColumnFromIndex(normalizedValue, caretIndex);
  const lineIndex = Math.max(0, Math.min(caret.line, lines.length - 1));
  const currentLine = lines[lineIndex] || "";

  if (isIfBlockStartLine(currentLine)) {
    let depth = 0;
    for (let index = lineIndex + 1; index < lines.length; index += 1) {
      if (isIfBlockStartLine(lines[index])) depth += 1;
      if (!isEndIfLine(lines[index])) continue;
      if (depth === 0) return { sourceLine: lineIndex, matchLine: index };
      depth -= 1;
    }
    return { sourceLine: lineIndex, matchLine: null };
  }

  if (isEndIfLine(currentLine)) {
    let depth = 0;
    for (let index = lineIndex - 1; index >= 0; index -= 1) {
      if (isEndIfLine(lines[index])) depth += 1;
      if (!isIfBlockStartLine(lines[index])) continue;
      if (depth === 0) return { sourceLine: lineIndex, matchLine: index };
      depth -= 1;
    }
    return { sourceLine: lineIndex, matchLine: null };
  }

  return null;
}

function sameIfPairHighlight(a, b) {
  return Boolean(a) === Boolean(b)
    && (!a || (a.sourceLine === b.sourceLine && a.matchLine === b.matchLine));
}

function updateIfPairHighlightFromEditor({ render = true } = {}) {
  const nextHighlight = findIfPairHighlight(editor.value, editor.selectionStart);
  if (sameIfPairHighlight(ifPairHighlight, nextHighlight)) return;
  ifPairHighlight = nextHighlight;
  if (render) {
    renderHighlight();
    syncHighlightScroll();
  }
}

function indexFromLineColumn(lines, line, column) {
  const safeLine = Math.max(0, Math.min(line, lines.length - 1));
  const prefixLength = lines.slice(0, safeLine).reduce((total, item) => total + item.length + 1, 0);
  return prefixLength + Math.min(column, lines[safeLine].length);
}

function isMnEditorLine(lines, index, showHeader = headerVisible) {
  if (!showHeader) {
    return !/^\/(?:POS|END)\b/i.test(lines[index].trim()) && !/^P\[\d+\]/i.test(lines[index].trim());
  }

  let currentSection = "";
  for (let lineIndex = 0; lineIndex <= index; lineIndex += 1) {
    const section = getSection(lines[lineIndex]);
    if (section) currentSection = section;
  }

  return currentSection === "MN" && !getSection(lines[index]);
}

function renumberTextAreaLines(textarea) {
  const originalValue = textarea.value;
  const lines = originalValue.replace(/\r\n/g, "\n").split("\n");
  const caret = lineColumnFromIndex(originalValue, textarea.selectionStart);
  let lineNumber = 1;
  let changed = false;
  const showHeader = textarea === splitEditor ? splitHeaderVisible : headerVisible;

  const nextLines = lines.map((line, index) => {
    if (!isMnEditorLine(lines, index, showHeader)) return line;

    const numberedMatch = line.match(/^\s*\d+(:.*)$/);
    if (!numberedMatch) return line;

    const nextLine = `${String(lineNumber).padStart(4, " ")}${numberedMatch[1]}`;
    lineNumber += 1;

    if (nextLine !== line) changed = true;
    return nextLine;
  });

  if (!changed) return false;

  textarea.value = nextLines.join("\n");
  const nextCaret = indexFromLineColumn(nextLines, caret.line, caret.column);
  textarea.setSelectionRange(nextCaret, nextCaret);
  return true;
}

function renumberEditorLines() {
  return renumberTextAreaLines(editor);
}

function wrapLongBangCommentLinesFor(textarea) {
  const originalValue = textarea.value;
  const lines = originalValue.replace(/\r\n/g, "\n").split("\n");
  const caret = lineColumnFromIndex(originalValue, textarea.selectionStart);
  let nextCaretLine = caret.line;
  let nextCaretColumn = caret.column;
  let changed = false;
  const showHeader = textarea === splitEditor ? splitHeaderVisible : headerVisible;

  for (let index = 0; index < lines.length; index += 1) {
    if (!isMnEditorLine(lines, index, showHeader)) continue;

    const match = lines[index].match(/^(\s*\d+:\s*)!(\s*)(.*)$/);
    if (!match) continue;

    const prefix = match[1];
    const spacer = match[2] || " ";
    const commentText = match[3].replace(/\s*;\s*$/, "").replace(/\s+$/, "");
    if (commentText.length <= tpCommentLimit) continue;

    const chunks = [];
    for (let offset = 0; offset < commentText.length; offset += tpCommentLimit) {
      chunks.push(commentText.slice(offset, offset + tpCommentLimit));
    }

    const originalTextStart = prefix.length + 1 + spacer.length;
    const replacementLines = chunks.map((chunk, chunkIndex) => {
      const linePrefix = chunkIndex === 0 ? prefix : "0000:  ";
      return `${linePrefix}! ${chunk} ;`;
    });
    const insertedLineCount = replacementLines.length - 1;

    if (caret.line === index) {
      const textOffset = Math.max(0, caret.column - originalTextStart);
      const chunkIndex = Math.min(Math.floor(textOffset / tpCommentLimit), chunks.length - 1);
      const chunkOffset = Math.min(textOffset % tpCommentLimit, chunks[chunkIndex].length);
      nextCaretLine = index + chunkIndex;
      nextCaretColumn = "0000:  ! ".length + chunkOffset;
    } else if (caret.line > index) {
      nextCaretLine += insertedLineCount;
    }

    lines.splice(index, 1, ...replacementLines);
    index += insertedLineCount;
    changed = true;
  }

  if (!changed) return false;

  textarea.value = lines.join("\n");
  renumberTextAreaLines(textarea);
  const nextLines = textarea.value.replace(/\r\n/g, "\n").split("\n");
  const nextCaret = indexFromLineColumn(nextLines, nextCaretLine, nextCaretColumn);
  textarea.setSelectionRange(nextCaret, nextCaret);
  return true;
}

function wrapLongBangCommentLines() {
  return wrapLongBangCommentLinesFor(editor);
}

function ensureCurrentLineTerminated() {
  const value = editor.value;
  const lines = value.replace(/\r\n/g, "\n").split("\n");
  const caret = lineColumnFromIndex(value, editor.selectionStart);

  if (!isMnEditorLine(lines, caret.line)) return false;

  pushUndoSnapshot();
  const line = lines[caret.line];
  const numberedMatch = line.match(/^(\s*\d+:\s*)(.*)$/);
  if (!numberedMatch) return false;

  const command = numberedMatch[2];
  if (!command.trim() || /;\s*(?:!.*)?$/.test(command.trim())) return false;

  const commentIndex = command.indexOf("!");
  const nextCommand = commentIndex >= 0
    ? `${command.slice(0, commentIndex).trimEnd()} ; ${command.slice(commentIndex)}`
    : `${command.trimEnd()} ;`;

  lines[caret.line] = `${numberedMatch[1]}${nextCommand}`;
  editor.value = lines.join("\n");
  const nextCaret = indexFromLineColumn(lines, caret.line, lines[caret.line].length);
  editor.setSelectionRange(nextCaret, nextCaret);
  return true;
}

function insertNumberedLine(textarea = editor) {
  const value = textarea.value;
  const lines = value.replace(/\r\n/g, "\n").split("\n");
  const caret = lineColumnFromIndex(value, textarea.selectionStart);

  const showHeader = textarea === splitEditor ? splitHeaderVisible : headerVisible;
  if (!isMnEditorLine(lines, caret.line, showHeader)) return false;

  if (textarea === editor) pushUndoSnapshot();
  const line = lines[caret.line];
  const numberedMatch = line.match(/^(\s*\d+:\s*)(.*)$/);
  if (!numberedMatch) return false;

  const command = numberedMatch[2];
  const commentIndex = command.indexOf("!");
  const commandBeforeComment = commentIndex >= 0 ? command.slice(0, commentIndex) : command;
  const comment = commentIndex >= 0 ? command.slice(commentIndex) : "";
  const shouldAddTerminator = commandBeforeComment.trim() && !/;\s*$/.test(commandBeforeComment.trimEnd());
  const nextCommand = shouldAddTerminator
    ? `${commandBeforeComment.trimEnd()} ;${comment ? ` ${comment}` : ""}`
    : command;

  lines[caret.line] = `${numberedMatch[1]}${nextCommand}`;
  textarea.value = lines.join("\n");
  const insertAt = indexFromLineColumn(lines, caret.line, lines[caret.line].length);
  textarea.setSelectionRange(insertAt, insertAt);
  const newLineTemplate = `\n0000:   ;`;
  textarea.setRangeText(newLineTemplate, insertAt, insertAt, "end");
  renumberTextAreaLines(textarea);
  const commandStart = insertAt + "\n0000:  ".length;
  textarea.setSelectionRange(commandStart, commandStart);
  return true;
}

function deleteBlankNumberedLine(textarea = editor) {
  if (textarea.selectionStart !== textarea.selectionEnd) return false;

  const value = textarea.value;
  const lines = value.replace(/\r\n/g, "\n").split("\n");
  const caret = lineColumnFromIndex(value, textarea.selectionStart);

  const showHeader = textarea === splitEditor ? splitHeaderVisible : headerVisible;
  if (!isMnEditorLine(lines, caret.line, showHeader)) return false;
  if (!/^\s*\d+:\s{3};\s*$/.test(lines[caret.line])) return false;

  if (textarea === editor) pushUndoSnapshot();
  if (lines.length === 1) {
    textarea.value = "";
    return true;
  }

  const nextCaretLine = Math.max(0, caret.line - 1);
  const nextCaretColumn = lines[nextCaretLine]?.length || 0;
  lines.splice(caret.line, 1);
  textarea.value = lines.join("\n");
  renumberTextAreaLines(textarea);

  const nextLines = textarea.value.replace(/\r\n/g, "\n").split("\n");
  const nextCaret = indexFromLineColumn(nextLines, nextCaretLine, nextCaretColumn);
  textarea.setSelectionRange(nextCaret, nextCaret);
  return true;
}

function nextVisibleLineNumber() {
  const matches = Array.from(activeEditorState().textarea.value.matchAll(/^\s*(\d+):/gm));
  if (matches.length === 0) return 1;
  return Math.max(...matches.map((match) => Number(match[1]))) + 1;
}

function buildMotionInstruction() {
  const motionType = motionTypeSelect.value;
  const targetType = motionTargetSelect.value;
  const position = Math.max(1, Number(motionPositionInput.value) || 1);
  const viaPosition = Math.max(1, Number(motionPosition2Input.value) || 2);
  const speed = Math.max(1, Number(motionSpeedInput.value) || 1);
  const speedUnit = motionSpeedUnitSelect.value;
  const termination = motionTermSelect.value;
  const lineNumber = nextVisibleLineNumber();
  const target = `${targetType}[${position}]`;
  const viaTarget = `${targetType}[${viaPosition}]`;

  if (motionType === "C") {
    return `${String(lineNumber).padStart(4, " ")}:  C ${viaTarget} ${target} ${speed}${speedUnit} ${termination} ;`;
  }

  return `${String(lineNumber).padStart(4, " ")}:  ${motionType} ${target} ${speed}${speedUnit} ${termination} ;`;
}

function buildWaitInstruction() {
  const waitType = waitTypeSelect.value;
  const index = Math.max(1, Number(waitIndexInput.value) || 1);
  const lineNumber = nextVisibleLineNumber();

  if (waitType === "TIME") {
    const seconds = waitTimeInput.value || "1.00";
    return `${String(lineNumber).padStart(4, " ")}:  WAIT ${seconds}(sec) ;`;
  }

  if (waitType === "R") {
    const compare = waitCompareSelect.value;
    const value = waitValueInput.value.trim() || "0";
    return `${String(lineNumber).padStart(4, " ")}:  WAIT R[${index}]${compare}${value} ;`;
  }

  return `${String(lineNumber).padStart(4, " ")}:  WAIT DI[${index}]=${waitStateSelect.value} ;`;
}

function buildIoInstruction() {
  const ioType = ioTypeSelect.value;
  const index = Math.max(1, Number(ioIndexInput.value) || 1);
  const lineNumber = nextVisibleLineNumber();
  const digitalOutputs = new Set(["DO", "RO"]);
  const valueOutputs = new Set(["GO", "AO"]);
  const digitalInputs = new Set(["DI", "RI"]);
  const valueInputs = new Set(["GI", "AI"]);

  if (digitalOutputs.has(ioType)) {
    return `${String(lineNumber).padStart(4, " ")}:  ${ioType}[${index}]=${ioStateSelect.value} ;`;
  }

  if (valueOutputs.has(ioType)) {
    return `${String(lineNumber).padStart(4, " ")}:  ${ioType}[${index}]=${ioValueInput.value.trim() || "0"} ;`;
  }

  if (digitalInputs.has(ioType)) {
    const action = ioActionInput.value.trim() || "JMP LBL[1]";
    return `${String(lineNumber).padStart(4, " ")}:  IF ${ioType}[${index}]=${ioStateSelect.value},${action} ;`;
  }

  if (valueInputs.has(ioType)) {
    const action = ioActionInput.value.trim() || "JMP LBL[1]";
    return `${String(lineNumber).padStart(4, " ")}:  IF ${ioType}[${index}]${ioCompareSelect.value}${ioValueInput.value.trim() || "0"},${action} ;`;
  }

  return `${String(lineNumber).padStart(4, " ")}:  ${ioType}[${index}]=${ioValueInput.value.trim() || "0"} ;`;
}

function numberedInstruction(command) {
  return `${String(nextVisibleLineNumber()).padStart(4, " ")}:  ${command.trim()} ;`;
}

function promptRequired(message, fallback = "") {
  const value = prompt(message, fallback);
  if (value === null) return null;
  const trimmed = value.trim();
  return trimmed || null;
}

function promptPositiveInteger(message, fallback = "1") {
  const value = promptRequired(message, fallback);
  if (value === null) return null;
  const number = Math.max(1, Number.parseInt(value, 10) || 1);
  return String(number);
}

function promptOnOff(message = "State: ON or OFF", fallback = "ON") {
  const value = promptRequired(message, fallback);
  if (value === null) return null;
  return value.toUpperCase() === "OFF" ? "OFF" : "ON";
}

function promptChoice(message, choices, fallback = choices[0]) {
  const value = promptRequired(`${message} (${choices.join(", ")})`, fallback);
  if (value === null) return null;
  const normalized = value.toUpperCase();
  return choices.includes(normalized) ? normalized : fallback;
}

function promptExpression(message, fallback = "0") {
  const value = promptRequired(message, fallback);
  if (value === null) return null;
  return value.replace(/\s+/g, "");
}

function insertPromptedInstruction(builder) {
  const instruction = builder();
  if (!instruction) return;
  insertInstruction(instruction);
}

function currentEditorContext() {
  const state = activeEditorState();
  const value = state.textarea.value;
  const lines = value.replace(/\r\n/g, "\n").split("\n");
  const caret = lineColumnFromIndex(value, state.textarea.selectionStart);
  return { state, value, lines, caret };
}

function editorStateHeaderVisible(state = activeEditorState()) {
  return state.name === "split" ? splitHeaderVisible : headerVisible;
}

function setEditorLines(lines, caretLine, caretColumn = 0, state = activeEditorState()) {
  state.textarea.value = lines.join("\n");
  renumberTextAreaLines(state.textarea);
  state.markDirty();
  state.renderHighlight();
  renderDiagnostics();
  state.updateCursorStatus();
  const nextLines = state.textarea.value.replace(/\r\n/g, "\n").split("\n");
  const nextCaret = indexFromLineColumn(nextLines, caretLine, caretColumn);
  state.textarea.setSelectionRange(nextCaret, nextCaret);
  state.textarea.focus();
}

function duplicateCurrentLine() {
  const { state, lines, caret } = currentEditorContext();
  if (!activeEditorCanEdit(state)) return;
  if (!isMnEditorLine(lines, caret.line, editorStateHeaderVisible(state))) return;
  if (state.name === "main") pushUndoSnapshot();
  lines.splice(caret.line + 1, 0, lines[caret.line]);
  setEditorLines(lines, caret.line + 1, lines[caret.line].length, state);
}

function deleteCurrentEditorLine() {
  const { state, lines, caret } = currentEditorContext();
  if (!activeEditorCanEdit(state)) return;
  if (!isMnEditorLine(lines, caret.line, editorStateHeaderVisible(state))) return;
  if (state.name === "main") pushUndoSnapshot();
  lines.splice(caret.line, 1);
  setEditorLines(lines.length ? lines : [""], Math.min(caret.line, Math.max(0, lines.length - 1)), 0, state);
}

function clearCurrentInstruction() {
  const { state, lines, caret } = currentEditorContext();
  if (!activeEditorCanEdit(state)) return;
  if (!isMnEditorLine(lines, caret.line, editorStateHeaderVisible(state))) return;
  const match = lines[caret.line].match(/^(\s*\d+:\s*).*/);
  if (!match) return;
  if (state.name === "main") pushUndoSnapshot();
  lines[caret.line] = `${match[1]} ;`;
  setEditorLines(lines, caret.line, match[1].length, state);
}

function insertBlankInstructionAbove() {
  insertInstruction(numberedInstruction(""));
}

function insertBlankInstructionBelow() {
  const { state, lines, caret } = currentEditorContext();
  if (!activeEditorCanEdit(state)) return;
  if (!isMnEditorLine(lines, caret.line, editorStateHeaderVisible(state))) return;
  if (state.name === "main") pushUndoSnapshot();
  lines.splice(caret.line + 1, 0, "0000:   ;");
  setEditorLines(lines, caret.line + 1, "0000:  ".length, state);
}

function moveCurrentLine(direction) {
  const { state, lines, caret } = currentEditorContext();
  if (!activeEditorCanEdit(state)) return;
  const nextLine = caret.line + direction;
  const showHeader = editorStateHeaderVisible(state);
  if (!isMnEditorLine(lines, caret.line, showHeader) || nextLine < 0 || nextLine >= lines.length || !isMnEditorLine(lines, nextLine, showHeader)) return;
  if (state.name === "main") pushUndoSnapshot();
  const [line] = lines.splice(caret.line, 1);
  lines.splice(nextLine, 0, line);
  setEditorLines(lines, nextLine, caret.column, state);
}

function findTextInEditor() {
  const text = promptRequired("Find text", "");
  if (!text) return;
  const state = activeEditorState();
  const haystack = state.textarea.value.toUpperCase();
  const needle = text.toUpperCase();
  const index = haystack.indexOf(needle, state.textarea.selectionEnd);
  const wrappedIndex = index >= 0 ? index : haystack.indexOf(needle);
  if (wrappedIndex < 0) {
    projectStatus.textContent = `"${text}" was not found.`;
    return;
  }
  state.textarea.setSelectionRange(wrappedIndex, wrappedIndex + text.length);
  state.updateCursorStatus();
  state.textarea.focus();
}

function replaceTextInEditor() {
  const state = activeEditorState();
  if (!activeEditorCanEdit(state)) return;
  const findText = promptRequired("Find text", "");
  if (!findText) return;
  const replaceText = prompt("Replace with", "");
  if (replaceText === null) return;
  if (state.name === "main") pushUndoSnapshot();
  state.textarea.value = state.textarea.value.split(findText).join(replaceText);
  renumberTextAreaLines(state.textarea);
  state.markDirty();
  state.renderHighlight();
  renderDiagnostics();
  state.updateCursorStatus();
}

function insertPromptedNewTpInstruction(command) {
  if (command.run) {
    command.run();
    return;
  }

  insertPromptedInstruction(command.build);
}

function buildMotionCommand() {
  const motion = promptChoice("Motion type", ["J", "L", "C"], "L");
  if (!motion) return null;
  const targetType = promptChoice("Target type", ["P", "PR"], "P");
  if (!targetType) return null;
  const target = promptPositiveInteger("Target number", "1");
  if (!target) return null;
  const via = motion === "C" ? promptPositiveInteger("Via target number", "2") : null;
  if (motion === "C" && !via) return null;
  const speed = promptRequired("Speed", motion === "J" ? "50%" : "500mm/sec");
  if (!speed) return null;
  const termination = promptChoice("Termination", ["FINE", "CNT0", "CNT25", "CNT50", "CNT75", "CNT100"], "FINE");
  if (!termination) return null;
  const option = promptRequired("Optional motion suffix, or leave blank", "");
  const targetText = `${targetType}[${target}]`;
  const command = motion === "C"
    ? `C ${targetType}[${via}] ${targetText} ${speed} ${termination}`
    : `${motion} ${targetText} ${speed} ${termination}`;
  return numberedInstruction(`${command}${option ? ` ${option}` : ""}`);
}

function buildOffsetMotionCommand(offsetType) {
  const base = buildMotionCommand();
  if (!base) return null;
  const register = promptPositiveInteger(`${offsetType} PR number`, "1");
  if (!register) return null;
  const separator = offsetType === "TOOL_OFFSET" ? "," : " ";
  return base.replace(/\s*;\s*$/, ` ${offsetType}${separator}PR[${register}] ;`);
}

const newTpInstCommands = [
  { category: "Motion", label: "Motion J/L/C", hint: "Builds J, L, or C motion with P or PR targets.", build: buildMotionCommand },
  { category: "Motion", label: "Offset Motion", hint: "Adds OFFSET PR[n] to a motion line.", build: () => buildOffsetMotionCommand("OFFSET") },
  { category: "Motion", label: "Tool Offset", hint: "Adds TOOL_OFFSET,PR[n] to a motion line.", build: () => buildOffsetMotionCommand("TOOL_OFFSET") },
  { category: "Motion", label: "Skip Condition", hint: "Adds a skip condition line.", build: () => {
    const condition = promptRequired("Skip condition", "DI[1]=ON");
    return condition ? numberedInstruction(`SKIP CONDITION ${condition}`) : null;
  } },
  { category: "Registers", label: "R Assign", hint: "Sets a numeric register.", build: () => {
    const register = promptPositiveInteger("Register number", "1");
    if (!register) return null;
    const value = promptExpression("Value or expression", "0");
    return value === null ? null : numberedInstruction(`R[${register}]=${value}`);
  } },
  { category: "Registers", label: "R Math", hint: "Adds, subtracts, multiplies, or divides a register.", build: () => {
    const register = promptPositiveInteger("Register number", "1");
    if (!register) return null;
    const op = promptChoice("Operator", ["+", "-", "*", "/"], "+");
    if (!op) return null;
    const value = promptExpression("Value or expression", "1");
    return value === null ? null : numberedInstruction(`R[${register}]=R[${register}]${op}${value}`);
  } },
  { category: "Registers", label: "PR Assign", hint: "Copies P or PR into a position register.", build: () => {
    const register = promptPositiveInteger("Position register number", "1");
    if (!register) return null;
    const source = promptRequired("Source position", "P[1]");
    return source ? numberedInstruction(`PR[${register}]=${source}`) : null;
  } },
  { category: "Registers", label: "PR Element", hint: "Sets X, Y, Z, W, P, or R in a position register.", build: () => {
    const register = promptPositiveInteger("Position register number", "1");
    if (!register) return null;
    const element = promptChoice("Element", ["X", "Y", "Z", "W", "P", "R"], "X");
    if (!element) return null;
    const value = promptRequired("Value", "0");
    return value === null ? null : numberedInstruction(`PR[${register},${element}]=${value}`);
  } },
  { category: "I/O", label: "Digital Out", hint: "Sets DO or RO ON/OFF.", build: () => {
    const type = promptChoice("Output type", ["DO", "RO"], "DO");
    if (!type) return null;
    const index = promptPositiveInteger(`${type} number`, "1");
    if (!index) return null;
    const state = promptOnOff();
    return state ? numberedInstruction(`${type}[${index}]=${state}`) : null;
  } },
  { category: "I/O", label: "Value Out", hint: "Sets GO or AO to a value.", build: () => {
    const type = promptChoice("Output type", ["GO", "AO"], "GO");
    if (!type) return null;
    const index = promptPositiveInteger(`${type} number`, "1");
    if (!index) return null;
    const value = promptExpression("Output value", "0");
    return value === null ? null : numberedInstruction(`${type}[${index}]=${value}`);
  } },
  { category: "I/O", label: "Pulse Output", hint: "Pulses DO or RO for a duration.", build: () => {
    const type = promptChoice("Output type", ["DO", "RO"], "DO");
    if (!type) return null;
    const index = promptPositiveInteger(`${type} number`, "1");
    if (!index) return null;
    const seconds = promptRequired("Pulse seconds", "0.50");
    return seconds ? numberedInstruction(`PULSE ${type}[${index}],${seconds}sec`) : null;
  } },
  { category: "Wait", label: "WAIT DI/RI", hint: "Waits for a digital input state.", build: () => {
    const type = promptChoice("Input type", ["DI", "RI"], "DI");
    if (!type) return null;
    const index = promptPositiveInteger(`${type} number`, "1");
    if (!index) return null;
    const state = promptOnOff();
    return state ? numberedInstruction(`WAIT ${type}[${index}]=${state}`) : null;
  } },
  { category: "Wait", label: "WAIT GI/R", hint: "Waits for a group input or register comparison.", build: () => {
    const type = promptChoice("Value type", ["GI", "R"], "R");
    if (!type) return null;
    const index = promptPositiveInteger(`${type} number`, "1");
    if (!index) return null;
    const compare = promptChoice("Compare", ["=", "<>", ">", "<", ">=", "<="], "=");
    if (!compare) return null;
    const value = promptExpression("Compare value", "0");
    return value === null ? null : numberedInstruction(`WAIT ${type}[${index}]${compare}${value}`);
  } },
  { category: "Wait", label: "WAIT Time", hint: "Waits for a number of seconds.", build: () => {
    const seconds = promptRequired("Seconds", "1.00");
    return seconds ? numberedInstruction(`WAIT ${seconds}(sec)`) : null;
  } },
  { category: "Control", label: "IF Action", hint: "Builds IF condition,action.", build: () => {
    const condition = promptRequired("Condition", "DI[1]=ON");
    if (!condition) return null;
    const action = promptRequired("Action", "JMP LBL[1]");
    return action ? numberedInstruction(`IF ${condition},${action}`) : null;
  } },
  { category: "Control", label: "SELECT", hint: "Builds a SELECT register branch line.", build: () => {
    const register = promptPositiveInteger("SELECT register number", "1");
    if (!register) return null;
    const branch = promptRequired("Branch list", "1,JMP LBL[1],2,JMP LBL[2],ELSE,JMP LBL[99]");
    return branch ? numberedInstruction(`SELECT R[${register}]=${branch}`) : null;
  } },
  { category: "Control", label: "LBL", hint: "Inserts a label.", build: () => {
    const label = promptPositiveInteger("Label number", "1");
    return label ? numberedInstruction(`LBL[${label}]`) : null;
  } },
  { category: "Control", label: "JMP LBL", hint: "Jumps to a label.", build: () => {
    const label = promptPositiveInteger("Jump label", "1");
    return label ? numberedInstruction(`JMP LBL[${label}]`) : null;
  } },
  { category: "Control", label: "CALL/RUN", hint: "Calls or runs another program.", build: () => {
    const type = promptChoice("Program action", ["CALL", "RUN"], "CALL");
    if (!type) return null;
    const program = promptRequired("Program name", "HOME");
    return program ? numberedInstruction(`${type} ${program.toUpperCase()}`) : null;
  } },
  { category: "Control", label: "FOR Block", hint: "Creates a FOR/ENDFOR block.", build: () => {
    const register = promptPositiveInteger("Loop register", "1");
    if (!register) return null;
    const start = promptExpression("Start value", "1");
    if (start === null) return null;
    const end = promptExpression("End value", "10");
    return end === null ? null : `${numberedInstruction(`FOR R[${register}]=${start} TO ${end}`)}\n${numberedInstruction("ENDFOR")}`;
  } },
  { category: "Frames", label: "UFRAME/UTOOL", hint: "Sets active user frame and tool frame.", build: () => {
    const frame = promptPositiveInteger("User frame number", "1");
    if (!frame) return null;
    const tool = promptPositiveInteger("Tool frame number", "1");
    return tool ? `${numberedInstruction(`UFRAME_NUM=${frame}`)}\n${numberedInstruction(`UTOOL_NUM=${tool}`)}` : null;
  } },
  { category: "Frames", label: "Payload", hint: "Sets payload number.", build: () => {
    const payload = promptPositiveInteger("Payload number", "1");
    return payload ? numberedInstruction(`PAYLOAD[${payload}]`) : null;
  } },
  { category: "Misc", label: "Timer", hint: "Starts, stops, or resets a timer.", build: () => {
    const timer = promptPositiveInteger("Timer number", "1");
    if (!timer) return null;
    const action = promptChoice("Timer action", ["START", "STOP", "RESET"], "START");
    return action ? numberedInstruction(`TIMER[${timer}]=${action}`) : null;
  } },
  { category: "Misc", label: "Message", hint: "Displays a message instruction.", build: () => {
    const message = promptRequired("Message text", "CHECK PART");
    return message ? numberedInstruction(`MESSAGE[${message.slice(0, 32)}]`) : null;
  } },
  { category: "Misc", label: "UALM", hint: "Raises a user alarm.", build: () => {
    const alarm = promptPositiveInteger("User alarm number", "1");
    return alarm ? numberedInstruction(`UALM[${alarm}]`) : null;
  } },
  { category: "Misc", label: "Comment", hint: "Inserts a TP comment line, wrapping after 32 characters.", build: () => {
    const text = promptRequired("Comment text", "Comment");
    return text ? numberedInstruction(`! ${text}`) : null;
  } },
  { category: "Misc", label: "PAUSE", hint: "Pauses program execution.", build: () => numberedInstruction("PAUSE") }
];

const newTpEdcmdCommands = [
  { category: "Line Edit", label: "Insert Blank Above", hint: "Inserts a blank numbered line above the cursor.", run: insertBlankInstructionAbove },
  { category: "Line Edit", label: "Insert Blank Below", hint: "Inserts a blank numbered line below the cursor.", run: insertBlankInstructionBelow },
  { category: "Line Edit", label: "Duplicate Line", hint: "Duplicates the current numbered line.", run: duplicateCurrentLine },
  { category: "Line Edit", label: "Delete Line", hint: "Deletes the current numbered line.", run: deleteCurrentEditorLine },
  { category: "Line Edit", label: "Clear Line", hint: "Clears the current instruction back to a blank terminator.", run: clearCurrentInstruction },
  { category: "Line Edit", label: "Move Line Up", hint: "Moves the current numbered line up.", run: () => moveCurrentLine(-1) },
  { category: "Line Edit", label: "Move Line Down", hint: "Moves the current numbered line down.", run: () => moveCurrentLine(1) },
  { category: "Comments", label: "Remark Toggle", hint: "Toggles // on the current or selected numbered lines.", run: toggleRemarkCurrentLine },
  { category: "Comments", label: "Comment Above", hint: "Inserts a ! comment above the cursor.", build: () => {
    const text = promptRequired("Comment text", "Comment");
    return text ? numberedInstruction(`! ${text}`) : null;
  } },
  { category: "Search", label: "Find", hint: "Finds text in the visible editor.", run: findTextInEditor },
  { category: "Search", label: "Replace", hint: "Replaces exact text in the visible editor.", run: replaceTextInEditor },
  { category: "Format", label: "Renumber", hint: "Renumbers visible TP program lines.", run: () => {
    const state = activeEditorState();
    if (!activeEditorCanEdit(state)) return;
    if (state.name === "main") pushUndoSnapshot();
    renumberTextAreaLines(state.textarea);
    state.markDirty();
    state.renderHighlight();
    renderDiagnostics();
    state.updateCursorStatus();
  } }
];

function currentNewTpCommands() {
  return newTpMode === "inst" ? newTpInstCommands : newTpEdcmdCommands;
}

function renderNewTpMenu() {
  const commands = currentNewTpCommands();
  const categories = Array.from(new Set(commands.map((command) => command.category)));
  const currentCategory = categories.includes(newTpCategorySelect.value) ? newTpCategorySelect.value : categories[0];

  newTpInstTab.setAttribute("aria-pressed", String(newTpMode === "inst"));
  newTpEdcmdTab.setAttribute("aria-pressed", String(newTpMode === "edcmd"));
  newTpCategorySelect.innerHTML = categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("");
  newTpCategorySelect.value = currentCategory;
  newTpActions.innerHTML = "";

  commands
    .filter((command) => command.category === currentCategory)
    .forEach((command) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = command.label;
      button.title = command.hint;
      button.addEventListener("click", () => {
        newTpHint.textContent = command.hint;
        insertPromptedNewTpInstruction(command);
      });
      newTpActions.append(button);
    });

  newTpHint.textContent = newTpMode === "inst"
    ? "INST commands insert above the cursor."
    : "EDCMD commands edit the current line or visible program.";
}

function setAdvancedTpOpen(open) {
  advancedTpContent.hidden = !open;
  advancedTpToggle.setAttribute("aria-expanded", String(open));
  advancedTpToggle.querySelector("span:last-child").textContent = open ? "-" : "+";
}

function setTeachPendantOpen(open) {
  teachPendantContent.hidden = !open;
  teachPendantToggle.setAttribute("aria-expanded", String(open));
  teachPendantToggle.querySelector("span:last-child").textContent = open ? "-" : "+";
}

function updateMotionBuilder() {
  const isCircular = motionTypeSelect.value === "C";
  motionPosition2Wrap.hidden = !isCircular;

  if (motionTypeSelect.value === "J" && motionSpeedUnitSelect.value !== "%") {
    motionSpeedUnitSelect.value = "%";
  }

  motionPreview.textContent = buildMotionInstruction().trim();
}

function updateWaitBuilder() {
  const waitType = waitTypeSelect.value;
  const isTime = waitType === "TIME";
  const isRegister = waitType === "R";

  waitIndexWrap.hidden = isTime;
  waitStateWrap.hidden = waitType !== "DI";
  waitCompareWrap.hidden = !isRegister;
  waitValueWrap.hidden = !isRegister;
  waitTimeWrap.hidden = !isTime;
  waitIndexLabel.textContent = isRegister ? "R Num" : "DI Num";
  waitPreview.textContent = buildWaitInstruction().trim();
}

function updateIoBuilder() {
  const ioType = ioTypeSelect.value;
  const isDigital = ["DO", "RO", "DI", "RI"].includes(ioType);
  const isInput = ["DI", "RI", "GI", "AI"].includes(ioType);
  const isValue = ["GO", "AO", "GI", "AI"].includes(ioType);

  ioStateWrap.hidden = !isDigital;
  ioValueWrap.hidden = !isValue;
  ioCompareWrap.hidden = !(isInput && isValue);
  ioActionWrap.hidden = !isInput;
  ioPreview.textContent = buildIoInstruction().trim();
}

function setTeachBuilderOpen(builderName) {
  const motionOpen = builderName === "motion";
  const waitOpen = builderName === "wait";
  const ioOpen = builderName === "io";

  motionBuilder.hidden = !motionOpen;
  waitBuilder.hidden = !waitOpen;
  ioBuilder.hidden = !ioOpen;
  motionToolBtn.setAttribute("aria-expanded", String(motionOpen));
  waitToolBtn.setAttribute("aria-expanded", String(waitOpen));
  ioToolBtn.setAttribute("aria-expanded", String(ioOpen));

  if (motionOpen) updateMotionBuilder();
  if (waitOpen) updateWaitBuilder();
  if (ioOpen) updateIoBuilder();
}

function insertInstruction(instruction) {
  const state = activeEditorState();
  if (!state.file) {
    projectStatus.textContent = "Open an LS file before inserting an instruction.";
    return;
  }

  if (!activeEditorCanEdit(state)) return;

  if (state.name === "main") pushUndoSnapshot();
  const start = state.textarea.selectionStart;
  const lineStart = state.textarea.value.lastIndexOf("\n", Math.max(0, start - 1)) + 1;
  const insertText = `${instruction}\n`;

  state.textarea.setRangeText(insertText, lineStart, lineStart, "end");
  renumberTextAreaLines(state.textarea);
  wrapLongBangCommentLinesFor(state.textarea);
  state.markDirty();
  refreshEditorAfterAssignmentChange(
    state.textarea,
    state.file,
    state.name === "split" ? splitHeaderVisible : headerVisible,
    state.name === "split" ? splitFooterVisible : footerVisible,
    state.name === "main"
  );
  state.renderHighlight();
  renderDiagnostics();
  state.updateCursorStatus();
  state.textarea.focus();
}

function toggleRemarkCurrentLine() {
  const state = activeEditorState();
  if (!state.file) {
    projectStatus.textContent = "Open an LS file before toggling a remark.";
    return;
  }

  if (!activeEditorCanEdit(state)) return;

  const value = state.textarea.value;
  const lines = value.replace(/\r\n/g, "\n").split("\n");
  const selectionStart = lineColumnFromIndex(value, state.textarea.selectionStart);
  const selectionEnd = lineColumnFromIndex(value, state.textarea.selectionEnd);
  const hasSelection = state.textarea.selectionStart !== state.textarea.selectionEnd;
  const lastSelectedLine = hasSelection && selectionEnd.column === 0
    ? Math.max(selectionStart.line, selectionEnd.line - 1)
    : selectionEnd.line;
  let toggledCount = 0;
  let nextStartColumn = selectionStart.column;
  let nextEndColumn = selectionEnd.column;

  for (let lineIndex = selectionStart.line; lineIndex <= lastSelectedLine; lineIndex += 1) {
    const match = (lines[lineIndex] || "").match(/^(\s*\d+:\s*)(.*)$/);
    if (!match || !isMnEditorLine(lines, lineIndex, editorStateHeaderVisible(state))) continue;

    const prefix = match[1];
    const logic = match[2];
    const delta = logic.startsWith("//") ? -2 : 2;
    const toggledLogic = logic.startsWith("//") ? logic.slice(2) : `//${logic}`;
    lines[lineIndex] = `${prefix}${toggledLogic}`;
    toggledCount += 1;

    if (lineIndex === selectionStart.line && selectionStart.column > prefix.length) {
      nextStartColumn = Math.max(prefix.length, selectionStart.column + delta);
    }
    if (lineIndex === selectionEnd.line && selectionEnd.column > prefix.length) {
      nextEndColumn = Math.max(prefix.length, selectionEnd.column + delta);
    }
  }

  if (toggledCount === 0) {
    projectStatus.textContent = hasSelection
      ? "Select one or more numbered LS instruction lines to toggle remarks."
      : "Place the cursor on a numbered LS instruction line to toggle a remark.";
    return;
  }

  if (state.name === "main") pushUndoSnapshot();
  state.textarea.value = lines.join("\n");
  const nextStart = indexFromLineColumn(lines, selectionStart.line, nextStartColumn);
  const nextEnd = indexFromLineColumn(lines, selectionEnd.line, nextEndColumn);
  state.textarea.setSelectionRange(nextStart, nextEnd);
  state.markDirty();
  state.renderHighlight();
  renderDiagnostics();
  state.updateCursorStatus();
  state.textarea.focus();
}

async function saveCurrentFile() {
  saveCurrentBuffer();
  const file = getCurrentFile();
  if (!file) return;

  if (await saveFileToDisk(file)) {
    currentFileNameEl.textContent = file.name;
    renderFileList();
    projectStatus.textContent = `Saved ${file.name}.`;
    persistSession();
    return;
  }

  projectStatus.textContent = "This project was imported without folder write access. Save/export will be added next.";
  persistSession();
}

async function saveAllPendingFiles() {
  if (!project) return;

  saveCurrentBuffer();
  saveSplitBuffer();
  const dirtyFiles = project.files.filter((file) => file.dirty);
  const shouldSave = confirm(
    dirtyFiles.length
      ? `Save all pending changes in ${dirtyFiles.length} LS file${dirtyFiles.length === 1 ? "" : "s"}? This will write every modified LS file to the project folder.`
      : "Save all pending changes in all LS files? There are currently no modified LS files."
  );
  if (!shouldSave) {
    projectStatus.textContent = "Save all cancelled.";
    return;
  }
  if (!dirtyFiles.length) {
    projectStatus.textContent = "All LS files are already saved.";
    return;
  }

  const failedFiles = [];
  for (const file of dirtyFiles) {
    if (!await saveFileToDisk(file)) failedFiles.push(file.name);
  }

  renderFileList();
  renderSplitFileSelect();
  updateSaveCurrentLsButton();
  if (failedFiles.length) {
    projectStatus.textContent = `Saved ${dirtyFiles.length - failedFiles.length} of ${dirtyFiles.length} modified LS files. Unable to save: ${failedFiles.join(", ")}.`;
  } else {
    projectStatus.textContent = `Saved all pending changes in ${dirtyFiles.length} LS file${dirtyFiles.length === 1 ? "" : "s"}.`;
  }
  persistSession();
}

function updateSaveCurrentLsButton() {
  const file = activeEditorState().file;
  saveCurrentLsBtn.disabled = !file?.dirty;
  saveCurrentLsBtn.title = file?.dirty
    ? `Save pending edits to ${file.name}`
    : "The active LS file has no pending edits";
  updateLoadLsFromRobotButton();
  updateCopyCurrentPathButton();
}

async function saveActiveEditorFile() {
  const state = activeEditorState();
  const file = state.file;
  if (!file || !file.dirty) {
    updateSaveCurrentLsButton();
    return;
  }

  const shouldSave = confirm(`Save pending edits to ${file.name}?`);
  if (!shouldSave) {
    projectStatus.textContent = `Save cancelled for ${file.name}.`;
    updateSaveCurrentLsButton();
    return;
  }

  if (state.name === "split") saveSplitBuffer();
  else saveCurrentBuffer();

  if (await saveFileToDisk(file)) {
    if (file.id === currentFileId) currentFileNameEl.textContent = file.name;
    renderFileList();
    renderSplitFileSelect();
    updateSaveCurrentLsButton();
    projectStatus.textContent = `Saved ${file.name}.`;
    persistSession();
    return;
  }

  projectStatus.textContent = `${file.name} could not be saved. Reconnect the project folder to restore write access.`;
  updateSaveCurrentLsButton();
  persistSession();
}

async function exportCurrentFile() {
  const file = getCurrentFile();
  if (!file) {
    projectStatus.textContent = "Open an LS file before exporting.";
    return;
  }

  const exportContent = mergeDisplayedContent(file.content, editor.value);
  const suggestedName = file.name || "program.LS";

  if (window.showSaveFilePicker) {
    const exportHandle = await window.showSaveFilePicker({
      suggestedName,
      types: [{
        description: "Fanuc LS file",
        accept: { "text/plain": [".LS", ".ls"] }
      }]
    });
    const writable = await exportHandle.createWritable();
    await writable.write(exportContent);
    await writable.close();
    projectStatus.textContent = `Exported ${suggestedName}. Original project file was not saved.`;
    return;
  }

  const blob = new Blob([exportContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = suggestedName;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  projectStatus.textContent = `Exported ${suggestedName}. Original project file was not saved.`;
}

function renderFileList() {
  updateSaveCurrentLsButton();
  if (!project) {
    fileListEl.innerHTML = "";
    return;
  }

  if (project.files.length === 0) {
    fileListEl.innerHTML = `<div class="empty-project">No .LS files found.</div>`;
    return;
  }

  fileListEl.innerHTML = project.files.map((file) => `
    <div class="file-item ${file.id === currentFileId ? "active" : ""} ${file.id === splitFileId && !splitEditorPane.hidden ? "split-open" : ""}" data-file-id="${escapeHtml(file.id)}">
      <button class="file-item-main" type="button" data-file-id="${escapeHtml(file.id)}" title="${escapeHtml(file.name)}">
        <span>${escapeHtml(file.name)}</span>
        <span>
          ${file.id === splitFileId && !splitEditorPane.hidden ? `<span class="split-badge">Split</span>` : ""}
          ${file.dirty ? `<span class="dirty">*</span>` : ""}
        </span>
      </button>
      <button class="favorite-file-button ${file.favorite ? "favorite" : ""}" type="button" data-favorite-file-id="${escapeHtml(file.id)}" aria-pressed="${String(Boolean(file.favorite))}" title="${file.favorite ? "Remove from favorites" : "Add to favorites"}" aria-label="${file.favorite ? `Remove ${escapeHtml(file.name)} from favorites` : `Add ${escapeHtml(file.name)} to favorites`}">${file.favorite ? "&#9733;" : "&#9734;"}</button>
    </div>
  `).join("");
}

async function toggleFavoriteFile(fileId) {
  const file = project?.files.find((item) => item.id === fileId);
  if (!file) return;
  file.favorite = !file.favorite;
  sortFiles(project.files);
  renderFileList();
  renderSplitFileSelect();
  persistSession();

  if (await persistProjectFavorites()) {
    projectStatus.textContent = `${file.favorite ? "Added" : "Removed"} ${file.name} ${file.favorite ? "to" : "from"} project favorites.`;
  } else {
    projectStatus.textContent = `${file.name} favorite updated for this browser session. Reconnect the project folder to save it with the project.`;
  }
}

function showProjectMessage(message) {
  diagnosticsEl.classList.remove("empty");
  diagnosticsEl.innerHTML = `
    <article class="diagnostic info">
      <strong>Project</strong>
      <div>${escapeHtml(message)}</div>
    </article>
  `;
}

function clearEditorState(message = "No checks run yet.") {
  editor.value = "";
  lastEditorValue = "";
  updateCopyCurrentPathButton();
  renderHighlight();
  updateCursorStatus();
  diagnosticsEl.className = "diagnostics empty";
  diagnosticsEl.textContent = message;
}

function setMainEditorEmptyState(message) {
  editor.value = "";
  editor.readOnly = true;
  mainEditorPrompt.textContent = message;
  mainEditorPrompt.hidden = false;
  footerToggleBar.hidden = true;
  resetEditorHistory();
  updateCopyCurrentPathButton();
}

function refreshEditor() {
  renderHighlight();
  renderDiagnostics();
  updateCursorStatus();
  syncHighlightScroll();
}

function scheduleDiagnosticsRefresh(delay = 250) {
  if (diagnosticsTimer) window.clearTimeout(diagnosticsTimer);
  diagnosticsTimer = window.setTimeout(() => {
    diagnosticsTimer = null;
    renderDiagnostics();
  }, delay);
}

function getInstructionLogic(line) {
  const match = line.match(/^\s*(?:\d+|):\s*(.*)$/);
  return match ? match[1] : "";
}

function isRemarkedInstructionLine(line) {
  return getInstructionLogic(line).trimStart().startsWith("//");
}

function isTpContinuationLine(line) {
  return /^\s*:\s*/.test(String(line || ""));
}

function hasFollowingTpContinuationLine(lines, index) {
  return isTpContinuationLine(lines[index + 1]);
}

function hasValidTpContinuationParent(lines, index) {
  if (!isTpContinuationLine(lines[index]) || index < 1) return false;
  const previousLine = lines[index - 1] || "";
  return /^\s*(?:\d+|):\s*/.test(previousLine) && !/;\s*$/.test(previousLine.trim());
}

function analyzeProgram(source) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const sections = {};
  const labels = new Map();
  const jumps = [];
  const positions = new Set();
  const usedPositions = [];
  let currentSection = "";
  let programName = "";
  let mnLines = 0;

  lines.forEach((line, index) => {
    const lineNo = index + 1;
    const section = getSection(line);

    if (section) {
      currentSection = section;
      sections[section] = lineNo;
    }

    const progMatch = line.match(/^\/PROG\s+([A-Z0-9_]+)/i);
    if (progMatch) programName = progMatch[1];

    if (currentSection === "MN" && !section && line.trim()) {
      if (/^\s*\d+:/.test(line)) mnLines += 1;

      if (isRemarkedInstructionLine(line)) return;

      const logic = getInstructionLogic(line);
      const labelMatch = logic.match(/^LBL\[\*?(\d+)(?::[^\]]*)?\]\s*;/i);
      if (labelMatch) {
        const id = labelMatch[1];
        if (!labels.has(id)) labels.set(id, []);
        labels.get(id).push(lineNo);
      }

      const jumpMatch = logic.match(/\bJMP\s+LBL\[\*?(\d+)(?::[^\]]*)?\]/i);
      if (jumpMatch) jumps.push({ id: jumpMatch[1], line: lineNo });

      for (const match of logic.matchAll(/\b[JLCP]\s+P\[(\d+)(?::[^\]]*)?\]/gi)) {
        usedPositions.push({ id: match[1], line: lineNo });
      }
    }

    if (currentSection === "POS") {
      const posMatch = line.match(/^P\[(\d+)(?::[^\]]*)?\]/i);
      if (posMatch) positions.add(posMatch[1]);
    }
  });

  return { lines, sections, labels, jumps, positions, usedPositions, programName, mnLines };
}

function lintProgram(source) {
  const analysis = analyzeProgram(source);
  const diagnostics = [];
  const required = ["PROG", "ATTR", "MN", "POS", "END"];
  const validMnLinePattern = /^\s*(?:\d+|):\s*/;
  const motionReferencePattern = /^\s*\d+:\s*[JLCP]\s+(?:P|PR)\[(?:\d+|R\[\d+(?::[^\]]+)?\])(?::[^\]]+)?\]/i;
  const motionTargetPattern = "(?:P|PR)\\[(?:\\d+|R\\[\\d+(?::[^\\]]+)?\\])(?::[^\\]]+)?\\]";
  const jointMotionPattern = new RegExp(`^J\\s+${motionTargetPattern}\\s+((?:R\\[\\d+(?::[^\\]]+)?\\]|\\d+(?:\\.\\d+)?)(?:%)?|\\S+)`, "i");

  required.forEach((section) => {
    if (!analysis.sections[section]) {
      diagnostics.push({
        severity: "error",
        line: 1,
        title: `Missing /${section}`,
        message: `Fanuc LS programs normally include a /${section} section.`,
        fix: { kind: "missing-section", section },
        suggestion: `Insert a basic /${section} section in the standard LS structure.`
      });
    }
  });

  if (!analysis.programName) {
    diagnostics.push({
      severity: "error",
      line: 1,
      title: "Missing program name",
      message: "Expected /PROG followed by a program name.",
      fix: { kind: "missing-program-name" },
      suggestion: "Insert /PROG using the current LS file name."
    });
  }

  let currentSection = "";
  const mnNumberLocations = new Map();
  let previousMnNumber = 0;
  const ifStack = [];
  analysis.lines.forEach((line, index) => {
    const lineNo = index + 1;
    const section = getSection(line);
    if (section) currentSection = section;

    if (currentSection === "MN" && !section && line.trim()) {
      const logic = getInstructionLogic(line).trim();
      const isRemarked = isRemarkedInstructionLine(line);
      const continuationLine = isTpContinuationLine(line);
      const validContinuationParent = !continuationLine || hasValidTpContinuationParent(analysis.lines, index);
      const lineNumberMatch = line.match(/^\s*(\d+):/);

      if (!validMnLinePattern.test(line)) {
        diagnostics.push({
          severity: "warning",
          line: lineNo,
          title: "Malformed TP line",
          message: "Expected a numbered instruction or continuation line in /MN.",
          fix: { kind: "format-mn-line", line: lineNo },
          suggestion: "Convert this into a numbered TP instruction line."
        });
      }

      if (continuationLine && !validContinuationParent) {
        diagnostics.push({
          severity: "error",
          line: lineNo,
          title: "Orphaned TP continuation",
          message: "A ':' continuation line must immediately follow an unterminated numbered instruction or another continuation segment.",
          suggestion: "Move this segment directly below its instruction, or convert it into a numbered TP line."
        });
      }

      if (lineNumberMatch) {
        const lineNumber = Number(lineNumberMatch[1]);
        if (mnNumberLocations.has(lineNumber)) {
          diagnostics.push({
            severity: "error",
            line: lineNo,
            title: `Duplicate line ${lineNumber}`,
            message: `TP line number ${lineNumber} already appears on source line ${mnNumberLocations.get(lineNumber)}.`,
            suggestion: "Let the editor renumber this file, or manually make TP line numbers unique."
          });
        } else {
          mnNumberLocations.set(lineNumber, lineNo);
        }

        if (previousMnNumber && lineNumber <= previousMnNumber) {
          diagnostics.push({
            severity: "warning",
            line: lineNo,
            title: "Line number order",
            message: "TP line numbers should increase from top to bottom in /MN.",
            suggestion: "Renumber the program lines so the sequence increases."
          });
        }
        previousMnNumber = lineNumber;
      }

      if (validMnLinePattern.test(line)
        && validContinuationParent
        && /;\S+/.test(line.trim())
        && !hasFollowingTpContinuationLine(analysis.lines, index)) {
        diagnostics.push({
          severity: "error",
          line: lineNo,
          title: "Extra text after semicolon",
          message: "TP instruction text after a semicolon is invalid.",
          fix: { kind: "trim-after-semicolon", line: lineNo },
          suggestion: "Remove everything after the first instruction semicolon."
        });
      } else if (validMnLinePattern.test(line)
        && validContinuationParent
        && !/;\s*$/.test(line.trim())
        && !hasFollowingTpContinuationLine(analysis.lines, index)) {
        diagnostics.push({
          severity: "error",
          line: lineNo,
          title: "Missing semicolon",
          message: "TP instruction lines must end with a semicolon.",
          fix: { kind: "add-semicolon", line: lineNo },
          suggestion: "Append ; to terminate this instruction line."
        });
      }

      if (!isRemarked) {
        if (/\b(?:FINE|CNT\d+)\s+(?:TOOL_)?OFFSET\s+PR\[/i.test(logic)) {
          diagnostics.push({
            severity: "error",
            line: lineNo,
            title: "Missing offset comma",
            message: "OFFSET and TOOL_OFFSET require a comma before their position register.",
            fix: { kind: "add-offset-comma", line: lineNo },
            suggestion: "Change OFFSET PR[...] to OFFSET,PR[...] or TOOL_OFFSET PR[...] to TOOL_OFFSET,PR[...]."
          });
        }

        const jointMotionMatch = logic.match(jointMotionPattern);
        if (jointMotionMatch && !/%$/.test(jointMotionMatch[1])) {
          const numericJointSpeed = /^\d+(?:\.\d+)?$/.test(jointMotionMatch[1]);
          diagnostics.push({
            severity: "error",
            line: lineNo,
            title: numericJointSpeed ? "Joint speed missing %" : "Invalid joint speed unit",
            message: "Joint motion speed must be a percent value, such as 100%.",
            fix: numericJointSpeed ? { kind: "add-joint-speed-percent", line: lineNo } : null,
            suggestion: numericJointSpeed ? `Change ${jointMotionMatch[1]} to ${jointMotionMatch[1]}%.` : "Use a percent speed for J motion."
          });
        }

        if (/^IF\b.*\bTHEN\b/i.test(logic)) {
          ifStack.push(lineNo);
        }

        if (/^ENDIF\b/i.test(logic)) {
          if (ifStack.length) {
            ifStack.pop();
          } else {
            diagnostics.push({
              severity: "error",
              line: lineNo,
              title: "Unexpected ENDIF",
              message: "ENDIF appears without a matching IF ... THEN block.",
              suggestion: "Remove the extra ENDIF or add the missing IF ... THEN above it."
            });
          }
        }
      }

      if (motionReferencePattern.test(line) && /;\s*$/.test(line.trim()) && !/\b(FINE|CNT\d+)\b/i.test(line)) {
        diagnostics.push({
          severity: "warning",
          line: lineNo,
          title: "Missing termination",
          message: "Motion instructions usually end with FINE or CNT value.",
          fix: { kind: "add-motion-termination", line: lineNo },
          suggestion: "Add FINE before the instruction semicolon."
        });
      }
    }
  });

  ifStack.forEach((lineNo) => {
    diagnostics.push({
      severity: "error",
      line: lineNo,
      title: "Unclosed IF block",
      message: "IF ... THEN block does not have a matching ENDIF.",
      suggestion: "Add ENDIF after the conditional block."
    });
  });

  analysis.labels.forEach((locations, id) => {
    if (locations.length > 1) {
      diagnostics.push({
        severity: "error",
        line: locations[1],
        title: `Duplicate LBL[${id}]`,
        message: `Label first appears on line ${locations[0]}.`,
        fix: { kind: "rename-duplicate-label", line: locations[1], id },
        suggestion: "Rename this duplicate label to the next available label number."
      });
    }
  });

  // Compiled robot exports can contain generated flow jumps that do not round-trip
  // cleanly as visible LBL definitions in LS, so unresolved jumps are not flagged.

  analysis.usedPositions.forEach((pos) => {
    if (!analysis.positions.has(pos.id)) {
      diagnostics.push({
        severity: "warning",
        line: pos.line,
        title: `Missing P[${pos.id}]`,
        message: "This motion references a position not found in /POS.",
        fix: { kind: "add-position", id: pos.id },
        suggestion: `Add a placeholder P[${pos.id}] entry to /POS.`
      });
    }
  });

  if (diagnostics.length === 0) {
    diagnostics.push({ severity: "info", line: 1, title: "No issues found", message: "The first-pass LS checks did not find obvious problems." });
  }

  return { diagnostics, analysis };
}

function formatProgram(source) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  let currentSection = "";
  let mnNumber = 1;

  return lines.map((raw) => {
    const trimmedRight = raw.trimEnd();
    const trimmed = trimmedRight.trim();
    const section = getSection(trimmed);

    if (!trimmed) return "";

    if (section) {
      currentSection = section;
      return trimmed.toUpperCase().startsWith("/PROG") ? trimmed.toUpperCase() : trimmed;
    }

    if (currentSection === "MN") {
      const command = trimmed.replace(/^\d+:\s*/, "").replace(/\s*;\s*$/, "");
      const normalized = command
        .replace(/\s*=\s*/g, "=")
        .replace(/\s+/g, " ")
        .replace(/\b(on|off)\b/gi, (value) => value.toUpperCase());
      const line = `${String(mnNumber).padStart(4, " ")}:  ${normalized} ;`;
      mnNumber += 1;
      return line;
    }

    if (currentSection === "ATTR") {
      return trimmed.replace(/\s*=\s*/g, " = ");
    }

    return trimmedRight;
  }).join("\n").replace(/\n+$/, "") + "\n";
}

function normalizeProjectReference(value) {
  const input = String(value || "").trim().toUpperCase();
  const tagMatch = input.match(/\b(DI|DO|AI|AO|GI|GO|RI|RO|UI|UO|SI|SO|PR|SR|R|F|TIMER)\[\s*(\d+)/);
  if (tagMatch) {
    const type = tagMatch[1];
    const index = Number(tagMatch[2]);
    return { kind: "tag", type, index, canonical: `${type}[${index}]`, key: assignmentKey(type, index) };
  }

  const labelMatch = input.match(/\bLBL\[\*?\s*(\d+)/);
  if (labelMatch) {
    const index = Number(labelMatch[1]);
    return { kind: "label", type: "LBL", index, canonical: `LBL[${index}]`, key: `LBL:${index}` };
  }

  const positionMatch = input.match(/\bP\[\s*(\d+)/);
  if (positionMatch) {
    const index = Number(positionMatch[1]);
    return { kind: "position", type: "P", index, canonical: `P[${index}]`, key: `P:${index}` };
  }

  return null;
}

function projectReferencePattern(reference) {
  if (reference.kind === "tag") {
    return new RegExp(`\\b(${reference.type}\\[\\s*)${reference.index}(?=\\s*[:\\]])`, "gi");
  }
  if (reference.kind === "label") {
    return new RegExp(`\\b(LBL\\[\\*?\\s*)${reference.index}(?=\\s*[:\\]])`, "gi");
  }
  return new RegExp(`\\b(P\\[\\s*)${reference.index}(?=\\s*[:\\]{])`, "gi");
}

function classifyProjectReference(line, reference) {
  if (isRemarkedInstructionLine(line) || /^\s*(?:!|\/\/)/.test(getInstructionLogic(line))) return "comment";
  const logic = getInstructionLogic(line).trim();

  if (reference.kind === "label") {
    if (new RegExp(`^LBL\\[\\*?\\s*${reference.index}(?=\\s*[:\\]])`, "i").test(logic)) return "definition";
    if (/\bJMP\s+LBL\[/i.test(logic)) return "jump";
    return "reference";
  }

  if (reference.kind === "position") {
    if (new RegExp(`^P\\[\\s*${reference.index}(?=\\s*[:\\]{])`, "i").test(line.trim())) return "definition";
    return "motion";
  }

  const writePattern = new RegExp(`\\b${reference.type}\\[\\s*${reference.index}(?:[^\\]\\r\\n]*)\\]\\s*=`, "i");
  return writePattern.test(logic) ? "write" : "read";
}

function findProjectReferences(reference) {
  if (!project || !reference) return [];
  saveCurrentBuffer();
  saveSplitBuffer();
  const results = [];

  project.files.forEach((file) => {
    file.content.replace(/\r\n/g, "\n").split("\n").forEach((line, index) => {
      const pattern = projectReferencePattern(reference);
      if (!pattern.test(line)) return;
      results.push({
        fileId: file.id,
        fileName: file.name,
        line: index + 1,
        category: classifyProjectReference(line, reference),
        text: line.trim()
      });
    });
  });

  return results;
}

function renderReferenceSearch() {
  const reference = normalizeProjectReference(referenceSearchInput.value);
  referenceSearchResults.innerHTML = "";
  referenceSearchSummary.classList.remove("error");

  if (!project) {
    referenceSearchSummary.textContent = "Open a project before searching references.";
    referenceSearchSummary.classList.add("error");
    return;
  }
  if (!reference) {
    referenceSearchSummary.textContent = "Enter a supported exact reference such as R[43], PR[19], F[3], LBL[22], or P[1].";
    referenceSearchSummary.classList.add("error");
    return;
  }

  referenceSearchInput.value = reference.canonical;
  const results = findProjectReferences(reference);
  const counts = new Map();
  results.forEach((result) => counts.set(result.category, (counts.get(result.category) || 0) + 1));
  const breakdown = Array.from(counts, ([category, count]) => `${count} ${category}`).join(", ");
  referenceSearchSummary.textContent = results.length
    ? `${reference.canonical}: ${results.length} project reference${results.length === 1 ? "" : "s"} (${breakdown}).`
    : `${reference.canonical}: no project references found.`;
  referenceSearchResults.innerHTML = results.map((result) => `
    <button type="button" class="reference-result" data-file-id="${escapeHtml(result.fileId)}" data-line="${result.line}">
      <span><strong>${escapeHtml(result.fileName)}</strong> · Line ${result.line}</span>
      <span class="reference-result-meta">${escapeHtml(result.category)}</span>
      <span class="reference-result-code">${escapeHtml(result.text)}</span>
    </button>
  `).join("");
}

function replaceProjectReference(content, fromReference, toReference) {
  return content.replace(projectReferencePattern(fromReference), (_match, prefix) => `${prefix}${toReference.index}`);
}

function previewTextAroundLine(source, lineNumber, radius = 2) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const center = Math.max(0, Math.min(lines.length - 1, Number(lineNumber || 1) - 1));
  const start = Math.max(0, center - radius);
  const end = Math.min(lines.length, center + radius + 1);
  return lines.slice(start, end).map((line, index) => `${String(start + index + 1).padStart(4, " ")} | ${line}`).join("\n");
}

function previewHtmlAroundLine(source, lineNumber, className, radius = 2) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const center = Math.max(0, Math.min(lines.length - 1, Number(lineNumber || 1) - 1));
  const start = Math.max(0, center - radius);
  const end = Math.min(lines.length, center + radius + 1);
  return lines.slice(start, end).map((line, index) => {
    const sourceLine = start + index + 1;
    const changed = sourceLine === Number(lineNumber);
    const text = `${String(sourceLine).padStart(4, " ")} | ${line}`;
    return `<span class="${className}${changed ? " changed" : ""}">${escapeHtml(text)}</span>`;
  }).join("");
}

function closeChangePreview() {
  pendingChangePreview = null;
  changePreviewModal.hidden = true;
  changePreviewApplyBtn.disabled = false;
}

function showChangePreview({ title, summary, details, applyLabel = "Apply Change", onApply }) {
  pendingChangePreview = onApply;
  changePreviewTitle.textContent = title;
  changePreviewSummary.textContent = summary;
  changePreviewDetails.innerHTML = details;
  changePreviewApplyBtn.textContent = applyLabel;
  changePreviewApplyBtn.disabled = false;
  changePreviewModal.hidden = false;
  changePreviewApplyBtn.focus();
}

async function loadReassignmentWorkbookPlan(fromReference, toReference) {
  if (fromReference.kind !== "tag") {
    return { workbookData: null, sourceDescription: "", targetDescription: "", sourceCellExists: false, targetCellExists: false };
  }
  const assignmentFileHandle = await ensureAssignmentFileHandle();
  if (!assignmentFileHandle) {
    return { workbookData: null, sourceDescription: "", targetDescription: "", sourceCellExists: false, targetCellExists: false };
  }
  const file = await assignmentFileHandle.getFile();
  const workbookData = await readAssignmentWorkbook(new Uint8Array(await file.arrayBuffer()));
  let sourceDescription = workbookData.assignments.get(fromReference.key) || "";
  if (!sourceDescription) {
    for (const lsFile of project.files) {
      sourceDescription = extractAssignmentsFromLs(lsFile.content).get(fromReference.key) || "";
      if (sourceDescription) break;
    }
  }
  return {
    workbookData,
    sourceDescription,
    targetDescription: workbookData.assignments.get(toReference.key) || "",
    sourceCellExists: workbookData.assignmentCells.has(fromReference.key),
    targetCellExists: workbookData.assignmentCells.has(toReference.key)
  };
}

async function writeReassignmentWorkbook(plan, fromReference, toReference) {
  if (!plan.workbookData || !plan.sourceDescription || !plan.targetCellExists) return false;
  const assignments = new Map(plan.workbookData.assignments);
  assignments.set(fromReference.key, "");
  assignments.set(toReference.key, plan.sourceDescription);
  const assignmentFileHandle = await ensureAssignmentFileHandle();
  if (!assignmentFileHandle) return false;
  const writable = await assignmentFileHandle.createWritable();
  await writable.write(writeAssignmentWorkbook(plan.workbookData, assignments));
  await writable.close();
  assignmentWorkbookData = null;
  return true;
}

async function previewProjectReassignment() {
  reassignStatus.classList.remove("error");
  if (!project) {
    reassignStatus.textContent = "Open a project before reassigning references.";
    reassignStatus.classList.add("error");
    return;
  }

  const fromReference = normalizeProjectReference(reassignFromInput.value);
  const toReference = normalizeProjectReference(reassignToInput.value);
  if (!fromReference || !toReference) {
    reassignStatus.textContent = "Enter supported references such as R[43], F[3], PR[19], LBL[22], or P[1].";
    reassignStatus.classList.add("error");
    return;
  }
  if (fromReference.kind !== toReference.kind || fromReference.type !== toReference.type) {
    reassignStatus.textContent = "The current and new references must use the same type.";
    reassignStatus.classList.add("error");
    return;
  }
  if (fromReference.index === toReference.index) {
    reassignStatus.textContent = "Choose a different target reference.";
    reassignStatus.classList.add("error");
    return;
  }

  reassignFromInput.value = fromReference.canonical;
  reassignToInput.value = toReference.canonical;
  const sourceResults = findProjectReferences(fromReference);
  const targetResults = findProjectReferences(toReference);
  if (!sourceResults.length) {
    reassignStatus.textContent = `${fromReference.canonical} is not used in this project.`;
    reassignStatus.classList.add("error");
    return;
  }
  if (targetResults.length) {
    reassignStatus.textContent = `${toReference.canonical} is already used ${targetResults.length} time${targetResults.length === 1 ? "" : "s"}. Reassignment blocked to prevent a conflict.`;
    reassignStatus.classList.add("error");
    return;
  }

  let workbookPlan;
  try {
    workbookPlan = await loadReassignmentWorkbookPlan(fromReference, toReference);
  } catch (error) {
    reassignStatus.textContent = `Unable to validate Data Assignments.xlsx: ${error.message}`;
    reassignStatus.classList.add("error");
    return;
  }
  if (workbookPlan.targetDescription) {
    reassignStatus.textContent = `${toReference.canonical} already has the Data Assignments description "${workbookPlan.targetDescription}". Reassignment blocked.`;
    reassignStatus.classList.add("error");
    return;
  }
  if (workbookPlan.workbookData && !workbookPlan.targetCellExists) {
    reassignStatus.textContent = `${toReference.canonical} is outside the mapped Data Assignments spreadsheet range. Reassignment blocked.`;
    reassignStatus.classList.add("error");
    return;
  }

  const filesAffected = new Set(sourceResults.map((result) => result.fileId)).size;
  const workbookMessage = workbookPlan.sourceDescription
    ? `The Data Assignments description "${workbookPlan.sourceDescription}" will move to ${toReference.canonical}.`
    : "No Data Assignments description needs to move.";
  const sampleResults = sourceResults.slice(0, 8).map((result) => (
    `${result.fileName}:${result.line}  ${result.text}`
  )).join("\n");
  const remaining = sourceResults.length > 8 ? `\n...and ${sourceResults.length - 8} more reference${sourceResults.length - 8 === 1 ? "" : "s"}.` : "";

  reassignStatus.textContent = `Ready to reassign ${sourceResults.length} reference${sourceResults.length === 1 ? "" : "s"}.`;
  showChangePreview({
    title: `Reassign ${fromReference.canonical}`,
    summary: `${sourceResults.length} exact reference${sourceResults.length === 1 ? "" : "s"} across ${filesAffected} LS file${filesAffected === 1 ? "" : "s"} will change to ${toReference.canonical}. ${workbookMessage}`,
    applyLabel: "Apply Reassignment",
    details: `
      <div class="change-preview-block">
        <strong>Project impact</strong>
        <pre class="change-preview-code"><span class="removed">- ${escapeHtml(fromReference.canonical)}</span>\n<span class="added">+ ${escapeHtml(toReference.canonical)}</span>\n\n${escapeHtml(sampleResults + remaining)}</pre>
      </div>
    `,
    onApply: async () => {
      saveCurrentBuffer();
      saveSplitBuffer();
      let changedFiles = 0;
      project.files.forEach((file) => {
        const next = replaceProjectReference(file.content, fromReference, toReference);
        if (next === file.content) return;
        file.content = next;
        file.dirty = true;
        changedFiles += 1;
      });
      const workbookUpdated = await writeReassignmentWorkbook(workbookPlan, fromReference, toReference);
      loadCurrentFileIntoEditor();
      if (!splitEditorPane.hidden) loadSplitFileIntoEditor();
      renderFileList();
      renderDiagnostics();
      persistSession();
      referenceSearchInput.value = toReference.canonical;
      renderReferenceSearch();
      reassignStatus.textContent = `Reassigned ${sourceResults.length} reference${sourceResults.length === 1 ? "" : "s"} across ${changedFiles} LS file${changedFiles === 1 ? "" : "s"}.${workbookUpdated ? " Data Assignments.xlsx was updated." : ""} Review and save the changed LS files.`;
    }
  });
}

function sourceLineText(source, lineNumber) {
  return source.replace(/\r\n/g, "\n").split("\n")[Math.max(0, lineNumber - 1)] || "";
}

function suggestedProgramName() {
  const fileName = getCurrentFile()?.name || "NEW_PROGRAM.LS";
  return fileName.replace(/\.[^.]+$/, "").replace(/[^A-Z0-9_]/gi, "_").toUpperCase().slice(0, 36) || "NEW_PROGRAM";
}

function nextMnLineNumber(lines, index) {
  for (let i = index - 1; i >= 0; i -= 1) {
    const match = lines[i].match(/^\s*(\d+):/);
    if (match) return Number(match[1]) + 1;
  }

  for (let i = index + 1; i < lines.length; i += 1) {
    const match = lines[i].match(/^\s*(\d+):/);
    if (match) return Math.max(1, Number(match[1]) - 1);
  }

  return 1;
}

function basicAttrSection() {
  return [
    "/ATTR",
    "OWNER\t\t= MNEDITOR;",
    "COMMENT\t\t= \"\";",
    "PROG_SIZE\t= 0;",
    "CREATE\t\t= DATE 00-00-00  TIME 00:00:00;",
    "MODIFIED\t= DATE 00-00-00  TIME 00:00:00;",
    "FILE_NAME\t= ;",
    "VERSION\t\t= 0;",
    "LINE_COUNT\t= 0;",
    "MEMORY_SIZE\t= 0;",
    "PROTECT\t\t= READ_WRITE;",
    "TCD:  STACK_SIZE\t= 0,",
    "      TASK_PRIORITY\t= 50,",
    "      TIME_SLICE\t= 0,",
    "      BUSY_LAMP_OFF\t= 0,",
    "      ABORT_REQUEST\t= 0,",
    "      PAUSE_REQUEST\t= 0;",
    "DEFAULT_GROUP\t= 1,*,*,*,*;",
    "CONTROL_CODE\t= 00000000 00000000;"
  ].join("\n");
}

function insertMissingSection(source, section) {
  const normalized = source.replace(/\r\n/g, "\n");
  const lines = normalized.split("\n");
  const upper = section.toUpperCase();
  if (upper === "PROG") return `/PROG ${suggestedProgramName()}\n${normalized}`;
  if (upper === "ATTR") {
    const mnIndex = lines.findIndex((line) => /^\/MN\b/i.test(line.trim()));
    const insertIndex = mnIndex >= 0 ? mnIndex : Math.min(lines.length, 1);
    lines.splice(insertIndex, 0, basicAttrSection());
    return lines.join("\n");
  }
  if (upper === "MN") {
    const posIndex = lines.findIndex((line) => /^\/POS\b/i.test(line.trim()));
    const endIndex = lines.findIndex((line) => /^\/END\b/i.test(line.trim()));
    const insertIndex = posIndex >= 0 ? posIndex : endIndex >= 0 ? endIndex : lines.length;
    lines.splice(insertIndex, 0, "/MN", "   1:   ;");
    return lines.join("\n");
  }
  if (upper === "POS") {
    const endIndex = lines.findIndex((line) => /^\/END\b/i.test(line.trim()));
    const insertIndex = endIndex >= 0 ? endIndex : lines.length;
    lines.splice(insertIndex, 0, "/POS");
    return lines.join("\n");
  }
  if (upper === "END") return `${normalized.replace(/\n*$/, "\n")}/END`;
  return source;
}

function addMotionTermination(source, lineNumber) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const index = lineNumber - 1;
  lines[index] = (lines[index] || "").replace(/\s*;\s*$/, " FINE    ;");
  return lines.join("\n");
}

function addLineSemicolon(source, lineNumber) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const index = lineNumber - 1;
  const line = lines[index] || "";
  lines[index] = /;\s*$/.test(line.trim()) ? line : `${line.replace(/\s+$/, "")} ;`;
  return lines.join("\n");
}

function trimAfterSemicolon(source, lineNumber) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const index = lineNumber - 1;
  const line = lines[index] || "";
  const semicolonIndex = line.indexOf(";");
  if (semicolonIndex >= 0) {
    lines[index] = `${line.slice(0, semicolonIndex).replace(/\s+$/, "")} ;`;
  }
  return lines.join("\n");
}

function addOffsetComma(source, lineNumber) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const index = lineNumber - 1;
  lines[index] = (lines[index] || "").replace(/\b((?:TOOL_)?OFFSET)\s+(?=PR\[)/i, "$1,");
  return lines.join("\n");
}

function addJointSpeedPercent(source, lineNumber) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const index = lineNumber - 1;
  const line = lines[index] || "";
  const targetPattern = "((?:P|PR)\\[(?:\\d+|R\\[\\d+(?::[^\\]]+)?\\])(?::[^\\]]+)?\\])";
  const jointSpeedPattern = new RegExp(`^(\\s*(?:\\d+|):\\s*J\\s+${targetPattern}\\s+)(\\d+(?:\\.\\d+)?)(\\s+)`, "i");
  lines[index] = line.replace(jointSpeedPattern, "$1$3%$4");
  return lines.join("\n");
}

function formatMnLine(source, lineNumber) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const index = lineNumber - 1;
  const original = lines[index] || "";
  const instruction = original.trim().replace(/\s*;\s*$/, "") || "";
  const lineNo = nextMnLineNumber(lines, index);
  lines[index] = `${String(lineNo).padStart(4, " ")}:  ${instruction} ;`;
  return lines.join("\n");
}

function renameDuplicateLabel(source, lineNumber, id) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const used = new Set();
  lines.forEach((line, index) => {
    if (index === lineNumber - 1 || isRemarkedInstructionLine(line)) return;
    const match = getInstructionLogic(line).match(/^LBL\[\*?(\d+)(?::[^\]]*)?\]\s*;/i);
    if (match) used.add(Number(match[1]));
  });

  let nextId = Number(id) || 1;
  while (used.has(nextId)) nextId += 1;

  const index = lineNumber - 1;
  lines[index] = (lines[index] || "").replace(/LBL\[\*?\d+((?::[^\]]*)?)\]/i, `LBL[${nextId}$1]`);
  return lines.join("\n");
}

function addPlaceholderPosition(source, id) {
  const normalized = source.replace(/\r\n/g, "\n");
  let lines = normalized.split("\n");
  if (!lines.some((line) => /^\/POS\b/i.test(line.trim()))) {
    lines = insertMissingSection(normalized, "POS").split("\n");
  }

  const endIndex = lines.findIndex((line) => /^\/END\b/i.test(line.trim()));
  const insertIndex = endIndex >= 0 ? endIndex : lines.length;
  const positionBlock = [
    `P[${id}]{`,
    "   GP1:",
    "\tUF : 0, UT : 0,",
    "\tCONFIG : 'N U T, 0, 0, 0',",
    "\tX =     0.000  mm,\tY =     0.000  mm,\tZ =     0.000  mm,",
    "\tW =     0.000 deg,\tP =     0.000 deg,\tR =     0.000 deg",
    "};"
  ];
  lines.splice(insertIndex, 0, ...positionBlock);
  return lines.join("\n");
}

function calculateDiagnosticFix(before, fix) {
  if (!fix) return before;
  let next = before;

  if (fix.kind === "missing-section") next = insertMissingSection(before, fix.section);
  if (fix.kind === "missing-program-name") next = insertMissingSection(before, "PROG");
  if (fix.kind === "format-mn-line") next = formatMnLine(before, fix.line);
  if (fix.kind === "add-semicolon") next = addLineSemicolon(before, fix.line);
  if (fix.kind === "trim-after-semicolon") next = trimAfterSemicolon(before, fix.line);
  if (fix.kind === "add-motion-termination") next = addMotionTermination(before, fix.line);
  if (fix.kind === "add-tool-offset-comma" || fix.kind === "add-offset-comma") next = addOffsetComma(before, fix.line);
  if (fix.kind === "add-joint-speed-percent") next = addJointSpeedPercent(before, fix.line);
  if (fix.kind === "rename-duplicate-label") next = renameDuplicateLabel(before, fix.line, fix.id);
  if (fix.kind === "add-position") next = addPlaceholderPosition(before, fix.id);
  return next;
}

function applyDiagnosticFix(fix, preparedContent = null) {
  const file = getCurrentFile();
  if (!file || !fix) return;

  saveCurrentBuffer();
  const before = file.content;
  const next = preparedContent ?? calculateDiagnosticFix(before, fix);

  if (next === before) return;

  pushUndoSnapshot();
  file.content = next;
  file.dirty = true;
  editor.value = displayedFileContent(file);
  lastEditorValue = editor.value;
  currentFileNameEl.textContent = `${file.name} *`;
  refreshEditor();
  updateHeaderToggle();
  updateFooterToggle();
  renderFileList();
  persistSession();
  projectStatus.textContent = "Applied diagnostic fix. Review the edited line before saving.";
  goToDiagnosticLine(fix.line || 1);
}

function reviewDiagnosticFix(item) {
  const file = getCurrentFile();
  if (!file || !item?.fix) return;
  saveCurrentBuffer();
  const before = file.content;
  const next = calculateDiagnosticFix(before, item.fix);
  if (next === before) {
    projectStatus.textContent = "The suggested diagnostic fix would not change the current file.";
    return;
  }

  const line = item.fix.line || item.line || 1;
  showChangePreview({
    title: `Review Fix: ${item.title}`,
    summary: `${file.name}, near source line ${line}. This change affects only the currently open LS file.`,
    applyLabel: "Apply Fix",
    details: `
      <div class="change-preview-block">
        <strong>Before</strong>
        <pre class="change-preview-code">${previewHtmlAroundLine(before, line, "removed")}</pre>
      </div>
      <div class="change-preview-block">
        <strong>After</strong>
        <pre class="change-preview-code">${previewHtmlAroundLine(next, line, "added")}</pre>
      </div>
    `,
    onApply: () => applyDiagnosticFix(item.fix, next)
  });
}

function diagnosticKey(item) {
  const fileName = getCurrentFile()?.name || "active-editor";
  return [
    fileName,
    item.severity || "",
    item.line || "",
    item.title || "",
    item.message || "",
    item.suggestion || "",
    item.fix?.kind || ""
  ].join("|");
}

function resetDismissedDiagnostics() {
  dismissedDiagnosticKeys = new Set();
}

function renderDiagnostics() {
  saveCurrentBuffer();
  const source = getCurrentFile()?.content || editor.value;
  const { diagnostics } = lintProgram(source);
  const visibleDiagnostics = diagnostics
    .map((item, index) => ({ item, index, key: diagnosticKey(item) }))
    .filter(({ key }) => !dismissedDiagnosticKeys.has(key));

  diagnosticsEl.classList.remove("empty");
  diagnosticsEl.innerHTML = visibleDiagnostics.length > 0 ? visibleDiagnostics.map(({ item, index }) => `
    <article class="diagnostic ${item.severity}" data-line="${item.line}" data-fix-index="${index}" tabindex="0" aria-label="${escapeHtml(`${item.title}, line ${item.line}`)}">
      <div class="diagnostic-title">
        <strong>${escapeHtml(item.title)}</strong>
        <span>Line ${item.line}</span>
      </div>
      <div>${escapeHtml(item.message)}</div>
      ${item.suggestion ? `<div class="diagnostic-suggestion">Suggested fix: ${escapeHtml(item.suggestion)}</div>` : ""}
      ${item.title !== "No issues found" ? `
        <div class="diagnostic-actions">
          <button type="button" class="diagnostic-jump" data-line="${item.line}">Go To</button>
          ${item.fix ? `<button type="button" class="diagnostic-fix" data-fix-index="${index}">Review Fix</button>` : ""}
          <button type="button" class="diagnostic-dismiss" data-dismiss-index="${index}">Dismiss</button>
        </div>
      ` : ""}
    </article>
  `).join("") : `
    <article class="diagnostic info" tabindex="0">
      <div class="diagnostic-title">
        <strong>All current diagnostics dismissed</strong>
      </div>
      <div>Press Check to run diagnostics again and restore dismissed issues.</div>
    </article>
  `;
  diagnosticsEl._diagnostics = diagnostics;
}

function visibleLineIndexForSourceLine(sourceLine) {
  const file = getCurrentFile();
  if (!file) return Math.max(0, sourceLine - 1);

  const fullLines = file.content.replace(/\r\n/g, "\n").split("\n");
  const visibleLines = getVisibleContent(file.content).replace(/\r\n/g, "\n").split("\n");
  const targetText = fullLines[Math.max(0, sourceLine - 1)] || "";
  const header = splitFileSections(file.content).header.replace(/\n$/, "");
  const headerLineCount = header ? header.split("\n").length : 0;
  let guess = headerVisible ? sourceLine - 1 : sourceLine - 1 - headerLineCount;

  const normalizedTarget = targetText.trim();
  if (guess >= 0 && guess < visibleLines.length && visibleLines[guess].trim() === normalizedTarget) {
    return guess;
  }

  if (normalizedTarget) {
    const found = visibleLines.findIndex((line, index) => (
      line.trim() === normalizedTarget && Math.abs(index - guess) <= 3
    ));
    if (found >= 0) return found;
  }

  return Math.max(0, Math.min(visibleLines.length - 1, guess));
}

function goToDiagnosticLine(sourceLine) {
  if (!getCurrentFile()) return;
  setActiveEditor("main");

  const lines = editor.value.replace(/\r\n/g, "\n").split("\n");
  const visibleLineIndex = visibleLineIndexForSourceLine(sourceLine);
  const line = lines[visibleLineIndex] || "";
  const firstCodeColumn = line.match(/^\s*\d+:\s*/)?.[0].length || 0;
  const target = indexFromLineColumn(lines, visibleLineIndex, firstCodeColumn);

  editor.focus();
  editor.setSelectionRange(target, target);
  const lineHeight = Number.parseFloat(getComputedStyle(editor).lineHeight) || 22;
  editor.scrollTop = Math.max(0, visibleLineIndex * lineHeight - editor.clientHeight / 2);
  syncHighlightScroll();
  updateCursorStatus();
  flashEditorLine(visibleLineIndex);
}

function renderHighlight() {
  const pendingLines = pendingVisibleLineIndexes(getCurrentFile());
  const hasIfPairConnector = ifPairHighlight && ifPairHighlight.matchLine !== null;
  const connectorStart = hasIfPairConnector ? Math.min(ifPairHighlight.sourceLine, ifPairHighlight.matchLine) : -1;
  const connectorEnd = hasIfPairConnector ? Math.max(ifPairHighlight.sourceLine, ifPairHighlight.matchLine) : -1;
  highlightedCode.innerHTML = editor.value
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line, index) => highlightLine(
      line,
      index,
      flashLineIndex === index,
      pendingLines.has(index),
      ifPairHighlight?.sourceLine === index,
      ifPairHighlight?.matchLine === index,
      ifPairHighlight?.sourceLine === index && ifPairHighlight?.matchLine === null,
      hasIfPairConnector && index >= connectorStart && index <= connectorEnd,
      hasIfPairConnector && index === connectorStart,
      hasIfPairConnector && index === connectorEnd
    ))
    .join("");
}

function flashEditorLine(lineIndex) {
  flashLineIndex = lineIndex;
  renderHighlight();
  syncHighlightScroll();
  if (flashLineTimer) window.clearTimeout(flashLineTimer);
  flashLineTimer = window.setTimeout(() => {
    flashLineIndex = null;
    flashLineTimer = null;
    renderHighlight();
    syncHighlightScroll();
  }, 1800);
}

function comparablePendingLine(line) {
  return String(line || "").replace(/^\s*\d+:\s*/, "#: ");
}

function changedCurrentLineIndexes(savedText, currentText) {
  if (savedText === currentText) return new Set();
  const savedLines = String(savedText || "").replace(/\r\n/g, "\n").split("\n");
  const currentLines = String(currentText || "").replace(/\r\n/g, "\n").split("\n");
  const savedComparable = savedLines.map(comparablePendingLine);
  const currentComparable = currentLines.map(comparablePendingLine);
  const changed = new Set();
  const cellCount = savedLines.length * currentLines.length;

  if (cellCount > 1500000) {
    let prefix = 0;
    while (prefix < savedLines.length && prefix < currentLines.length && savedComparable[prefix] === currentComparable[prefix]) {
      prefix += 1;
    }
    let savedSuffix = savedLines.length - 1;
    let currentSuffix = currentLines.length - 1;
    while (savedSuffix >= prefix && currentSuffix >= prefix && savedComparable[savedSuffix] === currentComparable[currentSuffix]) {
      savedSuffix -= 1;
      currentSuffix -= 1;
    }
    for (let index = prefix; index <= currentSuffix; index += 1) changed.add(index);
    return changed;
  }

  const width = currentLines.length + 1;
  const lcs = new Uint16Array((savedLines.length + 1) * width);
  for (let savedIndex = savedLines.length - 1; savedIndex >= 0; savedIndex -= 1) {
    for (let currentIndex = currentLines.length - 1; currentIndex >= 0; currentIndex -= 1) {
      const offset = savedIndex * width + currentIndex;
      lcs[offset] = savedComparable[savedIndex] === currentComparable[currentIndex]
        ? lcs[(savedIndex + 1) * width + currentIndex + 1] + 1
        : Math.max(lcs[(savedIndex + 1) * width + currentIndex], lcs[offset + 1]);
    }
  }

  let savedIndex = 0;
  let currentIndex = 0;
  while (savedIndex < savedLines.length && currentIndex < currentLines.length) {
    if (savedComparable[savedIndex] === currentComparable[currentIndex]) {
      savedIndex += 1;
      currentIndex += 1;
    } else if (lcs[(savedIndex + 1) * width + currentIndex] >= lcs[savedIndex * width + currentIndex + 1]) {
      changed.add(Math.min(currentIndex, Math.max(0, currentLines.length - 1)));
      savedIndex += 1;
    } else {
      changed.add(currentIndex);
      currentIndex += 1;
    }
  }
  while (currentIndex < currentLines.length) {
    changed.add(currentIndex);
    currentIndex += 1;
  }
  return changed;
}

function pendingVisibleLineIndexes(file, showHeader = headerVisible, showFooter = footerVisible) {
  if (!file?.dirty) return new Set();
  const savedContent = typeof file.savedContent === "string" ? file.savedContent : "";
  return changedCurrentLineIndexes(
    getVisibleContent(savedContent, showHeader, showFooter),
    getVisibleContent(file.content, showHeader, showFooter)
  );
}

function highlightLine(line, index = -1, isFlashing = false, isPendingChange = false, isIfPairSource = false, isIfPairMatch = false, isIfPairMissing = false, isIfPairConnector = false, isIfPairConnectorStart = false, isIfPairConnectorEnd = false) {
  const { code, comment } = splitInstructionComment(line);
  const isBangComment = comment.startsWith("!");
  const commentLine = /^\s*(?:\d+:\s*)?(?:!|\/\/)/.test(line);
  const className = [
    "line",
    commentLine ? (isBangComment ? "bang-comment-line" : "comment-line") : "",
    isFlashing ? "diagnostic-line-flash" : "",
    isPendingChange ? "pending-change-line" : "",
    isIfPairSource ? "if-pair-source-line" : "",
    isIfPairMatch ? "if-pair-match-line" : "",
    isIfPairMissing ? "if-pair-missing-line" : "",
    isIfPairConnector ? "if-pair-connector-line" : "",
    isIfPairConnectorStart ? "if-pair-connector-start" : "",
    isIfPairConnectorEnd ? "if-pair-connector-end" : ""
  ].filter(Boolean).join(" ");
  const commentClassName = isBangComment ? "tok-bang-comment" : "tok-comment";
  return `<span class="${className}" data-line-index="${index}">${highlightCodePart(code, isIfPairSource || isIfPairMatch || isIfPairMissing)}${comment ? `<span class="${commentClassName}">${escapeHtml(comment)}</span>` : ""}</span>`;
}

function highlightCodePart(code, highlightIfPairToken = false) {
  const placeholders = [];
  let protectedCode = code.replace(/"[^"]*"|'[^']*'/g, (value) => {
    const key = `\u0000${placeholders.length}\u0000`;
    placeholders.push(`<span class="tok-string">${escapeHtml(value)}</span>`);
    return key;
  });

  const tokenPattern = /(\/(?:PROG|ATTR|APPL|MN|POS|END)\b)|(^\s*\d+:)|(\b(?:JMP|LBL|CALL|IF|THEN|ELSE|ENDIF|SELECT|FOR|ENDFOR|WAIT|PAUSE|ABORT|RUN)\b)|(\b[JLCP]\b(?=\s+P\[))|(\b(?:DI|DO|AI|AO|GI|GO|RI|RO|UI|UO|SI|SO|PR|SR|R|F|TIMER)\[\d+(?::[^\]\r\n]+)?\])|(\b(?:P|VR|AR)\[\d+\])|(\b(?:UFRAME_NUM|UTOOL_NUM|OVERRIDE|PAYLOAD)\b)|(\b(?:FINE|CNT\d+)\b)|(\b\d+(?:\.\d+)?(?:mm\/sec|sec|%|deg|mm)?\b)|((?<=\bCALL\s+)[A-Z][A-Z0-9_]*\b)/gim;

  protectedCode = escapeHtml(protectedCode).replace(tokenPattern, (match, section, lineNo, flow, motion, io, register, setting, termination, number, callProgram) => {
    if (section) return `<span class="tok-section">${match}</span>`;
    if (lineNo) return `<span class="tok-line-number">${match}</span>`;
    if (flow) return `<span class="tok-flow${highlightIfPairToken && /^(?:IF|ENDIF)$/i.test(match) ? " tok-if-pair" : ""}">${match}</span>`;
    if (motion) return `<span class="tok-motion">${match}</span>`;
    if (io) return `<span class="tok-io">${match}</span>`;
    if (register || setting || callProgram) return `<span class="tok-register">${match}</span>`;
    if (termination) return `<span class="tok-termination">${match}</span>`;
    if (number) return `<span class="tok-number">${match}</span>`;
    return match;
  });

  protectedCode = protectedCode.replace(/\u0000(\d+)\u0000/g, (_, index) => placeholders[Number(index)]);
  return protectedCode;
}

function syncHighlightScroll() {
  highlightedCode.scrollTop = editor.scrollTop;
  highlightedCode.scrollLeft = editor.scrollLeft;
}


function setTheme(theme) {
  document.body.dataset.theme = theme;
  themeSelect.value = theme;
  localStorage.setItem("robo-programmer-theme", theme);
}

function setDiagnosticsOpen(open) {
  diagnosticsContent.hidden = !open;
  diagnosticsToggle.setAttribute("aria-expanded", String(open));
  diagnosticsToggle.querySelector("span:last-child").textContent = open ? "-" : "+";
}

function setProjectToolsOpen(open) {
  projectToolsContent.hidden = !open;
  projectToolsToggle.setAttribute("aria-expanded", String(open));
  projectToolsToggle.querySelector("span:last-child").textContent = open ? "-" : "+";
}

function setRightPanelWidth(width) {
  const clampedWidth = Math.max(260, Math.min(760, Math.round(width)));
  editorLayout.style.setProperty("--right-width", `${clampedWidth}px`);
  localStorage.setItem("robo-programmer-right-width", String(clampedWidth));
}

function setProjectPanelWidth(width) {
  const clampedWidth = Math.max(170, Math.min(520, Math.round(width)));
  editorLayout.style.setProperty("--project-width", `${clampedWidth}px`);
  localStorage.setItem("robo-programmer-project-width", String(clampedWidth));
}

function resizeRightPanelFromPointer(clientX) {
  const bounds = editorLayout.getBoundingClientRect();
  const width = bounds.right - clientX - 10;
  setRightPanelWidth(width);
}

function resizeProjectPanelFromPointer(clientX) {
  const bounds = editorLayout.getBoundingClientRect();
  const width = clientX - bounds.left;
  setProjectPanelWidth(width);
}

function setFileMenuOpen(open) {
  fileMenu.hidden = !open;
  fileMenuBtn.setAttribute("aria-expanded", String(open));
}

function updateCursorStatus() {
  const before = editor.value.slice(0, editor.selectionStart);
  const lines = before.split("\n");
  cursorStatus.textContent = `Ln ${lines.length}, Col ${lines[lines.length - 1].length + 1}`;
}

function currentToken() {
  const start = editor.selectionStart;
  const before = editor.value.slice(0, start);
  const match = before.match(/[A-Z/][A-Z0-9_/]*$/i);
  return match ? match[0] : "";
}

function autocompleteContext() {
  const caret = editor.selectionStart;
  const valueBeforeCaret = editor.value.slice(0, caret);
  const lineStart = valueBeforeCaret.lastIndexOf("\n") + 1;
  const lineBeforeCaret = valueBeforeCaret.slice(lineStart);
  const tokenMatch = lineBeforeCaret.match(/[A-Z/][A-Z0-9_/]*$/i);
  if (!tokenMatch) return null;

  const token = tokenMatch[0].toUpperCase();
  const prefix = lineBeforeCaret.slice(0, tokenMatch.index);
  const instructionPrefix = prefix.replace(/^\s*(?:(?:\d+)?\s*:\s*)?/, "");
  if (/!|\/\//.test(instructionPrefix)) return null;

  const lines = editor.value.replace(/\r\n/g, "\n").split("\n");
  const lineIndex = valueBeforeCaret.split("\n").length - 1;
  let section = headerVisible ? "" : "MN";
  for (let index = 0; index <= lineIndex; index += 1) {
    const nextSection = getSection(lines[index] || "");
    if (nextSection) section = nextSection;
  }

  if (token.startsWith("/") && !instructionPrefix.trim()) {
    return { kind: "instruction", token };
  }
  if (section !== "MN") return null;
  if (!instructionPrefix.trim()) return { kind: "instruction", token };

  if (/^\s*[JLC]\s+/i.test(instructionPrefix) && /^(?:F|FI|FIN|FINE|C|CN|CNT\d*)$/i.test(token)) {
    return { kind: "termination", token };
  }

  return null;
}

function completionCatalog() {
  const commandCompletions = [...newTpInstCommands, ...newTpEdcmdCommands]
    .flatMap((command) => command.autocomplete || []);
  const unique = new Map();

  [...coreCompletions, ...teachPendantCompletions, ...advancedTpCompletions, ...commandCompletions].forEach(([text, label]) => {
    const key = String(text || "").trim().replace(/\s+/g, " ").toUpperCase();
    if (!unique.has(key)) unique.set(key, [text, label]);
  });

  return Array.from(unique.values());
}

function completionMatchesContext(completion, context) {
  const text = completion[0].trim().toUpperCase();
  const leadingToken = text.match(/^[A-Z/][A-Z0-9_/]*/)?.[0] || "";
  if (context.kind === "termination") {
    return /^(?:FINE|CNT\d*)$/.test(leadingToken) && leadingToken.startsWith(context.token);
  }
  return leadingToken.startsWith(context.token);
}

function showSuggestions() {
  const context = autocompleteContext();
  if (!context) {
    hideSuggestions();
    return;
  }

  visibleSuggestions = completionCatalog()
    .filter((completion) => completionMatchesContext(completion, context))
    .sort((a, b) => {
      const aText = a[0].toUpperCase();
      const bText = b[0].toUpperCase();
      const aStarts = aText.startsWith(context.token) ? 0 : 1;
      const bStarts = bText.startsWith(context.token) ? 0 : 1;
      return aStarts - bStarts || aText.localeCompare(bText);
    })
    .slice(0, 10);
  activeSuggestion = 0;

  if (visibleSuggestions.length === 0) {
    hideSuggestions();
    return;
  }

  renderSuggestions();
}

function renderSuggestions() {
  suggestionsEl.hidden = false;
  suggestionsEl.innerHTML = visibleSuggestions.map(([text, label], index) => `
    <div class="suggestion ${index === activeSuggestion ? "active" : ""}" data-index="${index}">
      <code>${escapeHtml(text)}</code>
      <span>${escapeHtml(label)}</span>
    </div>
  `).join("");
  positionSuggestions();
}

function textareaCaretRect(textarea) {
  const mirror = document.createElement("div");
  const marker = document.createElement("span");
  const style = getComputedStyle(textarea);
  const rect = textarea.getBoundingClientRect();
  const copiedProperties = [
    "borderBottomWidth",
    "borderLeftWidth",
    "borderRightWidth",
    "borderTopWidth",
    "boxSizing",
    "fontFamily",
    "fontSize",
    "fontStyle",
    "fontWeight",
    "letterSpacing",
    "lineHeight",
    "overflowWrap",
    "paddingBottom",
    "paddingLeft",
    "paddingRight",
    "paddingTop",
    "tabSize",
    "textIndent",
    "textTransform",
    "whiteSpace",
    "wordBreak",
    "wordSpacing"
  ];

  copiedProperties.forEach((property) => {
    mirror.style[property] = style[property];
  });

  mirror.style.height = `${rect.height}px`;
  mirror.style.left = `${rect.left}px`;
  mirror.style.overflow = "hidden";
  mirror.style.pointerEvents = "none";
  mirror.style.position = "fixed";
  mirror.style.top = `${rect.top}px`;
  mirror.style.visibility = "hidden";
  mirror.style.width = `${rect.width}px`;
  mirror.textContent = textarea.value.slice(0, textarea.selectionStart);
  marker.textContent = "\u200b";
  mirror.append(marker);
  document.body.append(mirror);
  mirror.scrollLeft = textarea.scrollLeft;
  mirror.scrollTop = textarea.scrollTop;

  const markerRect = marker.getBoundingClientRect();
  const lineHeight = Number.parseFloat(style.lineHeight) || markerRect.height;
  mirror.remove();

  return {
    bottom: markerRect.top + lineHeight,
    left: markerRect.left,
    top: markerRect.top
  };
}

function positionSuggestions() {
  if (suggestionsEl.hidden) return;

  const editorBounds = editor.closest(".code-editor").getBoundingClientRect();
  const parentBounds = suggestionsEl.offsetParent.getBoundingClientRect();
  const caret = textareaCaretRect(editor);
  const gap = 6;
  const edge = 8;
  const spaceBelow = Math.max(0, editorBounds.bottom - caret.bottom - gap - edge);
  const spaceAbove = Math.max(0, caret.top - editorBounds.top - gap - edge);
  const naturalHeight = suggestionsEl.scrollHeight;
  const placeBelow = naturalHeight <= spaceBelow || spaceBelow >= spaceAbove;
  const availableHeight = placeBelow ? spaceBelow : spaceAbove;

  suggestionsEl.style.maxHeight = `${Math.min(260, availableHeight)}px`;

  const popupWidth = suggestionsEl.offsetWidth;
  const popupHeight = suggestionsEl.offsetHeight;
  const minLeft = editorBounds.left - parentBounds.left + edge;
  const maxLeft = editorBounds.right - parentBounds.left - popupWidth - edge;
  const left = Math.min(Math.max(caret.left - parentBounds.left, minLeft), Math.max(minLeft, maxLeft));
  const top = placeBelow
    ? caret.bottom - parentBounds.top + gap
    : caret.top - parentBounds.top - popupHeight - gap;

  suggestionsEl.style.left = `${left}px`;
  suggestionsEl.style.top = `${top}px`;
}

function hideSuggestions() {
  suggestionsEl.hidden = true;
  visibleSuggestions = [];
}

function applySuggestion(index = activeSuggestion) {
  const suggestion = visibleSuggestions[index];
  if (!suggestion) return;

  pushUndoSnapshot();
  const token = currentToken();
  const start = editor.selectionStart - token.length;
  let end = editor.selectionEnd;
  const insert = suggestion[0];

  if (/;\s*$/.test(insert)) {
    const lineEnd = editor.value.indexOf("\n", end);
    const safeLineEnd = lineEnd >= 0 ? lineEnd : editor.value.length;
    const remainingLine = editor.value.slice(end, safeLineEnd);
    const existingTerminator = remainingLine.match(/^\s*;/);
    if (existingTerminator) {
      end += existingTerminator[0].length;
    }
  }

  editor.setRangeText(insert, start, end, "end");
  markCurrentFileDirty();
  renderHighlight();
  hideSuggestions();
  editor.focus();
  updateCursorStatus();
  renderDiagnostics();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

document.querySelector("#lintBtn").addEventListener("click", () => {
  resetDismissedDiagnostics();
  renderDiagnostics();
});
decreaseEditorFontBtn.addEventListener("click", () => {
  setEditorFontSize(savedEditorFontSize() - 1);
});
increaseEditorFontBtn.addEventListener("click", () => {
  setEditorFontSize(savedEditorFontSize() + 1);
});
decreaseRobotNumericFontBtn.addEventListener("click", () => {
  setRobotNumericFontSize(savedRobotNumericFontSize() - 1);
});
increaseRobotNumericFontBtn.addEventListener("click", () => {
  setRobotNumericFontSize(savedRobotNumericFontSize() + 1);
});
robotRegistersEditToggle.addEventListener("change", () => {
  applyRobotRegisterEditState();
  projectStatus.textContent = robotRegisterEditsEnabled()
    ? "Registers/Flags edits are enabled."
    : "Registers/Flags edits are disabled.";
});

robotNumericTableWrap.addEventListener("keydown", (event) => {
  const input = event.target.closest(".robot-numeric-comment-input, .robot-numeric-value-input");
  if (!input) return;
  if (event.key === "Enter") {
    event.preventDefault();
    input.blur();
  } else if (event.key === "Escape") {
    event.preventDefault();
    input.value = input.dataset.original || "";
    input.blur();
  }
});

robotNumericTableWrap.addEventListener("change", async (event) => {
  const input = event.target.closest(".robot-numeric-value-input");
  if (!input || input.dataset.saving === "true") return;
  if (!robotRegisterEditsEnabled()) {
    input.value = input.dataset.original || "";
    return;
  }
  const index = Number(input.dataset.index);
  const original = input.dataset.original || "";
  const nextText = String(input.value || "").trim();
  input.value = nextText;
  if (!Number.isFinite(index) || index < 1 || nextText === original) return;

  input.dataset.saving = "true";
  input.disabled = true;
  input.setAttribute("aria-busy", "true");
  input.classList.remove("robot-numeric-value-error");
  robotNumericValueSaving = true;
  try {
    const verifiedText = await saveRobotNumericValue(index, nextText);
    input.value = verifiedText;
    input.dataset.original = verifiedText;
    input.title = verifiedText;
  } catch (error) {
    input.classList.add("robot-numeric-value-error");
    input.value = original;
    projectStatus.textContent = `Unable to save R[${index}] value: ${error.message}`;
  } finally {
    robotNumericValueSaving = false;
    delete input.dataset.saving;
    input.disabled = false;
    input.removeAttribute("aria-busy");
  }
});

robotNumericTableWrap.addEventListener("change", async (event) => {
  const input = event.target.closest(".robot-numeric-comment-input");
  if (!input || input.dataset.saving === "true") return;
  if (!robotRegisterEditsEnabled()) {
    input.value = input.dataset.original || "";
    return;
  }
  const index = Number(input.dataset.index);
  const original = cleanRobotNumericComment(input.dataset.original || "");
  const cleaned = cleanRobotNumericComment(input.value);
  input.value = cleaned;
  if (!Number.isFinite(index) || index < 1 || cleaned === original) return;

  input.dataset.saving = "true";
  input.disabled = true;
  input.setAttribute("aria-busy", "true");
  input.classList.remove("robot-numeric-comment-error");
  robotNumericCommentSaving = true;
  try {
    await saveRobotNumericComment(index, cleaned);
    input.dataset.original = cleaned;
    input.title = cleaned || "No comment";
  } catch (error) {
    input.classList.add("robot-numeric-comment-error");
    input.value = original;
    projectStatus.textContent = `Unable to save R[${index}] comment: ${error.message}`;
  } finally {
    robotNumericCommentSaving = false;
    delete input.dataset.saving;
    input.disabled = false;
    input.removeAttribute("aria-busy");
  }
});

robotFlagTableWrap.addEventListener("keydown", (event) => {
  const input = event.target.closest(".robot-flag-comment-input, .robot-flag-state-select");
  if (!input) return;
  if (event.key === "Enter") {
    event.preventDefault();
    input.blur();
  } else if (event.key === "Escape") {
    event.preventDefault();
    input.value = input.dataset.original || "";
    input.blur();
  }
});

robotFlagTableWrap.addEventListener("change", async (event) => {
  const input = event.target.closest(".robot-flag-state-select");
  if (!input || input.dataset.saving === "true") return;
  if (!robotRegisterEditsEnabled()) {
    input.value = input.dataset.original || "";
    return;
  }
  const index = Number(input.dataset.index);
  const original = String(input.dataset.original || "").toUpperCase();
  const nextState = String(input.value || "").toUpperCase();
  if (!Number.isFinite(index) || index < 1 || !["ON", "OFF"].includes(nextState) || nextState === original) return;

  input.dataset.saving = "true";
  input.disabled = true;
  input.setAttribute("aria-busy", "true");
  input.classList.remove("robot-flag-state-error");
  robotFlagStateSaving = true;
  try {
    const verifiedState = await saveRobotFlagState(index, nextState);
    input.value = verifiedState;
    input.dataset.original = verifiedState;
    input.title = verifiedState;
    input.classList.toggle("robot-flag-state-on", verifiedState === "ON");
    input.classList.toggle("robot-flag-state-off", verifiedState === "OFF");
    input.classList.toggle("robot-flag-state-unknown", !["ON", "OFF"].includes(verifiedState));
  } catch (error) {
    input.classList.add("robot-flag-state-error");
    input.value = original;
    projectStatus.textContent = `Unable to save F[${index}] state: ${error.message}`;
  } finally {
    robotFlagStateSaving = false;
    delete input.dataset.saving;
    input.disabled = false;
    input.removeAttribute("aria-busy");
  }
});

robotFlagTableWrap.addEventListener("change", async (event) => {
  const input = event.target.closest(".robot-flag-comment-input");
  if (!input || input.dataset.saving === "true") return;
  if (!robotRegisterEditsEnabled()) {
    input.value = input.dataset.original || "";
    return;
  }
  const index = Number(input.dataset.index);
  const original = cleanRobotFlagComment(input.dataset.original || "");
  const cleaned = cleanRobotFlagComment(input.value);
  input.value = cleaned;
  if (!Number.isFinite(index) || index < 1 || cleaned === original) return;

  input.dataset.saving = "true";
  input.disabled = true;
  input.setAttribute("aria-busy", "true");
  input.classList.remove("robot-flag-comment-error");
  robotFlagCommentSaving = true;
  try {
    await saveRobotFlagComment(index, cleaned);
    input.dataset.original = cleaned;
    input.title = cleaned || "No comment";
  } catch (error) {
    input.classList.add("robot-flag-comment-error");
    input.value = original;
    projectStatus.textContent = `Unable to save F[${index}] comment: ${error.message}`;
  } finally {
    robotFlagCommentSaving = false;
    delete input.dataset.saving;
    input.disabled = false;
    input.removeAttribute("aria-busy");
  }
});

goOnlineBtn.addEventListener("click", () => {
  if (robotOnlineStatus === "connecting") {
    robotOnlineAbortController?.abort();
    setRobotOnlineUi("offline", robotOnlineAddress ? `Canceling connection to ${robotOnlineAddress}...` : "Canceling connection...");
    return;
  }
  if (robotOnlineStatus === "online") {
    goOffline();
    return;
  }
  checkRobotOnline({ manual: true }).catch((error) => {
    setRobotOnlineUi("failed", `Connection failed: ${error.message}`);
  });
});

robotOnlineAddressButton.addEventListener("click", () => {
  toggleRobotAddressMenu();
});

robotOnlineAddressMenu.addEventListener("click", async (event) => {
  const removeButton = event.target.closest(".robot-address-remove");
  const renameButton = event.target.closest(".robot-address-rename");
  const choiceButton = event.target.closest(".robot-address-choice");
  const actionButton = event.target.closest("[data-action]");

  if (removeButton) {
    event.stopPropagation();
    const address = removeButton.dataset.address;
    const profile = robotOnlineProfiles().find((item) => item.address === address);
    if (!profile) return;
    if (!confirm(`Remove ${robotProfileLabel(profile)} from saved robots?`)) return;
    const remainingProfiles = robotOnlineProfiles().filter((item) => item.address !== address);
    if (robotOnlineStatus === "online" && robotOnlineAddress === address) goOffline();
    if (robotOnlineAddress === address) robotOnlineAddress = "";
    if (localStorage.getItem(robotOnlineAddressKey) === address) localStorage.removeItem(robotOnlineAddressKey);
    if (project?.robotAddress === address) project.robotAddress = "";
    saveRobotOnlineProfiles(remainingProfiles);
    if (!robotOnlineAddress) {
      const nextProfile = remainingProfiles[0];
      await selectRobotOnlineAddress(nextProfile?.address || "", { persist: Boolean(nextProfile) });
    }
    renderRobotOnlineAddressSelect();
    toggleRobotAddressMenu(true);
    return;
  }

  if (renameButton) {
    event.stopPropagation();
    const address = renameButton.dataset.address;
    const profiles = robotOnlineProfiles();
    const profile = profiles.find((item) => item.address === address);
    if (!profile) return;
    const name = prompt("Robot display name:", profile.name || "");
    if (name === null) return;
    profile.name = cleanAssignmentName(name).slice(0, 32);
    saveRobotOnlineProfiles(profiles);
    renderRobotOnlineAddressSelect();
    toggleRobotAddressMenu(true);
    return;
  }

  if (choiceButton) {
    const address = choiceButton.dataset.address;
    await selectRobotOnlineAddress(address).catch((error) => {
      projectStatus.textContent = `Unable to remember robot address for this project: ${error.message}`;
    });
    closeRobotAddressMenu();
    if (robotOnlineStatus === "online") {
      goOffline();
      checkRobotOnline({ manual: true }).catch((error) => {
        setRobotOnlineUi("offline", `Connection failed: ${error.message}`);
      });
    } else {
      setRobotOnlineUi(robotOnlineStatus, robotOnlineAddress ? `Selected robot: ${robotOnlineAddress}` : "No robot address has been saved yet.");
    }
    return;
  }

  if (actionButton?.dataset.action === "add") {
    const address = prompt("Enter the robot IP address or hostname:", robotOnlineAddress || "");
    if (address === null) return;
    try {
      const displayAddress = normalizeRobotAddress(address).replace(/^https?:\/\//i, "");
      const name = prompt("Optional display name:", "") || "";
      upsertRobotOnlineProfile(displayAddress, { name: cleanAssignmentName(name).slice(0, 32) });
      await selectRobotOnlineAddress(displayAddress);
      closeRobotAddressMenu();
      setRobotOnlineUi(robotOnlineStatus, `Selected robot: ${robotOnlineAddress}`);
    } catch (error) {
      setRobotOnlineUi("offline", `Invalid robot address: ${error.message}`);
    }
  }
});

document.addEventListener("click", (event) => {
  if (!goOnlineControl.contains(event.target)) closeRobotAddressMenu();
});

robotOnlineAddressButton.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeRobotAddressMenu();
});

editorWorkspaceTab.addEventListener("click", () => {
  setWorkspaceView("editor");
});

assignmentsWorkspaceTab.addEventListener("click", () => {
  setWorkspaceView("assignments");
  if (assignmentsPopoutIsOpen()) focusAssignmentsPopout();
});

popOutAssignmentsBtn.addEventListener("click", popOutAssignments);
focusAssignmentsPopoutBtn.addEventListener("click", focusAssignmentsPopout);

robotExportWorkspaceTab.addEventListener("click", () => {
  setWorkspaceView("robot-export");
});

robotBackupWorkspaceTab.addEventListener("click", () => {
  setWorkspaceView("robot-backup");
});

robotPositionWorkspaceTab.addEventListener("click", () => {
  setWorkspaceView("robot-position");
});

robotLiveOverviewTab.addEventListener("click", () => {
  setLiveRobotTool("overview");
});

robotLiveProgramTab.addEventListener("click", () => {
  setLiveRobotTool("program-monitor");
});

robotLiveNumericTab.addEventListener("click", () => {
  setLiveRobotTool("numeric-registers");
});

liveRobotOverviewInstructionsToggle.addEventListener("click", () => {
  setLiveRobotOverviewInstructionsOpen(liveRobotOverviewInstructionsContent.hidden);
});

robotLivePrTab.addEventListener("click", () => {
  setLiveRobotTool("position-registers");
});

robotPrEditToggle.addEventListener("change", () => {
  applyRobotPrEditState();
  projectStatus.textContent = robotPrEditsEnabled()
    ? "Position Register edits are enabled."
    : "Position Register edits are disabled.";
});

robotPrSearch.addEventListener("input", renderRobotPositionRegisterList);

robotPrList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-pr-key]");
  if (!button) return;
  selectedRobotPositionRegisterKey = button.dataset.prKey;
  renderRobotPositionRegisterList();
  renderRobotPositionRegisterDetails();
});

robotPrDetails.addEventListener("input", (event) => {
  if (event.target.closest("#robotPrForm") && !robotPrEditsEnabled()) return;
  updateRobotPositionRegisterDirtyState();
});

robotPrDetails.addEventListener("change", (event) => {
  if (event.target.closest("#robotPrForm") && !robotPrEditsEnabled()) return;
  if (event.target.id === "robotPrMode") {
    const cartesianFields = document.querySelector("#robotPrCartesianFields");
    const jointFields = document.querySelector("#robotPrJointFields");
    const jointMode = event.target.value === "joint";
    if (cartesianFields) cartesianFields.hidden = jointMode;
    if (jointFields) jointFields.hidden = !jointMode;
  }
  updateRobotPositionRegisterDirtyState();
});

robotPrDetails.addEventListener("submit", (event) => {
  if (event.target.id !== "robotPrForm") return;
  event.preventDefault();
  if (!robotPrEditsEnabled()) return;
  commitRobotPositionRegister().catch(() => {});
});

robotBackupMode.addEventListener("change", () => {
  renderRobotBackupFiles(true);
});

robotBackupSort.addEventListener("change", () => {
  renderRobotBackupFiles();
});

inventoryRobotBackupBtn.addEventListener("click", () => {
  if (robotOnlineStatus !== "online") {
    robotBackupStatus.textContent = robotOfflineActionTitle;
    enforceRobotOnlineActionState();
    return;
  }
  inventoryRobotBackupFiles().catch((error) => {
    robotBackupConnected = false;
    robotBackupStatus.textContent = `Unable to inventory robot files: ${error.message}`;
    renderRobotBackupFiles();
  });
});

backupSelectedRobotFilesBtn.addEventListener("click", () => {
  if (robotOnlineStatus !== "online") {
    robotBackupStatus.textContent = robotOfflineActionTitle;
    enforceRobotOnlineActionState();
    return;
  }
  backupSelectedRobotFiles().catch((error) => {
    robotBackupStatus.textContent = `Robot Backup failed: ${error.message}`;
    setRobotOnlineActionState(inventoryRobotBackupBtn, robotOnlineStatus !== "online");
    updateRobotBackupButtons();
  });
});

selectAllRobotBackupBtn.addEventListener("click", () => {
  robotBackupModeFiles().forEach((item) => { item.selected = true; });
  renderRobotBackupFiles();
});

clearRobotBackupBtn.addEventListener("click", () => {
  robotBackupModeFiles().forEach((item) => { item.selected = false; });
  renderRobotBackupFiles();
});

robotBackupTableWrap.addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-robot-backup-name]");
  if (!checkbox) return;
  const item = robotBackupInventory.find((candidate) => candidate.name === checkbox.dataset.robotBackupName);
  if (item) item.selected = checkbox.checked;
  updateRobotBackupButtons();
});

readRobotPositionBtn.addEventListener("click", () => {
  readRobotPosition().catch(() => {});
});

startRobotPositionBtn.addEventListener("click", () => {
  startRobotPositionLive();
});

stopRobotPositionBtn.addEventListener("click", () => {
  stopRobotPositionLive();
});

robotPositionInterval.addEventListener("change", () => {
  if (robotPositionLive) startRobotPositionLive();
});

rememberRobotPositionAddress.addEventListener("change", () => {
  if (!rememberRobotPositionAddress.checked) return;
  persistProjectRobotSettings(robotOnlineAddress).catch((error) => {
    robotPositionStatus.textContent = `Unable to remember Live Robot settings for this project: ${error.message}`;
  });
});

robotExportProgramsTab.addEventListener("click", () => {
  setRobotExportTool("programs");
});

robotExportCommentsTab.addEventListener("click", () => {
  setRobotExportTool("comments");
});
robotExportInstructionsToggle.addEventListener("click", () => {
  setRobotExportInstructionsOpen(robotExportInstructionsContent.hidden);
});

checkRobotExportBtn.addEventListener("click", () => {
  if (robotOnlineStatus !== "online") {
    robotExportStatus.textContent = robotOfflineActionTitle;
    enforceRobotOnlineActionState();
    return;
  }
  checkRobotExportConnection().catch((error) => {
    robotExportConnected = false;
    robotExportRemoteFiles = [];
    renderRobotExportRequirements({
      ftpInterface: { available: false, message: error.message },
      asciiProgramLoader: { available: false, message: error.message }
    });
    robotExportStatus.textContent = `Unable to connect for Robot Export: ${error.message}`;
    renderRobotExportPrograms();
  });
});

exportSelectedProgramsBtn.addEventListener("click", () => {
  if (robotOnlineStatus !== "online") {
    robotExportStatus.textContent = robotOfflineActionTitle;
    enforceRobotOnlineActionState();
    return;
  }
  exportSelectedPrograms().catch((error) => {
    robotExportStatus.textContent = `Robot Export failed: ${error.message}`;
    setRobotOnlineActionState(checkRobotExportBtn, robotOnlineStatus !== "online");
    updateRobotExportButtons();
  });
});

importSelectedProgramsBtn.addEventListener("click", () => {
  if (robotOnlineStatus !== "online") {
    robotExportStatus.textContent = robotOfflineActionTitle;
    enforceRobotOnlineActionState();
    return;
  }
  importSelectedPrograms().catch((error) => {
    robotExportStatus.textContent = `Robot import failed: ${error.message}`;
    updateRobotExportButtons();
  });
});

selectAllRobotExportBtn.addEventListener("click", () => {
  robotExportPrograms.forEach((item) => {
    if (item.valid) item.selected = true;
  });
  renderRobotExportPrograms();
});

clearRobotExportBtn.addEventListener("click", () => {
  robotExportPrograms.forEach((item) => {
    item.selected = false;
  });
  renderRobotExportPrograms();
});

rememberRobotExportAddress.addEventListener("change", () => {
  if (!rememberRobotExportAddress.checked) return;
  persistProjectRobotSettings(robotOnlineAddress).catch((error) => {
    robotExportStatus.textContent = `Unable to remember Robot Export settings for this project: ${error.message}`;
  });
});

robotExportTableWrap.addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-robot-export-index]");
  if (!checkbox) return;
  const item = robotExportPrograms[Number(checkbox.dataset.robotExportIndex)];
  if (item) item.selected = checkbox.checked;
  updateRobotExportButtons();
});

robotExportTableWrap.addEventListener("click", (event) => {
  const button = event.target.closest("[data-robot-export-error-index]");
  if (!button) return;
  goToRobotExportError(robotExportPrograms[Number(button.dataset.robotExportErrorIndex)]);
});

reloadAssignmentsBtn.addEventListener("click", () => {
  setFileMenuOpen(false);
  loadAssignmentsView(true).catch((error) => {
    assignmentStatus.textContent = `Unable to reload ${assignmentTemplateFileName}: ${error.message}`;
    projectStatus.textContent = `Unable to reload ${assignmentTemplateFileName}: ${error.message}`;
  });
});


robotCommentTypeFilter.addEventListener("change", () => {
  robotCommentTypeFilterValue = robotCommentTypeFilter.value;
  renderRobotCommentComparison();
});

robotCommentDifferenceFilter.addEventListener("change", () => {
  robotCommentDifferenceFilterValue = robotCommentDifferenceFilter.value;
  renderRobotCommentComparison();
});

selectVisibleRobotCommentsBtn.addEventListener("click", () => {
  robotCommentVisibleComparison().forEach(({ item }) => {
    if (robotCommentIsPushable(item)) item.selected = true;
  });
  renderRobotCommentComparison();
});

clearVisibleRobotCommentsBtn.addEventListener("click", () => {
  robotCommentVisibleComparison().forEach(({ item }) => {
    item.selected = false;
  });
  renderRobotCommentComparison();
});
compareRobotCommentsBtn.addEventListener("click", () => {
  if (robotOnlineStatus !== "online") {
    robotCommentsStatus.textContent = robotOfflineActionTitle;
    enforceRobotOnlineActionState();
    return;
  }
  compareRobotComments().catch((error) => {
    robotCommentsStatus.textContent = `Unable to compare robot comments: ${error.message}`;
    setRobotOnlineActionState(compareRobotCommentsBtn, robotOnlineStatus !== "online");
    setRobotOnlineActionState(pushRobotCommentsBtn, true);
  });
});

pushRobotCommentsBtn.addEventListener("click", () => {
  if (robotOnlineStatus !== "online") {
    robotCommentsStatus.textContent = robotOfflineActionTitle;
    enforceRobotOnlineActionState();
    return;
  }
  pushSelectedRobotComments().catch((error) => {
    robotCommentsStatus.textContent = `Unable to push robot comments: ${error.message}`;
    setRobotOnlineActionState(compareRobotCommentsBtn, robotOnlineStatus !== "online");
    renderRobotCommentComparison();
  });
});

robotCommentsTableWrap.addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-robot-comment-index]");
  if (!checkbox) return;
  const item = robotCommentComparison[Number(checkbox.dataset.robotCommentIndex)];
  if (item) item.selected = checkbox.checked;
  renderRobotCommentComparison();
});

assignmentSheetTabs.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-sheet]");
  if (!button) return;
  activeAssignmentSheet = button.dataset.sheet;
  renderAssignmentSheetTabs();
  renderAssignmentsTable();
});

assignmentTableWrap.addEventListener("change", async (event) => {
  const input = event.target.closest(".assignment-description-input");
  if (!input) return;
  if (input.dataset.saving === "true") return;
  input.value = cleanAssignmentName(input.value);
  input.dataset.saving = "true";
  input.setAttribute("aria-busy", "true");
  try {
    const changed = await saveAssignmentDescription(input.dataset.type, Number(input.dataset.index), input.value);
    if (changed) {
      const updatedFileCount = syncAssignmentChangeToLsFiles(input.dataset.type, Number(input.dataset.index), input.value);
      assignmentStatus.textContent = `Saved ${input.dataset.type}[${input.dataset.index}] to ${assignmentTemplateFileName} and synced ${updatedFileCount} LS file${updatedFileCount === 1 ? "" : "s"}.`;
    }
  } catch (error) {
    assignmentStatus.textContent = `Unable to save ${input.dataset.type}[${input.dataset.index}]: ${error.message}`;
  } finally {
    delete input.dataset.saving;
    input.removeAttribute("aria-busy");
  }
});

document.querySelector("#sampleBtn")?.addEventListener("click", () => {
  pushUndoSnapshot();
  const file = getCurrentFile();
  if (file) {
    file.content = sampleProgram;
    file.dirty = true;
    editor.value = displayedFileContent(file);
    lastEditorValue = editor.value;
    currentFileNameEl.textContent = `${file.name} *`;
    renderFileList();
    persistSession();
  } else {
    editor.value = getVisibleContent(sampleProgram);
    lastEditorValue = editor.value;
  }
  refreshEditor();
});

undoBtn.addEventListener("click", undoEditorChange);
redoBtn.addEventListener("click", redoEditorChange);

exportCurrentFileBtn.addEventListener("click", () => {
  exportCurrentFile().catch((error) => {
    if (error.name === "AbortError") {
      projectStatus.textContent = "Export cancelled.";
      return;
    }
    projectStatus.textContent = `Unable to export LS file: ${error.message}`;
  });
});

fileMenuBtn.addEventListener("click", () => {
  setFileMenuOpen(fileMenu.hidden);
});

document.addEventListener("click", (event) => {
  if (event.target.closest(".menu-wrap")) return;
  setFileMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setFileMenuOpen(false);
});

openProjectBtn.addEventListener("click", () => {
  setFileMenuOpen(false);
  openProjectFolder();
});
document.querySelector("#startOpenProjectBtn").addEventListener("click", openProjectFolder);
openRoboProjectBtn.addEventListener("click", () => {
  setFileMenuOpen(false);
  chooseAndImportRoboProject().catch((error) => {
    projectStatus.textContent = error.name === "AbortError"
      ? "Open ROBO package cancelled."
      : `Unable to open ROBO package: ${error.message}`;
  });
});
startOpenRoboProjectBtn.addEventListener("click", () => {
  chooseAndImportRoboProject().catch((error) => {
    projectStatus.textContent = error.name === "AbortError"
      ? "Open ROBO package cancelled."
      : `Unable to open ROBO package: ${error.message}`;
  });
});
exportRoboProjectBtn.addEventListener("click", () => {
  setFileMenuOpen(false);
  exportRoboProject().catch((error) => {
    projectStatus.textContent = error.name === "AbortError"
      ? "ROBO package export cancelled."
      : `Unable to export ROBO package: ${error.message}`;
  });
});
newProjectBtn.addEventListener("click", () => {
  setFileMenuOpen(false);
  createNewProject().catch(() => {
    projectStatus.textContent = "Unable to create the new project.";
  });
});
document.querySelector("#startNewProjectBtn").addEventListener("click", () => {
  createNewProject().catch(() => {
    projectStatus.textContent = "Unable to create the new project.";
  });
});

recentProjectsList.addEventListener("click", async (event) => {
  const button = event.target.closest("button[data-project-name]");
  if (!button) return;

  button.disabled = true;
  projectStatus.textContent = `Opening ${button.dataset.projectName}...`;
  try {
    const recentProjects = await getRecentProjects();
    const recentProject = recentProjects.find((item) => item.name === button.dataset.projectName);
    if (!recentProject?.handle) throw new Error("Recent project handle was not found.");
    await loadProjectFromDirectoryHandle(recentProject.handle);
  } catch {
    projectStatus.textContent = `Unable to reopen ${button.dataset.projectName}. Use Open Project Folder to reconnect it.`;
    button.disabled = false;
  }
});

clearRecentProjectsBtn.addEventListener("click", clearRecentProjects);

saveBtn.addEventListener("click", () => {
  setFileMenuOpen(false);
  saveAllPendingFiles().catch(() => {
    projectStatus.textContent = "Unable to save all pending LS file changes.";
  });
});
pushAssignmentsMenuBtn.addEventListener("click", async () => {
  setFileMenuOpen(false);
  pushAssignmentsMenuBtn.disabled = true;
  try {
    await pushAssignmentsToSpreadsheet();
  } catch (error) {
    projectStatus.textContent = `Unable to push Data Assignments.xlsx: ${error.message}`;
    assignmentStatus.textContent = `Unable to push Data Assignments.xlsx: ${error.message}`;
  } finally {
    pushAssignmentsMenuBtn.disabled = false;
  }
});

syncAssignmentsMenuBtn.addEventListener("click", async () => {
  setFileMenuOpen(false);
  syncAssignmentsMenuBtn.disabled = true;
  try {
    await syncDataAssignments();
    assignmentWorkbookData = null;
    if (activeWorkspaceView === "assignments" || assignmentsPopoutIsOpen()) await loadAssignmentsView(true);
  } catch (error) {
    projectStatus.textContent = `Unable to sync Data Assignments.xlsx: ${error.message}`;
    assignmentStatus.textContent = `Unable to sync Data Assignments.xlsx: ${error.message}`;
  } finally {
    syncAssignmentsMenuBtn.disabled = false;
  }
});
closeProjectBtn.addEventListener("click", () => {
  setFileMenuOpen(false);
  closeProject();
});
refreshFilesBtn.addEventListener("click", () => {
  refreshProjectFiles().catch(() => {
    projectStatus.textContent = "Refresh cancelled or unable to read the project folder.";
  });
});

motionToolBtn.addEventListener("click", () => {
  setTeachBuilderOpen(motionBuilder.hidden ? "motion" : null);
});

[motionTypeSelect, motionTargetSelect, motionPositionInput, motionPosition2Input, motionSpeedInput, motionSpeedUnitSelect, motionTermSelect].forEach((control) => {
  control.addEventListener("input", updateMotionBuilder);
  control.addEventListener("change", updateMotionBuilder);
});

insertMotionBtn.addEventListener("click", () => {
  updateMotionBuilder();
  insertInstruction(buildMotionInstruction());
});

waitToolBtn.addEventListener("click", () => {
  setTeachBuilderOpen(waitBuilder.hidden ? "wait" : null);
});

[waitTypeSelect, waitIndexInput, waitStateSelect, waitCompareSelect, waitValueInput, waitTimeInput].forEach((control) => {
  control.addEventListener("input", updateWaitBuilder);
  control.addEventListener("change", updateWaitBuilder);
});

insertWaitBtn.addEventListener("click", () => {
  updateWaitBuilder();
  insertInstruction(buildWaitInstruction());
});

ioToolBtn.addEventListener("click", () => {
  setTeachBuilderOpen(ioBuilder.hidden ? "io" : null);
});

[ioTypeSelect, ioIndexInput, ioStateSelect, ioValueInput, ioCompareSelect, ioActionInput].forEach((control) => {
  control.addEventListener("input", updateIoBuilder);
  control.addEventListener("change", updateIoBuilder);
});

insertIoBtn.addEventListener("click", () => {
  updateIoBuilder();
  insertInstruction(buildIoInstruction());
});

setRegisterBtn.addEventListener("click", () => {
  insertPromptedInstruction(() => {
    const register = promptPositiveInteger("Register number", "1");
    if (!register) return null;
    const value = promptRequired("Register value or expression", "0");
    if (value === null) return null;
    return numberedInstruction(`R[${register}]=${value}`);
  });
});

setPrBtn.addEventListener("click", () => {
  insertPromptedInstruction(() => {
    const register = promptPositiveInteger("Position register number", "1");
    if (!register) return null;
    const value = promptRequired("Position register expression", "P[1]");
    if (!value) return null;
    return numberedInstruction(`PR[${register}]=${value}`);
  });
});

ifThenBtn.addEventListener("click", () => {
  insertPromptedInstruction(() => {
    const condition = promptRequired("IF condition", "DI[1]=ON");
    if (!condition) return null;
    const action = promptRequired("THEN action", "JMP LBL[1]");
    if (!action) return null;
    return numberedInstruction(`IF ${condition},${action}`);
  });
});

labelBtn.addEventListener("click", () => {
  insertPromptedInstruction(() => {
    const label = promptPositiveInteger("Label number", "1");
    if (!label) return null;
    return numberedInstruction(`LBL[${label}]`);
  });
});

jumpLabelBtn.addEventListener("click", () => {
  insertPromptedInstruction(() => {
    const label = promptPositiveInteger("Jump to label number", "1");
    if (!label) return null;
    return numberedInstruction(`JMP LBL[${label}]`);
  });
});

callBtn.addEventListener("click", () => {
  insertPromptedInstruction(() => {
    const programName = promptRequired("Program name to CALL", "HOME");
    if (!programName) return null;
    return numberedInstruction(`CALL ${programName.toUpperCase()}`);
  });
});

commentBtn.addEventListener("click", () => {
  insertPromptedInstruction(() => {
    const text = promptRequired("Comment text", "Comment");
    if (!text) return null;
    return numberedInstruction(`! ${text}`);
  });
});

remarkBtn.addEventListener("click", toggleRemarkCurrentLine);
toggleCommentsBtn.addEventListener("click", () => {
  toggleTagComments().catch((error) => {
    projectStatus.textContent = `Unable to toggle tag comments: ${error.message}`;
  });
});
toggleStateBtn.addEventListener("click", toggleTagState);

frameBtn.addEventListener("click", () => {
  insertPromptedInstruction(() => {
    const frame = promptPositiveInteger("User frame number", "1");
    if (!frame) return null;
    const tool = promptPositiveInteger("Tool frame number", "1");
    if (!tool) return null;
    return `${numberedInstruction(`UFRAME_NUM=${frame}`)}\n${numberedInstruction(`UTOOL_NUM=${tool}`)}`;
  });
});

timerBtn.addEventListener("click", () => {
  insertPromptedInstruction(() => {
    const timer = promptPositiveInteger("Timer number", "1");
    if (!timer) return null;
    const action = promptRequired("Timer action: START, STOP, or RESET", "START");
    if (!action) return null;
    return numberedInstruction(`TIMER[${timer}]=${action.toUpperCase()}`);
  });
});

teachPendantToggle.addEventListener("click", () => {
  setTeachPendantOpen(teachPendantContent.hidden);
});

advancedTpToggle.addEventListener("click", () => {
  setAdvancedTpOpen(advancedTpContent.hidden);
});

projectToolsToggle.addEventListener("click", () => {
  setProjectToolsOpen(projectToolsContent.hidden);
});

referenceSearchBtn.addEventListener("click", renderReferenceSearch);
referenceSearchInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  renderReferenceSearch();
});

referenceSearchResults.addEventListener("click", (event) => {
  const result = event.target.closest(".reference-result");
  if (!result) return;
  setWorkspaceView("editor");
  switchFile(result.dataset.fileId);
  goToDiagnosticLine(Number(result.dataset.line));
});

previewReassignBtn.addEventListener("click", () => {
  previewProjectReassignment().catch((error) => {
    reassignStatus.textContent = `Unable to preview reassignment: ${error.message}`;
    reassignStatus.classList.add("error");
  });
});

changePreviewCancelBtn.addEventListener("click", closeChangePreview);
changePreviewModal.addEventListener("click", (event) => {
  if (event.target === changePreviewModal) closeChangePreview();
});
changePreviewApplyBtn.addEventListener("click", async () => {
  if (!pendingChangePreview) return;
  const apply = pendingChangePreview;
  changePreviewApplyBtn.disabled = true;
  try {
    await apply();
    closeChangePreview();
  } catch (error) {
    changePreviewSummary.textContent = `Unable to apply change: ${error.message}`;
    changePreviewApplyBtn.disabled = false;
  }
});

newTpInstTab.addEventListener("click", () => {
  newTpMode = "inst";
  renderNewTpMenu();
});

newTpEdcmdTab.addEventListener("click", () => {
  newTpMode = "edcmd";
  renderNewTpMenu();
});

newTpCategorySelect.addEventListener("change", renderNewTpMenu);

folderInput.addEventListener("change", () => {
  importFolderFiles(folderInput.files);
  folderInput.value = "";
});

roboPackageInput.addEventListener("change", () => {
  const [file] = roboPackageInput.files;
  roboPackageInput.value = "";
  if (!file) return;
  importRoboProjectFile(file).catch((error) => {
    projectStatus.textContent = error.name === "AbortError"
      ? "Open ROBO package cancelled."
      : `Unable to open ROBO package: ${error.message}`;
  });
});

fileListEl.addEventListener("click", (event) => {
  const favoriteButton = event.target.closest("[data-favorite-file-id]");
  if (favoriteButton) {
    toggleFavoriteFile(favoriteButton.dataset.favoriteFileId).catch((error) => {
      projectStatus.textContent = `Unable to update project favorite: ${error.message}`;
    });
    return;
  }

  const item = event.target.closest(".file-item-main");
  if (!item) return;
  switchFile(item.dataset.fileId);
});

newLsBtn.addEventListener("click", () => {
  createNewLsFile().catch((error) => {
    projectStatus.textContent = `Unable to create LS file: ${error.message}`;
  });
});

loadLsFromRobotBtn.addEventListener("click", () => {
  loadCurrentLsFromRobot().catch((error) => {
    projectStatus.textContent = `Unable to load LS from Robot: ${error.message}`;
  });
});

saveCurrentLsBtn.addEventListener("click", () => {
  saveActiveEditorFile().catch((error) => {
    projectStatus.textContent = `Unable to save the active LS file: ${error.message}`;
    updateSaveCurrentLsButton();
  });
});

copyCurrentPathBtn.addEventListener("click", () => {
  copyCurrentLsPath().catch((error) => {
    projectStatus.textContent = `Unable to copy LS file path: ${error.message}`;
  });
});

deleteLsBtn.addEventListener("click", () => {
  deleteCurrentLsFile().catch((error) => {
    projectStatus.textContent = `Unable to delete LS file: ${error.message}`;
  });
});

splitEditorBtn.addEventListener("click", () => {
  setSplitEditorOpen(splitEditorPane.hidden);
  renderFileList();
});

closeSplitEditorBtn.addEventListener("click", () => {
  setSplitEditorOpen(false);
  renderFileList();
});

splitFileSelect.addEventListener("change", () => {
  saveSplitBuffer();
  splitFileId = splitFileSelect.value;
  loadSplitFileIntoEditor();
  renderFileList();
  persistSession();
});

splitEditor.addEventListener("input", () => {
  setActiveEditor("split");
  addAssignmentCommentToCompletedReference(splitEditor, getSplitFile());
  renumberTextAreaLines(splitEditor);
  wrapLongBangCommentLinesFor(splitEditor);
  markSplitFileDirty();
  renderSplitHighlight();
  updateSplitCursorStatus();
  scheduleDiagnosticsRefresh();
});

splitEditor.addEventListener("scroll", () => {
  splitHighlightedCode.scrollTop = splitEditor.scrollTop;
  splitHighlightedCode.scrollLeft = splitEditor.scrollLeft;
});

splitEditor.addEventListener("focus", () => {
  setActiveEditor("split");
});

splitEditor.addEventListener("click", () => {
  setActiveEditor("split");
  updateSplitCursorStatus();
});

splitEditor.addEventListener("keyup", () => {
  setActiveEditor("split");
  updateSplitCursorStatus();
});

splitEditor.addEventListener("keydown", (event) => {
  setActiveEditor("split");
  if (splitEditor.readOnly) return;

  if (event.key === "Backspace" && deleteBlankNumberedLine(splitEditor)) {
    event.preventDefault();
    markSplitFileDirty();
    renderSplitHighlight();
    renderDiagnostics();
    updateSplitCursorStatus();
    return;
  }

  if (event.key === "Enter") {
    if (insertNumberedLine(splitEditor)) {
      event.preventDefault();
      markSplitFileDirty();
      renderSplitHighlight();
      renderDiagnostics();
      updateSplitCursorStatus();
    }
    return;
  }

  if (event.key === "Tab") {
    event.preventDefault();
    splitEditor.setRangeText("  ", splitEditor.selectionStart, splitEditor.selectionEnd, "end");
    markSplitFileDirty();
    renderSplitHighlight();
    updateSplitCursorStatus();
  }
});

themeSelect.addEventListener("change", () => {
  setTheme(themeSelect.value);
});

toggleHeaderBtn.addEventListener("click", () => {
  saveCurrentBuffer();
  headerVisible = !headerVisible;
  localStorage.setItem("robo-programmer-header-visible", String(headerVisible));
  loadCurrentFileIntoEditor();
  persistSession();
});

toggleFooterBtn.addEventListener("click", () => {
  saveCurrentBuffer();
  footerVisible = !footerVisible;
  localStorage.setItem("robo-programmer-footer-visible", String(footerVisible));
  loadCurrentFileIntoEditor();
  persistSession();
});

splitToggleHeaderBtn.addEventListener("click", () => {
  saveSplitBuffer();
  splitHeaderVisible = !splitHeaderVisible;
  localStorage.setItem("robo-programmer-split-header-visible", String(splitHeaderVisible));
  loadSplitFileIntoEditor();
  persistSession();
});

splitToggleFooterBtn.addEventListener("click", () => {
  saveSplitBuffer();
  splitFooterVisible = !splitFooterVisible;
  localStorage.setItem("robo-programmer-split-footer-visible", String(splitFooterVisible));
  loadSplitFileIntoEditor();
  persistSession();
});

diagnosticsToggle.addEventListener("click", () => {
  setDiagnosticsOpen(diagnosticsContent.hidden);
});

diagnosticsEl.addEventListener("click", (event) => {
  const dismissButton = event.target.closest(".diagnostic-dismiss");
  if (dismissButton) {
    const diagnostics = diagnosticsEl._diagnostics || [];
    const item = diagnostics[Number(dismissButton.dataset.dismissIndex)];
    if (item) dismissedDiagnosticKeys.add(diagnosticKey(item));
    renderDiagnostics();
    return;
  }

  const fixButton = event.target.closest(".diagnostic-fix");
  if (fixButton) {
    const diagnostics = diagnosticsEl._diagnostics || [];
    const item = diagnostics[Number(fixButton.dataset.fixIndex)];
    reviewDiagnosticFix(item);
    return;
  }

  const jumpButton = event.target.closest(".diagnostic-jump");
  if (jumpButton) {
    goToDiagnosticLine(Number(jumpButton.dataset.line));
    return;
  }

  const item = event.target.closest(".diagnostic[data-line]");
  if (!item) return;
  goToDiagnosticLine(Number(item.dataset.line));
});

diagnosticsEl.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  if (event.target.closest("button")) return;
  const item = event.target.closest(".diagnostic[data-line]");
  if (!item) return;
  event.preventDefault();
  goToDiagnosticLine(Number(item.dataset.line));
});

diagnosticsResizeHandle.addEventListener("pointerdown", (event) => {
  diagnosticsResizeHandle.setPointerCapture(event.pointerId);
  document.body.classList.add("resizing");
  resizeRightPanelFromPointer(event.clientX);
});

diagnosticsResizeHandle.addEventListener("pointermove", (event) => {
  if (!diagnosticsResizeHandle.hasPointerCapture(event.pointerId)) return;
  resizeRightPanelFromPointer(event.clientX);
});

diagnosticsResizeHandle.addEventListener("pointerup", (event) => {
  if (diagnosticsResizeHandle.hasPointerCapture(event.pointerId)) {
    diagnosticsResizeHandle.releasePointerCapture(event.pointerId);
  }
  document.body.classList.remove("resizing");
});

diagnosticsResizeHandle.addEventListener("pointercancel", (event) => {
  if (diagnosticsResizeHandle.hasPointerCapture(event.pointerId)) {
    diagnosticsResizeHandle.releasePointerCapture(event.pointerId);
  }
  document.body.classList.remove("resizing");
});

diagnosticsResizeHandle.addEventListener("keydown", (event) => {
  const currentWidth = Number(localStorage.getItem("robo-programmer-right-width") || 340);

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    setRightPanelWidth(currentWidth + 24);
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    setRightPanelWidth(currentWidth - 24);
  }
});

projectResizeHandle.addEventListener("pointerdown", (event) => {
  projectResizeHandle.setPointerCapture(event.pointerId);
  document.body.classList.add("resizing");
  resizeProjectPanelFromPointer(event.clientX);
});

projectResizeHandle.addEventListener("pointermove", (event) => {
  if (!projectResizeHandle.hasPointerCapture(event.pointerId)) return;
  resizeProjectPanelFromPointer(event.clientX);
});

projectResizeHandle.addEventListener("pointerup", (event) => {
  if (projectResizeHandle.hasPointerCapture(event.pointerId)) {
    projectResizeHandle.releasePointerCapture(event.pointerId);
  }
  document.body.classList.remove("resizing");
});

projectResizeHandle.addEventListener("pointercancel", (event) => {
  if (projectResizeHandle.hasPointerCapture(event.pointerId)) {
    projectResizeHandle.releasePointerCapture(event.pointerId);
  }
  document.body.classList.remove("resizing");
});

projectResizeHandle.addEventListener("keydown", (event) => {
  const currentWidth = Number(localStorage.getItem("robo-programmer-project-width") || 250);

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    setProjectPanelWidth(currentWidth - 24);
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    setProjectPanelWidth(currentWidth + 24);
  }
});

editor.addEventListener("beforeinput", (event) => {
  setActiveEditor("main");
  if (event.inputType === "historyUndo" || event.inputType === "historyRedo") {
    event.preventDefault();
    if (event.inputType === "historyUndo") undoEditorChange();
    if (event.inputType === "historyRedo") redoEditorChange();
    return;
  }

  pushUndoSnapshot();
});

editor.addEventListener("input", () => {
  setActiveEditor("main");
  if (historySuppressed) return;
  if (lastEditorValue !== editor.value && undoStack.length === 0) {
    pushUndoValueSnapshot(lastEditorValue);
  }
  addAssignmentCommentToCompletedReference(editor, getCurrentFile());
  renumberEditorLines();
  wrapLongBangCommentLines();
  markCurrentFileDirty();
  updateIfPairHighlightFromEditor({ render: false });
  renderHighlight();
  updateCursorStatus();
  showSuggestions();
  scheduleDiagnosticsRefresh();
  lastEditorValue = editor.value;
});

editor.addEventListener("scroll", () => {
  syncHighlightScroll();
  positionSuggestions();
});

editor.addEventListener("click", () => {
  setActiveEditor("main");
  updateCursorStatus();
  updateIfPairHighlightFromEditor();
  hideSuggestions();
});

editor.addEventListener("focus", () => {
  setActiveEditor("main");
  updateCursorStatus();
});

editor.addEventListener("keyup", () => {
  setActiveEditor("main");
  updateCursorStatus();
  updateIfPairHighlightFromEditor();
});

document.addEventListener("selectionchange", () => {
  if (document.activeElement === editor) {
    setActiveEditor("main");
    updateCursorStatus();
    updateIfPairHighlightFromEditor();
  } else if (document.activeElement === splitEditor) {
    setActiveEditor("split");
    updateSplitCursorStatus();
  }
});

editor.addEventListener("keydown", (event) => {
  setActiveEditor("main");
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "s") {
    event.preventDefault();
    saveActiveEditorFile().catch((error) => {
      projectStatus.textContent = `Unable to save the active LS file: ${error.message}`;
      updateSaveCurrentLsButton();
    });
    return;
  }

  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "t") {
    event.preventDefault();
    toggleTagComments().catch((error) => {
      projectStatus.textContent = `Unable to toggle tag comments: ${error.message}`;
    });
    return;
  }

  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "z") {
    event.preventDefault();
    if (event.shiftKey) redoEditorChange();
    else undoEditorChange();
    return;
  }

  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "y") {
    event.preventDefault();
    redoEditorChange();
    return;
  }

  if (isEditorMutationKey(event)) {
    pushUndoSnapshot();
  }

  if (event.key === "Backspace" && deleteBlankNumberedLine()) {
    event.preventDefault();
    markCurrentFileDirty();
    renderHighlight();
    renderDiagnostics();
    updateCursorStatus();
    hideSuggestions();
    return;
  }

  if (event.key === "Enter") {
    if (!suggestionsEl.hidden) {
      event.preventDefault();
      applySuggestion();
      return;
    }

    if (insertNumberedLine()) {
      event.preventDefault();
      markCurrentFileDirty();
      renderHighlight();
      renderDiagnostics();
      updateCursorStatus();
      hideSuggestions();
    }
    return;
  }

  if (event.key === "Tab") {
    event.preventDefault();
    pushUndoSnapshot();
    editor.setRangeText("  ", editor.selectionStart, editor.selectionEnd, "end");
    markCurrentFileDirty();
    renderHighlight();
    updateCursorStatus();
    return;
  }

  if (suggestionsEl.hidden) return;

  if (event.key === "ArrowDown") {
    event.preventDefault();
    activeSuggestion = (activeSuggestion + 1) % visibleSuggestions.length;
    renderSuggestions();
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    activeSuggestion = (activeSuggestion - 1 + visibleSuggestions.length) % visibleSuggestions.length;
    renderSuggestions();
  }

  if (event.key === "Escape") {
    hideSuggestions();
  }
});

suggestionsEl.addEventListener("mousedown", (event) => {
  const item = event.target.closest(".suggestion");
  if (!item) return;
  event.preventDefault();
  applySuggestion(Number(item.dataset.index));
});

window.addEventListener("resize", positionSuggestions);
window.addEventListener("beforeunload", (event) => {
  persistSession();
  if (assignmentsPopoutIsOpen()) assignmentsPopoutWindow.close();
  if (!robotBackupActive) return;
  event.preventDefault();
  event.returnValue = "";
});
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") persistSession();
});

function showInitialStartScreen() {
  stopRobotPositionLive();
  popInAssignments();
  project = null;
  currentFileId = null;
  splitFileId = null;
  assignmentWorkbookData = null;
  robotCommentComparison = [];
  tagStateCache = new Map();
  tagDisplayPreferences = new Map();
  activeWorkspaceView = "editor";
  editor.value = "";
  splitEditor.value = "";
  lastEditorValue = "";
  lastSplitEditorValue = "";
  currentFileNameEl.textContent = "No file selected";
  projectNameEl.textContent = "No project";
  projectStatus.textContent = "Open or create a robot project to begin.";
  fileListEl.innerHTML = "";
  diagnosticsEl.className = "diagnostics empty";
  diagnosticsEl.textContent = "No checks run yet.";
  referenceSearchInput.value = "";
  referenceSearchResults.innerHTML = "";
  referenceSearchSummary.textContent = "Enter an exact Fanuc reference.";
  referenceSearchSummary.classList.remove("error");
  reassignFromInput.value = "";
  reassignToInput.value = "";
  reassignStatus.textContent = "Targets must be the same reference type.";
  reassignStatus.classList.remove("error");
  assignmentSheetTabs.innerHTML = "";
  assignmentTableWrap.innerHTML = "";
  assignmentStatus.textContent = "Open a project to view Data Assignments.xlsx.";
  robotCommentsSummary.textContent = "";
  robotCommentsTableWrap.innerHTML = "";
  resetRobotCommentTypeFilter();
  robotCommentsStatus.textContent = "Go Online before comparing robot comments.";
  setRobotOnlineActionState(pushRobotCommentsBtn, true);
  robotAddressInput.value = "";
  robotExportAddressInput.value = "";
  robotBackupAddressInput.value = "";
  robotPositionAddressInput.value = "";
  robotExportConnected = false;
  robotExportPrograms = [];
  robotExportRemoteFiles = [];
  robotExportAutoCheckedAddress = "";
  robotBackupConnected = false;
  robotBackupInventory = [];
  robotBackupTableWrap.innerHTML = "";
  robotBackupStatus.textContent = "Go Online, then inventory the robot before selecting files to back up.";
  resetRobotPositionDisplay();
  renderRobotExportRequirements();
  updateAssignmentPathDisplay();
  setWorkspaceView("editor");
  setSplitEditorOpen(false);
  renderHighlight();
  updateCursorStatus();
  renderRecentProjects();
  updateProjectActionVisibility();
}

setTheme(localStorage.getItem("robo-programmer-theme") || "dark");
robotOnlineAddress = localStorage.getItem(robotOnlineAddressKey) || "";
setRobotOnlineUi("offline", robotOnlineAddress ? `Saved robot: ${robotOnlineAddress}` : "No robot address has been saved yet.");
headerVisible = localStorage.getItem("robo-programmer-header-visible") === "true";
footerVisible = localStorage.getItem("robo-programmer-footer-visible") === "true";
splitHeaderVisible = localStorage.getItem("robo-programmer-split-header-visible") === "true";
splitFooterVisible = localStorage.getItem("robo-programmer-split-footer-visible") === "true";
updateHeaderToggle();
updateSplitHeaderToggle();
setProjectPanelWidth(Number(localStorage.getItem("robo-programmer-project-width") || 250));
setRightPanelWidth(Number(localStorage.getItem("robo-programmer-right-width") || localStorage.getItem("robo-programmer-diagnostics-width") || 340));
setRobotExportInstructionsOpen(localStorage.getItem(robotExportInstructionsCollapsedKey) !== "true");
setLiveRobotOverviewInstructionsOpen(localStorage.getItem(liveRobotOverviewInstructionsCollapsedKey) !== "true");
setRobotExportTool("programs");
setLiveRobotTool("overview");
setDiagnosticsOpen(true);
setProjectToolsOpen(false);
updateMotionBuilder();
updateWaitBuilder();
updateIoBuilder();
renderNewTpMenu();
setAdvancedTpOpen(false);
updateHistoryButtons();

async function initializeAppSession() {
  await clearActiveSessionSnapshot();
  showInitialStartScreen();
}

initializeAppSession();
