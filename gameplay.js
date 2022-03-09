
console.group("Gameplay init");


initFillRecorder();
initTurnCounter(0);
initScore();
attachClickListener();
hideGameplayUI();

function $(id){
    return document.getElementById(id);
}

//begin turn

getRandomOddEven()%2==0?onBeginPlayerTwo() : onBeginPlayerOne();


function initScore(){
    scoreP1 = 0;
    scoreP2 = 0;
}


function onGridItemClicked(gridItem){
    console.log(clickRecord);
    
    console.log(clickRecord);
    if(isGameComplete() || isGameOver()){
        return;
    }
    setTurnText(isTurnOdd() ? 1 : 2);
console.info("Received callback for clicking grid item " + gridItem);

if(!isFilled(gridItem)){
var s = "";
    isTurnOdd() ? s = "X" : s = "O";
document.getElementById(getGridItemId(gridItem)).textContent = s;
setFilled(gridItem);



}else{
    console.error("Error filling. Item already filled");
}



}


function attachClickListener(){
    console.info("Attaching grid item click listener");

    //very shitty implementation of click listener
document.getElementById(getGridItemId(1)).onclick = function(){
    console.info("clicked 1");
    onGridItemClicked(1);
}
document.getElementById(getGridItemId(2)).onclick = function(){
    console.info("clicked 2");
    onGridItemClicked(2);
}
document.getElementById(getGridItemId(3)).onclick = function(){
    console.info("clicked 3");
    onGridItemClicked(3);
}
document.getElementById(getGridItemId(4)).onclick = function(){
    console.info("clicked 4");
    onGridItemClicked(4);
}
document.getElementById(getGridItemId(5)).onclick = function(){
    console.info("clicked 5");
    onGridItemClicked(5);
}
document.getElementById(getGridItemId(6)).onclick = function(){
    console.info("clicked 6");
    onGridItemClicked(6);
}
document.getElementById(getGridItemId(7)).onclick = function(){
    console.info("clicked 7");
    onGridItemClicked(7);
}
document.getElementById(getGridItemId(8)).onclick = function(){
    console.info("clicked 8");
    onGridItemClicked(8);
}
document.getElementById(getGridItemId(9)).onclick = function(){
    console.info("clicked 9");
    onGridItemClicked(9);
}
}
function getGridItemId(gridItem){
    console.info("Returning grid item id for item "+gridItem);
    if(gridItem==1) return "g1";
    if(gridItem==2) return "g2";
    if(gridItem==3) return "g3";
    if(gridItem==4) return "g4";
    if(gridItem==5) return "g5";
    if(gridItem==6) return "g6";
    if(gridItem==7) return "g7";
    if(gridItem==8) return "g8";
    if(gridItem==9) return "g9";

}
console.groupEnd();

function initFillRecorder(){
    clickRecord = Array(0,0,0,0,0,0,0,0,0);
}

function isFilled(item){
    return clickRecord[item-1]==1 || clickRecord[item-1] == 2;
}

function getFilled(gridItem){
    return clickRecord[gridItem-1];
}
function resetField(item){
    clickRecord[item-1] = 0;

    // for(i = 0; i < 9; i++){
    //     $(getGridItemId(i+1)).style.backgroundColor="red";
    // }
}


function setFilled(item){
    clickRecord[item-1] = isTurnOdd()? 1 : 2;
if(isGameComplete()){
    onGameSuccess();
  return;

}

    if(isGameOver()){
console.error("Game Over");
setGameOverText();
    }else{
        increaseTurn();
    }
   
}
function initTurnCounter(start){
    turn = start;
}

function getTurnCount(){
    return turn;
}
function onGameSuccess(){
console.info("Game Success");
console.error(clickRecord);
if(isTurnOdd()){
    scoreP1++;
    console.log("Player 1 wins");
    setScore(1,scoreP1);
}else{
    scoreP2++;
    setScore(2,scoreP2);
    console.log("Player 2 wins");
}

setWinnerText(isTurnOdd()? 1 : 2);
}

function setScore(player, score){
    if(player==1){
        document.getElementById("score-p1").textContent = score;
    }
    if(player==2){
        document.getElementById("score-p2").textContent = score;
    }
}



function isGameOver(){
   
    for (i = 0 ; i < 9; i++){
        console.info("Game not over");
        if(!isFilled(i+1)) return false; // i + 1 because the isFilled() function will add 1 to i

    }
    console.error("Game Over");
    return true;
}

function increaseTurn(){
    console.log("Increasing turn");
    turn++;
    initTurnCounter(turn);
    setTurnText(isTurnOdd()?1:2);
}

function isTurnOdd(){
    return turn%2==1;
}

function isTurnEven(){
    return turn%2==0;
}

console.groupEnd();

/**
 * Game logic
 */

console.group("Game Logic")

function getRandomOddEven(){
    if(getTurnCount()==0){
        Math.floor((Math.random() * 10) + 1);
    }else{
        return getTurnCount();
    }

}


function onBeginPlayerOne(){
    initTurnCounter(1);
    
    console.info("Player One Begin");


}

function onBeginPlayerTwo(){
    initTurnCounter(2);
    console.info("Player two begin");
if(isAIEnabled()){
    onBeginPlayerAI();
    return;
}else{

    //player two should begin





}

    
}

function onBeginPlayerAI(){

}



function isAIEnabled(){
    return false;
}


function isGameComplete(){
    console.log("Checking if game is complete");

//rows
if(isFilled(1) && getFilled(1) === getFilled(2) && getFilled(2) == getFilled(3)){
    setWinnerBG(1,2,3);
    return true;
} 
if(isFilled(4) && getFilled(4) === getFilled(5) && getFilled(5) === getFilled(6)) {
    setWinnerBG(4,5,6);
    return true;}
if(isFilled(7) && getFilled(7) ===  getFilled(8) && getFilled(8) === getFilled(9)){
    setWinnerBG(7,8,9);
    return true;
} 

//columns
if(isFilled(1) && getFilled(1) === getFilled(4) && getFilled(4) == getFilled(7)) {
    setWinnerBG(1,4,7);
    return true;
}
if(isFilled(2) && getFilled(2) === getFilled(5) && getFilled(5) === getFilled(8)) {
    setWinnerBG(2,5,8);
    return true;
}
if(isFilled(3) && getFilled(3) ===  getFilled(6) && getFilled(6) === getFilled(9)){ 
    setWinnerBG(3,6,9);
    return true;}

//diagonal
if(isFilled(1) && getFilled(1) === getFilled(5) && getFilled(5) == getFilled(9)) {
    setWinnerBG(1,5,9);
    return true;}

return false;
    

}

function setWinnerBG(grid1, grid2, grid3){
    $(getGridItemId(grid1)).style.backgroundColor="rgb(94, 235, 113)";
    $(getGridItemId(grid2)).style.backgroundColor="rgb(94, 235, 113)";
    $(getGridItemId(grid3)).style.backgroundColor="rgb(94, 235, 113)";

}

function resetBoard(){
    for(i = 0; i < 9; i++){
clearFill(i+1);
resetField(i+1);
    }



}

function clearFill(index){
    console.log("Resetting index " + index);
    document.getElementById(getGridItemId(index)).textContent = "";
    document.getElementById(getGridItemId(index)).style.backgroundColor = "rgb(238, 235, 231)";
}

function setTurnText(player){
    console.log("Setting turn text to " + player);
    text = player == 1 ? "Player 1" : "Player 2";
    document.getElementById("game-info").style.color = "black";
    document.getElementById("game-info").style.fontSize="1em";
    document.getElementById("game-info").textContent = "Turn: Player "+player;
}

function setWinnerText(winner){
    console.log("Setting winner text to " + winner);
    text = winner == 1? "Player 1 wins" : "Player 2 wins";
    document.getElementById("game-info").textContent = text;
    document.getElementById("game-info").style.color = "yellow";
    document.getElementById("game-info").style.fontSize="1.2em";
}

function setGameOverText(){
    console.error("Game over");
    document.getElementById("game-info").textContent = "Draw!";
    document.getElementById("game-info").style.color = "pink";
    document.getElementById("game-info").style.fontSize="1.2em";

}
console.groupEnd();




function startNewGame(){
    console.error("Starting new game");
    resetBoard();
    increaseTurn();

}

//reset button
$("gameButtonReset").onclick = function(){
    startNewGame();
}



