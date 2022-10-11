// this class represents the game board
class gameBoard {
    // add 2d array here 
    gameArray = [
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
    ];

    reset = document.getElementById("game-btn").addEventListener("click", resetGame());
    
    constructor() {

    }
    
    
    // need a method to watch for gameWin
    gameWin() {
        // checks for win
        let pieces = document.querySelectorAll("circle");
        
    }

    // need a method to reset the game
    resetGame() {
        // refreshes page for new game
        location.reload();
    }
    
}

//this class represents the player
class gamePlayer {
    constructor() {
        playerOne = playerOne;
        playerTwo = playerTwo;
        activePlayer = 1;
    }

    // method that will change between the player 1 and player 2
    playerChange() {
        if(playerOne == activePlayer) {
            activePlayer = 1
        } else {
            playerTwo == activePlayer
        }
        
    }
}

// this class represents the pieces
class gamePiece {
    redPiece = "#ff0000"
    yellowPiece = "#ffff00"
    boardCircle = document.getElementsByClassName("boardCircle");
   
    constructor() {

        function userClick() {
             // loops through the rows
        for(var i=0; i < gameArray.lenght; i++) {
            let setCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle");

            setCirc.classList.add("gameCirc");
            setCirc.dataset.redPiece = this.redPiece;
            setCirc.dataset.yellowPiece = this.yellowPiece;
            
            if (playerOne == 1) {
                setCirc.addEventListener("click", (event) => {
                    event.target.style.fill =  event.target.dataset.redPiece;
                })
            } else {
                setCirc.addEventListener("click", (event) => {
                    event.target.style.fill =  event.target.dataset.yellowPiece;
                })
            }

            this.boardCircle.appendChild(setCirc);
        }
        }
    }
}

