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


function handleClick(evt) {
  let sqrIdx = parseInt(evt.target.id.replace('sqrEls', ''))

  if (evt.target !== theBoard){
    return
  } 
  if (theBoard[sqrIdx] === 1 || theBoard[sqrIdx] === -1){
    return gStatus.innerHTML = "that square is already taken"
  }
  
  if(turnOrder === 1){
    theBoard[sqrIdx] = 1
  }
  if (turnOrder === -1){
   theBoard[sqrIdx] = -1
  }
  turnOrder = turnOrder * -1

  render ()
}

/*----------------------------- Event Listeners -----------------------------*/

gameBoardEl.addEventListener("click", handleClick)

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


winCombos.forEach(total => {
  
});



// 5.6) Set the winner variable if there's a winner by calling a new function: getWinner.
	  // The getWinner function will...

	  // 5.6.1) There are a couple methods you can use to find out if there is a winner.
	   // This is the first, more elegant way that takes advantage of the winningCombos array you wrote above in step 4.
	   // The 5.6.2 step is a little simpler to comprehend, but you'll need to write a lot more code.
	   // The 5.6.2 step also won't take advantage of the winningCombos array, but using it as a reference will help you build a solution.
	   // Choose only one path.
		  // 5.6.1.1) Loop through the each of the winning combination arrays defined.
		  // 5.6.1.2) Total up the three board positions using the three indexes in the current combo.
		  // 5.6.1.3) Convert the total to an absolute value (convert any negative total to positive).
		  // 5.6.1.4) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.

		// 5.6.2) This solution is less elegant, but might be easier to write on your own if you're struggling with the 5.6.1.X pseudocode.
		  // 5.6.2.1) For each one of the winning combinations you wrote in step 4, find the total of each winning combination.
		  // 5.6.2.2) Convert the total to an absolute value (convert any negative total to positive)
		  // 5.6.2.3) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.