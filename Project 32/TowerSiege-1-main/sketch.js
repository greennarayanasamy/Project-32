const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var holder, ground, stand1, stand2, slingShot, polygonImg, polygon;
var score = 0;

function preload(){
    polygonImg = loadImage("polygon.png");
}

function setup(){
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground();

    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);

    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);
    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);
    box13 = new Box(360,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(420,195,30,40);
    box16 = new Box(390,155,30,40);

    box17 = new Box(640,175,30,40);
    box18 = new Box(670,175,30,40);
    box19 = new Box(700,175,30,40);
    box20 = new Box(730,175,30,40);
    box21 = new Box(760,175,30,40);
    box22 = new Box(670,135,30,40);
    box23 = new Box(700,135,30,40);
    box24 = new Box(730,135,30,40);
    box25 = new Box(700,95,30,40);

    polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

    slingShot = new Slingshot(this.polygon,{x:100,y:200});
}

function draw(){
    background(56,44,44);

    textSize(20);
    text("SCORE : "+score,750,40);
    fill("purple");
    text("Draw the stone and drag the stone and release it",100,30);
    ground.display();
    stand1.display();
    stand2.display();
    strokeWeight(2);
    stroke(15);
    fill("blue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("pink");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill("grey");
    box13.display();
    box14.display();
    box15.display();
    fill("yellow");
    box16.display();
    fill("blue");
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    fill("brown");
    box22.display();
    box23.display();
    box24.display();
    fill("green");
    box25.display();
    fill("red");
    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,40,40);
    slingShot.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.polygon);
    }
}

              