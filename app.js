window.onload = () => {
  bestScore.innerHTML = localStorage.getItem("bestscore") || 0;
  for (let i = 0; i < 100; i++) {
    console.log(`
  □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□■■■■■■■■■■□□□□□□□□□□■■□□□□□□□□□□□□□□□□□□□□□□□■■□□□□□□□□□□□□□□■■□□□□□□□□□□□□□□□□□□□□□□□□
  □□□□□□□□□□□□□□□□□□□□□□□□□□□□■■□□□□□□□□□□■■□□□□□□□□□□□■■□□□■■□□□□□□■■■■■□□■■□□□□■□□□□□□■■□□■■■■■■□□■■□□□□□□■■■■■■□□■■□□□□□□□□□□□□□□□□□□□□□□□□
  □□□□□□□□□□□□□□□□□□□□□□□□□□□□■■□□□□□□□□□□■■□□□□□□□□□□□■■□□□■□□□□□□■■■■■■□□■■□□□□■□□□□□□■■□□□□□□■■□□■■□□□□□□■■□□□■■□■■□□□□□□□□□□□□□□□□□□□□□□□□
  □□□□□□□□□□□□□□□□□□□□□□□□□□□■■■■□□□□□□□□■■■■□□□□□□□□□□■■□□□■■□□□□□■■□□■■■□■■□□□□■■■■■■■■■□□□□□□■■□□■■□□□□□□■■□□□■■□■■□□□□□□□□□□□□□□□□□□□□□□□□
  □□□□□□□□□□□□□□□□□□□□□□□□□□■■■■■■□□□□□□■■■■■■□□□□□□□□□■■■■■■■■■■□□■■□□□■■■■■□□□□■□□□□□□■■□□□□□■■□□□■■□□□□□□■■□□□■■□■■□□□□□□□□□□□□□□□□□□□□□□□□
  □□□□□□□□□□□□□□□□□□□□□□□□■■■■□□■■■■□□■■■■□□■■■■□□□□□□□□□□□□□□□□□□□■■□□□■■□■■□□□□■□□□□□□■■□□□□■■■□□□■■□□□□□□■■□□□■■□■■■■□□□□□□□□□□□□□□□□□□□□□□
  □□□□□□□□□□□□□□□□□□□□□□□□■■■□■■□■■■□□■■■□□□□■■■□□□□□□■■■■■■■■■■■■□■■□□■■■□■■□□□□■■■■■■■■■□□□■■■■■□□■■□□□□□□■■□□□■■□■■□□□□□□□□□□□□□□□□□□□□□□□□
  □□□□□□□□□□□□□□□□□□□□□□□□□□□□■■□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□■■■■■■□□■■□□□□□□□■■□□□□□□■■■□■■■□■■□□□□□□■■□□□■■□■■□□□□□□□□□□□□□□□□□□□□□□□□
  □□□□□□□□□□□□□□□□□□□□□□□□□□□□■■□□□□□□□□□□□□□□□□□□□□□□□□■■■■■■■■□□□□■■■■□□□■■□□□□□□□■■□□□□□■■■□□□■■■■■□□□□□□■■■■■■□□■■□□□□□□□□□□□□□□□□□□□□□□□□
  □□□□□□□□□□□□□□□□□□□□□□□■■■■■■■■■■■■■■■■■■■■■■■■□□□□□□□■■□□□□□□□□□□□□□□□□□■■□□■■■■■■■■■■■■□□□□□□□□□■■□□□□□□□□□□□□□□■■□□□□□□□□□□□□□□□□□□□□□□□□
  □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□■■□□□□□□□□□□□□□□□□□■■□□□□□□□□□□□□□□□□□□□□□□□■■□□□□□□□□□□□□□□■■□□□□□□□□□□□□□□□□□□□□□□□□
  □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□■■■■■■■■■□□□□□□□□□□■■□□□□□□□□□□□□□□□□□□□□□□□■■□□□□□□□□□□□□□□■■□□□□□□□□□□□□□□□□□□□□□□□□
${i}`);
  }
};

const startbutton = document.getElementById("startbutton");
const scoreBoard = document.getElementById("scoreboard");
const bestScore = document.getElementById("bestscore");
const canvas = document.getElementById("playboard");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
const context = canvas.getContext("2d");

window.addEventListener("resize", () => {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
});

class Player {
  constructor() {
    this.width = 200;
    this.height = 20;
    this.x = canvas.width / 2 - this.width / 2;
    this.y = document.body.clientHeight * 0.9;
    this.color = "white";
  }

  draw(context) {
    context.save();
    context.fillStyle = this.color;
    context.beginPath();
    context.roundRect(this.x, this.y, this.width, this.height, 10);
    context.fill();
    context.closePath();
    context.restore();
  }
}

class Ball {
  constructor() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 4;
    this.radius = 10;
    this.vx = 0;
    this.vy = 1;
    this.color = "red";
  }

  draw(context) {
    context.save();
    context.translate(this.x, this.y);
    context.scale(this.scaleX, this.scaleY);
    context.lineWidth = this.lineWidth;
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
    if (this.lineWidth > 0) {
      context.stroke();
    }
    context.restore();
  }
}

class Game {
  constructor() {
    this.player = new Player();
    this.ball = new Ball();
    this.score = 0;
  }
  draw() {
    this.ball.x += this.ball.vx;
    this.ball.y += this.ball.vy;
    // when ball hits the left or right wall
    if (
      this.ball.x - this.ball.radius > canvas.width ||
      this.ball.x + this.ball.radius < 0
    ) {
      this.ball.vx = -this.ball.vx;
    }
    // when ball hits the top wall
    if (this.ball.y + this.ball.radius < 0) {
      this.ball.vy = -this.ball.vy;
    }
    // when ball hits the player
    if (
      this.ball.x + this.ball.radius > this.player.x &&
      this.ball.x - this.ball.radius < this.player.x + this.player.width &&
      this.ball.y + this.ball.radius > this.player.y &&
      this.ball.y - this.ball.radius < this.player.y + this.player.height
    ) {
      this.ball.vx *= 1.15;
      this.ball.vy = -this.ball.vy;
      this.score += 1;
    }
    // when ball hits the bottom wall
    if (this.ball.y + this.ball.radius > canvas.height) {
      this.gameover();
    }
    scoreBoard.innerHTML = this.score;
    this.player.draw(context);
    this.ball.draw(context);
  }
  drawFrame() {
    window.requestAnimationFrame(this.drawFrame.bind(this), canvas);
    context.clearRect(0, 0, canvas.width, canvas.height);
    this.draw();
  }
  start(speed = 10) {
    document.addEventListener("mousemove", (e) => {
      this.player.x = e.clientX - this.player.width / 2;
    });
    document.addEventListener("touchmove", (e) => {
      this.player.x = e.touches[0].clientX - this.player.width / 2;
    });

    const randomTheta =
      Math.random() * (Math.PI / 2 - Math.PI / 4) + Math.PI / 4;
    this.ball.vx = Math.cos(randomTheta) * speed;
    this.ball.vy = Math.sin(randomTheta) * speed;
    this.drawFrame();
  }
  gameover() {
    delete this.ball;
    if (this.score > Number(localStorage.getItem("bestscore"))) {
      localStorage.setItem("bestscore", this.score);
    }
    if (confirm(`gameover your score is ${this.score}!`)) {
      window.location.reload();
    }
  }
}

startbutton.addEventListener("click", (e) => {
  e.preventDefault();
  startbutton.parentElement.style.display = "none";
  const game = new Game();
  const difficulty = document.querySelector(
    'input[name="level"]:checked'
  ).value;
  console.log(difficulty);
  switch (difficulty) {
    case "easy":
      game.start(1);
      break;
    case "normal":
      game.start(10);
      break;
    case "hard":
      game.start(50);
      break;
    default:
      game.start();
      break;
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    window.location.reload();
  }
});
