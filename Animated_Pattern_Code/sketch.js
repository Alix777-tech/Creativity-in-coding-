function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let size = 40;

  for (let y = 0; y < height; y += size) {
    for (let x = 0; x < width; x += size) {

      stroke(0);
      fill(240);
      rect(x, y, size, size);

      noFill();

      // animation value
      let wave = sin(frameCount * 0.05 + (x + y) * 0.1) * 10;

      // alternating arc direction
      if ((x / size + y / size) % 2 == 0) {
        arc(x, y, size * 2 + wave, size * 2 + wave, 0, HALF_PI);
      } else {
        arc(
          x + size,
          y + size,
          size * 2 + wave,
          size * 2 + wave,
          PI,
          PI + HALF_PI
        );
      }
    }
  }
}