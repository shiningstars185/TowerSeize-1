const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, smallG, smallG2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block13, block14, 
block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25

var chain

//function preload(){

//}

function setup(){
createCanvas(800,800);

engine = Engine.create()
world = engine.world;

ground= new Ground(400,500,1000,20)
smallG= new Ground(640,250,220,20)
smallG2= new Ground(330,450,250,20)

block1= new Block(240,425,30,30);
block2= new Block
block3= new Block
block4= new Block
block5= new Block
block6= new Block
block7= new Block
block8= new Block
block9= new Block
block10= new Block
block11= new Block
block12= new Block
block13= new Block
block14= new Block
block15= new Block
block16= new Block
block17= new Block
block18= new Block
block19= new Block
block20= new Block
block21= new Block
block22= new Block
block23= new Block
block24= new Block
block25= new Block


//chain= new chain({})

Engine.run(engine);
}

function draw(){
    rectMode(CENTER);

    ground.display()
    smallG.display()
    smallG2.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()

}