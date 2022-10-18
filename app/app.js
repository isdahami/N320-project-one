
// global variables

playerOne = "red";
playerTwo = "yellow";
// what player is currently going
activePlayer = 1;

// this class represents the game board
class gameBoard {
    // add 2d array here 
    gameArray = [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
    ];

    reset = document.getElementById("game-btn").addEventListener("click", this.resetGame);
    
    constructor() {
    }
    
    
    // a method to watch for gameWin
    gameWin() {
        let pieces = document.querySelectorAll("circle");

        // checks for vertical win
        for(let i=0; i < this.gameArray.length; i++) {

        }

        // checks for horizontal win
        
        
    }

    // need a method to reset the game
    resetGame() {
        // refreshes page for new game
        location.reload();
    }
    
}

//this class represents the player
class gamePlayer {

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
    // class props
    redPiece = "#ff0000"
    yellowPiece = "#ffff00"
    // get all board circles
    boardCircle = document.getElementsByClassName("boardCircle");
    
    userClick(event) {
        // create new circle element
       let setCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      
        // styles the circle
       setCirc.classList.add("gameCirc");
       setCirc.dataset.redPiece = this.redPiece;
       setCirc.dataset.yellowPiece = this.yellowPiece;
       console.log(event.target.dataset.row)
       console.log(event.target.dataset.col)

       
    
       console.log(g.gameArray)
       
       // what player is currently going
       if (activePlayer == 1) {
           // turn new circle into red
            event.target.style.fill = this.redPiece;
            g.gameArray[event.target.dataset.row][event.target.dataset.col] = 1
       } else {
        // turns circle into yellow
        event.target.style.fill = this.yellowPiece;
        g.gameArray[event.target.dataset.row][event.target.dataset.col] = 2
       }
       console.log(g.gameArray)
       // adds 1 to active player
       activePlayer++
       // if active player is greater than 2 then active player is 1
       if(activePlayer > 2) {
        activePlayer = 1;
       }

    //    console.log(this.boardCircle);
    //    console.log(setCirc);
    // sets setCirc onto the board
       this.boardCircle[0].appendChild(setCirc);
       
       gPlayer.playerChange();
     
   }
}


// calls of new instances 
let g = new gameBoard();
let gp = new gamePiece(); // will need more of these
let gPlayer = new gamePlayer();


