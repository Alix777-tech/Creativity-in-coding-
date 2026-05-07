let img;
let levels = 5; // number of color levels (2–10 works best)

function preload() {
  img = loadImage('pngtree-sunset-meadow-anime-landscape-wallpaper-image_16403492.jpg'); // replace with your image
}

function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0);

  // Apply posterize filter
  filter(POSTERIZE, levels);
}

function draw() {
  // nothing needed here
}