function setup() {
  createCanvas(500, 500);
  background(0, 50, 100);

}

function draw() {
  // background(15, 50, 90);
  var x = 150;
  var y = 125;
  line(x, y, mouseX, mouseY);
  stroke(130, 255, 230);
}