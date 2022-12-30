// 1. Grab the box from the DOM and store it in a variable
// 2. Add a click event listener to the box 
// 3. Log out "I want to open the box!" when it's clicked

let grabBox = document.getElementById("box")
grabBox.addEventListener("click", function logOut() {
    console.log("I want to open the box!")
})