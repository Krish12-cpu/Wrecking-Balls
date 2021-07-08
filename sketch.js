const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

function preload() {
    bg = loadImage("bg.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    box1 = new Box(400,100,50,50)
    box2 = new Box(400,100,50,50)
    box3 = new Box(400,100,50,50)
    box4 = new Box(400,100,50,50)
    box5 = new Box(400,100,50,50)

    box6 = new Box(500,100,50,50)
    box7 = new Box(500,100,50,50)
    box8 = new Box(500,100,50,50)
    box9 = new Box(500,100,50,50)
    box10 = new Box(500,100,50,50)

    bob = new Bob(100,100,40)
    rope = new Rope(bob.body,{x:250,y:100})
}

function draw(){
    background(bg);
    ground.display();
    Engine.update(engine);
    fill("red");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    fill("orange")
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    fill("blue")
    bob.display();
    rope.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bob.body,{x:mouseX, y:mouseY})
}
