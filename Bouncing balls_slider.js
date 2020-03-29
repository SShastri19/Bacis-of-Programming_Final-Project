var randomColor;

var sliderR;
var sliderG;
var sliderB;


class Ball {
  constructor(_pos, _vel, _acc, _i) {
    this.pos = _pos;
    this.vel = _vel;
    this.acc = _acc;
  }
  move() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
  }
  show() {
  let valR = sliderR.value();
  let valG = sliderG.value();
  let valB = sliderB.value();
    
    noStroke();
    randomColor = color(random(valR),random(valG),random(valB));
    fill(randomColor);
    circle(this.pos.x, this.pos.y, 20);
  }
  init() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(1, -1);
    this.acc = createVector(random(-0.1, 0.1), random(-0.1, 0.1));
  }
  Collision() {
    if (this.pos.x <= 0 || this.pos.x >= width) {
      this.vel.x *= -1;
    }
    if (this.pos.y <= 0 || this.pos.y >= width) {
      this.vel.y *= -1;
    }
  }
}

var balls = [];
var num_of_balls = 20;

function setup() {
  createCanvas(600, 600); 
    background(0);

  for (let i = 0; i < num_of_balls; i++) {
    balls.push(new Ball(0, 0, 0, i));
  }
  for (let i = 0; i < num_of_balls; i++) {
    balls[i].init();
  }
  
  sliderR = createSlider(0,255, random(255));
  sliderG = createSlider(0,255, random(255));
  sliderB = createSlider(0,255, random(255));
}

function draw() {
  for (let i = 0; i < num_of_balls; i++) {
    balls[i].move();
    balls[i].show();
    balls[i].Collision();
  }
}