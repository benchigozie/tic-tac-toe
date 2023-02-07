(function startNewGame(){
    (function displayGameOptions(){
    let startButton = document.getElementById("start");

    startButton.addEventListener("click", function(){
    let gamePlayInfo = document.querySelector("#game-play-info");
    let gameSection = document.getElementById("game-section");
    let gameOptions = document.getElementById("game-options");
    let title = document.querySelector("header");

    gamePlayInfo.style.display = "flex";
    gameSection.style.visibility = "hidden";
    gameOptions.style.visibility = "hidden";
    title.style.visibility = "hidden";
    })
    })();
    (function hideGameOptions(){
        let beginButton = document.getElementById("begin");
    
        beginButton.addEventListener("click", function(){
        let gamePlayInfo = document.querySelector("#game-play-info");
        let gameSection = document.getElementById("game-section");
        let gameOptions = document.getElementById("game-options");
        let title = document.querySelector("header");
    
        gamePlayInfo.style.display = "none";
        gameSection.style.visibility = "visible";
        gameOptions.style.visibility = "visible";
        title.style.visibility = "visible";
        })
        })();
})();
