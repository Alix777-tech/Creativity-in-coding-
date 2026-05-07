let song;
let fft;
let player;
let obstacles = [];
let gameOver = false;

function preload() {
  song = loadSound("Justin Bieber  DAISIES.mp3");
}

function setup() {
  createCanvas(800, 400);
  fft = new p5.FFT();
  song.play();

  player = new Player();
}

function draw() {
  background(255, 200, 150, 80);

  fft.analyze();

  let bass = fft.getEnergy("bass");
  let mid = fft.getEnergy("mid");

  let spawnRate = 40;

  if (!gameOver) {
    if (frameCount % spawnRate === 0) {
      obstacles.push(new Obstacle(bass));
    }

    player.update();
  }

  player.show();

  for (let i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i].update(mid);
    obstacles[i].show();

    if (obstacles[i].hits(player)) {
      gameOver = true;

      // 🔴 STOP SONG WHEN GAME OVER
      song.stop();
    }

    if (obstacles[i].offscreen()) {
      obstacles.splice(i, 1);
    }
  }

  let wave = fft.waveform();

  stroke(255, 120, 80);
  noFill();
  beginShape();
  for (let i = 0; i < wave.length; i += 5) {
    let x = map(i, 0, wave.length, 0, width);
    let y = map(wave[i], -1, 1, height / 3, height * 2 / 3);
    vertex(x, y);
  }
  endShape();

  if (gameOver) {
    fill(255, 80, 80);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width / 2, height / 2);
  }
}

// PLAYER
class Player {
  constructor() {
    this.x = 100;
    this.y = height / 2;
    this.size = 30;
  }

  update() {
    if (keyIsDown(UP_ARROW)) this.y -= 4;
    if (keyIsDown(DOWN_ARROW)) this.y += 4;
    this.y = constrain(this.y, 0, height);
  }

  show() {
    fill(255, 140, 90);
    noStroke();
    circle(this.x, this.y, this.size);
  }
}

// OBSTACLES
class Obstacle {
  constructor(bass) {
    this.x = width;
    this.y = random(height);
    this.size = 25;
    this.speed = 3;
  }

  update(mid) {
    this.x -= this.speed;
  }

  show() {
    fill(255, 100, 80, 180);
    noStroke();
    rect(this.x, this.y, this.size, this.size);
  }

  hits(player) {
    let d = dist(this.x, this.y, player.x, player.y);
    return d < this.size / 2 + player.size / 2;
  }

  offscreen() {
    return this.x < -50;
  }
}