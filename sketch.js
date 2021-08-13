const Engine=Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;


const Constraint = Matter.Constraint;
const Body = Matter.Body; 
const Composites = Matter.Composites;
const Composite = Matter.Composite;


let engine;
let world;
var rope,fruit,ground;
var fruit_con;
var fruit_con_2;


var bg_img;
var food;
var rabbit;

var button,button2;
var bunny;
var blink,eat;


function preload(){
  backgroundImg=loadImage("background.png");
  bunnyImg=loadImage("Rabbit-01.png");
  melonImg=loadImage("melon.png");
  buttonImg=loadImage("cut_btn.png");

  blink=loadAnimation("blink_1.png","blink_2.png","blink_3.png");
  eat=loadAnimation("eat_0.png","eat_1.png","eat_2.png","eat_3.png");

 
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  bunny=createSprite(100,100,50,70);
  bunny.scale=0.2;

  bunny.addAnimation('blinking',blink);
  bunny.addAnimation('eating',eat);
  bunny.changeAnimation('blinking');

  
  

  
 

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  drawSprites();
}