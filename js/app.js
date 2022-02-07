/*-------------------------------- Constants --------------------------------*/
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]


/*---------------------------- Variables (state) ----------------------------*/
let theBoard = [], isWinner, tie, turnOrder


/*------------------------ Cached Element References ------------------------*/
const gameBoardEl = document.querySelector('.board')
const gStatus = document.querySelector('#message')
const sqrEls = document.querySelectorAll('.square')
const resetBtn = document.querySelector('#reset-button')

function handleClick(evt) {
  let sqrIdx = parseInt(evt.target.id.replace('sq', ''))

  
  if (theBoard[sqrIdx] !== null){
    return 
  }
  
  if(turnOrder === 1){
    theBoard[sqrIdx] = 1
  }
  if (turnOrder === -1){
   theBoard[sqrIdx] = -1
  }
  turnOrder = turnOrder * -1

  if (isWinner !== null){
    return
  }

  render ()
}

/*----------------------------- Event Listeners -----------------------------*/
resetBtn.addEventListener("click", init)
gameBoardEl.addEventListener("click", handleClick)

/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  theBoard = [null, null, null, null, null, null, null, null, null]
  turnOrder = 1
  isWinner = null
  gStatus.textContent = "Lets play, X goes first!"
  resetBtn.setAttribute("hidden", true)
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

  if (isWinner = getWinner()) {
    resetBtn.removeAttribute("hidden")
  }

  if (!isWinner){
    gStatus.textContent = `It is currently ${turnOrder === 1 ? "X's" : "O's"} turn!`
  }
  else if (isWinner === 'T'){
    gStatus.textContent = "Oh... It's a tie."
  } 
  else {
    gStatus.textContent = `Looks like ${isWinner === 1 ? "X" : "O"} takes this game.`
  }
  getWinner()
}

function getWinner() {
if (theBoard[0] + theBoard[1] + theBoard[2] === 3) return theBoard[0]
if (theBoard[0] + theBoard[1] + theBoard[2] === -3) return theBoard[0]
if (theBoard[3] + theBoard[4] + theBoard[5] === 3) return theBoard[3]
if (theBoard[3] + theBoard[4] + theBoard[5] === -3) return theBoard[3]
if (theBoard[6] + theBoard[7] + theBoard[8] === 3) return theBoard[6]
if (theBoard[6] + theBoard[7] + theBoard[8] === -3) return theBoard[6]
if (theBoard[0] + theBoard[3] + theBoard[6] === 3) return theBoard[0]
if (theBoard[0] + theBoard[3] + theBoard[6] === -3) return theBoard[0]
if (theBoard[1] + theBoard[4] + theBoard[7] === 3) return theBoard[1]
if (theBoard[1] + theBoard[4] + theBoard[7] === -3) return theBoard[1]
if (theBoard[2] + theBoard[5] + theBoard[8] === 3) return theBoard[2]
if (theBoard[2] + theBoard[5] + theBoard[8] === -3) return theBoard[2]
if (theBoard[0] + theBoard[4] + theBoard[8] === 3) return theBoard[0]
if (theBoard[0] + theBoard[4] + theBoard[8] === -3) return theBoard[0]
if (theBoard[2] + theBoard[4] + theBoard[6] === 3) return theBoard[2]
if (theBoard[2] + theBoard[4] + theBoard[6] === -3) return theBoard[2]

if (theBoard.includes(null)){
  return null
} else {
  return "T"
}
}