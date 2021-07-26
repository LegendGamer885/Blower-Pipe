const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ball;

var blower,blowerMouth;

var button;

function setup() {
  createCanvas(500,500);
  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width/2 +120,height/2 -80,80,80);

  blower = new Blower(width/2 -5,height/2 +50,150,20);
  blowerMouth = new BlowerMouth(width/2 +120,height/2 +20,100,90);

  button = createButton("Click to Blow");
  button.class("blowButton");
  button.mousePressed(blow);

}

function draw() {
  background("gray");  
  Engine.update(engine);

  ball.show();
  blower.show();
  blowerMouth.show();
}

function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05});
}