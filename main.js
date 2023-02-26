    (function (){
    let startButton = document.getElementById("start");

    startButton.addEventListener("click", function(){
    let gamePlayInfo = document.querySelector("#game-play-info");
    let gameSection = document.getElementById("game-section");
    let gameOptions = document.getElementById("game-options");
    let title = document.querySelector("header");
    let infoBox = document.getElementById("info-display");

    gamePlayInfo.style.display = "flex";
    gameSection.style.visibility = "hidden";
    gameOptions.style.visibility = "hidden";
    title.style.visibility = "hidden";
    infoBox.style.visibility = "hidden";

    })
        
    startButton.classList.add("restart");

    })();

    (function (){
        let gameForm = document.getElementById("game-form");
        gameForm.addEventListener("submit", (event) => {
            event.preventDefault();

            
            let gameForm = document.getElementById("game-form");
            let formData = new FormData(gameForm);
                
            let data = Object.fromEntries(formData);

            assignNames(data);

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
        let infoBox = document.getElementById("info-display");
    
        gamePlayInfo.style.display = "none";
        gameSection.style.visibility = "visible";
        gameOptions.style.visibility = "visible";
        title.style.visibility = "visible";
        infoBox.style.visibility = "visible";

        document.getElementById("start").textContent = "Restart Game";

        })

    })();

    function loadGame(data){

        (function (){

            let restartButton = document.querySelector(".restart");

            restartButton.addEventListener("click", () => {
                
                resetGame(data);
                initializeVariables(data);

            });

        })();
        
        initializeVariables(data);
    
        addEventListenersToGameBoard(data);

    };

    function initializeVariables(data){

        data.mode = +data.mode;
        data.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        data.playerOne = "X";
        data.playerTwo = "O";
        data.round = 0;
        data.currentPlayer = "X";
        data.gameOver = false;
        data.winner = "";
        data.playing = data["player-one-name"];
        data.pOneBackup = data["player-one-name"];
        data.pTwoBackup = data["player-one-name"];

    };

    function addEventListenersToGameBoard(data){

        document.querySelectorAll(".board-square").forEach(box => {
            
            box.addEventListener("click", (event) => {

                playMove(event.target, data);
            });

        });

        playersTurn(data);
    
    };

    const winConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    function playMove(square, data){

        if (data.gameOver === true) {return};
        if ((data.board[square.id] === "X") || (data.board[square.id] === "O")){return};

        data.board[square.id] = data.currentPlayer;
        data.round += 1;
        square.textContent = data.currentPlayer;
        square.classList.add(data.currentPlayer === "X" ? "player1" : "player2");

        displayTurn(data);
        resetGameVars(data);

    };

    function checkWinner(data){ 
        
        let result = false;

        winConditions.forEach((condition) => {
            if (data.board[condition[0]] === data.board[condition[1]] && data.board[condition[1]] === data.board[condition[2]]){
                
                data.winner = data.playing;

                (function (){
                document.querySelectorAll(".board-square")[condition[0]].style.background = "rgba(48, 126, 150, 0.8)";
                document.querySelectorAll(".board-square")[condition[1]].style.background = "rgba(48, 126, 150, 0.8)";
                document.querySelectorAll(".board-square")[condition[2]].style.background = "rgba(48, 126, 150, 0.8)";
                })();

                result = true;
            }
        });

        return result;

    };

    function endConditions(data){

        if (checkWinner(data)){

            return true;
        }
        else if (data.round === 9){
            return true;
        }
        return false;
        
    };

    function endGame(data){
        
        announceGameVerdict(data);
        
    };

    function gameMode(){
        
    };

    function announceGameVerdict (data){

        if(checkWinner(data)){
            data.infoBox.textContent = `${data.playing} has won the game`;
        }
        else {
            data.infoBox.textContent = `It's a Tie`; 
        }

    };

    function resetGame (data){
        let ide = 0;
        document.querySelectorAll(".board-square").forEach(box => {
            
            box.textContent = "";
            box.style.background = "rgba(86, 95, 95, 0.671)";
            
            box.id = ide;

            if (ide <= 8){
            ide = ide + 1;

        }

        }); 

    };

    function playersTurn (data){

        data.infoBox = document.getElementById("info-box");
        data.infoBox.textContent = `${data.playing}'s Turn (${data.currentPlayer})`;

    };
    function resetGameVars(data){
        let resetButton = document.getElementById("reset");

        console.log(data["player-two-name"]);
        resetButton.addEventListener("click", function (){

            assignNames(data);
            loadGame(data);
            displayTurn(data);
            resetGame(data);
            displayTurn(data);

        })

    };
    function assignNames(data){
        if (data["player-one-name"] === ""){
            data["player-one-name"] = "player 1";
        }
        if(data["player-two-name"] === ""){
            data["player-two-name"] = "player 2";
        }    
    }
    function displayTurn(data){
        if(endConditions(data)){

            data.gameOver = true;
            endGame(data);

        }
        else if(data.currentPlayer === "X"){
            data.currentPlayer = "O";
            data.playing = data["player-two-name"];
            playersTurn(data);
        }
        else {
            data.currentPlayer = "X";
            data.playing = data["player-one-name"];
            playersTurn(data);
        }
    };





 