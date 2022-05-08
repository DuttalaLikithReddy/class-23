

const Engine= Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;
const Body=Matter.Body
//Create namespace for Engine
//Create namespace for World
//Create namespace for Bodies
//Create namespace for Body


function setup() {
  createCanvas(400,400);
//create the engine
  //Add world to the engine
  engine=Engine.create();
  world=engine.world;

  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   ground = Bodies.rectangle(100,400,400,20,ground_options); 
   World.add(world,ground);
    ball = Bodies.circle(100,10,20,ball_options); 
    World.add(world,ball);
//create a ground
//add to world

  
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  //write a rectangle function to display ground.
 
  rect(ground.positionx,ground.positiony,500,20);

  
  
}

