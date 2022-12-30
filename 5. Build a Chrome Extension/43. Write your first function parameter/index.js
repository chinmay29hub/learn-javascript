const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(name) {
    welcomeEl.textContent = "Welcome back, " + name + "👋"    
}

greetUser("Chinmay")