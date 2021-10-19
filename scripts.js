let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is
let initNextPlayer = document.getElementById('next-lbl')

initNextPlayer.innerText = " " + nextPlayer


//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    gameTag = document.getElementsByTagName('td')

    for( let i = 0; i<gameTag.length; i++){
        let btn = document.createElement('button')
        btn.innerText = "[ ]"
        gameTag[i].appendChild(btn)
    }
   
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
    event.target.innerText = "[" + nextPlayer + "]"
     // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    event.target.disabled = true

    if(nextPlayer == 'X'){
        nextPlayer = 'O'
    }
    else{
        nextPlayer = 'X'
    }

    initNextPlayer.innerText = " " + nextPlayer;

   

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let h1Lbl = document.createElement("h1")
        let gameOverText = document.createTextNode("Game Over")
        h1Lbl.appendChild(gameOverText)
        let gameOverLbl = document.getElementById('game-over-lbl')
        gameOverLbl.appendChild(h1Lbl)
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}


//count the number of disabled buttons
function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    let isDisabled = 0

    for(let i=0; i<btns.length; i++){
        if(btns[i].disabled){
            isDisabled++
        }
    }

    if(isDisabled == 9){
        return true
    }
    return false
   
}
