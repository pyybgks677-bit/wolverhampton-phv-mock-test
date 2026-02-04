// -----------------------------
// SETTINGS
// -----------------------------
const PASS_MARK = 80;
const TIME_LIMIT_SECONDS = 45 * 60;

const LS_BEST = "wolv_phv_mock_best_score";
const LS_LAST_RESULT = "wolv_phv_last_result";

// -----------------------------
// QUESTIONS (53) - no duplicates, and no visible numbering in UI
// NOTE: Question text here has no leading "1) / 2)" etc.
// -----------------------------
const QUESTIONS = [
  { q: "When working as a licensed Private Hire Vehicle (PHV) driver, where must you wear your driver identification badge so that it is clearly visible?",
    A: "On the vehicle dashboard", B: "On the upper part of your body", C: "In your pocket", D: "Inside the glove box", ans: "B" },

  { q: "When a Private Hire Vehicle has more than one licensed driver, where must the additional driver's badge be displayed inside the vehicle?",
    A: "In the rear window", B: "On the top left-hand side of the front windscreen", C: "In the centre console", D: "Under the driver's seat", ans: "B" },

  { q: "What is the maximum number of passengers that a saloon car licensed as a Private Hire Vehicle is legally allowed to carry?",
    A: "3 passengers", B: "4 passengers", C: "5 passengers", D: "6 passengers", ans: "B" },

  { q: "What is the maximum number of passengers that a minibus licensed as a Private Hire Vehicle is legally allowed to carry?",
    A: "6 passengers", B: "7 passengers", C: "8 passengers", D: "9 passengers", ans: "C" },

  { q: "Once a vehicle is licensed as a Private Hire Vehicle, is it always considered a Private Hire Vehicle?",
    A: "No", B: "Only when working", C: "Yes", D: "Only at night", ans: "C" },

  { q: "Under what circumstances are you allowed to remove Private Hire Vehicle plates or door signs from the vehicle?",
    A: "When off duty", B: "When parked at home", C: "Never", D: "Only at weekends", ans: "C" },

  { q: "As a Private Hire Vehicle driver, how are you expected to assist passengers?",
    A: "Only by opening the door",
    B: "By helping with luggage in and out of the vehicle and carrying it to or from the front door",
    C: "Only if the passenger offers a tip",
    D: "Only elderly passengers",
    ans: "B" },

  { q: "At the end of every journey, after the passenger has exited the vehicle, what must you do?",
    A: "Call the operator", B: "Check the vehicle for any property left behind", C: "Wash the vehicle", D: "Refuel the vehicle", ans: "B" },

  { q: "If you change your home address, who must you legally notify within 7 days under Private Hire licensing conditions?",
    A: "DVLA", B: "Your insurance company", C: "The council licensing authority", D: "Your passengers", ans: "C" },

  { q: "Why must a Private Hire Vehicle driver wear their badge and display the additional driver's badge?",
    A: "So customers and the council can identify that the driver is properly licensed",
    B: "So the driver can park anywhere",
    C: "So the driver can charge higher fares",
    D: "So the driver can pick up passengers without bookings",
    ans: "A" },

  { q: "Who must a Private Hire Vehicle driver provide their driver’s licence details to?",
    A: "The passenger", B: "The licensed operator", C: "DVLA", D: "The insurance company", ans: "B" },

  { q: "If you receive a conviction or a fixed penalty notice, who must you report it to and within what time period?",
    A: "Operator within 7 days", B: "Council within 14 days", C: "DVLA within 28 days", D: "Police within 24 hours", ans: "B" },

  { q: "If you change from one licensed operator to another during the validity of your Private Hire Vehicle driver licence, who must you inform?",
    A: "DVLA", B: "The council licensing authority", C: "Passengers", D: "Insurance company", ans: "B" },

  { q: "Does a Private Hire Vehicle driver licence issued by one council allow you to drive a vehicle licensed by another council?",
    A: "Yes", B: "Sometimes", C: "No", D: "Only if fully insured", ans: "C" },

  { q: "How often is a Private Hire Vehicle driver required to complete a DBS (criminal record) check?",
    A: "Every year", B: "Every 2 years", C: "Every 3 years", D: "Every 5 years", ans: "C" },

  { q: "In which situation is a Private Hire Vehicle driver legally allowed not to wear a seatbelt?",
    A: "Never", B: "When carrying fare-paying passengers", C: "Only at night", D: "Only on motorways", ans: "B" },

  { q: "Who is legally responsible for keeping full and accurate records of every Private Hire booking?",
    A: "Driver and passenger", B: "Operator and the police", C: "Council and DVLA", D: "Insurance company and operator", ans: "B" },

  { q: "Who is legally allowed to inspect Private Hire booking records?",
    A: "Passengers", B: "Police and council officers", C: "DVLA only", D: "Any member of the public", ans: "B" },

  { q: "How many mechanical inspections are required for a Private Hire Vehicle that is between 10 and 12 years old?",
    A: "One inspection", B: "Two inspections", C: "Three inspections", D: "Four inspections", ans: "B" },

  { q: "In what form must insurance documents be presented to the council when requested?",
    A: "Screenshot", B: "Original document", C: "Photocopy only", D: "Email version only", ans: "B" },

  { q: "Who may inspect a Private Hire Vehicle insurance certificate at any time?",
    A: "The operator only", B: "Police officers and council licensing officers", C: "Passengers", D: "DVLA", ans: "B" },

  { q: "Which items are strongly recommended to be carried and maintained in a Private Hire Vehicle at all times?",
    A: "Torch and blanket", B: "Fire extinguisher and first aid kit", C: "Spare mobile phone", D: "Dash camera", ans: "B" },

  { q: "What is the minimum recommended age for a passenger to sit in the front seat using a standard seatbelt?",
    A: "10 years old", B: "11 years old", C: "12 years old", D: "13 years old", ans: "C" },

  { q: "If a Private Hire Vehicle driver loses their driver identification badge, what must they do?",
    A: "Ignore it", B: "Report it to the council licensing authority", C: "Make a replacement themselves", D: "Tell the passenger", ans: "B" },

  { q: "Are you required to provide full and accurate information on your DBS application form?",
    A: "No", B: "Only if requested", C: "Yes", D: "Only for serious offences", ans: "C" },

  { q: "When is a Private Hire Vehicle allowed not to take the most direct route to a destination?",
    A: "When the driver prefers", B: "When the passenger requests it", C: "When it is raining", D: "When fuel is low", ans: "B" },

  { q: "When is a holder of a Private Hire Vehicle driver licence allowed to drive a hackney carriage?",
    A: "Always", B: "With permission", C: "Never", D: "Only outside the city", ans: "C" },

  { q: "If a Private Hire Vehicle licence holder stops operating, within what time must they surrender their licence and badges to the council?",
    A: "Within 24 hours", B: "Within 3 days", C: "Within 7 days", D: "Within 28 days", ans: "C" },

  { q: "Who is permitted to inspect vehicle maintenance policies and records?",
    A: "Passengers", B: "Council and police officers", C: "DVLA", D: "Operators only", ans: "B" },

  { q: "Which additional document must be kept with vehicle maintenance records and be available for inspection at all times?",
    A: "Vehicle maintenance policy", B: "Bank statement", C: "Fuel receipts", D: "Booking screenshots", ans: "A" },

  { q: "Which two items must be clearly displayed and visible to passengers inside the Private Hire Vehicle?",
    A: "Driver badge and licence", B: "Fire extinguisher and first aid kit", C: "Insurance certificate and MOT", D: "Fare meter and receipts", ans: "A" },

  { q: "If a Private Hire Vehicle driver’s badge is stolen, what action must be taken?",
    A: "Replace it personally", B: "Report it to both the police and the council", C: "Tell the passenger", D: "Ignore it", ans: "B" },

  { q: "What action can the council take if a driver breaches Private Hire licensing conditions?",
    A: "No action", B: "Suspend or revoke the driver’s badge", C: "Issue a warning only", D: "Issue a small fine only", ans: "B" },

  { q: "Is it an offence for a Private Hire Vehicle driver not to wear their badge while working?",
    A: "No", B: "Only at night", C: "Yes", D: "Only if a passenger complains", ans: "C" },

  { q: "If a Private Hire Vehicle driver licence is suspended, what does this mean?",
    A: "The driver can work weekends only", B: "The driver cannot work as a Private Hire driver", C: "Cash jobs are still allowed", D: "Only day shifts are allowed", ans: "B" },

  { q: "If a Private Hire Vehicle is involved in an accident affecting safety, performance, or appearance, when must it be reported to licensing services?",
    A: "Immediately", B: "Within 72 hours", C: "Within 7 days", D: "Only if there is an injury", ans: "B" },

  { q: "Is a Private Hire Vehicle driver legally required to wear a seatbelt at all times?",
    A: "Yes", B: "No", C: "Only on motorways", D: "Only when children are present", ans: "B" },

  { q: "Before using a computerised booking or record-keeping system, what must a licence holder do?",
    A: "Nothing", B: "Obtain approval from the council", C: "Ask passengers", D: "Ask DVLA", ans: "B" },

  { q: "Who is responsible for ensuring a 13-year-old passenger wears a seatbelt when accompanied by a parent?",
    A: "The parent", B: "The driver", C: "The child", D: "The operator", ans: "B" },

  { q: "When can a Private Hire Vehicle driver charge extra for carrying an assistance dog?",
    A: "During peak hours", B: "For long journeys", C: "Never", D: "When paid in cash", ans: "C" },

  { q: "Under what circumstances may a driver refuse to carry an assistance dog?",
    A: "If the dog is large", B: "If the passenger is rude", C: "If the driver holds a valid exemption certificate", D: "If the driver is running late", ans: "C" },

  { q: "After submitting an application for a Private Hire Vehicle driver licence, are you allowed to start work immediately?",
    A: "Yes", B: "Only on weekends", C: "No", D: "Only if insured", ans: "C" },

  { q: "Can a Private Hire Vehicle driver accept a passenger who approaches them directly without a prior booking?",
    A: "Yes", B: "No", C: "Only if paid in cash", D: "Only for short journeys", ans: "B" },

  { q: "Can a member of the public book a Private Hire Vehicle by going directly into the operator’s base?",
    A: "No", B: "Yes", C: "Only online", D: "Only via an app", ans: "B" },

  { q: "Is it acceptable for a Private Hire Vehicle driver to cruise around looking for customers?",
    A: "Yes", B: "Only on weekends", C: "No", D: "Only if the vehicle is empty", ans: "C" },

  { q: "If a passenger approaches you on duty and asks for a ride without a booking, should you accept?",
    A: "Yes", B: "Only if the journey is short", C: "No", D: "Only if paid upfront", ans: "C" },

  { q: "Does Private Hire insurance cover passengers who were not booked in advance?",
    A: "Yes", B: "Sometimes", C: "No", D: "Only for card payments", ans: "C" },

  { q: "What may happen if a driver is caught picking up passengers without a valid booking?",
    A: "Nothing", B: "Suspension or revocation of the driver’s badge", C: "A warning only", D: "A £20 fine only", ans: "B" },

  { q: "Do all Private Hire Vehicle jobs have to be received through the licensed operator?",
    A: "No", B: "Yes", C: "Only at weekends", D: "Only for cash jobs", ans: "B" },

  { q: "Who is legally allowed to drive a licensed Private Hire Vehicle?",
    A: "Any insured driver", B: "A licensed Private Hire Vehicle driver", C: "A passenger if needed", D: "Operator staff only", ans: "B" },

  { q: "When is smoking allowed inside a Private Hire Vehicle?",
    A: "When driving alone", B: "Never", C: "With windows open", D: "When off duty", ans: "B" },

  { q: "Which Act from 1972 specifies the requirement for separate insurance for taxi vehicles?",
    A: "Road Traffic Act", B: "Police Clause Act", C: "Equality Act", D: "Licensing Act", ans: "A" },

  { q: "Which Act from 1976 allows a fine of up to £1000 for non-compliance?",
    A: "Road Traffic Act", B: "Local Government (Miscellaneous Provisions) Act 1976", C: "Police Clause Act 1847", D: "Highway Code", ans: "B" },
];

// -----------------------------
// STATE
// -----------------------------
let mode = "practice";
let shuffle = true;

let deck = [];
let index = 0;

let timerId = null;
let endAt = null;
let warned10 = false;
let warned5 = false;

let answers = new Map(); // questionKey -> "A"/"B"/"C"/"D"
let flagged = new Set();
let flaggedOrder = [];

let inReviewSession = false;

// -----------------------------
// DOM
// -----------------------------
const elSetup = document.getElementById("setup");
const elQuiz = document.getElementById("quiz");
const elResults = document.getElementById("results"); // kept for structure, not used when redirecting to results.html

const elMode = document.getElementById("mode");
const elShuffle = document.getElementById("shuffle");
const elStart = document.getElementById("startBtn");

const elTime = document.getElementById("timeLeft");
const elWarn = document.getElementById("warning");

const elQText = document.getElementById("questionText");
const elOpts = document.getElementById("options");

const elFlag = document.getElementById("flagBtn");
const elPrev = document.getElementById("prevBtn");
const elSkip = document.getElementById("skipBtn");
const elNext = document.getElementById("nextBtn");
const elFinish = document.getElementById("finishBtn");

const elQCount = document.getElementById("qCount");
const elQTotal = document.getElementById("qTotal");
const elAnsweredCount = document.getElementById("answeredCount");
const elFlagCount = document.getElementById("flagCount");

const elSummary = document.getElementById("resultSummary"); // kept for structure, not used when redirecting
const elResultActions = document.getElementById("resultActions"); // kept for structure, not used when redirecting
const elReviewBox = document.getElementById("reviewBox"); // kept for structure, not used when redirecting
const elReviewList = document.getElementById("reviewList"); // kept for structure, not used when redirecting
const elBest = document.getElementById("bestScore");

// -----------------------------
// UTIL
// -----------------------------
function fmtTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, "0");
  const s = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function loadBest() {
  const v = localStorage.getItem(LS_BEST);
  const n = v ? Number(v) : 0;
  return Number.isFinite(n) ? n : 0;
}

function saveBest(pct) {
  const best = loadBest();
  if (pct > best) localStorage.setItem(LS_BEST, String(pct));
  elBest.textContent = `${Math.max(best, pct).toFixed(1)}%`;
}

function show(section) {
  elSetup.classList.add("hidden");
  elQuiz.classList.add("hidden");
  elResults.classList.add("hidden");
  section.classList.remove("hidden");
}

function clearWarn() {
  elWarn.classList.add("hidden");
  elWarn.textContent = "";
}

function warn(msg) {
  elWarn.textContent = msg;
  elWarn.classList.remove("hidden");
}

function qKey(qObj) {
  return qObj.q;
}

function updateCounts() {
  elAnsweredCount.textContent = String(answers.size);
  elFlagCount.textContent = String(flaggedOrder.length);

  // Submit enabled only when every question has an answer
  const allAnswered = answers.size === deck.length;
  elFinish.disabled = !allAnswered;
}

function updateNavButtons() {
  elPrev.disabled = index === 0;
  elNext.disabled = index >= deck.length - 1;
}

function safeSetItem(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

// -----------------------------
// TIMER
// -----------------------------
function startTimer() {
  warned10 = false;
  warned5 = false;
  clearWarn();

  endAt = Date.now() + TIME_LIMIT_SECONDS * 1000;
  tick();
  timerId = setInterval(tick, 250);
}

function stopTimer() {
  if (timerId) clearInterval(timerId);
  timerId = null;
}

function tick() {
  const remaining = Math.max(0, Math.ceil((endAt - Date.now()) / 1000));
  elTime.textContent = fmtTime(remaining);

  if (!warned10 && remaining <= 10 * 60 && remaining > 5 * 60) {
    warn("⚠️ WARNING: 10 minutes remaining!");
    warned10 = true;
  }
  if (!warned5 && remaining <= 5 * 60 && remaining > 0) {
    warn("⚠️ WARNING: 5 minutes remaining!");
    warned5 = true;
  }

  // If time ends and not all answered, force submit anyway (realistic exam behaviour)
  if (remaining <= 0) {
    warn("⏰ TIME UP! Submitting now.");
    submitQuiz(true);
  }
}

// -----------------------------
// QUIZ FLOW
// -----------------------------
function makeDeck(base) {
  const arr = base.map(q => ({ ...q }));
  if (shuffle) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
}

function renderQuestion() {
  const q = deck[index];
  const key = qKey(q);

  elQText.textContent = q.q;
  elQCount.textContent = String(index + 1);
  elQTotal.textContent = String(deck.length);

  elOpts.innerHTML = "";
  const letters = ["A", "B", "C", "D"];
  const saved = answers.get(key) || null;

  for (const L of letters) {
    const btn = document.createElement("button");
    btn.className = "optionBtn";
    btn.dataset.letter = L;
    btn.textContent = `${L}) ${q[L]}`;
    btn.addEventListener("click", () => selectOption(L));
    if (saved === L) btn.classList.add("selected");
    elOpts.appendChild(btn);
  }

  elFlag.textContent = flagged.has(key) ? "Unflag" : "Flag for later";

  updateCounts();
  updateNavButtons();
}

function selectOption(letter) {
  const q = deck[index];
  answers.set(qKey(q), letter);

  for (const btn of elOpts.querySelectorAll(".optionBtn")) {
    btn.classList.toggle("selected", btn.dataset.letter === letter);
  }
  updateCounts();
}

function goTo(newIndex) {
  index = Math.max(0, Math.min(deck.length - 1, newIndex));
  renderQuestion();
}

function skipQuestion() {
  if (index < deck.length - 1) goTo(index + 1);
}

function toggleFlag() {
  const q = deck[index];
  const key = qKey(q);

  if (flagged.has(key)) {
    flagged.delete(key);
    flaggedOrder = flaggedOrder.filter(k => k !== key);
  } else {
    flagged.add(key);
    flaggedOrder.push(key);
  }
  renderQuestion();
}

function computeResults(forDeck, forAnswersMap) {
  let score = 0;
  let wrong = [];
  let unanswered = 0;

  for (const q of forDeck) {
    const key = qKey(q);
    const chosen = forAnswersMap.get(key) || null;

    if (!chosen) {
      unanswered += 1;
      wrong.push({ q, chosen: null });
      continue;
    }

    if (chosen === q.ans) score += 1;
    else wrong.push({ q, chosen });
  }

  const total = forDeck.length;
  const pct = total ? (score / total) * 100 : 0;
  return { score, total, pct, wrong, unanswered };
}

function submitQuiz(timeUp) {
  stopTimer();

  const result = computeResults(deck, answers);
  const passed = result.pct >= PASS_MARK;

  // Save best score only for the main timed attempt (not review sessions)
  if (!inReviewSession) saveBest(result.pct);

  // Build a payload for results.html
  const wrongPayload = result.wrong.map((item) => {
    const q = item.q;

    const yourLetter = item.chosen;
    const yourText = yourLetter ? q[yourLetter] : "Unanswered";

    const correctLetter = q.ans;
    const correctText = q[correctLetter];

    return {
      question: q.q,
      chosen: yourLetter,
      yourText,
      correctLetter,
      correctText
    };
  });

  const payload = {
    mode,
    inReviewSession: !!inReviewSession,
    score: result.score,
    total: result.total,
    pct: result.pct,
    unanswered: result.unanswered,
    passed,
    timeUp: !!timeUp,
    wrong: wrongPayload
  };

  safeSetItem(LS_LAST_RESULT, JSON.stringify(payload));

  // Dedicated results page
  window.location.href = "results.html";
}

function startQuiz() {
  mode = elMode.value;
  shuffle = elShuffle.checked;

  inReviewSession = false;

  answers = new Map();
  flagged = new Set();
  flaggedOrder = [];
  index = 0;

  deck = makeDeck(QUESTIONS);

  show(elQuiz);
  renderQuestion();
  startTimer();
}

function startRetryWrong(wrongQuestions) {
  inReviewSession = true;

  answers = new Map();
  flagged = new Set();
  flaggedOrder = [];
  index = 0;

  deck = makeDeck(wrongQuestions);

  show(elQuiz);
  clearWarn();
  stopTimer();
  elTime.textContent = "∞";
  renderQuestion();
}

function startFlaggedReview() {
  const map = new Map(QUESTIONS.map(q => [qKey(q), q]));
  const flaggedQs = flaggedOrder.map(k => map.get(k)).filter(Boolean);
  if (flaggedQs.length === 0) return;

  inReviewSession = true;

  answers = new Map();
  flagged = new Set();
  flaggedOrder = [];
  index = 0;

  deck = makeDeck(flaggedQs);

  show(elQuiz);
  clearWarn();
  stopTimer();
  elTime.textContent = "∞";
  renderQuestion();
}

function resetToMenu() {
  stopTimer();
  show(elSetup);
}

// -----------------------------
// EVENTS
// -----------------------------
elStart.addEventListener("click", startQuiz);

elFlag.addEventListener("click", toggleFlag);
elPrev.addEventListener("click", () => goTo(index - 1));
elSkip.addEventListener("click", skipQuestion);
elNext.addEventListener("click", () => goTo(index + 1));

elFinish.addEventListener("click", () => {
  // Extra guard: do not submit unless all answered (unless time-up triggers it)
  if (answers.size !== deck.length) return;
  submitQuiz(false);
});

document.addEventListener("keydown", (e) => {
  const k = e.key.toUpperCase();
  if (elQuiz.classList.contains("hidden")) return;

  if (["A", "B", "C", "D"].includes(k)) selectOption(k);
  if (k === "F") toggleFlag();

  if (e.key === "ArrowLeft") goTo(index - 1);
  if (e.key === "ArrowRight") goTo(index + 1);

  if (k === "S") skipQuestion();

  // Enter = Next (never submit early)
  if (k === "ENTER") goTo(index + 1);
});

// -----------------------------
// INIT
// -----------------------------
(function init() {
  elQTotal.textContent = String(QUESTIONS.length);
  const best = loadBest();
  elBest.textContent = `${best.toFixed(1)}%`;
})();
