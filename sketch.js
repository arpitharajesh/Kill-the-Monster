const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var engine, world, gr, hero, rope, monster;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18, inv;
function preload() {
//preload the images here
   //  BgImg = loadImage("")
}

function setup() {
  createCanvas(2000, 800);
  // create sprites here
  engine = Engine.create();
  world = engine.world; 

  gr = new Ground(300,500, 1500, 20);
  hero = new Hero(300, 100, 300, 300);
  rope = new Rope(hero.body, {x: 500, y: 20});
  monster = new Monster(1000, 300, 100, 100);

  box1 = new Block(900, 100, 70, 70);
  box2 = new Block(900, 100, 70, 70);
  box3 = new Block(900, 100, 70, 70);
  box4 = new Block(900, 100, 70, 70);
  box5 = new Block(900, 100, 70, 70);
  box6 = new Block(900, 100, 70, 70);
  box7 = new Block(800, 100, 70, 70);
  box8 = new Block(800, 100, 70, 70);
  box9 = new Block(800, 100, 70, 70);
  box10 = new Block(800, 100, 70, 70);
  box11 = new Block(800, 100, 70, 70);
  box12 = new Block(800, 100, 70, 70);
  box13 = new Block(700, 100, 70, 70);
  box14 = new Block(700, 100, 70, 70);
  box15 = new Block(700, 100, 70, 70);
  box16 = new Block(700, 100, 70, 70);
  box17 = new Block(700, 100, 70, 70);
  box18 = new Block(700, 100, 70, 70);
 // box19 = new Block(700, 100, 70, 70);
  //box20 = new Block(700, 100, 70, 70);

  inv = new invGround(1050, 400, 20, 10);

}

function draw() {

  Engine.update(engine);
  background("white");

    gr.display();
    hero.display();
    rope.display();
    monster.display();

    box1.display();
    box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
 // box19.display()
 // box20.display()

 inv.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}

function mouseDragged(){
 
      Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
  
}
