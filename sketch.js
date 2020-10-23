var survivaltime=0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var PLAY=1;
var END=0;
var gamestate=1;
var obstaclesGroup;
var bananaGroup;
var score=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
  
  monkey=createSprite(80,350,20,20)
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  
  ground=createSprite(400,350,900,10);
 
  ground.x=ground.width/2;
  console.log(ground.x);
 
  monkey.x=50;
  obstaclesGroup=new Group();
  bananaGroup=new Group();
}


function draw() {
  background("white");
  if(gamestate===PLAY){
    
  spawnobstacles();
spawnbananas();
  text("Score "+score,350,40)
   ground.velocityX=-5;
   console.log(monkey.y)
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  //jump when space key is pressed
  if(keyDown("space")){
    monkey.velocityY = -10;
    
  }
    
    
  monkey.velocityY = monkey.velocityY + 0.8;
 if(obstaclesGroup.isTouching(monkey)){
   gamestate=END;
  
 } 
  }else if(gamestate===END){
    ground.velocityX=0;
    obstaclesGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
    
  }
  //stop monkey from falling down
  monkey.collide(ground);
   
  


 drawSprites(); 
}
//function to banana the clouds
function spawnbananas(){
  
if (frameCount%60===0) {



  banana=createSprite(600,100,40,10);
  banana.velocityX=-3;
  banana.y=Math.round(random(10,80))
  banana.addImage(bananaImage);
  banana.scale=0.08;
  //console.log(monkey.depth);
  //console.log(banana.depth);
  banana.depth=monkey.depth;
  banana.depth=monkey.depth+1;
  bananaGroup.add(banana);
}
}

function spawnobstacles(){
  if (frameCount%80===0) {
  

  obstacle=createSprite(600,330,40,10);
  obstacle.velocityX=-5;
  //obstacle.y=Math.round(random(10,80))
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.10;
    obstaclesGroup.add(obstacle)
  }
}






