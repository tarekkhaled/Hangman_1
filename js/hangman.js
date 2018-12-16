const Hangman = function (word,remainingGuess) { //H : captial which mean i use "new" for it
  this.word = word.toLowerCase().split("") // save this.word as array of characters
  this.remainingGuess = remainingGuess
  this.guessedLetter = []
  this.status = "playing"
}

// Here the character will be Guessed !!

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase()
  const isUnique = !this.guessedLetter.includes(guess) // if not founded will be true
  const isBadGuess = !this.word.includes(guess) // if not founded will be also true

  if (this.status == "playing") {
    if (isUnique) {
      this.guessedLetter.push(guess)
    }
    if(isBadGuess && isUnique ) {
      this.remainingGuess--
    }
  }
}

// Here : the body of the Game ;;
Hangman.prototype.getPuzzle = function() {
  let result = ''
  this.word.forEach((letter)=> {
    /* for every character in the word check if this is same with
    this guessedLetter and show it for them if yes or show it for them if it space
    other show them '*'
     */
    if (this.guessedLetter.includes(letter) || letter == ' ') {
      result = result + letter // make the word in the same line
    }
    else
      result = result + '*'
  })

  return result
}
// here : control the Cases of the game "failed" "Successed" "Playing"
Hangman.prototype.getStatue = function() {
  const failed = (this.remainingGuess == 0 && this.getPuzzle().includes('*'))
  const finished = !this.getPuzzle().includes('*')

  if(failed) {
    this.status = "failed "
  }
  else if (finished) {
    this.status = "finished"
  }
}

Hangman.prototype.messageResult = function () {
  if (this.status == "playing") {
      return `Guesses left :${this.remainingGuess}`
  }
  else if (this.status == "finished") {
    return `GreatWork! You guessed the right Word.`
  }
  else {
    return `Nice try! The word Was "${this.word.join("")}"`
  }
}
const game1 = new Hangman("Cat" , 2)
console.log(game1.status)
