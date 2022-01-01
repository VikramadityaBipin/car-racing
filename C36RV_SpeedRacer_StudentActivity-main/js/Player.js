class Player {
  constructor() {
  this.name=null;
  this.index=0;
  this.positionX=0;
  this.positionY=height/2+400;
  this.score=0;

  }
  getCount(){
      var playerCountRef= database.ref("playerCount");
  playerCountRef.on("value",data=>{
    playerCount=data.val();
  })  
}
  
updateCount(count){
  database.ref("/").update({
playerCount:count
  })
}

addPlayer(){
  var playerIndex="Players/player"+this.index;

  if(this.index==1){
    this.positionX=width/2-100
  }
  else{
    this.positionX=width/2+100  }

    database.ref(playerIndex).set({
    name:this.name,
    index:this.index,
    positionX:this.positionX,
    positionY:this.positionY

  })
  
}

getPlayerinfo(){
database.ref('Player').on("value",data=>{
  allPlayers=data.val()
})
}



}
