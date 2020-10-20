const Engine= Matter.Engine;
const Bodies= Matter.Bodies;
const World= Matter.World;

var engine,world,box;

function setup(){
    var canvas = createCanvas(800,400);

    engine=Engine.create()
    world=engine.world

    var options = {
        isstatic: true
    }

    box= Bodies.rectangle(200,200,50,50,options)
    World.add(world,box)
    
}

function draw(){
    background(0);

    Engine.update(engine);
    rectMode(CENTER);

    rect(box.position.x, box.position.y,50,50);
    
}