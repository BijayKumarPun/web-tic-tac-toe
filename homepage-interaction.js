
//attach event listener

//new game
document.getElementById("buttonNewGame")
.onclick = function(){
    onClickNewGame();
}

//about
document.getElementById("buttonAbout")
.onclick = function(){
    onClickAbout();
}



function onClickAbout(){
    console.log("About Clicked");
    if(isBackButtonVisible()){
        document.getElementById("buttonAbout").innerText = "About";
        showElement('buttonNewGame');
        hideElement('about-game');

    }else{
        hideElement('buttonNewGame');
        document.getElementById("buttonAbout").innerText = "Back";

        //set data 

      showElement('about-game');

    }


}


function isBackButtonVisible(){
    return document.getElementById("buttonAbout").innerHTML === "Back";
}


function onClickNewGame(){
    console.log("New Game Clicked");

}


function showElement(){
    if(showElement.arguments.length == 1){
        document.getElementById(showElement.arguments[0]).style.visibility = 'visible';
    }else{
        showElementByClass(showElement.arguments);
    }
}

function hideElement(){
    if(hideElement.arguments.length == 1){
        var e = hideElement.arguments[0];
        document.getElementById(hideElement.arguments[0]).style.visibility='hidden';
    }else{
        hideElementsByClass(hideElement.arguments);
    }

}

function showElementByClass(){ //passed as arguments array
    for(element in showElementByClass.arguments){
        console.log(element);
        console.log(arguments[element]);
    
        var e = arguments[element];
            document.getElementsByClassName(e)[0].style.visibility='visible';
    }
    }

function hideElementsByClass(){ //passed as arguments array
for(element in hideElementsByClass.arguments){
    console.log(element);
    console.log(arguments[element]);

    var e = arguments[element];
   document.getElementsByClassName(e)[0].style.visibility='hidden';
}
}

//test
shouldHideMenuContainer = true;
if(shouldHideMenuContainer){
    document.getElementsByClassName("menu-container")[0].style.display="none";
}





