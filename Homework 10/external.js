//Variables, do what they're names suggest so far
var bodyX = 200;
var bodyY = 300;
var bodyVector = 1;
//special thingy
var bodyVectorY = 2;

var headX = 200;
var headVector = 1;

var circleLol = 20;
var circleX = 50;

var lineY = 0;
var lineVector;

var size = 10;
var sizeVector = 5;
var count = 0;

//name vars, might use later
var nameY = 400;
var nameX = 0;
var nameVector = 1;
var nameVectorY = 1;

function setup() {
  createCanvas(400, 400);
   lineVector = floor(random(1,11) *-1);
}

function draw() {
  background(221,221,221);
  
  //head
  fill(255,215,191);
  circle(headX,100,100);
   headX += headVector;
   if(headX >= 250 || headX <= 150)
    {
       headVector *= -1;
    }

     headX += headVector;

  //invisible lol
  fill(180,229,247);
  circle(circleX,300,50);
   circleX += circleLol;
   if(circleX >= 400 || circleX <= 0)
    {
       circleLol *= -1;
    }

     circleX += circleLol;
  

  
  //dark blue rect
  fill(47,160,168);
  rect(300,0,100,400)
  rect(0,0,100,400)
  
  //green angles
  fill(0,130,65)
  triangle(200,250,100,20,100,100);
  triangle(200,250,300,20,300,100);
  triangle(200,250,100,120,100,200);
  triangle(200,250,300,120,300,200);
  triangle(200,250,100,220,100,250);
  
  //blue angle
  fill(180,229,247);
  triangle(200,250,300,220,300,250);
  
  //eyes
  point(170,100);
  point(230,100);
  
  //body
  fill(180,229,247);
  ellipse(bodyX,bodyY,100,300);
  bodyY += bodyVector;
  bodyX += bodyVector;
   if(bodyX >= 400 || bodyX <= 0)
    {
       bodyVector *= -1;
    }

     bodyX += bodyVector;
   if(bodyY >= 400 || bodyY <= 200)
    {
       bodyVectorY *= -1;
    }

     bodyY += bodyVectorY;
  
  //other rect
  fill(123,252,168);
  rect(0,0,50,400);
  rect(350,0,50,400);
  
  //crack
  line(0,lineY,400,400);
  line(200,lineY+200,300,400);
   if(lineY >= 400 || lineY <= 0)
    {
       lineVector *= -1;
    }

     lineY += lineVector;
  
  //title
  fill(0,0,0)
  textSize(size);
    size+= sizeVector;
    count++;
    if(count > 5)
    {
        sizeVector *=-1;
        count = 0;
    }
  text('Shattered Bliss',0,25);
  
  //name
  fill(0,0,0);
  textSize(20);
  text('Bridger Burkes',0,400);

}