
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground();
	ball=new Ball();
	box1=new Box(400,590,10,100);
	box2=new Box(500,590,10,100);
	box3=new Box(450,640,100,10);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  ball.display();
  box1.display();
  box2.display();
  box3.display();
 
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(ball.body,ball.body.position,{x:35,y:-85})
	}
}


