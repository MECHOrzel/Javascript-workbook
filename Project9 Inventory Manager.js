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


function isBroken(name) {
    const brokenItem = inventory.find(item => item.name === name)

    if(brokenItem.durability <= 0){
        return true
    } else return false
} 

function getBrokenItems() {
    return inventory.filter(item => item.durability <= 0)
}

function printItemNames() {
    for (let i = 0; i < inventory.length; i++) {
        console.log(inventory[i].name)
}
}

function printDurability() {
    for (let i = 0; i < inventory.length; i++) {
        console.log(inventory[i].durability)
    }
}

function itemCount() {
    let count = 0;

    for (let i = 0; i < inventory.length; i++) {
        count++;
    }

    return count;
}  

function printItemValues(){
    for(let i = 0; i < inventory.length; i++){
        console.log(inventory[i].value)
    }
}

function printItemRarities() {
    for(let i = 0; i < inventory.length; i++){
        console.log(inventory[i].rarity)
    }
}

function printItemQuantities() {
    for(let i = 0; i < inventory.length; i++){
        console.log(inventory[i].quantity)
    }
}

function printItemNames() {
    for(let i = 0; i < inventory.length; i++){
        console.log(inventory[i].name)
    }
}

function printDurableItems() {
    for(let i = 0; i < inventory.length; i++){
        if(inventory[i].durability >= 100){
            console.log(inventory[i].name)
        }
    }
}

function printCheapItems() {
    for(let i = 0; i < inventory.length; i++){
        if(inventory[i].value < 150){
            console.log(inventory[i].name)
        }
    }
}

function countCheapItems() {
    let count = 0

    for(let i = 0; i < inventory.length; i++){
        if(inventory[i].value < 150){
            count++
        }
    }
    return count
}

function countDurableItems() {
    let count = 0

    for(let i = 0; i < inventory.length; i++){
        if(inventory[i].durability >= 100){
            count++
        }
    }
    return count
}

function countCommonItems() {
    
    let count = 0

    for(let i = 0; i < inventory.length; i++){
        if(inventory[i].rarity === "Common"){
            count++
        }
    }
    return count
}

function totalDurability() {
    let itemDurability = 0

    for (let i = 0; i < inventory.length; i++) {
        itemDurability += inventory[i].durability
    } 
    return itemDurability 
}

function totalCommonValue() {
    let totalValue = 0

    for (let i = 0; i < inventory.length; i++){
        if(inventory[i].rarity === "Common"){
            totalValue += inventory[i].value
        }
    }
    return totalValue
}

function getMostValuableItem() {
    let bestItem = inventory[0];

    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].value > bestItem.value) {
            bestItem = inventory[i];
        }
    }

    return bestItem;
}

function getCheapestItem() {
    let cheapestItem = inventory[0];

    for (let i = 0; i < inventory.length; i++){
        if (inventory[i].value < cheapestItem.value) {
            cheapestItem = inventory[i]
        }
    }
    return cheapestItem
}

function getMostDurableCommonItem() {
    let item = inventory[0];
     for (let i = 0; i < inventory.length; i++){
        if (inventory[i].durability > item.durability && inventory[i].rarity === "Common"){
            item = inventory[i]
        }
     }
     return item
}

 
