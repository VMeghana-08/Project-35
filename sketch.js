var  dog, happyDog, database, foodS, foodStock,dogImage;

function preload()
{
	//load images here
  dogImage=loadImage("images/dogImg.png")
  happyDog=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(700, 600);
  database = firebase.database()
  dog = createSprite(320,300)
  dog.addImage("dog",dogImage)
  dog.scale = 0.5
  foodStock = database.ref('/Food')
  foodStock.on("value",data =>{
      foodS = data.val()
      console.log(data)
    })
}

// function readStock(data){
//   foodS = data.val()
//   console.log(foodS)
// }


function draw() {  

  background(46,139,87);

  //Function to read values from DB
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage("dog",happyDog)
  } 
  fill("black")
  textSize(30)
  text("Food Available:" + foodS,200,520)
  drawSprites();
  //add styles here
  fill("black")
  textSize(30)
  text("Press the Up arrow to feed the Dog",100,100) 
 }

//fill (255,255,254)
//textSize (15)
//text("Food remaining:"+Food,200,200)
 // drawSprites();
  //add styles here




function writeStock(x){
  if(x <= 0){
    x = 0
  }
  else{
    x = x - 1 
  }
  database.ref('/').update(
    {
      Food:x
    }
  )
}





