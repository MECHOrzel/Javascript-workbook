const paladin = {
    name: "Paladin",
    health: 120,
    attack: 15,
    defense: 20,
    description: "A heavily armored protector who defends allies."
}

const mage = {
    name: "Mage",
    health: 70,
    attack: 30,
    defense: 5,
    description: "A powerful spellcaster who deals devastating magical damage."
}


const rogue = {
    name: "Rogue",
    health: 90,
    attack: 25,
    defense: 10,
    description: "A swift fighter who relies on speed and precision."
}

const paladinButton = document.querySelector("#paladinButton")
const mageButton = document.querySelector("#mageButton")
const rogueButton = document.querySelector("#rogueButton")
const characterDisplayName = document.querySelector("#characterName")
const healthDisplay = document.querySelector("#health")
const attackDisplay = document.querySelector("#attack")
const defenseDisplay = document.querySelector("#defense")



paladinButton.addEventListener("click", selectPaladin)
// mageButton.addEventListener("click", selectMage)
// rogueButton.addEventListener("click", selectRogue)

function selectPaladin(){
    characterDisplayName.textContent = paladin.name
    healthDisplay.textContent = "Health: " + paladin.health
    attackDisplay.textContent = "Attack: " + paladin.attack
    defenseDisplay.textContent = "Defense: " + paladin.defense
}

