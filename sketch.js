
var monkey, monkey_running;
var ground, groundImage;
var banana, bananaImage, obstacle, obstacleImage;
var obstacleGroup, bananaGroup;
var obstacle, obstacleImage;
var score;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

 
}



function setup() {
  createCanvas(452,400);
  
  monkey = createSprite(150,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0;
  survivalTime=0;
  
}


function draw() {
  background("pink");
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 300,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 100, 50);

  if(keyDown("space")){
  monkey.velocityY= -15;

  }  
  monkey.velocityY = monkey.velocityY + 1;
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score=score+1;
  }
  
  if(obstacleGroup.isTouching(monkey)){
    obstacleGroup.destroyEach();
    bananaGroup.destroyEach();
    score=score-2;
    
  }
  
  monkey.collide(ground);
  
  food();
  rocks();
  
  drawSprites();
}

function food(){
  if (frameCount % 130 === 0){
    banana = createSprite(350,200,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX=-1;
    banana.lifetime = 300;
    
  bananaGroup.add(banana);
    
  }
}
  
function rocks(){
  if(frameCount % 300 === 0){
  obstacle = createSprite(400,326,10,40);
  obstacle.addImage(obstacleImage);
  obstacle.lifetime = 452;
  obstacle.scale=0.1;
  obstacle.velocityX=-1;
  obstacleGroup.add(obstacle);
    
  }
}






