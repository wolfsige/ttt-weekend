/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let theBoard = [], isWinner, tie, turnOrder


/*------------------------ Cached Element References ------------------------*/
const gameBoardEl = document.getElementsByClassName('.board')
const gStatus = document.querySelector('#message')
const sqrEls = document.querySelectorAll('.square')
// const square1 = document.getElementById('sq0')
// const square2 = document.getElementById('sq1')
// const square3 = document.getElementById('sq2')
// const square4 = document.getElementById('sq3')
// const square5 = document.getElementById('sq4')
// const square6 = document.getElementById('sq5')
// const square7 = document.getElementById('sq6')
// const square8 = document.getElementById('sq7')
// const square9 = document.getElementById('sq8')
// const  boardArray = [square1, square2, square3, square4, square5, square5, square7, square8, square9]

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  theBoard = [null, null, null, null, null, null, null, null, null]
  turnOrder = 1
  isWinner = null
  gStatus.textContent = "Lets play, X goes first!"
 render()

}


function render(){
  sqrEls.forEach((sqrEl, index) => {
    if (theBoard[index] === 1){
      sqrEl.textContent = "X"
    } 
    else if (theBoard[index] === -1){
      sqrEl.textContent = "O"
    }
    else {
      sqrEl.textContent = ""
    }
  })

  if (!isWinner){
    gStatus.textContent = `It is currently ${turnOrder === 1 ? "X's" : "O's"} turn!`
  }
  else if (isWinner === 'T'){
    gStatus.textContent = "Oh... It's a tie."
  } 
  else {
    gStatus.textContent = `Looks like ${isWinner === 1 ? "X" : "O"} takes this game.`
  }
}
