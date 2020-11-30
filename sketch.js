const Engine=Matter.Engine
const World=Matter.World
const  Bodies=Matter.Bodies

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world
  var options={
    restitution:1.0
  }
  ball=Bodies.circle(200,200,20,options);

  World.add(world,ball)
  var option2={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,400,20,option2);
  World.add(world,ground);
}

function draw() {
  background("blue");  
  Engine.update(engine)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)
  drawSprites();
}