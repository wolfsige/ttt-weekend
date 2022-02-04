/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
squareArray = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let p1Turn = 1
let p2Turn = -1

let isWinner, tie, inPlay


/*------------------------ Cached Element References ------------------------*/
square = document.getElementsByClassName('sqr')
square1 = document.getElementById('sq0')
square2 = document.getElementById('sq1')
square3 = document.getElementById('sq2')
square4 = document.getElementById('sq3')
square5 = document.getElementById('sq4')
square6 = document.getElementById('sq5')
square7 = document.getElementById('sq6')
square8 = document.getElementById('sq7')
square9 = document.getElementById('sq8')
gStatus = document.querySelector('message')


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()
function init() {
  square1 = squareArray[0]
  square2 = squareArray[1]
  square3 = squareArray[2]
  square4 = squareArray[3]
  square5 = squareArray[4]
  square6 = squareArray[5]
  square7 = squareArray[6]
  square8 = squareArray[7]
  square9 = squareArray[8]
  p1Turn = true
  isWinner = false
 render()
//  console.log()
}

function render(){
  squareArray.forEach(squareSet => {
    
    // console.log()
  });
}

// 3.3.1.1) Use the index of the iteration to access the square in the squares array that corresponds with the current cell being iterated over in the board array
		  // 3.3.1.2) Style that square however you wish dependant on the value contained in the current cell being iterated over (-1, 1, or null)