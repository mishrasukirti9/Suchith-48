const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;

function preload() {
  backgroundImg = loadImage("images/bg.jpg")  
  playerimg = loadAnimation("images/player/p1.png","images/player/p2.png","images/player/p3.png", "images/player/p4.png","images/player/p5.png","images/player/p6.png","images/player/p7.png","images/player/p8.png",);
  enemyimg = loadAnimation("images/enemy/e1.png","images/enemy/e2.png","images/enemy/e3.png","images/enemy/e4.png","images/enemy/e5.png","images/enemy/e6.png","images/enemy/e7.png",);

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    player = createSprite(100, height-100);
    player.addAnimation("player", playerimg)
    //player.debug = true
    player.setCollider("rectangle",0,0,100,130)

    ground = createSprite(width*3.1,height-20,width*6,20)
    ground.visible = false

    enemyGroup = new Group()
}

function draw(){
    background(0);
    Engine.update(engine);
    image(backgroundImg, -width+100,0,width*5,height)

    player.x = camera.x-400

    if(keyDown("space")){
        player.velocityY = player.velocityY -10
    }

    player.velocityY +=0.5

    if(keyDown(RIGHT_ARROW)){
        camera.x+= 10;
        console.log("working")
    }
    
    spawnEnemy()

   player.collide(ground)
   drawSprites()
}

function spawnEnemy(){
    if(frameCount%100==0){
        enemy = createSprite(camera.x+600,height-100)
        enemy.scale = 0.7
        enemy.addAnimation("ememy",enemyimg)
        enemy.velocityX = -5
    
    }
}