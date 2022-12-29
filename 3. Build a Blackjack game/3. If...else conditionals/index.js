let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Do you want to Draw a New Card?")
} else if (sum === 21) {
    console.log("You win!!")
} else {
    console.log("You Loose!!")
}