const paladin = {
    name: "Paladin",
    health: 120,
    attack: 15,
    maxHealth: 120
}

const goblin = {
    name: "Goblin",
    health: 60,
    attack: 10,
    maxHealth: 60
}


const heroHealthDisplay = document.querySelector("#heroHealth")
const enemyHealthDisplay = document.querySelector("#enemyHealth")
const battleLogDisplay = document.querySelector("#battleLog")

const attackButton = document.querySelector("#attackButton")
const healButton = document.querySelector("#healButton")
const resetButton = document.querySelector("#resetButton")

attackButton.addEventListener("click", attackEnemy)

function attackEnemy() {
    if (goblin.health > 0) {
        goblin.health = goblin.health - paladin.attack
        battleLogDisplay.textContent = paladin.name + " attacks " + goblin.name + " for " + paladin.attack + " damage!"

        if (goblin.health < 0) {
            goblin.health = 0
        }

        if (goblin.health === 0){
            battleLogDisplay.textContent = "Goblin defeated! Victory!"
        }

        enemyHealthDisplay.textContent = "Goblin Health: " + goblin.health
    }
}

