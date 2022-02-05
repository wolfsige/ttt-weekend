/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let squareArray = [], isWinner, tie, turnOrder


/*------------------------ Cached Element References ------------------------*/
theBoard = document.getElementsByClassName('board')
gStatus = document.querySelector('#message')
square1 = document.getElementById('sq0')
square2 = document.getElementById('sq1')
square3 = document.getElementById('sq2')
square4 = document.getElementById('sq3')
square5 = document.getElementById('sq4')
square6 = document.getElementById('sq5')
square7 = document.getElementById('sq6')
square8 = document.getElementById('sq7')
square9 = document.getElementById('sq8')


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()
function init() {
  squareArray = [null, null, null, null, null, null, null, null, null]
  square1 = squareArray[0]
  square2 = squareArray[1]
  square3 = squareArray[2]
  square4 = squareArray[3]
  square5 = squareArray[4]
  square6 = squareArray[5]
  square7 = squareArray[6]
  square8 = squareArray[7]
  square9 = squareArray[8]
  turnOrder = 1
  isWinner = null
 render()

}

function render(){
  forEach(function(squareArray, index){
    
  })
}



// 3.3) The render function should:
	  // 3.3.1) Loop over the board array (which represents the squares on the page), and for each iteration:
		  // 3.3.1.1) Use the index of the iteration to access the square in the squares array that corresponds with the current cell being iterated over in the board array
		  // 3.3.1.2) Style that square however you wish dependant on the value contained in the current cell being iterated over (-1, 1, or null)
	  // 3.3.2) Render a message reflecting the currrent game state:
	    // 3.3.2.1) If winner has a value other than null (game still in progress), render whose turn it is.
	      // Hint: Maybe use a ternary inside of a template literal here?
	    // 3.3.2.2) If winner is equal to 'T' (tie), render a tie message.
	    // 3.3.2.3) Otherwise, render a congratulatory message to which player has won.
	      // Hint (again): Maybe use a ternary inside a template literal here