var bullet,wall,speed,weight,thickness

function setup() {
  createCanvas(800,400);
  speed=random(223,321)
  weight=random(30,52)
  
  thickness=random(22,83)
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(700, 200, 60,height/2);
  damagereader=createSprite(200,300, 50,50);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
 bullet.velocityX=speed;

}

function draw() {
  background(255,255,255); 
 if(wall.x-bullet.x<(bullet.width+wall.width )/2){
   bullet.velocityX=0
var damage =.5*weight*speed*speed/thickness*thickness*thickness
  
 
if(damage>10){
  damagereader.shapeColor="green"
   }
   if( damage<10){
    damagereader.shapeColor="red"
  }
  } 
  drawSprites();
}