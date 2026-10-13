let currentGold = 100

const inventory = []

const goldDisplay = document.querySelector("#gold")
const swordButton = document.querySelector("#buySword")
const shieldButton = document.querySelector("#buyShield")
const inventoryDisplay = document.querySelector("#inventory")
const messageDisplay = document.querySelector("#message")

swordButton.addEventListener("click", buySword)
shieldButton.addEventListener("click", buyShield)

function buySword(){
    if(currentGold >= 30){
        currentGold = currentGold - 30
        inventory.push("Sword")
        updateInventory()
        goldDisplay.textContent = "Gold: " + currentGold
        
    } else {
        console.log("Not Enough Gold!")
    }
}

function buyShield(){
    if(currentGold >= 50){
        currentGold = currentGold - 50
        inventory.push("Shield")
        updateInventory()
        goldDisplay.textContent = "Gold: " + currentGold
    } else {
        console.log("Not Enough Gold!")
    }
}

goldDisplay.textContent = "Gold: " + currentGold

function updateInventory(){
    inventoryDisplay.textContent = "Inventory: " + inventory.join(", ")
}

