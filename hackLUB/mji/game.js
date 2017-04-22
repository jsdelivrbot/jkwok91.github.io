var player;
var principalIsland;
var islands; //islands are 30x30
var sharks;
var numIslands;
var numSharks;
var playerOnIsland;
var gameOver;
var TIME_LIMIT;
var stopwatch;
var timer;
var isWon;

function setup() {
  gameOver = false;
  isWon = false;
  TIME_LIMIT = 10;
  createCanvas(400, 300);
  background(100, 200, 200);

  // player

  player = createSprite(5, height/2, 10, 20);
  playerOnIsland = false;

  // safe islands

  islands = new Group();
  principalIsland = createSprite(width-15, random(15, height-15), 30, 30); // island u touch to win
  islands.add(principalIsland);
  numIslands = Math.floor(random(1,5)); // additional islands
  for (var i = 0; i < numIslands; i++) {
    var island = createSprite(random(15, width-15), random(15, height-15), 30, 30);
    islands.add(island);
  }

  // sharks

  sharks = new Group();
  numSharks = Math.floor(random(2, 6)); // random number of sharks
  for (var j = 0; j < numSharks; j++) {
    var shark = createSprite(random(5, width-5), random(5, height-5), 10, 10);
    sharks.add(shark);
  }

  // timer

  startTimer();
}

function startTimer() {
  timer = 0;
  clearInterval(stopwatch);
  stopwatch = setInterval(function() {
    timer++;
  },1000);
}

function draw() {
  if (gameOver) {
    background(0);
    fill(255);
    textAlign(CENTER);
    if (timer > TIME_LIMIT) {
      text("game over! out of time. the government got you", width/2, height/2);
    } else {
      text("game over! the loan sharks got you", width/2, height/2);
    }
  } else if (isWon) {
    background(0);
    fill(255);
    textAlign(CENTER);
    text("YOU WON $$$", width/2, height/2);
  } else {
    playGame();
  }
}

function playGame() {
  background(100, 200, 200);
  text(TIME_LIMIT-timer, width/2, 20);

  // player controls
  if (keyDown(UP_ARROW) && player.position.y > 10) {
    player.position.y -= 3;
  }
  if (keyDown(DOWN_ARROW) && player.position.y < height-10) {
    player.position.y += 3;
  }
  if (keyDown(LEFT_ARROW) && player.position.x > 5) {
    player.position.x -= 3;
  }
  if (keyDown(RIGHT_ARROW) && player.position.x < width-5) {
    player.position.x += 3;
  }

  // shark movement
  for (var s = 0; s < numSharks; s++) {
    var shark = sharks[s];
    if (playerOnIsland) {
      shark.velocity.x = random(-1,1);
      shark.velocity.y = random(-1,1);
    } else {
      var vectorToPlayer = getDir(shark, player);
      var dir = vectorToPlayer.normalize();
      shark.velocity.x = dir.x; // YES
      shark.velocity.y = dir.y;
    }
  }

  if (islands.overlap(player)) {
    playerOnIsland = true;
  } else {
    playerOnIsland = false;
  }

  // lose condition
  if (sharks.overlap(player)) {
    gameOver = true;
  }

  if (timer > TIME_LIMIT) {
    gameOver = true;
  }

  // win condition
  if (principalIsland.overlap(player)) {
    isWon = true;
  }

  drawSprites();
}

function reset() {
  gameOver = false;
  isWon = false;
  startTimer();

  player.position.x = 5;
  player.position.y = height/2;
  
  playerOnIsland = false;

  // safe islands

  // removal
  // note: i = numIslands because islands.length is actually numIslands+1 because we included principalIsland
  for (var i = numIslands; i >= 0; i--) {
    removeSprite(islands[i]);
  }

  // repopulation

  principalIsland = createSprite(width-15, random(15, height-15), 30, 30);
  islands.add(principalIsland);

  numIslands = Math.floor(random(1,5)); // additional islands
  for (var ii = 0; ii < numIslands; ii++) {
    var island = createSprite(random(15, width-15), random(15, height-15), 30, 30);
    islands.add(island);
  }

  // sharks

  // removal
  for (var j = numSharks-1; j >= 0; j--) {
    removeSprite(sharks[j]);
  }

  // repopulation

  numSharks = Math.floor(random(2,6));
  for (var jj = 0; jj < numSharks; jj++) {
    var shark = createSprite(random(5, width-5), random(5, height-5), 10, 10);
    sharks.add(shark);
  }
}

function mouseClicked() {
  if (gameOver || isWon) {
    reset();
  }
}

function getDir(a, b) {
  return createVector(b.position.x - a.position.x, b.position.y - a.position.y);
}