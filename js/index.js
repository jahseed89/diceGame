let player1Score = 0
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById('player1Dice')
const player2Dice = document.getElementById('player2Dice')
const player1Scoreboard = document.getElementById('player1Scoreboard')
const player2Scoreboard = document.getElementById('player2Scoreboard')
const msssage = document.getElementById('message')
const rollBtn = document.getElementById('rollBtn')
const resertBtn = document.getElementById('resetBtn')
const winnerContainer = document.querySelector('.popup-wraper')
const winnerMsg = document.getElementById('winner')
const container = document.querySelector('.container')

function gameOver() {
    container.style.display = 'none'
    winnerContainer.style.display = "block"
}

rollBtn.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }

    if (player1Score >= 60) {
        gameOver()
        winnerMsg.textContent = "Player 1 has won! 🥳"

    } else if (player2Score >= 60) {
        gameOver()
        winnerMsg.textContent = "Player 2 has won! 🎉"
    }
    // Swaping Players
    player1Turn = !player1Turn

})


resertBtn.addEventListener('click', () => {
    restartGame()
})

function restartGame() {
    winnerContainer.style.display = 'none'
    container.style.display = 'block'
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}
