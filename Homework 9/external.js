function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(221,221,221);
  fill(255,215,191);
  circle(200,100,100);

  
  fill(180,229,247);
  circle(50,300,50)
  
  fill(47,160,168);
  rect(300,0,100,400)
  rect(0,0,100,400)
  
  fill(0,130,65)
  triangle(200,250,100,20,100,100);
  triangle(200,250,300,20,300,100);
  triangle(200,250,100,120,100,200);
  triangle(200,250,300,120,300,200);
  triangle(200,250,100,220,100,250);
  
  fill(180,229,247);
  triangle(200,250,300,220,300,250);
  
  point(170,100);
  point(230,100);
  
  fill(180,229,247);
  ellipse(200,300,100,300);
  
  fill(123,252,168);
  rect(0,0,50,400);
  rect(350,0,50,400);
  
  line(0,0,400,400);
  line(200,200,300,400);
  
  fill(0,0,0)
  textSize(20)
  text('Bridger Burkes',0,400)
}
