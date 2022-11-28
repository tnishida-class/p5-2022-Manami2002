// 最終課題を制作しよう
const g = 1
const jump = 25;
const ground = 50;
const size = 30;
const vxMax = 5;

let x, y, vx, vy, a, b, shouldDraw;

function setup() {
  createCanvas(500, 500);
  Ball();
}
function Ball() {
  shouldDraw = true;
  x = width / 2;
  y = height - ground - size / 2;
  vy = 0;
  vx = 0;
}
function Box() {
  a = random(30, 300);
  b = random(100, 200);

}

function draw() {
  background(220);
  fill(255);
  rect(a, b, 100, 100);

  fill(0);
  textSize(30);
  textAlign(CENTER);
  text("BOX", a + 100 / 2, b + 120 / 2);


  let gy = height - ground;
  line(0, gy, width, gy);

  if (shouldDraw) {
    fill(255);
    ellipse(x, y, size, size);
  }





  y += vy;
  x += vx;



  if (y < height - ground - size / 2) {
    vy += g;
  }
  else {
    vy = 0;
    y = height - ground - size / 2;
  }



  if (keyIsDown(LEFT_ARROW)) { vx -= 1; }
  if (keyIsDown(RIGHT_ARROW)) { vx += 1; }
  vx = constrain(vx, -vxMax, vxMax);
  if (keyIsDown(UP_ARROW) && (y >= height - ground - size / 2)) {
    vy = -jump;
  }
  if (keyIsDown(DOWN_ARROW)) { y += 5; }


  if ((a < x && x < a + 100) && (b + 80 < y && y < b + 100)) {
    vy = -vy;
  }
  if ((a - 30 < x && x < a + 20) && (b < y && y < b + 100)) {
    vx = 1;
    vx = -vx;
  }
  if ((a + 90 < x && x < a + 105) && (b - 10 < y && y < b + 100)) {
    vx = -vx;
  }
  if ((a < x && x < a + 100) && (b - 20 < y && y < b + 20)) {
    shouldDraw = false;
  }
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
}


function mouseClicked() {
  Box();
  Ball();
}