const gameArea = document.getElementById('game-area');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');
const gameOverEl = document.getElementById('game-over');
const finalScoreEl = document.getElementById('final-score');

let score = 0;
let timeLeft = 60;
let gameInterval = null;
let timerInterval = null;
let paused = true;

const emojis = ['😎', '😺', '👻', '🎃', '🐱', '🦄', '👾', '🍕', '🥳'];

function spawnEmoji() {
  if (paused) return;

  const emoji = document.createElement('div');
  emoji.classList.add('emoji');
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  const size = 40;
  const x = Math.random() * (gameArea.clientWidth - size);
  const y = Math.random() * (gameArea.clientHeight - size);

  emoji.style.left = `${x}px`;
  emoji.style.top = `${y}px`;

  emoji.addEventListener('click', () => {
    score++;
    scoreEl.textContent = score;
    emoji.remove();
  });

  gameArea.appendChild(emoji);
  setTimeout(() => emoji.remove(), 1500);
}

function updateTimer() {
  timerInterval = setInterval(() => {
    if (!paused) {
      timeLeft--;
      timerEl.textContent = timeLeft;
      if (timeLeft <= 0) endGame();
    }
  }, 1000);
}

function startGame() {
  resetGame();
  paused = true;
  gameOverEl.classList.add('hidden');

  gameInterval = setInterval(spawnEmoji, 700);
  updateTimer();
}

function resumeGame() {
  paused = true;
}

function restartGame() {
  clearInterval(gameInterval);
  clearInterval(timerInterval);
  startGame();
}

function endGame() {
  clearInterval(gameInterval);
  clearInterval(timerInterval);
  gameArea.innerHTML = '';
  finalScoreEl.textContent = score;
  gameOverEl.classList.remove('hidden');
}

function resetGame() {
  clearInterval(gameInterval);
  clearInterval(timerInterval);
  score = 0;
  timeLeft = 60

}
startGame();
//const game = document.getElementById('game');
// const scoreEl = document.getElementById('score');
// const timeEl = document.getElementById('time');
// const endMsg = document.getElementById('end');
// const finalScore = document.getElementById('final');

// const startBtn = document.getElementById('start-btn');
// const resumeBtn = document.getElementById('resume-btn');
// const restartBtn = document.getElementById('restart-btn');

// let score = 0;
// let time = 15;
// let paused = false;
// let emojiInterval, timerInterval;

// function updateUI() {
//   scoreEl.textContent = score;
//   timeEl.textContent = time;
// }

// function spawnEmoji() {
//   if (paused) return;
//   const emoji = document.createElement('div');
//   emoji.className = 'emoji';
//   emoji.textContent = '😺';
//   emoji.style.left = Math.random() * 270 + 'px';
//   emoji.style.top = Math.random() * 270 + 'px';
//   emoji.onclick = () => {
//     score++;
//     updateUI();
//     emoji.remove();
//   };
//   game.appendChild(emoji);
//   setTimeout(() => emoji.remove(), 1000);
// }

// function startGame() {
//   emojiInterval = setInterval(spawnEmoji, 700);
//   timerInterval = setInterval(() => {
//     if (!paused) {
//       time--;
//       updateUI();
//       if (time === 0) endGame();
//     }
//   }, 1000);
// }

// function resetGame() {
//   clearInterval(emojiInterval);
//   clearInterval(timerInterval);
//   game.innerHTML = '';
//   score = 0;
//   time = 15;
//   paused = false;
//   updateUI();
//   endMsg.classList.add('hidden');
// }

// function endGame() {
//   clearInterval(emojiInterval);
//   clearInterval(timerInterval);
//   game.innerHTML = '';
//   finalScore.textContent = score;
//   endMsg.classList.remove('hidden');
// }

// // Button Handlers
// startBtn.onclick = () => {
//   resetGame();
//   startGame();
// };

// resumeBtn.onclick = () => {
//   paused = false;
// };

// restartBtn.onclick = () => {
//   resetGame();
//   startGame();
// }
