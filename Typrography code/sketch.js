function setup() {
  createCanvas(500, 500);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);

  let word = "A";
  let size = 40;

  for (let y = size; y < height; y += size) {
    for (let x = size; x < width; x += size) {

      push();

      // move to position
      translate(x, y);

      // rotate based on mouse
      let angle = atan2(mouseY - y, mouseX - x);
      rotate(angle);

      fill(255);
      textSize(size);
      text(word, 0, 0);

      pop();
    }
  }
}