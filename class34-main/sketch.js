var sid,sidImage,sidRunning;
var BG,BGImage;
var supplies;
var zombies,zombieImage,zombieWalking;

function preload(){
  sidRunning=loadAnimation("Images/Run.png","Images/Run1.png","Images/Run2.png","Images/Run3.png","Images/Run4.png",
  "Images/Run5.png","Images/Run6.png","Images/Run7.png","Images/Run8.png","Images/Run9.png");
  BGImage=loadImage("Images/city1.png");

  zombieWalking=loadAnimation("Images/Walk(1).png","Images/Walk(2).png","Images/Walk(3).png","Images/Walk(4).png",
    "Images/Walk(5).png","Images/Walk(6).png","Images/Walk(7).png","Images/Walk(8).png","Images/Walk(9).png",
    "Images/Walk(10).png");
}

function setup() {
  createCanvas(800,400);

  BG=createSprite(400,200,10,10);
  BG.addImage(BGImage);
  BG.scale=0.8;

  sid=createSprite(400,330,10,10);
  sid.addAnimation("Running",sidRunning);
  sid.scale=0.3;

  zombies=createSprite(700,330,10,10);
  zombies.addAnimation("Walking",zombieAttacking)
  zombies.scale=0.3;

  

  

}

function draw() {
  background(180);
  drawSprites();



}





