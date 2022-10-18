
// global variables
playerOne = "red";
playerTwo = "yellow";
// what player is currently going
activePlayer = 1;

// reload animation
let gba = document.getElementsByClassName("game-board");
for(let i = 0; i < gba.length; i++) {
    TweenLite.from(gba[i], { duration: .6, y: -100, alpha: 0, delay: i * .1});
}


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
    
     
    // a method to watch for gameWin
    gameWin() {
        // for (let i = 0; i < gameArray.length; i++) {
        //     let count = 0;
        //     for (let j = 0; j < gameArray[i].length; j++) {
        //       if (gameArray[i][j] == '1') {
        //         count++;
        //         if (count === 4) {                    // place check after incrementing
        //           console.log('1 wins')
        //           return true;
        //         }
        //       } else {
        //         count = 0;                            // reset
        //       }
        //     }
        //   }
        //   return false;
          
       
    }

    // method to reset the game
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
    //    console.log(event.target.dataset.row)
    //    console.log(event.target.dataset.col)

       
    
    //    console.log(g.gameArray)
       
       // what player is currently going
       if (activePlayer == 1) {
           // turn new circle into red
            event.target.style.fill = this.redPiece;
            g.gameArray[event.target.dataset.row][event.target.dataset.col] = 1
            TweenLite.from(event.target, { duration: .6, y: -100});
       } else {
        // turns circle into yellow
        event.target.style.fill = this.yellowPiece;
        g.gameArray[event.target.dataset.row][event.target.dataset.col] = 2
        TweenLite.from(event.target, { duration: .6, y: -100});
       }
       console.log(g.gameArray)
       // adds 1 to active player
       activePlayer++
       // if active player is greater than 2 then active player is 1
       if(activePlayer > 2) {
        activePlayer = 1;
       }

    // checks for row win for player 1
    for (let i = 0; i < g.gameArray.length; i++) {
        let count = 0;
        for (let j = 0; j < g.gameArray[i].length; j++) {
          if (g.gameArray[i][j] == '1') {
            count++;
            if (count === 4) {                   
                Swal.fire(
                    'Player One Won!',
                    'Press REPLAY button to play again!',
                    'success'
                  )
            //   return true;
            }
          } else {
            count = 0;                            
          }
        }
      }

    // checks for row win for player 2  
    for (let i = 0; i < g.gameArray.length; i++) {
        let count = 0;
        for (let j = 0; j < g.gameArray[i].length; j++) {
          if (g.gameArray[i][j] == '2') {
            count++;
            if (count === 4) {                   
                Swal.fire(
                    'Player Two Won!',
                    'Press REPLAY button to play again!',
                    'success'
                  )
            //   return true;
            }
          } else {
            count = 0;                            
          }
        }
      }



    // checks for col win for player 1
    for (let i = 0; i < g.gameArray.length; i++) {
        if (g.gameArray[0][i] == '1'
            && g.gameArray[1][i] == '1'
            && g.gameArray[2][i] == '1'
            && g.gameArray[3][i] == '1'
            ) {                   
                Swal.fire(
                    'Player One Won!',
                    'Press REPLAY button to play again!',
                    'success'
                  )
          return true;
        }
    }
    for (let i = 0; i < g.gameArray.length; i++) {
        if (g.gameArray[2][i] == '1'
            && g.gameArray[3][i] == '1'
            && g.gameArray[4][i] == '1'
            && g.gameArray[5][i] == '1'
            ) {                   
                Swal.fire(
                    'Player One Won!',
                    'Press REPLAY button to play again!',
                    'success'
                  )
          return true;
        }
    }
    

    // checks for col win for player 2
    for (let i = 0; i < g.gameArray.length; i++) {
        if (g.gameArray[0][i] == '2'
            && g.gameArray[1][i] == '2'
            && g.gameArray[2][i] == '2'
            && g.gameArray[3][i] == '2') 
            {                   
                Swal.fire(
                    'Player Two Won!',
                    'Press REPLAY button to play again!',
                    'success'
                  )
          return true;
        }
    }
    for (let i = 0; i < g.gameArray.length; i++) {
        if (g.gameArray[2][i] == '2'
            && g.gameArray[3][i] == '2'
            && g.gameArray[4][i] == '2'
            && g.gameArray[5][i] == '2') 
            {                   
                Swal.fire(
                    'Player Two Won!',
                    'Press REPLAY button to play again!',
                    'success'
                  )
          return true;
        }
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


