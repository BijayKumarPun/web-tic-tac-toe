
console.group("Gameplay Interaction");
function onClickBackButton(){
    console.log("onClickBackButton")
hideGameplayUI();
displayMainMenu();



}

document.getElementById("gameButtonBack").onclick = 
function(){
    console.log("Back button clicked");
    onClickBackButton();
}

console.groupEnd();

function hideGameplayUI(){
    console.log("Inside hideGameplayUI()");
    document.getElementsByClassName("game-container")[0].style.display="none";
}

function displayMainMenu(){
    console.log("Inside displayMainMenu()");
    document.getElementsByClassName("menu-container")[0].style.display='flex';
}