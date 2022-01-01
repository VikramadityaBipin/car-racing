

class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount=player.getCount();
    car1=createSprite(width/2-100,height/2+400,3000000000000000,30000000000000000000)
    car1.addImage(car1Image)
    car2=createSprite(width/2+100,height/2+400,3000000000000000,30000000000000000000)
    car2.addImage(car2Image)
    cars=[car1,car2]
  }
  getState(){
    var gameStateRef= database.ref("gameState");
gameStateRef.on("value",function(data){
  gameState=data.val();
})
  }

  updateState(state){
database.ref('/').update({
  gameState:state
})
}
handleElements(){
  form.hide()
form.titleImg.position(40,50)
form.titleImg.class('gameTitleplay')
}
play(){

  this.handleElements()
  player.getPlayerinfo()
  if(allPlayers!=undefined){
    image(trackImage,0,-height*5,width,height*6)
    drawSprites()

  }
}

}
