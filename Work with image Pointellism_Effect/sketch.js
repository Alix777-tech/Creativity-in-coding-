let img;
let pointSize = 6; // size of dots
let spacing = 6;   // distance between sample points

function preload() {
  img = loadImage('pngtree-sunset-meadow-anime-landscape-wallpaper-image_16403492.jpg'); // replace with your image path
}

function setup() {
  createCanvas(img.width, img.height);
  background(255);
  noStroke();
  
  img.loadPixels();

  for (let y = 0; y < img.height; y += spacing) {
    for (let x = 0; x < img.width; x += spacing) {
      
      let index = (x + y * img.width) * 4;
      
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      
      fill(r, g, b, 200);
      
      // add slight randomness for artistic effect
      let offsetX = random(-2, 2);
      let offsetY = random(-2, 2);
      
      ellipse(x + offsetX, y + offsetY, pointSize);
    }
  }
}

function draw() {
  // no loop needed
}