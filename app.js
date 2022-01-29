const game = {
  title: 'Guess the Number!',
  prevGuesses: [],
  biggestNum: 10,
  smallestNum: 1,
  secretNum: null,

  render: function(bool, guessesArray) {
    let message = ''
    let lastGuess = guessesArray[guessesArray.length]
    let guessesString = guessesArray.join()

    if (bool === true) 
    {
      alert(`Congrats! You guessed the number in ${guessesArray.length}!`)
      // return 'cograts!'
    } else {
        if (this.secretNum > lastGuess){
          alert(`Your guess is too low. Previous guesses: ${guessesString}`)
        } else {
          alert(`Your guess is too low. Previous guesses: ${guessesString}`)
        }
    }
  },

  play: function() {
      this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      
      let userGuess = 0
      userGuess = this.getGuess()

      while (userGuess !== this.secretNum) {
        userGuess = this.getGuess()
        this.prevGuesses.push(userGuess)
        this.render(false, this.prevGuesses)
        // console.log(this.secretNum-userGuess)
      }

      // do {
      //   console.log(num + ' is even')
      //   num += 2
      // } while (num <= 10)
      
      return 'end of game'
    // return this.secretNum  
  },

  getGuess: function() {
    let userGuess = 0

    while (userGuess < this.smallestNum || userGuess > this.biggestNum) {
      userGuess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}:`))
    }
    
    return userGuess
    }
  }

console.log(game.play())
console.log(`the secret number is ${game.secretNum}`)

// function game(num) {
//   console.log(parseInt(num))
// }

// game(12)