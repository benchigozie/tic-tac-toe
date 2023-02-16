    (function (){
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
    (function (){
        let gameForm = document.getElementById("game-form");
        gameForm.addEventListener("submit", (event) => {
            event.preventDefault();

            
            let gameForm = document.getElementById("game-form");
            let formData = new FormData(gameForm);
                
            let data = Object.fromEntries(formData);

            loadGame(data);

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
    
    
    function loadGame(data){
        
        data.mode = +data.mode;
        data.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        data.playerOne = "Y";
        data.playerTwo = "O";
        data.round = 0;
        data.currentPlayer = "X";
        data.gameOver = false;
    
        console.log(data);
    };




