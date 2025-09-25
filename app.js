const CATEGORY_LIST = {
  quant: {
    name: "Quantitative",
    color: "#42e3bc",
    header: "Quantitative Battle",
    badges: ["🔢 Level 1", "🔢 Level 2", "🔢 Level 3", "🔢 Level 4", "🔢 Level 5", "🏆 Quant Master"],
    questions: [
      // Level 1
      {q: "What is 2 + 3?", opts: ["5", "6", "7", "3"], a: 0, hint: "Simple addition."},
      {q: "What is 10 - 5?", opts: ["3", "5", "10", "15"], a: 1, hint: "Subtract 5 from 10."},
      {q: "6 x 2 = ?", opts: ["8", "10", "12", "14"], a: 2, hint: "Multiply."},
      {q: "12 / 4 = ?", opts: ["2", "3", "4", "6"], a: 1, hint: "Divide 12 by 4."},
      {q: "Square root of 16?", opts: ["2", "4", "8", "16"], a: 1, hint: "Which number times itself is 16?"},
      // Level 2
      {q: "What is 7 x 5?", opts: ["30", "35", "40", "25"], a: 1, hint: "7 times 5."},
      {q: "15 + 27 = ?", opts: ["32", "42", "43", "52"], a: 2, hint: "Add 15 to 27."},
      {q: "If x = 10, what is x + 5?", opts: ["12", "13", "14", "15"], a: 3, hint: "Add 5 to x."},
      {q: "What is 9 squared?", opts: ["18", "27", "81", "36"], a: 2, hint: "9 x 9."},
      {q: "What is half of 50?", opts: ["10", "25", "50", "100"], a: 1, hint: "Divide 50 by 2."},
      // Level 3
      {q: "What is 120 / 8?", opts: ["15", "12", "14", "16"], a: 0, hint: "Divide 120 by 8."},
      {q: "If y = 3, what is y^3?", opts: ["6", "9", "27", "81"], a: 2, hint: "3 x 3 x 3."},
      {q: "15% of 200?", opts: ["15", "30", "20", "25"], a: 1, hint: "Find 10%, then 5%."},
      {q: "The next prime after 13?", opts: ["15", "17", "19", "23"], a: 1, hint: "Prime numbers: 13, ..."},
      {q: "What is the average of 5, 10, 15?", opts: ["10", "12", "15", "20"], a: 0, hint: "Sum and divide by 3."},
      // Level 4
      {q: "Solve: 2x = 18, x = ?", opts: ["8", "9", "10", "11"], a: 1, hint: "Divide both sides by 2."},
      {q: "Which is NOT a multiple of 4? 8, 12, 18, 20", opts: ["8", "12", "18", "20"], a: 2, hint: "18/4 is not integer."},
      {q: "If 3y = 24, y = ?", opts: ["6", "7", "8", "9"], a: 2, hint: "24 divided by 3."},
      {q: "What is 20% of 90?", opts: ["9", "15", "18", "20"], a: 2, hint: "10% is 9, so 20%?"},
      {q: "Square root of 100?", opts: ["10", "20", "25", "50"], a: 0, hint: "10 x 10."},
      // Level 5
      {q: "If a car travels 60km in 1.5 hours, speed = ?", opts: ["30", "40", "50", "60"], a: 3, hint: "60 / 1.5."},
      {q: "Simplify: (3^2) x (2^3)", opts: ["36", "72", "54", "24"], a: 0, hint: "9 x 8."},
      {q: "If 5x = 100, x = ?", opts: ["10", "15", "20", "25"], a: 2, hint: "100 / 5."},
      {q: "LCM of 6 and 8?", opts: ["12", "18", "24", "36"], a: 2, hint: "Lowest common multiple."},
      {q: "What is 7% of 200?", opts: ["7", "14", "21", "28"], a: 1, hint: "1% is 2, so 7%?"},
    ]
  },
  logic: {
    name: "Logical Reasoning",
    color: "#f7971e",
    header: "Logic Arena",
    badges: ["🧠 Level 1", "🧠 Level 2", "🧠 Level 3", "🧠 Level 4", "🧠 Level 5", "🏆 Logic Guru"],
    questions: [
      // Level 1
      {q: "Find the odd one: Apple, Banana, Carrot, Mango", opts: ["Apple", "Banana", "Carrot", "Mango"], a: 2, hint: "One is a vegetable."},
      {q: "If all flowers are plants and some plants are green, are some flowers green?", opts: ["Yes", "No", "Can't say", "Maybe"], a: 2, hint: "Some, not all."},
      {q: "What comes next? 2, 4, 8, 16, ...", opts: ["18", "20", "24", "32"], a: 3, hint: "Doubles each time."},
      {q: "Which does not belong? Cat, Dog, Lion, Elephant", opts: ["Cat", "Lion", "Dog", "Elephant"], a: 3, hint: "One is not a carnivore."},
      {q: "If A=B, B=C, then A=?", opts: ["A", "B", "C", "Equal to C"], a: 3, hint: "Transitivity."},
      // Level 2
      {q: "If all Bloops are Lumps and all Lumps are Blips, are all Bloops Blips?", opts: ["Yes", "No", "Can't say", "Only sometimes"], a: 0, hint: "Think of set inclusion."},
      {q: "Which is the next in the series? 1, 4, 9, 16, ...", opts: ["20", "25", "30", "36"], a: 1, hint: "Squares."},
      {q: "Odd one: Square, Triangle, Rectangle, Circle", opts: ["Circle", "Square", "Triangle", "Rectangle"], a: 0, hint: "No sides."},
      {q: "If Monday is coded as 135, what is Friday?", opts: ["456", "357", "246", "123"], a: 1, hint: "Alphabet position values."},
      {q: "Which is unlike the rest? Pen, Pencil, Eraser, Paper", opts: ["Pen", "Pencil", "Eraser", "Paper"], a: 2, hint: "Not used for writing."},
      // Level 3
      {q: "What comes next? 3, 5, 9, 17, ...", opts: ["31", "27", "25", "33"], a: 0, hint: "Double and add 1."},
      {q: "Which is the odd one? North, South, East, Near", opts: ["North", "South", "East", "Near"], a: 3, hint: "Not a direction."},
      {q: "If 2+3=8, 3+7=27, 4+5=?", opts: ["32", "35", "36", "40"], a: 2, hint: "Sum, then multiply by itself."},
      {q: "Select the odd one: Table, Chair, Bed, Pillow", opts: ["Table", "Chair", "Bed", "Pillow"], a: 3, hint: "Not furniture."},
      {q: "Which one is different? Blue, Red, Green, Elephant", opts: ["Blue", "Red", "Green", "Elephant"], a: 3, hint: "Not a color."},
      // Level 4
      {q: "If 5*2=15, 6*3=27, 7*4=?", opts: ["36", "39", "44", "48"], a: 1, hint: "First times second, plus first."},
      {q: "What is the next number? 1, 2, 6, 24, ...", opts: ["60", "120", "48", "36"], a: 1, hint: "Factorials."},
      {q: "Which does not fit? Apple, Orange, Banana, Potato", opts: ["Apple", "Orange", "Banana", "Potato"], a: 3, hint: "Not a fruit."},
      {q: "If DOG = 26, CAT = ?", opts: ["24", "19", "20", "21"], a: 0, hint: "Sum the alphabet positions."},
      {q: "Odd one: Square, Cube, Rectangle, Triangle", opts: ["Square", "Cube", "Rectangle", "Triangle"], a: 1, hint: "3D shape."},
      // Level 5
      {q: "If 4+4=24, 5+5=35, 6+6=?", opts: ["46", "36", "56", "66"], a: 0, hint: "First digit, then sum."},
      {q: "Which one is not like others? Spring, Summer, Winter, Mango", opts: ["Spring", "Summer", "Winter", "Mango"], a: 3, hint: "Not a season."},
      {q: "If A=1, B=2, Z=?", opts: ["24", "25", "26", "27"], a: 2, hint: "Alphabet order."},
      {q: "Odd: Lion, Tiger, Cheetah, Whale", opts: ["Lion", "Tiger", "Cheetah", "Whale"], a: 3, hint: "Not a land animal."},
      {q: "Find next: 2, 6, 12, 20, ...", opts: ["30", "32", "36", "40"], a: 0, hint: "Add 4, 6, 8, ..."},
    ]
  },
  verbal: {
    name: "Verbal",
    color: "#ff5858",
    header: "Verbal Showdown",
    badges: ["💬 Level 1", "💬 Level 2", "💬 Level 3", "💬 Level 4", "💬 Level 5", "🏆 Word Wizard"],
    questions: [
      // Level 1
      {q: "Opposite of 'ascend'?", opts: ["Rise", "Climb", "Descend", "Soar"], a: 2, hint: "Down the stairs."},
      {q: "Choose the correct: Recieve, Receive, Recive, Receeve", opts: ["Recieve", "Receive", "Recive", "Receeve"], a: 1, hint: "i before e, except after c."},
      {q: "Synonym for 'Happy'?", opts: ["Sad", "Joyful", "Angry", "Tired"], a: 1, hint: "Positive emotion."},
      {q: "Fill in: She ____ to school.", opts: ["go", "goes", "gone", "going"], a: 1, hint: "He/she/it + 's'."},
      {q: "Plural of 'child'?", opts: ["childs", "childes", "children", "childrens"], a: 2, hint: "Irregular noun."},
      // Level 2
      {q: "Antonym for 'strong'?", opts: ["weak", "tough", "solid", "firm"], a: 0, hint: "Opposite meaning."},
      {q: "Correct: I have ____ apples.", opts: ["much", "many", "a lot", "lots"], a: 1, hint: "Countable noun."},
      {q: "Which is a noun?", opts: ["run", "swim", "book", "quickly"], a: 2, hint: "Name of thing."},
      {q: "Opposite of 'arrive'?", opts: ["come", "reach", "depart", "start"], a: 2, hint: "Leave."},
      {q: "Choose the adverb: She sings ____.", opts: ["sweet", "sweetly", "sweetest", "sweetness"], a: 1, hint: "'-ly'."},
      // Level 3
      {q: "Which is a pronoun?", opts: ["run", "he", "apple", "quick"], a: 1, hint: "Takes place of noun."},
      {q: "Fill in: The sun ____ in the east.", opts: ["rises", "rise", "rose", "raising"], a: 0, hint: "Present simple."},
      {q: "Antonym for 'always'?", opts: ["never", "often", "sometimes", "seldom"], a: 0, hint: "Opposite."},
      {q: "Choose the correct: It's/Its raining.", opts: ["It's", "Its"], a: 0, hint: "It is."},
      {q: "Plural of 'mouse'?", opts: ["mouses", "mices", "mice", "mouse"], a: 2, hint: "Irregular."},
      // Level 4
      {q: "Which is a verb?", opts: ["run", "table", "apple", "quick"], a: 0, hint: "Action word."},
      {q: "Choose correct: She has ___ car.", opts: ["a", "an", "the", "no"], a: 0, hint: "Starts with consonant."},
      {q: "Synonym for 'begin'?", opts: ["start", "end", "finish", "stop"], a: 0, hint: "Start."},
      {q: "Antonym for 'cold'?", opts: ["hot", "cool", "warm", "freeze"], a: 0, hint: "Opposite temp."},
      {q: "Opposite of 'east'?", opts: ["west", "north", "south", "down"], a: 0, hint: "Direction."},
      // Level 5
      {q: "Which is an adjective?", opts: ["quick", "run", "apple", "swim"], a: 0, hint: "Describes noun."},
      {q: "Fill: The book is ____ the table.", opts: ["in", "on", "at", "over"], a: 1, hint: "Touching surface."},
      {q: "Choose the conjunction: and, or, but, all", opts: ["and", "all", "but", "or"], a: 0, hint: "Connects words."},
      {q: "Correct: He ____ to the gym every day.", opts: ["go", "goes", "gone", "going"], a: 1, hint: "He/she/it."},
      {q: "Antonym for 'dark'?", opts: ["night", "black", "light", "shadow"], a: 2, hint: "Brightness."},
    ]
  },
  data: {
    name: "Data Interpretation",
    color: "#ffe066",
    header: "Data Interpretation Challenge",
    badges: ["📊 Level 1", "📊 Level 2", "📊 Level 3", "📊 Level 4", "📊 Level 5", "🏆 Data Star"],
    questions: [
      // Level 1
      {q: "Bar chart: 10, 20, 30, 40. Average?", opts: ["20", "25", "30", "40"], a: 1, hint: "Sum and divide by 4."},
      {q: "Pie chart: 25% = ? of 200.", opts: ["25", "50", "75", "100"], a: 1, hint: "25% of 200 = ?"},
      {q: "If 50 apples in Jan, 80 in Feb: % increase?", opts: ["30%", "40%", "50%", "60%"], a: 1, hint: "(80-50)/50 x 100."},
      {q: "Graph: 100 boys, 150 girls. % girls?", opts: ["40%", "50%", "60%", "75%"], a: 2, hint: "150/(100+150) x 100."},
      {q: "Line graph: Upward means?", opts: ["Decrease", "Increase", "Equal", "None"], a: 1, hint: "Goes up."},
      // Level 2
      {q: "Pie: 60% bikes, 40% cars. What % bikes?", opts: ["40%", "60%", "100%", "50%"], a: 1, hint: "Direct."},
      {q: "Bar: 5, 10, 15, 20. Highest?", opts: ["5", "10", "15", "20"], a: 3, hint: "Tallest bar."},
      {q: "If 15% like red, how many of 200?", opts: ["15", "20", "30", "40"], a: 2, hint: "0.15 x 200."},
      {q: "Graph total: 60, 40, 20. Total?", opts: ["100", "110", "120", "130"], a: 0, hint: "Sum all values."},
      {q: "If 2/5 of 100 like blue, how many?", opts: ["20", "25", "30", "40"], a: 3, hint: "2/5 x 100."},
      // Level 3
      {q: "If 60% passed, 40% failed. Out of 100, how many failed?", opts: ["40", "50", "60", "70"], a: 0, hint: "40% of 100."},
      {q: "Pie: 50% = ? of 120.", opts: ["50", "60", "70", "80"], a: 1, hint: "Half of 120."},
      {q: "Bar: 15, 25, 35, 45. Lowest?", opts: ["15", "25", "35", "45"], a: 0, hint: "Shortest bar."},
      {q: "Graph: 70 boys, 30 girls. % boys?", opts: ["30%", "40%", "50%", "70%"], a: 3, hint: "70/100 x 100."},
      {q: "Line graph down: Means?", opts: ["Increase", "Decrease", "No change", "None"], a: 1, hint: "Slope down."},
      // Level 4
      {q: "If 1/4 prefer tea, how many of 160?", opts: ["30", "40", "50", "60"], a: 1, hint: "1/4 x 160."},
      {q: "Pie: 80% blue, 20% red. Out of 150, red?", opts: ["20", "30", "15", "25"], a: 1, hint: "0.2 x 150."},
      {q: "Bar: 9, 18, 27, 36. What is 18 as % of 36?", opts: ["25%", "33%", "50%", "75%"], a: 2, hint: "18/36 x 100."},
      {q: "Line: 10, 20, 30, 40. Increase from 10 to 40?", opts: ["200%", "300%", "400%", "100%"], a: 1, hint: "(40-10)/10 x 100."},
      {q: "If 2/10 of 200 like green?", opts: ["20", "30", "40", "50"], a: 2, hint: "2/10 x 200."},
      // Level 5
      {q: "Pie: 35% of 400?", opts: ["100", "120", "130", "140"], a: 2, hint: "0.35 x 400."},
      {q: "Bar: 25, 35, 30, 40. Range?", opts: ["10", "15", "20", "25"], a: 2, hint: "Max - Min."},
      {q: "If 3/5 prefer orange, out of 250?", opts: ["100", "125", "150", "175"], a: 2, hint: "3/5 x 250."},
      {q: "Graph: 120, 150, 180. % increase from 120 to 180?", opts: ["50%", "60%", "70%", "80%"], a: 0, hint: "(180-120)/120 x 100."},
      {q: "If 10% absent, out of 350?", opts: ["15", "25", "30", "35"], a: 2, hint: "0.1 x 350."},
    ]
  }
};

// --- Game State ---
let profile = {
  username: "",
  xp: 0,
  score: 0,
  badges: [],
  combo: 0,
  maxCombo: 0,
  category: "",
  level: 1,
  completedLevels: {} // <-- crucial for level system
};
let currentQ = 0;
let levelQuestions = [];
let CAT = null;
const QUESTIONS_PER_LEVEL = 5;
const LEVELS_PER_CAT = 5;
let hintUsed = false;

// --- Coach (Commentator) Messages ---
const COACH = {
  start: [
    "Ready to level up? Let's get those neurons firing! 💡",
    "Your brain is the joystick. Let's start!",
    "Coach here! Let's see those skills!",
    "Welcome! Answer fast, answer smart!",
  ],
  correct: [
    "Yes! That's how it's done! 🎉",
    "Boom! Correct! You're on fire! 🔥",
    "Nice move, {name}! XP +10.",
    "You make this look easy!",
    "You nailed it, {name}!",
    "Brilliant answer!"
  ],
  wrong: [
    "Ouch! That was tricky. Keep going!",
    "No worries, {name}, you'll get the next one!",
    "Hmm, not quite. Think it through!",
    "That's okay, learning is winning.",
    "Don't give up, {name}!",
    "Coach tip: Use hints if stuck!"
  ],
  bonus: [
    "Combo! {count} in a row! 🚀",
    "Hot streak, {name}! {count} correct!",
    "You're unstoppable! {count} answers right!"
  ],
  hint: [
    "Here's a little clue from your coach...",
    "Hint power activated! Use it wisely.",
    "Sometimes a hint is all you need.",
    "Good strategy using a hint, {name}."
  ],
  finishLevel: [
    "Level {level} complete! Badge unlocked!",
    "Awesome! You cleared level {level}!",
    "Coach: Impressive, {name}! Level {level} done."
  ],
  finishCat: [
    "Category complete! You are a {badge}!",
    "All 5 levels done! You mastered this category!",
    "Outstanding performance! {badge} awarded."
  ]
};

// --- Badges/Trophies ---
function getLevelBadge(catKey, level) {
  return CATEGORY_LIST[catKey].badges[level - 1];
}
function getMasterBadge(catKey) {
  return CATEGORY_LIST[catKey].badges[LEVELS_PER_CAT];
}

// --- UI Navigation ---
function navigate(page) {
  document.querySelectorAll('.page').forEach(sec => sec.classList.remove('active'));
  document.getElementById(page + '-section').classList.add('active');
  if (page === 'leaderboard') renderLeaderboard();
}
window.navigate = navigate;

function startCategory() {
  const uname = document.getElementById('username').value.trim();
  if (uname.length < 2) {
    alert("Enter a cool gamer tag (at least 2 chars)!");
    return;
  }
  profile.username = uname;
  localStorage.setItem('levelup_gamer_profile', JSON.stringify(profile));
  updateHUD();
  navigate('category');
}

// --- Category Selection ---
function selectCategory(catKey) {
  CAT = CATEGORY_LIST[catKey];
  profile.category = catKey;
  // Initialize completedLevels for this category if missing
  if (!profile.completedLevels) profile.completedLevels = {};
  if (!profile.completedLevels[catKey]) profile.completedLevels[catKey] = [];
  document.getElementById('level-header').textContent = `Select Level - ${CAT.name}`;
  renderLevels(catKey);
  navigate('level');
}
window.selectCategory = selectCategory;

// --- Rendering level selection:
function renderLevels(catKey) {
  const container = document.getElementById('levels-container');
  container.innerHTML = "";
  let completed = profile.completedLevels[catKey] || [];
  for (let lvl = 1; lvl <= LEVELS_PER_CAT; lvl++) {
    const card = document.createElement('div');
    card.className = 'level-card';
    card.innerHTML = `
      <div class="level-num">Level ${lvl}</div>
      <div class="level-label">${getLevelBadge(catKey, lvl)}</div>
      <span class="badge">${completed.includes(lvl) ? "🏅" : ""}</span>
    `;
    // Only unlock the level if it's the first or previous is completed
    if (lvl === 1 || completed.includes(lvl - 1)) {
      card.onclick = () => startPractice(lvl);
    } else {
      card.classList.add('locked');
      card.innerHTML += `<div style="font-size:0.8em;opacity:0.7;">🔒 Locked</div>`;
    }
    if (completed.includes(lvl)) card.classList.add('completed');
    container.appendChild(card);
  }
}

// --- Practice Logic (Game Round) ---
function startPractice(level) {
  // Restore profile if exists
  const saved = localStorage.getItem('levelup_gamer_profile');
  if (saved) Object.assign(profile, JSON.parse(saved));
  profile.xp = 0;
  profile.score = 0;
  profile.badges = [];
  profile.combo = 0;
  profile.maxCombo = 0;
  profile.level = level;
  hintUsed = false;
  currentQ = 0;
  // Extract 5 questions for this level
  let start = (level - 1) * QUESTIONS_PER_LEVEL;
  levelQuestions = CAT.questions.slice(start, start + QUESTIONS_PER_LEVEL);
  document.getElementById('practice-header').textContent = `${CAT.header} - Level ${level}`;
  document.getElementById('xp').textContent = profile.xp;
  updateXPBar();
  updateLevelProgress();
  document.getElementById('result-area').classList.add('hidden');
  comment(coachLine(COACH.start));
  updateHUD();
  renderQuestion();
  navigate('practice');
}

function renderQuestion() {
  const area = document.getElementById('question-area');
  area.innerHTML = '';
  if (currentQ >= levelQuestions.length) {
    showLevelResult();
    return;
  }
  hintUsed = false;
  const q = levelQuestions[currentQ];
  const card = document.createElement('div');
  card.className = 'question-card';
  card.innerHTML = `<div><b>Q${currentQ + 1}:</b> ${q.q}</div>`;
  const options = document.createElement('div');
  options.className = 'options-list';
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.onclick = () => handleAnswer(i, btn);
    options.appendChild(btn);
  });
  card.appendChild(options);

  // Hint button
  const hintBtn = document.createElement('button');
  hintBtn.textContent = "💡 Hint";
  hintBtn.className = 'hint-btn';
  hintBtn.onclick = () => showHint(q, card, hintBtn);
  card.appendChild(hintBtn);

  area.appendChild(card);
}

function showHint(q, card, hintBtn) {
  if (hintUsed) return;
  hintUsed = true;
  comment(coachLine(COACH.hint));
  const hintBox = document.createElement('div');
  hintBox.className = "hint-box";
  hintBox.textContent = q.hint;
  hintBtn.disabled = true;
  card.appendChild(hintBox);
}

function handleAnswer(selected, btn) {
  const q = levelQuestions[currentQ];
  let correct = selected === q.a;
  if (correct) {
    profile.xp += 10;
    profile.score++;
    profile.combo++;
    if (profile.combo > profile.maxCombo) profile.maxCombo = profile.combo;
    playSFX('sfx-correct');
    playSFX('sfx-xp');
    // Streak bonus
    if (profile.combo > 1) {
      comment(coachLine(COACH.bonus, {count: profile.combo}));
      showCombo(profile.combo);
    } else {
      comment(coachLine(COACH.correct));
      showCombo('');
    }
    showScorePopup(btn, "+10 XP");
  } else {
    playSFX('sfx-wrong');
    comment(coachLine(COACH.wrong));
    profile.combo = 0;
    showCombo('');
  }
  document.getElementById('xp').textContent = profile.xp;
  updateXPBar();
  updateLevelProgress();
  document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
  setTimeout(() => { currentQ++; renderQuestion(); }, 1000);
}

function showLevelResult() {
  document.getElementById('question-area').innerHTML = '';
  const area = document.getElementById('result-area');
  area.classList.remove('hidden');
  // Add badge for this level
  const catKey = profile.category;
  const lvl = profile.level;
  // Make sure the completedLevels array is present
  if (!profile.completedLevels[catKey]) profile.completedLevels[catKey] = [];
  // Add this level if not present
  if (!profile.completedLevels[catKey].includes(lvl)) {
    profile.completedLevels[catKey].push(lvl);
    // Save to localStorage immediately!
    localStorage.setItem('levelup_gamer_profile', JSON.stringify(profile));
  }
  profile.badges = profile.completedLevels[catKey].map(lv => getLevelBadge(catKey, lv));
  let finishMsg = coachLine(COACH.finishLevel, {level: lvl, name: profile.username});
  // If all levels complete, show master badge
  let masterBadge = "";
  if (profile.completedLevels[catKey].length === LEVELS_PER_CAT) {
    masterBadge = getMasterBadge(catKey);
    finishMsg += "<br>" + coachLine(COACH.finishCat, {badge: masterBadge, name: profile.username});
  }
  area.innerHTML = `
    <div style="font-size:1.17rem;">${finishMsg}</div>
    <div class="trophies">${profile.badges.map(b => `<span class="trophy">${b}</span>`).join('')} ${masterBadge ? `<span class="trophy">${masterBadge}</span>` : ""}</div>
    <button class="cta" onclick="startPractice(lvl)">Replay Level</button>
    ${lvl < LEVELS_PER_CAT ? `<button class="cta" onclick="startPractice(${lvl+1})">Next Level →</button>` : ""}
    <button class="cta secondary" onclick="selectCategory(catKey)">Back to Levels</button>
  `;
  updateLeaderboard(profile, lvl, profile.xp);
  updateHUD();
  showGameOver();
}

function updateHUD() {
  document.getElementById('hud-username').textContent = profile.username ? `👤 ${profile.username}` : '';
  document.getElementById('hud-category').textContent = profile.category ? `🗂️ ${CATEGORY_LIST[profile.category].name}` : '';
  document.getElementById('hud-level').textContent = profile.level ? `Level ${profile.level}` : '';
  document.getElementById('hud-badges').innerHTML = (profile.completedLevels && profile.completedLevels[profile.category])
    ? profile.completedLevels[profile.category].map(lv => getLevelBadge(profile.category, lv)).join(' ')
    : "";
  document.getElementById('hud-xp').textContent = `${profile.xp} XP`;
  showCombo(profile.combo > 1 ? profile.combo : '');
}
function updateXPBar() {
  let percent = Math.min(Math.round((profile.xp / (QUESTIONS_PER_LEVEL*10)) * 100), 100);
  document.getElementById('xp-bar-fill').style.width = percent + "%";
}
function updateLevelProgress() {
  let bar = document.getElementById('level-progress');
  let percent = Math.round((currentQ / QUESTIONS_PER_LEVEL) * 100);
  bar.innerHTML = `Progress: ${currentQ} / ${QUESTIONS_PER_LEVEL}
    <div class="progress-bar"><div class="progress-bar-fill" style="width:${percent}%"></div></div>`;
}
function showCombo(combo) {
  document.getElementById('hud-combo').innerHTML = combo ? `COMBO ×${combo}` : "";
}
function showScorePopup(btn, text) {
  const popup = document.createElement('span');
  popup.textContent = text;
  popup.style.position = "absolute";
  popup.style.left = "70%";
  popup.style.top = "-1.6em";
  popup.style.fontWeight = "bold";
  popup.style.color = "#42e3bc";
  popup.style.textShadow = "0 0 9px #42e3bc";
  popup.style.fontSize = "1.09em";
  popup.style.animation = "popscore 0.9s cubic-bezier(.5,1.6,.7,1)";
  popup.style.pointerEvents = "none";
  btn.parentElement.appendChild(popup);
  setTimeout(() => popup.remove(), 900);
}
const style = document.createElement('style');
style.innerHTML = `@keyframes popscore { 0%{opacity:0;transform:translateY(0) scale(0.5);} 30%{opacity:1;transform:translateY(-18px) scale(1.13);} 70%{opacity:1;} 100%{opacity:0;transform:translateY(-34px) scale(0.9);} }`;
document.head.appendChild(style);

// --- Coach Comments ---
function coachLine(arr, vars={}) {
  let sel = arr[Math.floor(Math.random()*arr.length)];
  Object.keys(vars).forEach(k => sel = sel.replaceAll("{"+k+"}", vars[k]));
  return sel.replaceAll("{name}", profile.username);
}
function comment(msg) {
  document.getElementById("coach").innerHTML = "Coach: " + msg;
}

// --- SFX ---
function playSFX(id) {
  try {
    document.getElementById(id).currentTime = 0;
    document.getElementById(id).play();
  } catch {}
}

// --- Game Over Overlay ---
function showGameOver() {
  let ov = document.getElementById('overlay');
  ov.innerHTML = `<div>
      <div style="font-size:2.2rem;color:#ffe066;letter-spacing:2px;">LEVEL COMPLETE</div>
      <div style="margin:1.2rem 0 1.6rem 0;">${profile.username}, your score: <span style="color:#42e3bc;">${profile.score} / ${QUESTIONS_PER_LEVEL}</span></div>
      <button class="cta" onclick="hideOverlay()">Continue</button>
    </div>`;
  ov.className = "gameover";
}
window.hideOverlay = function() {
  document.getElementById('overlay').className = "";
  document.getElementById('overlay').innerHTML = "";
}

// --- Leaderboard (persistent/local) ---
function getLeaderboard() {
  let board = [];
  try {
    board = JSON.parse(localStorage.getItem('levelup_gamer_leaderboard')) || [];
  } catch { board = []; }
  return board;
}
function updateLeaderboard(profile, lvl, xp) {
  let board = getLeaderboard();
  board.push({
    name: profile.username,
    xp: xp,
    score: profile.score,
    maxCombo: profile.maxCombo,
    category: profile.category,
    level: lvl,
    dt: Date.now()
  });
  // Remove duplicates (keep highest XP for each name + category + level)
  board = board.reduce((acc, curr) => {
    let found = acc.find(a => a.name === curr.name && a.category === curr.category && a.level === curr.level);
    if (!found || curr.xp > found.xp) acc = acc.filter(a => !(a.name === curr.name && a.category === curr.category && a.level === curr.level)).concat([curr]);
    return acc;
  }, []);
  board = board.sort((a, b) => b.xp - a.xp).slice(0, 25);
  localStorage.setItem('levelup_gamer_leaderboard', JSON.stringify(board));
}

function renderLeaderboard() {
  const list = document.getElementById('leaderboard-list');
  let board = getLeaderboard();
  if (!board.length) {
    list.innerHTML = `<li>No entries yet. Play a round!</li>`;
    return;
  }
  list.innerHTML = '';
  board.forEach((user, i) => {
    const isMe = user.name === profile.username;
    const cat = user.category ? CATEGORY_LIST[user.category].name : "";
    const line = `<span>#${i + 1}</span> <span class="${isMe ? 'me' : ''}">${user.name}</span> <span>${user.xp} XP</span> <span style="color:#ffe066;">Combo:${user.maxCombo}</span> <span style="color:#42e3bc;">${cat} L${user.level}</span>`;
    const li = document.createElement('li');
    li.innerHTML = line;
    list.appendChild(li);
  });
}

// --- Startup: load profile if exists ---
(function() {
  let saved = localStorage.getItem('levelup_gamer_profile');
  if (saved) {
    Object.assign(profile, JSON.parse(saved));
    document.getElementById('username').value = profile.username;
    updateHUD();
  }
  navigate('home');
})();
