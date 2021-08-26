const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bot1,bot2,bot3, bot4,bot5;
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var bot_options={
		isStatic:false,
		restitution:1,
		friction:0,
		density:0.8	
	}

	bot1 =Bodies.circle(320,380,20,bot_options);
    World.add(world,bot1);

	bot2 = Bodies.circle(360,380,20,bot_options);
    World.add(world,bot2);

	bot3 = Bodies.circle(400,380,20,bot_options);
    World.add(world,bot3);

	bot4 = Bodies.circle(440,380,20,bot_options);
    World.add(world,bot4);

	bot5 = Bodies.circle(480,380,20,bot_options);
    World.add(world,bot5);
	
	rope1=new rope(bot1,roof,-80, 0)

	rope2=new rope(bot2,roof,-40, 0)

	rope3=new rope(bot3,roof,0, 0)

	rope4=new rope(bot4,roof,40, 0)

	rope5=new rope(bot5,roof,80, 0)

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  //create ellipse shape for multiple bobs here
  ellipse(bot1.position.x,bot1.position.y,40,40);
  ellipse(bot2.position.x,bot2.position.y,40,40);
  ellipse(bot3.position.x,bot3.position.y,40,40);
  ellipse(bot4.position.x,bot4.position.y,40,40);
  ellipse(bot5.position.x,bot5.position.y,40,40);
 
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bot1,bot1.position,{x:-50,y:-45});
	}
}
