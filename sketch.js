const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box1, box;
var ground, ground2, ground3, ground4, obstacle, obstacle2, obstacles;
var c1, c2, c3;
var level = 1


var engine, world, body;
var canJump;

var charges;

function setup() {
  //create the canvas
  createCanvas(windowWidth,windowHeight);
  
  //setup
  engine = Engine.create();
  world = engine.world;
 
  //create boxes
  box1 = new Box(100, 360, 25);

  //create the floor
  wall1 = new Ground(600, 390, 1200,20);
  wall2 = new Ground(600, 10, 1200,20);
  wall3 = new Ground(10, 200, 20,400);
  wall4 = new Ground(1190, 200, 20,400);
  }



function draw() {
  //set the background
  background(50,50,55);  

  //update the engine
  Engine.update(engine);
  
  //display ground

wall1.display()
wall2.display()
wall3.display()
wall4.display()
}

function keyPressed(){
 if(keyCode === 39 ){
  box1.flingForward();
 
 }
 if(keyCode === 38 ){
  box1.flingUp();
 
 }
 if(keyCode === 37 ){
  box1.flingBack();
 
 }
}
