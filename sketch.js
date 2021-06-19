
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,dustbinImage;
var crumpledpaper,crumpledpaperImage;
var ground;


function setup() {
	createCanvas(1250, 700);


	engine = Engine.create();
	world = engine.world;

  var option={
  isStatic:true
  }
  ground=Bodies.rectangle(620,690,1250,10,option);
  World.add(world,ground);
  
  dustbin = new Dustbin(1050,580,500,250);
  
  crumpledpaper = new Ball(200,600,70);

	Engine.run(engine);
  
}

function draw() {
  
  background("yellow");
  
  rectMode(CENTER);
 rect(ground.position.x,ground.position.y,1250,10);
 
 dustbin.display();
 crumpledpaper.display();
 

 

}
  
  

function keyPressed(){
  if (keyCode===UP_ARROW ){
Matter.Body.applyForce(crumpledpaper.body,crumpledpaper.body.position,{x:130,y:-145})
}
}


