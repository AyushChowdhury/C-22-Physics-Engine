const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground;
var ball

function setup(){
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;

  var option={
    isStatic: true
  }

  ground=Bodies.rectangle(200,390,400,20,option);
  World.add(world,ground)

  var ballOption={
    restitution:1.5
  }
  ball=Bodies.circle(200,50,20,ballOption)
  World.add(world,ball)

  console.log(ground)
}

function draw(){
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  fill("brown")
  rect(ground.position.x,ground.position.y,400,20)

  fill("yellow")
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}