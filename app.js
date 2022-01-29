const game = {
  title: 'Guess the Number!',
  prevGuesses: [],
  smallestNum: null,
  biggestNum: null,
  secretNum: null,

  getNewSmallestNum: function(num) {
      this.smallestNum = num
  },

  getNewBiggestNum: function(num) {
      this.biggestNum = num
  },

  play: function() {
    this.smallestNum = parseInt(prompt(`Enter the lower bound of the range between 1 and 100 inclusive:`)) 
    this.biggestNum = parseInt(prompt(`Enter the higher bound of the range between 1 and 100 inclusive:`))

    alert(`Your secret number will be between ${this.smallestNum} and ${this.biggestNum}`) 
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

      while (userGuess < this.smallestNum || userGuess > this.biggestNum) {
        userGuess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}:`))
      }
      
      return userGuess
      },

  render: function(bool, guessesArray) {
      let currentIdx = guessesArray.length -1
      let recentGuess = guessesArray[currentIdx]
      let numTries = guessesArray.length
      let secretNum = parseInt(this.secretNum)
      let guessesString = guessesArray.join()

      // alert(`your guess: ${recentGuess}, secret number: ${secretNum}`)
      // alert(secretNum > recentGuess)
      // alert(secretNum)

      if (bool === true) 
      {
        alert(`Congrats! You guessed the number in ${numTries} tries. The number is ${secretNum}.`)
      } else {
          if (secretNum > recentGuess){
            alert(`Your guess is too low. Previous guess(es): ${guessesString}`)
            this.getNewSmallestNum(recentGuess)
          } else {
            alert(`Your guess is too high. Previous guess(es): ${guessesString}`)
            this.getNewBiggestNum(recentGuess)
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
6. fix back to 1-100
// 7. If the player enters a number greater than the secretNum make it the 
// new biggestNum, so that the player can't enter a number greater than it. 
// 8. If the player enters a number that is less than the secretNum make it 
// the new smallestNum, so that the player can't enter a number less than it.
9. when a number outside of smallestNumber or biggestNumber is typed in, show the following alert message 
"your number needs to be between 'smallestNum' and 'biggestNum'" 
10. more bonus: When `play` is run, immediately prompt the player 
to enter the smallest and biggest numbers instead of pre-setting values.
*/