let adventureStarted = false

let questWarning

let questButton

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
          questWarning = document.createElement("p")
          questWarning.classList.add("danger-text")
          questWarning.textContent = "Beware of the Dragon!"
          questArea.appendChild(questWarning)
          
          questButton = document.createElement("button")
          questButton.textContent = "Accept Quest"
          questArea.appendChild(questButton)
          questButton.addEventListener("click", acceptQuest)
    } else {
            adventureStarted = false
          heading.textContent = "Welcome Hero!"
          sentence.textContent = "Prepare yourself for battle!"
          button.textContent = "Start Adventure"
          body.classList.remove("adventure-active")
          questLink.setAttribute("href", "https://example.com")
          questLink.textContent = "View Quest"
          questWarning.remove()
          questButton.remove()
          
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

const questArea = document.querySelector("#quest-area")

function acceptQuest() {
    questWarning.textContent = "Quest Accepted: Defeat the Dragon!"
}


