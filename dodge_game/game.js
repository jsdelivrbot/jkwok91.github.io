var PLAYER_WIDTH, PLAYER_HEIGHT, ENEMY_WIDTH, ENEMY_HEIGHT;
var isGameOver, player, enemy;

function setup() {
    createCanvas(400,400);
    PLAYER_WIDTH = 50;
    PLAYER_HEIGHT = 50;
    ENEMY_WIDTH = 10;
    ENEMY_HEIGHT = 30;
    isGameOver = false;
    player = createSprite(width/2,height-(PLAYER_HEIGHT/2),PLAYER_WIDTH,PLAYER_HEIGHT);
    var playerImage = loadImage("http://i.imgur.com/H20lRKU.png");
    player.addImage(playerImage);
    enemy = createSprite(width/2,0,ENEMY_WIDTH,ENEMY_HEIGHT);
}

function draw() {
    if (isGameOver) {
        gameOver();
    } else {
        background(0,0,100);
        
        if (keyDown(LEFT_ARROW) && player.position.x > PLAYER_WIDTH/2) {
            player.position.x -= 1; //(player.position.x - 1)%width;
        }
        if (keyDown(RIGHT_ARROW) && player.position.x < (width - PLAYER_WIDTH/2)) {
            player.position.x = player.position.x + 1;
        }
    
        enemy.position.y = enemy.position.y + 5;
        if (enemy.position.y > height) {
            enemy.position.y = 0;
            enemy.position.x = random(ENEMY_WIDTH/2,width-(ENEMY_WIDTH/2));
        }
        
        if (enemy.overlap(player)) {
            isGameOver = true;
        }
        
        drawSprites();
    }
}

function gameOver() {
    // do stuff when game is over
    background(0)
    textAlign(CENTER);
    text("Game Over!", width/2, height/2);
    text("Click anywhere to try again",width/2,3*height/4);
}

function mouseClicked() {
    if (isGameOver) {
        isGameOver = false;
        background(0,0,100);
        player.position.x = width/2;
        player.position.y = height-PLAYER_HEIGHT/2;
        enemy.position.x = width/2;
        enemy.position.y = 0;
    }
}