var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, survivalTime;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage    = loadImage("banana.png");
  obstacleImage  = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  // create monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  

  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  
  
  survivalTime = 0;
  
  FoodGroup      = new Group();
  obstaclesGroup = new Group();
  

}

function draw() {
  background("white");
  
  ground.x = ground.width/2;
  monkey.collide(ground);
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Survival Time:"+survivalTime,100,50);
  survivalTime = survivalTime + Math.round(getFrameRate()/60)
  
  if(keyDown("space")){
     monkey.velocityY = -14;
    }
    
  monkey.velocityY = monkey.velocityY + 0.8;
  
  
  
  
  food();
  obstacles();
  
  drawSprites();
  
}

function food(){
  if(frameCount % 80 === 0){
   banana = createSprite(400,350,900,10);
   banana.addImage(bananaImage);
   banana.y = Math.round(random(120,200)); 
   banana.velocityX = -(4 + 3*survivalTime/100);
   banana.lifetime = 100;
   banana.scale = 0.1;
    
    FoodGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(250,325,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -(4 + 3*survivalTime/100);
    obstacle.lifetime = 100;
    obstacle.scale = 0.1;
    
    obstaclesGroup.add(obstacle);
      
      
     
     }
  
}


