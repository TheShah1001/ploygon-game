const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon1, chain1, ground1, platform1, platform2
var box1, box2, box3, box4, box5, box6, box7, box8, box9


function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    polygon1 = new Polygon(200,200,50,50)
    chain1 = new Chain(polygon1.body,{x: 200, y: 200});
    ground1 = new Ground(600,height,1200,20);
    platform1 = new Ground(700,300,300,10)
    box1 = new Box(700,270,60,30);
    box2 = new Box(639,270,60,30);
    box3 = new Box(578,270,60,30);
    box4 = new Box(761,270,60,30);
    box5 = new Box(822,270,60,30);
    box6 = new Box(700,239,60,30);
    box7 = new Box(639,239,60,30);
    box8 = new Box(761,239,60,30);
    box9 = new Box(700,208,60,30);


    //ground = new Ground(600,height,1200,20);
  
}

function draw(){
    background(225);
    Engine.update(engine);

    polygon1.display()
    chain1.display()
    ground1.display()
    platform1.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
   
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body,{x: mouseX, y: mouseY})
}

function mouseReleased(){
    chain1.fly()
}
