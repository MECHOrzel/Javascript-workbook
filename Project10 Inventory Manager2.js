// ========================
// PROJECT 10 - INVENTORY
// ========================




const inventory = [];

function addItem(name,value,quantity,rarity,durability) {
    inventory.push({
        name,
        value,
        quantity,
        rarity,
        durability
    })
}

addItem(
    "Short Sword",
    100,
    1,
    "Common",
    50
)

addItem(
    "Long Sword",
    200,
    1,
    "Uncommon",
    75
)

addItem(
    "Flail",
    125,
    1,
    "Common",
    60
)

addItem(
    "Short Bow",
    150,
    1,
    "Common",
    40
)

addItem(
    "Arrows",
    20,
    200,
    "Common",
    1
)

addItem(
    "Small Shield",
    100,
    1,
    "Uncommon",
    300
)

function removeItem(name) {

    const itemIndex = inventory.findIndex(item => item.name === name)

    if (itemIndex >= 0) {
    inventory.splice(itemIndex,1)
    }
}

function removeWeapon(name) {
    const weaponIndex = inventory.findIndex(item => item.name === name)

    if (weaponIndex >= 0){
        inventory.splice(weaponIndex,1)
    }
}


function removeBrokenItem(name) {
    const itemIndex = inventory.findIndex(item => item.name === name)

    if (itemIndex >= 0 && inventory[itemIndex].durability <= 0){
        inventory.splice(itemIndex,1)
    }
}


function removeCheapItem(name) {
    const itemIndex = inventory.findIndex(item => item.name === name)

    if(itemIndex >=0 && inventory[itemIndex].value < 100){
        inventory.splice(itemIndex,1)
    }
}

function sellItem(name) {
    const itemIndex = inventory.findIndex(item => item.name === name)

    if(itemIndex >=0 && inventory[itemIndex].quantity > 0){
        inventory[itemIndex].quantity--

        if (inventory[itemIndex].quantity === 0){
            inventory.splice(itemIndex, 1)
        }
    }
}

function restockItem(name) {
    const itemIndex = inventory.findIndex(item => item.name === name)
    
    if(itemIndex >=0) {
        inventory[itemIndex].quantity++
    }
}

function damageItem(name) {
    const itemIndex = inventory.findIndex(item => item.name === name)

    if(itemIndex >=0){
        inventory[itemIndex].durability--
    }
}

function increaseItemValue(name) {
    const itemIndex = inventory.findIndex(item => item.name === name)

    if(itemIndex >=0){
        inventory[itemIndex].value++
    }
}

function repairItem(name){
     const itemIndex = inventory.findIndex(item => item.name === name)

     if(itemIndex >= 0){
        inventory[itemIndex].durability++
     }
}

function useItem(name) {
    const itemIndex = inventory.findIndex(item => item.name === name)

    if(itemIndex >= 0 && inventory[itemIndex].quantity > 0){
        inventory[itemIndex].quantity--
    }
}

function weakenExpensiveItem(name) {
    const itemIndex = inventory.findIndex(item => item.name === name)

    if(itemIndex >= 0 && inventory[itemIndex].value > 100){
        inventory[itemIndex].durability--
    }
}



// ========================
// PRACTICE - SIMPLE ARRAYS
// ========================

const party = ["Gale", "Shadowheart", "Astarion", "Lae'zel"]

function removeCompanion(name) {
    const partyIndex = party.findIndex(member => member === name)

    if (partyIndex >= 0){
        party.splice(partyIndex, 1)
    }
}

// ========================
// PRACTICE
// ========================

// party exercise

// character exercise


const characters = [
    { name: "Reinhardt", role: "Tank" },
    { name: "Mercy", role: "Support" },
    { name: "Genji", role: "Damage" }
]

function removeCharacter(name) {
    const characterIndex = characters.findIndex(member => member.name === name)

    if(characterIndex >=0){
        characters.splice(characterIndex, 1)
    }
}