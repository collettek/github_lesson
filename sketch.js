let angle = 0
function setup() {
  createCanvas(600, 500);
  angleMode(DEGREES);
  
}
 
 
function draw() {
   background("#A0DEFF");
 
//   LEGS
  fill("#ffa1d5")
  stroke("#ffa1d5")
  rect(250,440,5,60)
  rect(350,440,5,60)
  
//   FEET
  fill("black")
  stroke("black")
  ellipse(243,493,35,10)
  ellipse(343,493,35,10)
  
//   BODY
  fill("#d65350")
  stroke("#d65350")
  beginShape()
  vertex(200,440)
  vertex(250,305)
  vertex(350,305)
  vertex(400,440)
  endShape(CLOSE)
  
//   HEAD
  fill("#ffa1d5")
  stroke("#ffa1d5")
  ellipse(300,260,150,150)
  
//   NOSE
  push()
  translate(210,195)
  rotate(15)
  ellipse(0,0,50,71)
  pop()
  
  push()
  fill("#ffa1d5")
  stroke("#ffa1d5")
  translate(215,160)
  rotate(15)
  rect(0,0,100,70)
  pop()

  fill("#D77DAE")
  stroke("#D77DAE")
  ellipse(200,190,6,6)
  ellipse(220,195,6,6)
  
//   EYES
  fill("white")
  stroke("white")
  ellipse(265,200,25,25)
  fill("black")
  stroke("black")
  ellipse(260,195,8,8)
  
  fill("white")
  stroke("white")
  ellipse(305,210,25,25)
  fill("black")
  stroke("black")
  ellipse(300,205,8,8)

//  MOUTH
  strokeWeight(3)
  stroke("#FF50D7")
  curve(350,100,245,265,295,285,395,80)

  //   CHEEK
  fill("#FD83C6")
  stroke("#FD83C6")
  ellipse(335,270,47,47)
  
//   ARMS
  stroke("#ffa1d5")
  strokeWeight(7)
  line(235,336,170,360)
  line(190,350,176,343)
  line(190,356,183,372)
  line(430,360,365,336)
  line(410,350,425,343)
  line(410,356,420,372)
  
//   EARS
  push()
  fill("#ffa1d5")
  translate(310,167)
  rotate(15)
  ellipse(0,0,23,42)
  pop()
  
  push()
  fill("#ffa1d5")
  translate(348,182)
  rotate(22)
  ellipse(0,0,23,42)
  pop()
  
  push()
  fill("white")
  stroke("white")
  ellipse(100,100,50,30)
  ellipse(130,110,50,40)
  ellipse(150,105,50,35)
  ellipse(125,90,50,50)
  
  ellipse(500,120,60,50)
  ellipse(460,115,60,50)
  ellipse(540,113,60,50)
  ellipse(480,80,50,50)
  ellipse(520,75,50,50)
  pop()
  
//   SUN
  push()
  translate(300,500)
  fill("#FFFB8B")
  stroke("#FFFB8B")
  rotate(angle)
  ellipse(100,450,70,70)
  angle = angle + 0.5
  pop()
  
  
  
  

    
  
}
