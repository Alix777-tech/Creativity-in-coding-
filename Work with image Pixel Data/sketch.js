let img;

function preload() {
  img = loadImage('pngtree-sunset-meadow-anime-landscape-wallpaper-image_16403492.jpg'); // replace with your image
}

function setup() {
  createCanvas(img.width, img.height);
  img.loadPixels();
}

function draw() {
  image(img, 0, 0);

  let x = mouseX;
  let y = mouseY;

  // make sure mouse is inside canvas
  if (x >= 0 && x < width && y >= 0 && y < height) {
    
    let index = (x + y * width) * 4;

    let r = img.pixels[index];
    let g = img.pixels[index + 1];
    let b = img.pixels[index + 2];

    // draw circle with picked color
    noStroke();
    fill(r, g, b, 150);
    ellipse(x, y, 80);

    // show RGB values
    fill(0);
    textSize(14);
    text(`R:${r} G:${g} B:${b}`, x + 10, y - 10);
  }
}