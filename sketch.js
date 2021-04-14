var  bgimg;
var cat, cimg1, cimg2, cimg3;
var mouse, mimg1,mimg2, cimg3;
function preload() {
    bgimg    = loadImage( "images/garden.png");
    cimg1    = loadAnimation( "images/cat1.png");
    cimg2    = loadAnimation( "images/cat2.png", "images/cat3.png");
    cimg3    = loadAnimation("images/cat4.png");
    mimg1    = loadAnimation("images/mouse1.png");
    ming2    = loadAnimation("images/mouse2.png", "images/mouse3.png");
    ming3    = loadAnimation("images/mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    
      
      

      cat = createSprite(800,500);
      cat.addAnimation("catstill", cimg1);
      cat.scale = 0.2;

      mouse = createSprite(200,500);
      mouse.addAnimation("mousestill", mimg1);
      mouse.scale = 0.3;
      
}

function draw() {

    background(bgimg);

   

    if(cat.x-mouse.x < (cat.width - mouse.width)/2){

      cat.velocityX = 0;
      
       cat.addAnimation("cathappy", cimg3);
       cat.x = 300;
       cat.scale = 0.2;
       
       cat.changeAnimation("cathappy");
      
       
       mouse.addAnimation("mousehappy", ming3);
       mouse.scale = 0.3;
       mouse.changeAnimation("mousehappy");

       
    }

    

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){

    cat.velocityX = -3;
    cat.addAnimation("catrunning", cimg2);
    cat.changeAnimation("catrunning");
    

     mouse.addAnimation("mouseteasing", ming2);
     mouse.frameDelay = 15; 
     mouse.changeAnimation("mouseteasing");


   

  }


}
