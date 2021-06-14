var ball;
var database;
var position;
var game,player,form
var gameState=0
var playerCount=0
var allPlayers
var car1,car2,car3,car4,cars;

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database=firebase.database()
    game = new Game ();
    game.getState();
    game.start();


}

function draw(){
   if(playerCount===4){
       gameState=1;
       game.update(1);

   }
   if(gameState===1){
    clear();
    game.play();

   }
}
