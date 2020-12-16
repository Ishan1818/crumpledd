
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	rec1 = createSprite(330, 630, 10, 60 );

	rec2 = createSprite(380, 655, 90, 10  );
   
	
	rec3 = createSprite (420, 630, 10, 60  );
	paper1=new paper(200, 600, 20)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);


  background(0);
 
 paper1.display()
 drawSprites();
}
function keyPressed(){
	if(keyCode===32){
Matter.Body.applyForce(paper1.body, paper1.body.position, {x:420, y:630})
	}
}


