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

