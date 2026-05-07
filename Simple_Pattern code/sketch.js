function setup() {
  createCanvas(400, 400);
  background(220);
  noLoop();
}

function draw() {
  let size = 40;

  for (let y = 0; y < height; y += size) {
    for (let x = 0; x < width; x += size) {

      stroke(0);
      fill(240);
      rect(x, y, size, size);

      noFill();

      // alternate arc direction
      if ((x / size + y / size) % 2 == 0) {
        arc(x, y, size * 2, size * 2, 0, HALF_PI);
      } else {
        arc(x + size, y + size, size * 2, size * 2, PI, PI + HALF_PI);
      }
    }
  }
}