var numCols;
var numRows;
var colWidth;
var rowHeight;

function setup() {
  createCanvas(500, 500);
  noStroke();
  background(255);
  numCols = 10;
  numRows = 10;
  colWidth = width/numCols;
  rowHeight = height/numRows;
}

function draw() {
  background(255);
  var whichColumnIsMouseIn = Math.floor(mouseX/colWidth);
  var whichRowIsMouseIn = Math.floor(mouseY/rowHeight);
  for (var i = 0; i < numCols; i++) {
    // do some absolute value shit
    // holy fuck i just blew my own mind with absolute value
    for (var j = 0; j < numRows; j++) {

      var xDistFromMouse = Math.abs(whichColumnIsMouseIn-i);
      var yDistFromMouse = Math.abs(whichRowIsMouseIn-j);
      var distance = Math.sqrt(Math.pow(xDistFromMouse,2) + Math.pow(yDistFromMouse,2)); // distance formula
      var sqOpacity = 255-distance*25;
      fill(255, 0, 0, sqOpacity);
      rect(i*colWidth, j*rowHeight, colWidth, rowHeight);
    } 
  } 
}