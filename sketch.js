const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var iron;
var stone;

function setup(){
    var canvas = createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);

    hammer = new Hammer(10,100);
    
    rubber = new Rubber(900,550,65)

    iron = new Iron(600,550,50,50);

    stone = new Stone(300,550,50,20);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    iron.display();    
    stone.display();

}