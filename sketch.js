var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;
	
	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	ground=createSprite(width/2, 650, width,120);
	ground.shapeColor = "green";

	var package_option = {
		isStatic: true,
		restitution: 0.75,
		friction: 0.4
	}
	
	packageBody = Bodies.circle(width/2,200,50,package_option);
	World.add(world, packageBody);

	box1 = new Box(335,550,30,170);
	box2 = new Box (450,585,200,30);
	box3 = new Box (550,550,30,170);
    ground = new Ground(width/2,650,800,70);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  //Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  rectMode(CENTER);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  drawSprites();
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		console.log("down arrow pressed")
	   Matter.Body.setStatic(packageBody,false);
	}
}