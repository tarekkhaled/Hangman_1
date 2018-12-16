//Render the puzzle and the remainingGuess on the Screen : DOM
const puzzleEL = document.querySelector('#game')
puzzleEL.textContent = game1.getPuzzle()
const numberEL = document.querySelector('#guessNumber')
numberEL.textContent = game1.remainingGuess
const resultEl = document.querySelector('#resultOfGame')


window.addEventListener('keypress' , function(e){
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  puzzleEL.textContent = game1.getPuzzle()
  numberEL.textContent = game1.remainingGuess
  game1.getStatue()
  resultEl.textContent = game1.messageResult()
  console.log(game1.status)

})
