var config = {
    apiKey: "AIzaSyAsAkHke9lXEU_97a8rYpMm7gOH3eWDxrM",
    authDomain: "collab-draw.firebaseapp.com",
    databaseURL: "https://collab-draw.firebaseio.com",
    storageBucket: "",
};
firebase.initializeApp(config);
  
var fbRef = firebase.database().ref();
var points = [];

function setup() {
    console.log("settingup");
    createCanvas(400,400);
    background(255);
    
    fbRef.on("child_added", function (point) {
        points.push(point.val());
    });
}

function draw() {
    background(255);
    
    fill(0);
    points.forEach(function (point) {
        ellipse(point.x, point.y, 5, 5);
    });
}

function mouseDragged() {
    fbRef.push({x: mouseX, y: mouseY});
}

function mousePressed() {
    fbRef.push({x: mouseX, y: mouseY});
}

$("#saveDrawing").on("click", saveDrawing);

function saveDrawing() {
    saveCanvas();
}

$("#clearDrawing").on("click", clearDrawing);

function clearDrawing() {
    fbRef.remove();
    points = [];
}