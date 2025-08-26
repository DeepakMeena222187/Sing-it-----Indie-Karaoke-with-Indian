// Variable declarations for DOM elements
const songTitle = document.getElementById('songTitle');
const songMeta = document.getElementById('songMeta');
const hintBox = document.getElementById('hintBox');
const hintText = document.getElementById('hintText');
const newBtn = document.getElementById('newBtn');
const hintBtn = document.getElementById('hintBtn');
const sangBtn = document.getElementById('sangBtn');
const skipBtn = document.getElementById('skipBtn');
const addBtn = document.getElementById('addBtn');
const playerInput = document.getElementById('playerInput');
const playersList = document.getElementById('playersList');
const exportBtn = document.getElementById('exportBtn');
const resetBtn = document.getElementById('resetBtn');

// Your complete songs array (song data is all you need now)
const songs = [
  {
    title: "Jo Tum Mere Ho — Anuv Jain",
    lang: "Hindi / Indie-pop",
    year: "2024",
    emoji: "💕🎸",
    cue: "Gentle acoustic + heartfelt lyrics",
    lyric: "Jo tum mere ho saare gham mere ho."
  },
  {
    title: "Baarishein — Anuv Jain",
    lang: "Hindi / Indie-pop",
    year: "2018",
    emoji: "🌧️🎶",
    cue: "Rainy day vibes",
    lyric: "Baarishein bhiga dein bhiga dein teri yaadon ko mere sang laa dein."
  },
  {
    title: "Alag Aasman — Anuv Jain",
    lang: "Hindi / Indie-pop",
    year: "2020",
    emoji: "☁️🛫",
    cue: "Dreamy escapism",
    lyric: "Chalein kahin door nikal jaayein tere mere beech bas khamoshi ho."
  },
  {
    title: "Riha — Anuv Jain",
    lang: "Hindi / Indie-pop",
    year: "2016",
    emoji: "🕊️✨",
    cue: "Soothing release",
    lyric: "Riha kar do mujhe inn zanjeeron se un khwaabon se jo toot gaye."
  },
  {
    title: "Husn — Anuv Jain",
    lang: "Hindi / Indie-pop",
    year: "2023",
    emoji: "❤️🌹",
    cue: "Soft ballad on beauty",
    lyric: "Mere Husn Ke Ilawa Kabhi Dil Bhi Mang Lo Na Haye Pal Mein Main Pighal Jaun Haan Ab Aisa Na Karo Ke Dil Judna Paye Wapis Teri Baaton Se Bikhar Jaun Haan"
  },
  {
    title: "Kasoor — Prateek Kuhad",
    lang: "Hindi / Indie-pop",
    year: "2020",
    emoji: "💔🌙",
    cue: "Love and regret",
    lyric: "Main tumse keh na paaya kasoor mera hai."
  },
  {
    title: "Kho Gaye Hum Kahan — Jasleen Royal ft. Prateek Kuhad",
    lang: "Hindi / Indie",
    year: "2016",
    emoji: "🌀🌌",
    cue: "Lost in youth",
    lyric: "Kho gaye hum kahan rangon se bhari is duniya ke jahan."
  },
  {
    title: "Aaftaab — The Local Train",
    lang: "Hindi / Rock",
    year: "2015",
    emoji: "☀️🎸",
    cue: "Hopeful rising",
    lyric: "Tere khayalon ka aaftaab hoon main jo andheron mein bhi roshni kar jaaye."
  },
  {
    title: "Dil Mere — The Local Train",
    lang: "Hindi / Rock",
    year: "2018",
    emoji: "🔥❤️",
    cue: "Passion and longing",
    lyric: "Dil mere bas tera hai tere bina ek pal bhi rehna mushkil hai."
  },
  {
    title: "Walk With Me — Taba Chake",
    lang: "English / Indie Acoustic",
    year: "2019",
    emoji: "🚶‍♀️🌿",
    cue: "Soothing acoustic love song",
    lyric: "Walk with me through the silent woods hand in hand we’ll find a place."
  },
  {
    title: "Firefly — When Chai Met Toast",
    lang: "English / Indie-folk",
    year: "2020",
    emoji: "✨🪲",
    cue: "Bright and hopeful",
    lyric: "Like a firefly in the dark you light up my world with every word you say."
  },
  {
    title: "Khoj — When Chai Met Toast",
    lang: "Hindi-English / Indie-folk",
    year: "2018",
    emoji: "🔍🎶",
    cue: "Search for self",
    lyric: "Khoj mein nikle hum dono raaston pe jo kahin le jaayein."
  },
  {
    title: "Cold/Mess — Prateek Kuhad",
    lang: "English / Indie",
    year: "2018",
    emoji: "❄️💔",
    cue: "Love and chaos",
    lyric: "When I feel cold you keep me warm but the mess of our love breaks us apart."
  },
  {
    title: "Sage — Ritviz",
    lang: "Hindi-English / Electronic Indie",
    year: "2017",
    emoji: "🌀🎧",
    cue: "Electronic groove",
    lyric: "Tu hai meri sage tu hai meri raah teri dhun mein kho kar main."
  },
  {
    title: "Liggi — Ritviz",
    lang: "Hindi / Electronic Indie",
    year: "2019",
    emoji: "💃🎵",
    cue: "Dance anthem",
    lyric: "Liggi chalti hai jab main tujhse baat karta hoon."
  },
  {
    title: "Raahi — Taba Chake",
    lang: "Hindi / Acoustic Indie",
    year: "2016",
    emoji: "🛤️🎸",
    cue: "Traveller’s song",
    lyric: "Raahi main hoon jo chalta hi jaata hoon naye shehron mein apne rang bhar deta hoon."
  },
  {
    title: "Yeh Pal — OAFF x Savera",
    lang: "Hindi / Indie Electronic",
    year: "2021",
    emoji: "⏳🌌",
    cue: "Moments in time",
    lyric: "Yeh pal jo hai bas abhi ka hai ise jee lo ise mehsoos karo."
  },
  {
    title: "Dancing with You — OAFF",
    lang: "English / Indie-pop",
    year: "2020",
    emoji: "🕺💃",
    cue: "Dreamy love",
    lyric: "I’m dancing with you under city lights forgetting the noise and chaos."
  },
  {
    title: "Dil Beparvah — Ankur Tewari & Prateek Kuhad",
    lang: "Hindi / Indie-pop",
    year: "2018",
    emoji: "💔🕊️",
    cue: "Carefree yet broken",
    lyric: "Dil beparvah hai phir bhi tere pyaar mein khoya hua hai."
  },
  {
    title: "Ocean Tide — When Chai Met Toast",
    lang: "English / Indie-folk",
    year: "2021",
    emoji: "🌊🎶",
    cue: "Soothing calm",
    lyric: "Like the ocean tide you come and go but every time you return."
  },
  {
    title: "Dil Dhadakne Do — Priya Saraiya (MTV Coke Studio)",
    lang: "Hindi / Indie-fusion",
    year: "2012",
    emoji: "❤️🥁",
    cue: "Fusion of beats and love",
    lyric: "Dil dhadakne do dil kehta hai tu saath mere ho."
  },
  {
    title: "Shaam — Amit Trivedi (Coke Studio)",
    lang: "Hindi / Indie-fusion",
    year: "2011",
    emoji: "🌆🎶",
    cue: "Evening calm vibes",
    lyric: "Shaam bhi koi jaise hai nadi jo beh rahi hai dheere dheere."
  },
  {
    title: "O Sanam — Lucky Ali",
    lang: "Hindi / Indie classic",
    year: "1996",
    emoji: "🌙🎤",
    cue: "Timeless classic",
    lyric: "O sanam mohabbat ki kasam tumhe paane ki chahat mein."
  },
  {
    title: "Gul — Anuv Jain",
    lang: "Hindi / Indie-pop",
    year: "2021",
    emoji: "🌹🎶",
    cue: "Blooming love",
    lyric: "Tere bina lagta hai jaise phool khilna bhool gaye ho."
  },
  {
    title: "Khudi — The Local Train",
    lang: "Hindi / Rock",
    year: "2015",
    emoji: "🔥🎸",
    cue: "Finding self",
    lyric: "Khudi mein hi chhupi hai woh taaqat jo duniya badal de."
  },
  {
    title: "Choo Lo — The Local Train",
    lang: "Hindi / Rock",
    year: "2014",
    emoji: "🤲❤️",
    cue: "Touch of love",
    lyric: "Choo lo jo tumhe pasand ho main bas tumhara ho jaaun."
  },
  {
    title: "City Slums — Raja Kumari ft. Divine",
    lang: "English-Hindi / Hip-hop Indie",
    year: "2017",
    emoji: "🏙️🎤",
    cue: "Rap anthem",
    lyric: "We came from the city slums dreaming big under broken lights."
  },
  {
    title: "Mishri — Anuv Jain",
    lang: "Hindi / Indie-pop",
    year: "2016",
    emoji: "🍬🎶",
    cue: "Sweet simplicity",
    lyric: "Mishri jaisi baatein teri jo har din mere dil ko aur meetha bana deti hain."
  },
  {
    title: "Behti Hawa Sa Tha Woh — Shaan",
    lang: "Hindi / Indie-film crossover",
    year: "2009",
    emoji: "🍃🎵",
    cue: "Carefree memories",
    lyric: "Behti hawa sa tha woh uddti patang sa tha woh."
  },
  {
    title: "Tum Jab Paas — Prateek Kuhad",
    lang: "Hindi / Indie-pop",
    year: "2015",
    emoji: "💞🎸",
    cue: "Love in closeness",
    lyric: "Tum jab paas hote ho har pal rangon se bhar jaata hai."
  },
  {
    title: "Sham — Prateek Kuhad",
    lang: "Hindi / Indie-pop",
    year: "2012",
    emoji: "🌆💫",
    cue: "Evening magic",
    lyric: "Sham bhi koi jaise nadi jo beh jaati hai dheere dheere."
  },
  {
    title: "Rihaayi — The Local Train",
    lang: "Hindi / Rock",
    year: "2016",
    emoji: "🕊️🎶",
    cue: "Freedom and release",
    lyric: "Rihaayi maangta hoon apne sapno se jinmein main khud ko khoya hua paata hoon."
  },
  {
    title: "Chaandaniya — Shankar-Ehsaan-Loy (MTV Unplugged)",
    lang: "Hindi / Indie-fusion",
    year: "2012",
    emoji: "🌙🎵",
    cue: "Moonlit nostalgia",
    lyric: "Chaandaniya chup jana re dil ke kone mein jo udaasi hai."
  },
  {
    title: "Jaane Do — OAFF x Savera",
    lang: "Hindi / Indie-electronic",
    year: "2021",
    emoji: "🌊🌀",
    cue: "Letting go",
    lyric: "Jaane do jo guzra hai usse bhool jao aur aage chalo."
  },
  {
    title: "Kho Gaye Hum Kahan — Jasleen Royal ft. Prateek Kuhad",
    lang: "Hindi / Indie-pop",
    year: "2016",
    emoji: "🌀💭",
    cue: "Lost in dreams",
    lyric: "Kho gaye hum kahan khud ke banaye huye sapno mein."
  },
  {
    title: "Ek Din Aap Yun Humko Mil Jayenge — Lucky Ali",
    lang: "Hindi / Indie-classic",
    year: "2000",
    emoji: "💫🎶",
    cue: "Destined love",
    lyric: "Ek din aap yun humko mil jayenge phool hi phool raahon mein khil jaayenge."
  },
  {
    title: "Aalas Ka Pedh — The Local Train",
    lang: "Hindi / Rock",
    year: "2015",
    emoji: "🌳🎸",
    cue: "Laziness & life",
    lyric: "Aalas ka pedh jo dil ke kone mein ug aaya hai usse tod kar hi hum apni manzilon ko paa sakte hain."
  },
  {
    title: "Main Aur Tum — Prateek Kuhad",
    lang: "Hindi / Indie-pop",
    year: "2014",
    emoji: "👫❤️",
    cue: "Togetherness",
    lyric: "Main aur tum jab saath hote hain duniya ke saare rang alag lagte hain."
  },
  {
    title: "Jaane Kyun — Vishal-Shekhar (Indie vibes)",
    lang: "Hindi / Indie-fusion",
    year: "2008",
    emoji: "💭🎶",
    cue: "Questioning love",
    lyric: "Jaane kyun dil jaanta hai tu hai to main hoon."
  },
  {
    title: "Phir Se Ud Chala — Mohit Chauhan (Rockstar)",
    lang: "Hindi / Indie-rock fusion",
    year: "2011",
    emoji: "🕊️🌌",
    cue: "Free spirit",
    lyric: "Phir se ud chala dil se nikal ke sapno ke jahan mein."
  },
  {
    title: "Tum Jab Paas — Prateek Kuhad",
    lang: "Hindi / Indie-pop",
    year: "2013",
    emoji: "❤️🌙",
    cue: "Nearness and warmth",
    lyric: "Tum jab paas hote ho to lagta hai jaise zindagi ne apna rang pa liya hai."
  },
  {
    title: "Dil Dhadakne Do — Zoya Akhtar OST (Indie-feel)",
    lang: "Hindi / Fusion",
    year: "2015",
    emoji: "💓🚢",
    cue: "Life beats",
    lyric: "Dil dhadakne do saans chalne do is jahaan ke safar mein."
  },
  {
    title: "Tera Zikr — Darshan Raval",
    lang: "Hindi / Indie-pop",
    year: "2017",
    emoji: "💭❤️",
    cue: "Memories of love",
    lyric: "Tera zikr jo hota hai dil mein toh har ek pal naya lagta hai."
  },
  {
    title: "Tere Bina — Zaeden",
    lang: "Hindi / Indie-pop",
    year: "2020",
    emoji: "🎧🌃",
    cue: "Love song vibes",
    lyric: "Tere bina lagta hai jaise saari duniya adhoori hai."
  },
  {
    title: "Jaane De — Atif Aslam (MTV Unplugged)",
    lang: "Hindi / Acoustic",
    year: "2013",
    emoji: "🌊🕊️",
    cue: "Letting go",
    lyric: "Jaane de jo guzra hai usse kyunki aane waale pal tumhe naye sapne denge."
  },
  {
    title: "Tum Hi Aana (Acoustic Indie) — Jubin Nautiyal",
    lang: "Hindi / Indie-fusion",
    year: "2019",
    emoji: "🌧️❤️",
    cue: "Calling for love",
    lyric: "Tum hi aana meri zindagi mein phir se."
  },
  {
    title: "Aabaad Barbaad (Indie Acoustic) — Arijit Singh",
    lang: "Hindi / Indie fusion",
    year: "2020",
    emoji: "🔥💔",
    cue: "Love’s end",
    lyric: "Aabaad barbaad hua main tere pyaar mein."
  },
  {
    title: "Baarishein — Anuv Jain",
    lang: "Hindi / Indie",
    year: "2018",
    emoji: "🌧️☕",
    cue: "Rain and love",
    lyric: "Baarishein jo yaadon ko jagati hain unmein hum dono khud ko paate hain."
  },
  {
    title: "Saaqi — When Chai Met Toast",
    lang: "Hindi-English / Indie",
    year: "2021",
    emoji: "🍵🌸",
    cue: "Fusion celebration",
    lyric: "Saaqi aaj khushiyan baant do."
  },
  {
    title: "Tu Kisi Rail Si — Swanand Kirkire (Anand Gandhi)",
    lang: "Hindi / Indie-poetry",
    year: "2016",
    emoji: "🚂❤️",
    cue: "Poetic love",
    lyric: "Tu kisi rail si guzarti hai main kisi pul sa thartharaata hoon."
  }
];

let currentSong = null;
let hintStep = 0;
let players = [];
let activeIndex = null;

function pickRandomSong() {
  return songs[Math.floor(Math.random() * songs.length)];
}

function renderSong(s) {
  if (!s) {
    songTitle.innerHTML = 'Press <strong>New Song</strong> to start';
    songMeta.textContent = '';
    return;
  }
  songTitle.textContent = s.title;
  songMeta.textContent = `${s.lang} • ${s.year}`;
  hintStep = 0;
  hintText.textContent = '';
  hintBox.classList.remove('show');
}

function showHint() {
  if (!currentSong) return;
  const hints = [currentSong.emoji, currentSong.cue, currentSong.lyric];
  if (hintStep >= hints.length) return;
  hintText.textContent = hints[hintStep];
  hintBox.classList.add('show');
  hintStep++;
}

function newSong() {
  currentSong = pickRandomSong();
  renderSong(currentSong);
}

function sangIt() {
  if (activeIndex === null) {
    alert('Choose or add a player first.');
    return;
  }
  players[activeIndex].score = (players[activeIndex].score || 0) + 1;
  renderPlayers();
  newSong();
}

function skipSong() {
  newSong();
}

function addPlayer() {
  const name = playerInput.value.trim();
  if (!name) return;
  players.push({ name, score: 0 });
  playerInput.value = '';
  activeIndex = players.length - 1;
  renderPlayers();
}

function setActive(i) {
  activeIndex = i;
  renderPlayers();
}

function renderPlayers() {
  playersList.innerHTML = '';
  players.forEach((p, i) => {
    const node = document.createElement('div');
    node.className = 'player' + (i === activeIndex ? ' active' : '');
    node.innerHTML = `
      <div class="left">
        <div class="avatar" style="width:36px;height:36px;border-radius:9px;background:${i === activeIndex ? 'linear-gradient(180deg, var(--p2), var(--p1))' : 'var(--soft)'}"></div>
        <div>
          <div class="name">${escapeHtml(p.name)}</div>
          <div class="score">Score: ${p.score}</div>
        </div>
      </div>
      <div class="actions">
        <button class="btn-action" data-action="set-active" data-index="${i}">Play</button>
        <button class="btn-action" data-action="reset-score" data-index="${i}">Reset</button>
        <button class="btn-action" data-action="remove-player" data-index="${i}">✕</button>
      </div>
    `;
    playersList.appendChild(node);
  });
}

function resetScore(i) {
  players[i].score = 0;
  renderPlayers();
}

function removePlayer(i) {
  if (activeIndex === i) activeIndex = null;
  players.splice(i, 1);
  renderPlayers();
}

function exportLeaderboard() {
  const data = JSON.stringify({ generatedAt: new Date().toISOString(), players }, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'singit_leaderboard.json';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function resetAll() {
  if (!confirm('Reset all players and scores?')) return;
  players = [];
  activeIndex = null;
  renderPlayers();
  currentSong = null;
  renderSong(null);
}

function escapeHtml(s) {
  return (s + '').replace(/[&<>"']/g, c => ({ '&': '&', '<': '<', '>': '>', '"': '"', "'": "'" }[c]));
}

// Event listeners
newBtn.addEventListener('click', newSong);
hintBtn.addEventListener('click', showHint);
sangBtn.addEventListener('click', sangIt);
skipBtn.addEventListener('click', skipSong);
addBtn.addEventListener('click', addPlayer);
playerInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') addPlayer(); });
exportBtn.addEventListener('click', exportLeaderboard);
resetBtn.addEventListener('click', resetAll);

// Event delegation for player buttons
playersList.addEventListener('click', (e) => {
  const target = e.target;
  if (target.matches('.btn-action')) {
    const action = target.dataset.action;
    const index = parseInt(target.dataset.index);
    if (action === 'set-active') {
      setActive(index);
    } else if (action === 'reset-score') {
      resetScore(index);
    } else if (action === 'remove-player') {
      removePlayer(index);
    }
  }
});


document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'n') newSong();
  if (e.key.toLowerCase() === 'h') showHint();
  if (e.key.toLowerCase() === 's') sangIt();
  if (e.key.toLowerCase() === 'e') exportLeaderboard();
});

// Initial render
renderSong(null);
renderPlayers();