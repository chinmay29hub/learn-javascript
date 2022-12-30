let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

// console.log(Math.floor(Math.random() * 3))

function random () {
    return hands[Math.floor(Math.random() * 3)]
}

console.log(random())
