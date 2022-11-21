//player
var playerX = 0;
var playerY = 0;
var diameter = 50;
var width = 400;
var height = 400;

//enemy 1
var greenEnemyX = 175;
var greenEnemyY = 150;
var greenEnemyDiameter = 25;

//enemy 2 (I like it moving horizontally better for now)
var redEnemyX = 175;
var redEnemyDiameter = 75;
var redEnemyY= 250;

//mouse obstacle
var mousex = 0;
var mousey = 0;

function setup() {
createCanvas(400, 400);
  
//red enemy random speed
enemyTwoSpeedX = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  
//green enemy random speed
enemySpeedX = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
enemySpeedY = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

//player stuff maybe
createPlayer(0,0)
}

//draw stuff
function draw() {
  background(75);
  drawPlayer(playerX, playerY, diameter);
  drawEnemies();
  moveEnemies();
  createBorders(5);
  crosshair();
  exit();
}
  
//player
function createPlayer(x,y) {
  playerX = x;
  playerY = y;
}

function drawPlayer(){
  fill(167, 186, 225);
  rect(playerX, playerY, diameter)
}

//enemies
function drawEnemies(){
  //green enemy
  fill(0, 255, 0)
  rect(greenEnemyX, greenEnemyY, greenEnemyDiameter)
  
  //red enemy
  fill(255, 0, 0)
  rect(redEnemyX, 250, redEnemyDiameter)
}

function moveEnemies(){
  //green enemy movement
  greenEnemyX += enemySpeedX;
  greenEnemyY += enemySpeedY;
  
  //enemy 2 movement
  redEnemyX += enemyTwoSpeedX;
  
  //enemy 1 bounds
  if(greenEnemyX > width)
    {
        greenEnemyX = 0;
    }
    if(greenEnemyX < 0)
    {
        greenEnemyX = width;
    }
    if(greenEnemyY > height)
    {
        greenEnemyY = 0;
    }
    if(greenEnemyY < 0)
    {
        greenEnemyY = height;
    }
  
    //enemy 2 bounds
  if(redEnemyX > width)
    {
        redEnemyX = 0;
    }
    if(redEnemyX < 0)
    {
        redEnemyX = width;
    }
}

//player movement
function keyPressed() {
  if (key == "d") {
    playerX += 20;
  } else if (key == "a") {
    playerX -= 20;
  } else if (key == "w") {
    playerY -= 20;
  } else if (key == "s") {
    playerY += 20;
  } 
}

//crosshair lol
function crosshair(){
   circle(mousex, mousey, 50)
}

//borders
function createBorders(thickness)
{
  fill(360,360,360)
  // top
  rect(0,0,width,thickness);
  // left
  rect(0,0,thickness,height);
  // bottom 
  rect(0, height-thickness,width-50, thickness);
  // right
  rect(width-thickness,0,thickness,height-50);
}

//mouse object coords
function mousePressed() {
  mousex = mouseX
  mousey = mouseY
}

//win conditions
function exit(){
  if(playerX > width-75 && playerY > width-75)
{
  fill(0);
  stroke(5);
  textSize(30);
  text("You Win!", width/2-50, height/2-50);
}

}
