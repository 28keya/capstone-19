var redrocketImg, redrocket;
var meteorImg, meteor, meteorsGroup;
var starImg, star, starsGroup;
var gameState = "play";




function preload(){
 redrocketImg = loadImage("redrocket.png")  
 meteorImg = loadImage("meteor.png") 
 starImg = loadImage("star.png");
}

function setup() {
 createCanvas(500,500);
 redrocket = createSprite(250,330);
 redrocket.addImage("redrocket",redrocketImg);
 meteorsGroup = new Group();
 starsGroup = new Group();

 
}

function draw() {
 background(200);

 if(gameState == "play"){
     
    if(keyDown("space")){
       redrocket.velocityY = -3.5;
    }

    if(keyDown("left_arrow")){
        redrocket.x = redrocket.x - 4;
    }

    if(keyDown(right_arrow)){
        redrocket.x = redrocket.x + 4
    }
    
    

    drawSprites();
}

    
    if(gameState == "end"){
    if(meteorsGroup.isTouching(redrocket)){
        redrocket.velocityY = 0;
     }
     stroke("red");
     fill("red");
     textSize(40);
     text("Game Over");
     display();
 }
}

    
    function spawnStars(){
        if(frameCount%250 == 0 ){
            star = createSprite(200,-30);
            star.addImage(starImg);
            star.x = Math.round(random(100,440));
            star.lifetime = 550;
            starsGroup.add(star);

            meteor = createSprite(200,11);
            meteor.addImage(meteorImg);
            meteor.lifetime = 0;
            meteorsGroup.add(meteor);
            meteor.x = Math.round(random(50,400))
        }
    }



