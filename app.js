const game = {
  title: 'Guess the Number!',
  prevGuesses: [],
  smallestNum: 1,
  biggestNum: 100,
  secretNum: null,

  setNewSmallestNum: function(num) {
      this.smallestNum = num
  },

  setNewBiggestNum: function(num) {
      this.biggestNum = num
  },

  getNewFixedNum: function() {
      alert(`Your number has to be between ${this.smallestNum} and ${this.biggestNum}`)
      let num = parseInt(prompt(`Number:`)) 
      return num
  },

  getNewBoundNum: function() {
      alert(`Your number has to be between ${this.smallestNum} and ${this.biggestNum}`)
      let num = parseInt(prompt(`Number:`)) 
      return num
},



  play: function() {

    alert('Welcome to Number Guessing Game')
    alert('Choose a MIN and a MAX number between 1 and 100, and guess a randomly generated number between in between.')
    let localSmallNum = null
    let localBigNum = null
    
    localSmallNum = parseInt(prompt(`[LOWER BOUND] Enter the lower bound of the range between 1 and 100 inclusive:`)) 
    while (localSmallNum < 1 || localSmallNum > 100)
    {
      localSmallNum = this.getNewBoundNum()
    }  
    this.smallestNum = localSmallNum
  
    localBigNum = parseInt(prompt(`[HIGHER BOUND] Enter the higher bound of the range between 1 and 100 inclusive:`))
    while (localBigNum < this.smallestNum || localBigNum > 100) {
      localBigNum = this.getNewBoundNum()
    }
    this.biggestNum = localBigNum

    alert(`Your secret number is a number between ${this.smallestNum} and ${this.biggestNum}. Take a guess!`) 
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      
    let userGuess = 0
    let bool = null

      do {
        userGuess = this.getGuess()
        this.prevGuesses.push(userGuess)
        
        if (userGuess === this.secretNum) {
            bool = true
        } else {
            bool = false 
        }
        
        this.render(bool, this.prevGuesses)
      } while (userGuess !== this.secretNum)
      
      return 'end of game'
  },

  getGuess: function() {
      let userGuess = 0

      do {
      userGuess = this.getNewFixedNum()  
      } while (userGuess < this.smallestNum || userGuess > this.biggestNum)
      
        // alert(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}:`)
        
      
      
      return userGuess
      },

  render: function(bool, guessesArray) {
      let currentIdx = guessesArray.length -1
      let recentGuess = guessesArray[currentIdx]
      let numTries = guessesArray.length
      let secretNum = parseInt(this.secretNum)
      let guessesString = guessesArray.join(', ')

      if (bool === true) 
      {
        alert(`Congrats! You guessed the number in ${numTries} tri(es). The number is ${secretNum}.`)
      } else {
          if (secretNum > recentGuess){
            alert(`Your guess is too low. Previous guess(es): ${guessesString}`)
            this.setNewSmallestNum(recentGuess)
          } else {
            alert(`Your guess is too high. Previous guess(es): ${guessesString}`)
            this.setNewBiggestNum(recentGuess)
          }
      }
  }
}

console.log(game.play())
console.log(`the secret number is ${game.secretNum}`)


/* problems: 
// 1. The first number input in the prompt doesn't get passed. (replaced while loop by do-while)
// 2. When the correct secret number is typed in, it alerts "the number is too low" and then ends the game. (replaced while loop by do-while)
// 3. Even when the guess is higher than the correct number, the system alerts "the number is too low". (i was assigning the array length as an index, causing the system to call the index with a non-existent number)
// 4. The system doesn't alert "`Congrats! You guessed the number in ${guessesArray.length}!`" when the guess is correct. (three equals sign in if statement)
5. insert "quit" if you want to quit mid-game
// 6. fix back to 1-100 (replaced by user prompt)
// 7. If the player enters a number greater than the secretNum make it the 
// new biggestNum, so that the player can't enter a number greater than it. 
// 8. If the player enters a number that is less than the secretNum make it 
// the new smallestNum, so that the player can't enter a number less than it.
9. when a number outside of smallestNumber or biggestNumber is typed in, show the following alert message 
"your number needs to be between 'smallestNum' and 'biggestNum'" 
// 10. more bonus: When `play` is run, immediately prompt the player 
// to enter the smallest and biggest numbers instead of pre-setting values.
// 11. previous guesses - space after comma (.join(', '))
// 12. use color to differentiate between the word "lower bound" and "higher bound" so that the user isn't 
// confused that the same message was repeated. (couldn't find a way to alter font style in js. added an intro instead)
13. "enter a guess between x and y" + "your number has to be between x and y" when a number outside the range in typed in. this happens even when i input a number in the correct range. 
14. "Try again" vs. "Quit"
15. Remove the message "your number has to be between x and y" that pops up right after "take a guess!"
*/