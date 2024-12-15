const rock = "rock"
const paper = "paper"
const scissors = "scissors"

const rounds = 5

let computerScore = 0
let humanScore = 0

playGame(rounds)

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3)
  const computerCoice = (randomNumber == 0) ? rock : (randomNumber == 1) ? paper : scissors
  return computerCoice
}

function getHumanChoice() {
  while (true) {
    const humanCoice = prompt("Please enter 'Rock', 'Paper' or 'Scissors'")
    if (humanCoice === null) {
      console.warn("You closed the window, try again!")
    } else if (
      humanCoice.toLowerCase() == rock ||
      humanCoice.toLowerCase() == paper ||
      humanCoice.toLowerCase() == scissors
    ) return humanCoice.toLowerCase()
    else console.warn("You entered incorrect value, try again!")
  }
}

function checkHumanWins(humanCoice, computerCoice) {
  if (
    humanCoice == rock && computerCoice == scissors || 
    humanCoice == paper && computerCoice == rock ||
    humanCoice == scissors && computerCoice == paper
  ) return true
  else return false
}

function playRound(computerCoice, humanCoice) {
  console.log(`Computer chose '${computerCoice[0].toUpperCase() + computerCoice.slice(1)}'`)
  console.log(`You chose '${humanCoice[0].toUpperCase() + humanCoice.slice(1)}'`)
  if (computerCoice == humanCoice) {
    console.log("It is a tie! Let's choose again!")
    playRound(getComputerChoice(), getHumanChoice())
  } else {
    const result = checkHumanWins(humanCoice, computerCoice)
    if (result) {
      console.log("You win this round!")
      humanScore++
    } else {
      console.log("Computer win this round!")
      computerScore++
    }
  }
}

function playGame(roundsAmount) {
  for (let index = 1; index <= roundsAmount; index++) {
    console.log(`Starting round: ${index}`)
    playRound(getComputerChoice(), getHumanChoice())
    console.log(`Current score: You (${humanScore}) Computer (${computerScore})`)
  }
  if (humanScore > computerScore) console.log("Congratulations! You win the game!")
  else console.log("Computer win this game! Don't give up, try again!")
}