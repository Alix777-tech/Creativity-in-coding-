let img;

function preload() {
  img = loadImage('pngtree-sunset-meadow-anime-landscape-wallpaper-image_16403492.jpg'); // replace with your image
}

function setup() {
  createCanvas(400, 500);
  noLoop();
}

function draw() {
  background(170, 190, 210); // light blue background

  // 🔺 TOP TRIANGLE
  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.moveTo(width/2, 50);      // top point
  drawingContext.lineTo(100, 200);         // bottom left
  drawingContext.lineTo(width-100, 200);   // bottom right
  drawingContext.closePath();
  drawingContext.clip();

  image(img, 0, 0, width, height);
  drawingContext.restore();

  // 🔻 BOTTOM TRIANGLE
  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.moveTo(width/2, height-50); // bottom point
  drawingContext.lineTo(100, height-200);    // top left
  drawingContext.lineTo(width-100, height-200); // top right
  drawingContext.closePath();
  drawingContext.clip();

  image(img, 0, 0, width, height);
  drawingContext.restore();
}