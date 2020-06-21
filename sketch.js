var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 80);
  fixedrect.shapeColor= "blue";

  movingrect=createSprite(200,100,80,50);
  movingrect.shapeColor="yellow";

  box1=createSprite(50,300,50,80);
  
}

function draw() {
  background(0);  
movingrect.x=World.mouseX;
movingrect.y=World.mouseY;


 if(IsTouching(movingrect,box1)|| IsTouching(movingrect,fixedrect)){
  movingrect.shapeColor="red";
  box1.shapeColor="red";
  text("collision detected", 300,150)}

  else{
    movingrect.shapeColor="yellow";
    box1.shapeColor="blue";
    text("collision not detected", 300,150)}
 
  drawSprites();
}


