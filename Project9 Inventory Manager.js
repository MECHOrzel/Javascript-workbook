/*
====================================
Project 09 - Inventory Manager
====================================

Concepts Practiced:
- Arrays
- Objects
- find()
- filter()
- map()
- Updating Objects

New Concept:
- sort()
*/

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

function findItem(name){
    return inventory.find(item => item.name === name)
}

function findCommon(rarity){
    return inventory.filter(item => item.rarity === rarity)
}

function priceyItems(minValue){
    return inventory.filter(item => item.value >= minValue)
}

function getItemNames() {
    return inventory.map(item => item.name)
}

function useItem(name, amount) {
    const usedItem = inventory.find(item => item.name === name)

    if(usedItem && usedItem.quantity >= amount){
        usedItem.quantity -= (amount)
    } return usedItem
}

function repairItem(name, amount) {
    const brokenItem = inventory.find(item => item.name === name)

    if(brokenItem){
        brokenItem.durability += amount
    } return brokenItem
}

function inventoryValue() {
    let totalValue = 0

    for (let i = 0; i < inventory.length; i++) {
        totalValue += inventory[i].value
    } 
    return totalValue
}

function addStock(name, amount){
    const itemStock = inventory.find(item => item.name === name)

    if(itemStock){
        itemStock.quantity += amount
    } return itemStock
}

function findRareItems(rarity){
    return inventory.filter(item => item.rarity === rarity)
}

function getItemDurability(){
    return inventory.map(item => item.durability)
}

