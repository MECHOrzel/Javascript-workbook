let adventureStarted = false

function startAdventure(){
if (adventureStarted === false) {
    adventureStarted = true
    heading.textContent = "The Adventure Begins!"
    sentence.textContent = "Your first quest awaits!"
    button.textContent = "Adventure Started!"
    }
}



const heading = document.querySelector("h1")

console.log(heading)

heading.textContent = "Welcome Hero!"

const sentence = document.querySelector(".quest-text")

sentence.textContent = "Prepare yourself for battle!"

const button = document.querySelector("#start-button")

console.log(button)

function startAdventure() {
    heading.textContent = "The Adventure Begins!"
    sentence.textContent = "Your first quest awaits!"
    button.textContent = "Adventure Started!"
}

button.addEventListener("click", startAdventure)