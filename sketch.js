const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5, ground;
var pig1, pig2, log1, log2, log3, log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(800,380,70,70);   
    box2=new Box(1000,380,70,70);
    box3=new Box(800,260,70,70);
    box4=new Box(1000,260,70,70);
    box5=new Box(900,90,70,70);

    ground=new Ground(600,height,1200,30); 

    pig1=new Pig(900, 380);
    pig2=new Pig(900, 300);

    log1=new Log(900, 340, 270, PI/2);
    log2=new Log(900, 100, 270, PI/2);
    log3=new Log(850, 80, 150, PI/7);
    log4=new Log(930, 80, 150, -PI/7);

    bird=new Bird(150, height/3);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}

