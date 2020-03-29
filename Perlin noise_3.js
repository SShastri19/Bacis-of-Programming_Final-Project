const totalFrames = 480;
let counter = 0;
let record = false;

class NoiseLoop {
  constructor(diameter, min, max) {
    this.diameter = diameter;
    this.min = min;
    this.max = max;
    this.cx = random(10);
    this.cy = random(10);
  }

  value(a) {
    let xoff = map(cos(a), -1, 1, this.cx, this.cx + this.diameter);
    let yoff = map(sin(a), -1, 1, this.cy, this.cy + this.diameter);
    let r = noise(xoff, yoff);
    return map(r, 0, 1, this.min, this.max);
  }
}


class Particle {
  constructor() {
    this.xNoise = new NoiseLoop(0.5, -width, width * 2 );
    this.yNoise = new NoiseLoop(0.5, -height, height * 2 );
    this.dNoise = new NoiseLoop(7, 10, 120);
    this.rNoise = new NoiseLoop(5, 100, 20);
    this.bNoise = new NoiseLoop(5, 100, 20);
  }

  render(a) {
    noStroke();
    let x = this.xNoise.value(a);
    let y = this.yNoise.value(a);
    let d = this.dNoise.value(a);
    let r = this.rNoise.value(a);
    let b = this.bNoise.value(a);
    fill(r, 100, b, 200);
    ellipse(x, y, d);
  }
}



let particles = new Array(100);

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < particles.length; i++) {
    particles[i] = new Particle();
  }
}

function draw() {
  let percent = float(counter % totalFrames) / totalFrames;
  render(percent);
  counter++;
}

function render(percent) {
  background(0);
  let a = percent * TWO_PI;
  for (let p of particles) {
    p.render(a);
  }
}