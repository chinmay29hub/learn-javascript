
const container = document.getElementById("container")

container.innerHTML = "<button onclick = 'hello()' >Buy!</button>"

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"

function hello () {
    container.innerHTML += "<p>Thank you for buying</p>"
}