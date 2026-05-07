let particles = [];
let flowAngle = 0;

function setup() {
  createCanvas(700, 450);
  background(5);
}

function draw() {
  fill(5, 20); // trail effect
  rect(0, 0, width, height);

  // Flow changes based on mouse
  flowAngle = map(mouseX, 0, width, 0, TWO_PI);

  // Add particles continuously
  for (let i = 0; i < 3; i++) {
    particles.push(new Particle(random(width), random(height)));
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();

    if (particles[i].life < 0) {
      particles.splice(i, 1);
    }
  }
}

function mousePressed() {
  // Explosion burst
  for (let i = 0; i < 50; i++) {
    particles.push(new Particle(mouseX, mouseY));
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.life = 255;
    this.size = random(2, 5);
    this.angle = random(TWO_PI);
    this.speed = random(1, 3);
  }

  update() {
    // Flow field motion
    let angle = noise(this.x * 0.005, this.y * 0.005, frameCount * 0.005) * TWO_PI;
    angle += flowAngle;

    this.x += cos(angle) * this.speed;
    this.y += sin(angle) * this.speed;

    this.life -= 2;
  }

  show() {
    // Neon glowing effect
    noStroke();
    fill(0, 255, 255, this.life);
    ellipse(this.x, this.y, this.size);

    fill(0, 100, 255, this.life / 2);
    ellipse(this.x, this.y, this.size * 2);
  }
}