
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	dustbinObj = new dustbin(1200,650);
	paperObj = new paper(200,450,40);
	groundObj = new ground(width/2,670,width,20)
	var render = Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1200,
			height:700,
			wireFrames:false
		}
	})
		Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  paperObj.display();
  dustbinObj.display();
  groundObj.display();
  
}

function keyPressed() {
	if (keyCode=== UP_ARROW) {
	  Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:85,y:-85});
	}
	}
	
	