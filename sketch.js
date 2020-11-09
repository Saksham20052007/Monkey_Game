
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var groundLine
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  FoodGroup = new Group();
   obstacleGroup = new Group();
 
 
}



function setup() {  
  createCanvas(600, 200);  
   monkey = createSprite(200, 160, 30, 30);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.1;
  
  groundLine = createSprite(300, 190, 600, 3);
  groundLine.velocityX = -2;
  
score = 0;
}


function draw() {
  background("white");
  if(groundLine.x<300){
      groundLine.x = groundLine.width/2;

  }
  monkey.velocityY = monkey.velocityY + 1;
 monkey.collide(groundLine);
  if(keyDown("space") ){
    monkey.velocityY = -10;
  }
  if(frameCount%60 === 0){
    fruits();
  }
  if(frameCount%300 === 0){
    stones();
  }
score = score + Math.round(getFrameRate()/60);
  if(monkey.isTouching(obstacleGroup)){
     obstacleGroup.setVelocityXEach(0);
     FoodGroup.setVelocityXEach(0);  
    
    
  }
  
  drawSprites();
  textSize(20);
  stroke("red");
  text("survival time = " + score, 33, 38);
  
}
function fruits(){
  banana = createSprite(700, 80, 15, 15);
  banana.y = Math.round(random(50, 135));
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -5;
  banana.depth = monkey.depth-1;
  FoodGroup.add(banana);
}
function stones(){
  obstacles = createSprite(700 ,160, 15, 15);
  obstacles.addImage(obstaceImage);
  obstacles.scale = 0.15;
  obstacles.velocityX = -5;
  obstacleGroup.add(obstacles); 
  
}




