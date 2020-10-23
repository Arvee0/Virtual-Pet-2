//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;
var lastFed;
var fedTime;

function preload()
{
  dogimg=loadImage('images/dogImg.png');
  happyDogimg=loadImage('images/dogImg1.png');
	//load images here
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(200,250,20,20);
  dog.addImage('dogimg');
  foodStock=database.ref('food');
foodStock.on("value",readStock);
fill(255,255,254);
textSize(15);


  
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();

  //add styles here
  fill();
  stroke();

}



