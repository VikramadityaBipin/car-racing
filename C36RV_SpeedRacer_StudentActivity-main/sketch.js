var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var car1,car2;
var cars=[];
var gameState;
var allPlayers;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1Image=loadImage('assets/car1.png')
  car2Image=loadImage('assets/car2.png')
  trackImage=loadImage('assets/track.jpg')
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
 database = firebase.database();
  game = new Game();
  game.start();
  game.getState();


}

function draw() {
  background(backgroundImage);
 // backgroundImage.scale(5)
if(playerCount==2){
  game.updateState(1)
}
if(gameState==1){
  game.play();
}

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
