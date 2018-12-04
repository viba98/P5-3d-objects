// Create a canvas.
var x= 150;
var y=50;

function setup() {
  // Create a canvas with a given width and height.
  createCanvas(windowWidth, windowHeight ,WEBGL);
}

function draw() {
  // Set a background color to make the canvas visible.
  stroke(255, 0, 0);
  fill( 255, 0);
  background(0);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  torus(x,y, 10, 5);
  stroke(0, 0, 255);
  fill( 255, 0);
  rotateX(frameCount * 0.025);
  rotateY(frameCount * 0.025);
  torus(x,y, 10, 5);
  stroke(0, 255, 0);
  fill( 255, 0);
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.03);
  torus(x,y, 10, 5);
stroke(100, 0, 255);
  fill( 255, 0);
  rotateX(frameCount * 0.028);
  rotateY(frameCount * 0.028);
  torus(x,y, 10, 5);

}
