
console.group("Gameplay init");

attachClickListener();

function onGridItemClicked(gridItem){
console.info("Received callback for clicking grid item " + gridItem);
document.getElementById(getGridItemId(gridItem)).textContent = "X";

}

console.groupEnd();

function attachClickListener(){

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