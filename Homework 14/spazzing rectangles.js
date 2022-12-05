//player
var playerX = 0;
var playerY = 0;
var diameter = 50;
var width = 400;
var height = 400;

var squareXs = [];
var squareYs = [];
var squareDiameters = [];

var squareXSpeeds = [];
var squareYSpeeds = [];

//mouse obstacle
var mousex = 0;
var mousey = 0;

function setup() {
createCanvas(800, 800);
  
  for(var i = 0; i < 20; i++)
    {
      let min = -5;
      let max = 5;
      squareXSpeeds[i] = Math.floor(Math.random() * (max - min) + min);
      squareYSpeeds[i] = Math.floor(Math.random() * (max - min) + min);
      squareXs[i] = getRandomNumber(800);
      squareYs[i] = getRandomNumber(800);
      squareDiameters[i] = getRandomNumber(100);
    }

//player stuff maybe
createPlayer(0,0)
}

//draw stuff
function draw() {
  background(75);
  drawPlayer(playerX, playerY, diameter);
  createBorders(5);
  crosshair();
  exit();
  
  //obstacles
  fill(120,54,78);
  for(var i = 0; i < squareXs.length; i++) {
    rect(squareXs[i], squareYs[i], squareDiameters[i]/2);
  let min = -5;
  let max = 5;
  squareXSpeeds[i] = Math.floor(Math.random() * (max - min) + min);
  squareYSpeeds[i] = Math.floor(Math.random() * (max - min) + min);
//obstacle movement
  squareXs[i] += squareXSpeeds[i];
  squareYs[i] += squareYSpeeds[i];
  
  //enemy bounds
  if(squareXs[i] > 800)
    {
        squareXs[i] = 0;
    }
    if(squareXs[i] < 0)
    {
        squareXs[i] = 800;
    }
    if(squareYs[i] > 800)
    {
        squareYs[i] = 0;
    }
    if(squareYs[i] < 0)
    {
        squareYs[i] = 800;
    }
}

  
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

function getRandomNumber(number)
    {
        return Math.floor(Math.random()*number)+10;
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