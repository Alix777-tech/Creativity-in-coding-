let song;
let fft;

// 🎛️ controls
let bassMultiplier = 1;
let volumeLevel = 0.7; // NEW: default volume

function preload() {
  song = loadSound("Justin Bieber  DAISIES.mp3");
}

function setup() {
  createCanvas(900, 450);
  fft = new p5.FFT();

  song.setVolume(volumeLevel); // NEW
  song.play();
}

function draw() {
  background(5, 5, 20, 90);

  fft.analyze();

  let wave = fft.waveform();
  let bass = fft.getEnergy("bass") * bassMultiplier;

  // 🌊 waveform
  noFill();
  stroke(0, 255, 255);
  strokeWeight(2);

  beginShape();
  for (let i = 0; i < wave.length; i++) {
    let x = map(i, 0, wave.length, 0, width);
    let y = map(wave[i], -1, 1, height * 0.3, height * 0.7);

    y += sin(frameCount * 0.02 + i * 0.05) * (bass / 10);

    vertex(x, y);
  }
  endShape();

  // 🔵 neon pulse
  noStroke();
  fill(255, 0, 200, 80);
  circle(width / 2, height / 2, 80 + bass);

  fill(0, 255, 255, 40);
  circle(width / 2, height / 2, 150 + bass);

  // ✨ particles
  for (let i = 0; i < 20; i++) {
    let px = random(width);
    let py = random(height);

    fill(255, 255, 255, bass / 2);
    circle(px, py, 2);
  }

  // 🎛️ UI
  fill(255);
  textSize(14);
  text(
    "UP/DOWN = Volume | SHIFT + UP/DOWN = Bass | SPACE = Play/Pause\nVolume: " +
      volumeLevel.toFixed(2) +
      " | Bass: " +
      bassMultiplier.toFixed(1),
    20,
    30
  );
}

// 🎮 controls
function keyPressed() {
  // ⬆️ volume up
  if (keyCode === UP_ARROW && !keyIsDown(SHIFT)) {
    volumeLevel = min(1, volumeLevel + 0.05);
    song.setVolume(volumeLevel);
  }

  // ⬇️ volume down
  if (keyCode === DOWN_ARROW && !keyIsDown(SHIFT)) {
    volumeLevel = max(0, volumeLevel - 0.05);
    song.setVolume(volumeLevel);
  }

  // SHIFT + UP = bass up
  if (keyIsDown(SHIFT) && keyCode === UP_ARROW) {
    bassMultiplier += 0.2;
  }

  // SHIFT + DOWN = bass down
  if (keyIsDown(SHIFT) && keyCode === DOWN_ARROW) {
    bassMultiplier = max(0.2, bassMultiplier - 0.2);
  }

  // space = play/pause
  if (key === " ") {
    if (song.isPlaying()) {
      song.pause();
    } else {
      song.play();
    }
  }
}