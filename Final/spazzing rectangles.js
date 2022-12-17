//player
var playerX = 400;
var playerY = 400;
var diameter = 100;
var width = 400;
var height = 400;

//obstacles
var squareXs = [];
var squareYs = [];

var square2Xs = [];
var square2Ys = [];

var square3Xs = [];
var square3Ys = [];

var square4Xs = [];
var square4Ys = [];

var squareDiameters = [];

var squareXSpeeds = [];
var squareYSpeeds = [];

var square2XSpeeds = [];
var square2YSpeeds = [];

var square3XSpeeds = [];
var square3YSpeeds = [];

var square4XSpeeds = [];
var square4YSpeeds = [];

//art
var circleX = 200;
var circleY = 600;

var circle2X = 600;
var circle2Y = 200;

var circleDiameter = 100;

//mouse obstacle
var mousex = 0;
var mousey = 0;

function setup() {
createCanvas(800, 800);
  
  
  for(var i = 0; i < 30; i++)
    {
      let min = -5;
      let max = 5;
      squareXSpeeds[i] = Math.floor(Math.random() * (max - min) + min);
      squareYSpeeds[i] = Math.floor(Math.random() * (max - min) + min);
      squareXs[i] = getRandomNumber(800);
      squareYs[i] = getRandomNumber(800);
      squareDiameters[i] = getRandomNumber(100);
    }
  
for(var j = 0; j < 30; j++)
    {
      let min = -5;
      let max = 5;
      square2XSpeeds[j] = Math.floor(Math.random() * (max - min) + min);
      square2YSpeeds[j] = Math.floor(Math.random() * (max - min) + min);
      square2Xs[j] = getRandomNumber(800);
      square2Ys[j] = getRandomNumber(800);
      squareDiameters[j] = getRandomNumber(100);
    }
  
  for(var k = 0; k < 30; k++)
    {
      let min = -5;
      let max = 5;
      square3XSpeeds[k] = Math.floor(Math.random() * (max - min) + min);
      square3YSpeeds[k] = Math.floor(Math.random() * (max - min) + min);
      square3Xs[k] = getRandomNumber(800);
      square3Ys[k] = getRandomNumber(800);
      squareDiameters[k] = getRandomNumber(100);
    }
  
  for(var l = 0; l < 30; l++)
    {
      let min = -5;
      let max = 5;
      square4XSpeeds[l] = Math.floor(Math.random() * (max - min) + min);
      square4YSpeeds[l] = Math.floor(Math.random() * (max - min) + min);
      square4Xs[l] = getRandomNumber(800);
      square4Ys[l] = getRandomNumber(800);
      squareDiameters[l] = getRandomNumber(100);
    }


//player stuff maybe
createPlayer(0,0)
}

//draw stuff
function draw() {
  background(50);
  drawPlayer(playerX, playerY, diameter);
  createBorders(5);
  crosshair();
  exit();
  drawCircles(circleX, circleY, circleDiameter, circle2X, circle2Y, circleDiameter);
  
  //obstacles
  fill(120, 54, 78);
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
  if(squareXs[i] > 400)
    {
        squareXs[i] = 0;
    }
    if(squareXs[i] < 0)
    {
        squareXs[i] = 400;
    }
    if(squareYs[i] > 400)
    {
        squareYs[i] = 0;
    }
    if(squareYs[i] < 0)
    {
        squareYs[i] = 400;
    }
}
  
fill(120, 54, 78);
  for(var j = 0; j < square2Xs.length; j++) {
    rect(square2Xs[j], square2Ys[j], squareDiameters[j]/2);
  let min = -5;
  let max = 5;
  square2XSpeeds[j] = Math.floor(Math.random() * (max - min) + min);
  square2YSpeeds[j] = Math.floor(Math.random() * (max - min) + min);
//obstacle movement
  square2Xs[j] -= square2XSpeeds[j];
  square2Ys[j] -= square2YSpeeds[j];
  
  //enemy bounds
  if(square2Xs[j] > 800)
    {
        square2Xs[j] = 400;
    }
    if(square2Xs[j] < 400)
    {
        square2Xs[j] = 800;
    }
    if(square2Ys[j] > 800)
    {
        square2Ys[j] = 400;
    }
    if(square2Ys[j] < 400)
    {
        square2Ys[j] = 800;
    }
}

  //obstacles
  fill(255, 128, 0);
  for(var k = 0; k < square3Xs.length; k++) {
    rect(square3Xs[k], square3Ys[k], squareDiameters[k]/2);
  let min = -5;
  let max = 5;
  square3XSpeeds[k] = Math.floor(Math.random() * (max - min) + min);
  square3YSpeeds[k] = Math.floor(Math.random() * (max - min) + min);
//obstacle movement
  square3Xs[k] += square3XSpeeds[k];
  square3Ys[k] -= square3YSpeeds[k];
  
  //enemy bounds
  if(square3Xs[k] > 400)
    {
        square3Xs[k] = 0;
    }
    if(square3Xs[k] < 0)
    {
        square3Xs[k] = 400;
    }
    if(square3Ys[k] > 800)
    {
        square3Ys[k] = 400;
    }
    if(square3Ys[k] < 400)
    {
        square3Ys[k] = 800;
    }
}

  //obstacles
  fill(255, 213, 0);
  for(var l = 0; l < squareXs.length; l++) {
    rect(square4Xs[l], square4Ys[l], squareDiameters[l]/2);
  let min = -5;
  let max = 5;
  square4XSpeeds[l] = Math.floor(Math.random() * (max - min) + min);
  square4YSpeeds[l] = Math.floor(Math.random() * (max - min) + min);
//obstacle movement
  square4Xs[l] -= square4XSpeeds[l];
  square4Ys[l] += square4YSpeeds[l];
  
  //enemy bounds
  if(square4Xs[l] > 800)
    {
        square4Xs[l] = 400;
    }
    if(square4Xs[l] < 400)
    {
        square4Xs[l] = 800;
    }
    if(square4Ys[l] > 400)
    {
        square4Ys[l] = 0;
    }
    if(square4Ys[l] < 0)
    {
        square4Ys[l] = 400;
    }
}
  
}
  
//circles
function drawCircles(){
  fill(255, 191, 179)
  circle(circleX, circleY, circleDiameter);
  circle(circle2X, circle2Y, circleDiameter);
}
//player
function createPlayer(x,y) {
  playerX = x;
  playerY = y;
}

function drawPlayer(){
  fill(167, 186, 225);
  circle(playerX, playerY, diameter)
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
  fill(167, 186, 225)
   circle(mousex, mousey, 100)
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