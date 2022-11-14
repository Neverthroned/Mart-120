//player
var playerX = 0;
var playerY = 0;
var diameter = 50;

//enemy 1
var enemyX = 175;
var enemyY = 150;
var enemyDiameter = 25;

//mouse obstacle
var mousex = 0;
var mousey = 0;


//enemy 2 (I like it moving horizontally better for now)
var enemyTwoX = 175;
var enemyTwoDiameter = 75;

function setup() {
  createCanvas(400, 400);
  
  //enemy 1 random speed
  enemySpeedX = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  enemySpeedY = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  
  //enemy 2 random speed
  enemyTwoSpeedX = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw() {
  background(75);
  fill(167, 186, 225);
  rect(playerX, playerY, diameter)
  
  //border
  fill(255, 255, 0)
  rect(385, 300, 20, 100)
  rect(300, 385, 100, 20)
  
  //green enemy
  fill(0, 255, 0)
  rect(enemyX, enemyY, enemyDiameter)
  
  //red enemy
  fill(255, 0, 0)
  rect(enemyTwoX, 250, enemyTwoDiameter)
  
  //mouse thingy
  circle(mousex, mousey, 50)
  
  //enemy 1 movement
  enemyX += enemySpeedX;
  enemyY += enemySpeedY;
  
  //enemy 2 movement
  enemyTwoX += enemyTwoSpeedX;
  
  //enemy 1 bounds
  if(enemyX > width)
    {
        enemyX = 0;
    }
    if(enemyX < 0)
    {
        enemyX = width;
    }
    if(enemyY > height)
    {
        enemyY = 0;
    }
    if(enemyY < 0)
    {
        enemyY = height;
    }
  
    //enemy 2 bounds
  if(enemyTwoX > width)
    {
        enemyTwoX = 0;
    }
    if(enemyTwoX < 0)
    {
        enemyTwoX = width;
    }
  
  //win conditions
    if(playerX > width-50 && playerY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(30);
        text("You Win!", width/2-50, height/2-50);
    }
}
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

//mouse object coords
function mousePressed() {
  mousex = mouseX
  mousey = mouseY
}
