function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(135, 206, 235); // sky

  // clouds
  fill(255);
  ellipse(100, 80, 60, 40);
  ellipse(130, 80, 70, 50);
  ellipse(160, 80, 60, 40);

  ellipse(400, 60, 50, 30);
  ellipse(430, 60, 60, 40);
  ellipse(460, 60, 50, 30);

  // ground / grass
  fill(120, 180, 120);
  rect(0, 270, width, 130);

  // road
  fill(80);
  rect(0, 280, width, 60); // main road
  // road lanes
  stroke(255);
  strokeWeight(4);
  for (let i = 0; i < width; i += 40) {
    line(i, 310, i + 20, 310); // dashed center line
  }
  noStroke();

  // car body
  fill(230, 30, 30);
  rect(180, 215, 240, 50, 10);

  // car top
  rect(220, 185, 160, 45, 10);

  // windows
  fill(210);
  rect(235, 192, 55, 30, 6);
  rect(305, 192, 55, 30, 6);

  // door handles
  fill(50);
  rect(285, 225, 25, 4, 2); // front door handle
  rect(330, 225, 25, 4, 2); // back door handle

  // roof handle / antenna
  stroke(50);
  strokeWeight(3);
  line(280, 185, 280, 175);
  noStroke();

  // wheels
  fill(0);
  ellipse(230, 265, 40);
  ellipse(370, 265, 40);

  // wheel centers
  fill(160);
  ellipse(230, 265, 16);
  ellipse(370, 265, 16);

  // headlights
  fill(255, 230, 150);
  rect(410, 230, 10, 15, 3);
}

