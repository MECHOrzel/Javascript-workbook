let adventureStarted = false

let questWarning

let questButton

let questDescription


const quests = [
    {
        title: "Dragon Hunt",
        description: "Defeat the dragon in the northern cave.",
        reward: 500
    },
    {
        title: "Goblin Trouble",
        description: "Clear the goblins from the old mine.",
        reward: 250
    },
    {
        title: "The Lost Sword",
        description: "Recover the blacksmith's stolen sword.",
        reward: 150
    }
]

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
          
          questButton = document.createElement("button")
          questButton.textContent = "Accept Quest"
          questArea.appendChild(questButton)
          questButton.addEventListener("click", acceptQuest)


        for (let i = 0; i < quests.length; i++){
            const questParagraph = document.createElement("p")
            questParagraph.classList.add("quest-item")
            questParagraph.textContent = quests[i].title
            questArea.appendChild(questParagraph)
        }







    } else {
            adventureStarted = false
          heading.textContent = "Welcome Hero!"
          sentence.textContent = "Prepare yourself for battle!"
          button.textContent = "Start Adventure"
          body.classList.remove("adventure-active")
          questLink.setAttribute("href", "https://example.com")
          questLink.textContent = "View Quest"
          questButton.remove()
          
          const questItems = document.querySelectorAll(".quest-item")
          for (let i = 0; i < questItems.length; i++) {
            questItems[i].remove()   
        }
        
          
}
}


const heading = document.querySelector("h1")

heading.textContent = "Welcome Hero!"

const sentence = document.querySelector(".quest-text")

sentence.textContent = "Prepare yourself for battle!"

const button = document.querySelector("#start-button")

button.addEventListener("click", startAdventure)

const questLink = document.querySelector("#quest-link")

questLink.setAttribute("href", "https://google.com")

const questArea = document.querySelector("#quest-area")

function acceptQuest() {
    questWarning.textContent = "Quest Accepted: Defeat the Dragon!"
}


