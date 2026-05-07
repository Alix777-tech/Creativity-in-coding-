let floatY = 0;
let blink = 0;

function setup() {
  createCanvas(400, 500);
}

function draw() {
  background(10, 10, 30);
  
  floatY = sin(frameCount * 0.05) * 10;
  blink = sin(frameCount * 0.1);

  // Glow
  noStroke();
  fill(100, 255, 200, 50);
  ellipse(200, 190 + floatY, 230, 250);

  // Head
  fill(120, 255, 180);
  ellipse(200, 180 + floatY, 200, 220);

  // Eyes (Blinking)
  fill(0);
  ellipse(150, 160 + floatY, 50, 80 + blink * 10);
  ellipse(250, 160 + floatY, 50, 80 + blink * 10);

  // Eye shine
  fill(255);
  ellipse(140, 140 + floatY, 10, 20);
  ellipse(240, 140 + floatY, 10, 20);

  // Smile
  stroke(0);
  strokeWeight(3);
  noFill();
  arc(200, 230 + floatY, 80, 40, 0, PI);

  // Antennas
  stroke(120, 255, 180);
  strokeWeight(5);
  line(150, 80 + floatY, 130, 40 + floatY);
  line(250, 80 + floatY, 270, 40 + floatY);

  fill(255, 100, 255);
  ellipse(130, 40 + floatY, 20, 20);
  ellipse(270, 40 + floatY, 20, 20);

  // Body
  noStroke();
  fill(120, 255, 180);
  rect(150, 280 + floatY, 100, 140, 40);

  // Arms
  ellipse(120, 320 + floatY, 40, 100);
  ellipse(280, 320 + floatY, 40, 100);

  // Legs
  rect(160, 420 + floatY, 30, 60, 10);
  rect(210, 420 + floatY, 30, 60, 10);

  // Floating shadow
  fill(0, 100);
  ellipse(200, 480, 120, 30);
}
