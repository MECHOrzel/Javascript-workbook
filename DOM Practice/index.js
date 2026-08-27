let adventureStarted = false

const body = document.querySelector("body")

function startAdventure(){
if (adventureStarted === false) {
    adventureStarted = true
    heading.textContent = "The Adventure Begins!"
    sentence.textContent = "Your first quest awaits!"
    button.textContent = "Adventure Started!"
    body.classList.add("adventure-active")
    questLink.setAttribute("href", "https://www.wikipedia.org")
    questLink.textContent = "Read Your Quest"
    } else {
            adventureStarted = false
          heading.textContent = "Welcome Hero!"
          sentence.textContent = "Prepare yourself for battle!"
          button.textContent = "Start Adventure"
          body.classList.remove("adventure-active")
          questLink.setAttribute("href", "https://example.com")
          questLink.textContent = "View Quest"
}
}


const heading = document.querySelector("h1")

console.log(heading)

heading.textContent = "Welcome Hero!"

const sentence = document.querySelector(".quest-text")

sentence.textContent = "Prepare yourself for battle!"

const button = document.querySelector("#start-button")

console.log(button)

button.addEventListener("click", startAdventure)

const questLink = document.querySelector("#quest-link")

questLink.setAttribute("href", "https://google.com")