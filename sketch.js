const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload()
{

}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height-35,width,50);
	platform = new Ground(100,600,300,400);
	stone = new Stone(100,200,50,50);
	tree = new Tree(700,400,500,500);
	boy = new Boy(200,height-400,200,200);
	mango1 = new Mango(600,210,100,100);
	mango2 = new Mango(770,180,100,100);
	mango3 = new Mango(700,160,100,100);
	mango4 = new Mango(680,300,100,100);
	mango5 = new Mango(650,400,100,100);
	mango6 = new Mango(800,400,100,100);
	slingshot = new Slingshot(stone.body,{x:140,y:height-450});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 ground.display();
 
 platform.display();
 tree.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
mango5.display();
mango6.display();
 boy.display();
 stone.display();
 slingshot.display();

 detectcollision(stone, mango1);
 detectcollision(stone, mango2);
 detectcollision(stone, mango3);
 detectcollision(stone, mango4);
 detectcollision(stone, mango5);
 detectcollision(stone, mango6);
 text("PRESS RELOAD TO TRY AGAIN! YOU CAN USE SLINGSHOT ONCE, OR MOUSE MANY TIMES.",100,100);
 keyPressed();
  drawSprites();
 
}

function mouseDragged(){


	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	 }
	
	 function mouseReleased(){
	   slingshot.fly();
	
	 }
	
	


function detectcollision(stone,mango1){
	mangoBodyPosition = mango1.body.position
	stoneBodyPosition = stone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=mango1.width+stone.width){
		Matter.Body.setStatic(mango1.body,false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		slingshot.attach(stone.body);
		Matter.Body.setPosition(stone.body,{x:300,y:-300})
	}
}