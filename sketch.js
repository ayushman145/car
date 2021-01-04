var caar,wall;

var speed, weight;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

speed=random(55,90)
weight=random(400,1500)

car=createSprite(50,200,50,50)

wall=createSprite(1500,200,60,height/2)

car.velocity = speed;

}

function draw() {
  background(255,255,255); 

if(wall.x-car.x < (car.width+wall)/2)
{
  car.shapeColor=color(255,0,0)
}

  if(deformation<180 && deformation>100)
{
  car.shapeColor=clor(230,230,0);
}

if(deformation<100)
{
  car.shapeColor=color(230,230,0);
{
  car.shapeColor
}
}
  drawSprites();
}
