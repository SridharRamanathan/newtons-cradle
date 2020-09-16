
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.	
	
	bobObject1 = new Bob(240,500,25);
	bobObject2 = new Bob(290,500,25);
	bobObject3 = new Bob(340,500,25);
	bobObject4 = new Bob(390,500,25);
	bobObject5 = new Bob(440,500,25);

	roof1 = new Roof(350,300,250, 35);
	
	rope1 = new Chain(bobObject1.body, {x:240, y:300});
	
	rope2 = new Chain(bobObject2.body, {x:290, y:300});

	rope3 = new Chain(bobObject3.body, {x:340, y:300});

	rope4 = new Chain(bobObject4.body, {x:390, y:300});

	rope5 = new Chain(bobObject5.body, {x:440, y:300});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);


  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -1, y: 1});

	}
}




