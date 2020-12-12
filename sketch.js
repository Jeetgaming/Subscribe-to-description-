
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(400,790,50);
	World.add(world,bobObject1);
	//bobObject2 = new Bob(600,790,50);
	//bobObject3 = new Bob(800,790,50);
	//bobObject4 = new Bob(200,790,50);
	//bobObject5 = new Bob(0,790,50);
	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bobObject1.display();
  //bobObject2.display();
  //bobObject3.display();
  //bobObject4.display();
  //bobObject5.display();
 
}
