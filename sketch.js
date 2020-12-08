var car,wall
var speed,weight




function setup() {
  createCanvas(1600,400);
  speed=random(20,90)
  weight=random(800,2000)
  car=createSprite(50,200,30,30)
  car.velocityX=speed;
  car.shapeColor="white"
  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor="black"



}

function draw() {
  background("pink") 


  


if(wall.x-car.x<(car.width+wall.width/2)){
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation<100){
    car.shapeColor=color(0,225,0)
  }

  if(deformation<180 && deformation>100){
    car.shapeColor=color(230,230,0)
  }

  if(deformation>180){
    car.shapeColor=color(255,0,0)
  }

}



  drawSprites();
}