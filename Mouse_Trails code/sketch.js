let points = [];

function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  // semi-transparent background for fading trail effect
  background(0, 20);

  // add current mouse position
  let point = {
    x: mouseX,
    y: mouseY
  };
  points.push(point);

  // limit trail length
  if (points.length > 50) {
    points.shift();
  }

  // draw trail
  noStroke();

  for (let i = 0; i < points.length; i++) {
    let p = points[i];

    // older points are smaller and dimmer
    let alpha = map(i, 0, points.length, 50, 255);
    let size = map(i, 0, points.length, 2, 12);

    fill(255, alpha);
    circle(p.x, p.y, size);
  }
}