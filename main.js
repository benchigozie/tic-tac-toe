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
        
        initializeVariables(data);
    
        addEventListenersToGameBoard(data);
    };

    function initializeVariables(data){

        data.mode = +data.mode;
        data.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        data.playerOne = "Y";
        data.playerTwo = "O";
        data.round = 0;
        data.currentPlayer = "X";
        data.gameOver = false;

    };

    function addEventListenersToGameBoard(data){

        document.querySelectorAll(".board-square").forEach(box => {
            
            box.addEventListener("click", (event) => {
                playMove(event.target, data);
            });

        });
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
        square.textContent = data.currentPlayer;
        square.classList.add(data.currentPlayer === "X" ? "player1" : "player2");

        endConditions(data);

    };

    function checkWinner(data){ 
        
        let result = false;

        winConditions.forEach((condition) => {
            if (data.board[condition[0]] === data.board[condition[1]] && data.board[condition[1]] === data.board[condition[2]]){
                result = true;
            }
        });

        return result;

    };

    function endConditions(data){

        console.log(checkWinner(data));

        if (checkWinner(data)){
            return true;
        }
        else if (data.round === 9){
            return true;
        }
        return false;
        
    };






