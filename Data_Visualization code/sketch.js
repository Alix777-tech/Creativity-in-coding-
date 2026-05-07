let song;
let fft;

let currentColor;
let lastSwitchTime = 0;

function preload() {
  song = loadSound("Justin Bieber  DAISIES.mp3");
}

function setup() {
  createCanvas(900, 500);
  fft = new p5.FFT(0.9, 128);
  song.play();
  textFont("monospace");

  currentColor = color(0, 255, 200);
}

function draw() {
  background(10, 10, 25, 90);

  fft.analyze();

  let spectrum = fft.analyze();
  let bass = fft.getEnergy("bass");
  let mid = fft.getEnergy("mid");
  let treble = fft.getEnergy("treble");

  // 🎨 CHANGE COLOR EVERY 5 SECONDS (UPDATED)
  if (millis() - lastSwitchTime > 5000) {
    currentColor = color(random(100, 255), random(100, 255), random(100, 255));
    lastSwitchTime = millis();
  }

  // 🖱️ MOUSE INTERACTION
  let mouseInfluence = map(mouseX, 0, width, 0.5, 2);
  let mouseHeight = map(mouseY, 0, height, 255, 50);

  let dynamicColor = color(
    red(currentColor) * mouseInfluence,
    green(currentColor),
    blue(currentColor) + mouseHeight * 0.2
  );

  // 🌐 TITLE
  fill(dynamicColor);
  textSize(18);
  text("LIVE AUDIO DATA STREAM (INTERACTIVE)", 20, 30);

  // 📊 NUMERIC DATA
  fill(255);
  textSize(14);

  text("BASS   : " + nf(bass, 3, 0), 20, 70);
  text("MID    : " + nf(mid, 3, 0), 20, 100);
  text("TREBLE : " + nf(treble, 3, 0), 20, 130);

  let peak = fft.getCentroid();
  text("CENTROID (Hz): " + nf(peak, 0, 2), 20, 170);

  // 📈 SPECTRUM BARS
  let barWidth = width / spectrum.length;

  for (let i = 0; i < spectrum.length; i += 4) {
    let amp = spectrum[i];
    let barHeight = map(amp, 0, 255, 0, height / 2);

    let x = i * barWidth;
    let y = height - barHeight;

    fill(red(dynamicColor), green(dynamicColor), blue(dynamicColor), 180);
    noStroke();
    rect(x, y, barWidth * 3, barHeight);

    if (i % 16 === 0) {
      fill(255);
      textSize(10);
      text(int(amp), x, y - 5);
    }
  }

  // 🔵 ENERGY CORE
  let energy = (bass + mid + treble) / 3;

  noStroke();
  fill(dynamicColor);
  circle(width - 120, 100, energy / 2 * mouseInfluence);

  fill(255);
  textSize(12);
  text("ENERGY", width - 150, 180);
  text(nf(energy, 3, 0), width - 150, 200);

  // ⚡ bass flash
  if (bass > 200) {
    fill(255, 0, 0, 50);
    rect(0, 0, width, height);
  }

  // 🖱️ hint
  fill(200);
  textSize(12);
  text("Move mouse → changes intensity | Color changes every 5s", 20, height - 20);
}