var movingRect,rect

function setup() {
  createCanvas(800,400);
 movingRect= createSprite(400, 200, 50, 50);
 rect= createSprite(200,200,50,100);

 movingRect.shapeColour="yellow";
  rect.shapeColour="yellow";
}

function draw() {
  background(255,255,255);  
 console.log(rect.x-movingRect.x);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x-rect.x===rect.width/2+movingRect.width/2){
    movingRect.shapeColour="red";
    rect.shapeColour="red";
  }
  else{
    movingRect.shapeColour="yellow";
  rect.shapeColour="yellow";
  }
  drawSprites();
}