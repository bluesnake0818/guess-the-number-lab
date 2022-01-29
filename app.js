const game = {
  title: 'Guess the Number!',
  prevGuesses: [],
  biggestNum: 10,
  smallestNum: 1,
  secretNum: null,



  play: function() {
      this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      let userGuess = 0

      do {
        userGuess = this.getGuess()
        this.prevGuesses.push(userGuess)
        this.render(false, this.prevGuesses)
      } while (userGuess !== this.secretNum)
      
      // while (userGuess !== this.secretNum) {
      //   userGuess = this.getGuess()
      //   this.prevGuesses.push(userGuess)
      //   this.render(false, this.prevGuesses)
      // }

      // do {
      //   console.log(num + ' is even')
      //   num += 2
      // } while (num <= 10)
      
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
    let message = ''
    let lastGuess = guessesArray[guessesArray.length]
    let guessesString = guessesArray.join()

    if (bool === true) 
    {
      alert(`Congrats! You guessed the number in ${guessesArray.length}!`)
    } else {
        if (this.secretNum > lastGuess){
          alert(`Your guess is too low. Previous guesses: ${guessesString}`)
        } else {
          alert(`Your guess is too low. Previous guesses: ${guessesString}`)
        }
    }
  }

  }

console.log(game.play())
console.log(`the secret number is ${game.secretNum}`)


/* problems: 
1. The first number input in the prompt doesn't get passed.
2. When the correct secret number is typed in, it alerts "the number is too low" and then ends the game. */