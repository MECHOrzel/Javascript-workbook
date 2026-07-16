/*
====================================
Project 08 - Guild Manager
====================================

Concepts Practiced:
- Arrays
- Objects
- Nested Objects
- Arrays Inside Objects
- find()
- push()
- Updating Nested Properties

Functions:
- addPlayer()
- findPlayer()
- learnAbility()
- upgradeArmor()
- renameWeapon()
- getHighLevelPlayers()

New Concept:
- filter() (review)
*/


const guild = [];

function addPlayer(name,playerClass,level,weapon,armor) {
    guild.push({
        name,
        playerClass,
        level,
            gear:{
                weapon,
                armor
            },
        abilities: []    
    })
}

addPlayer(
    "Uther",
    "Paladin",
    90,
   "Ashbringer",
    500
)

addPlayer(
    "Jaina",
    "Mage",
    90,
    "Staff of Antonidas",
    250
)

addPlayer(
    "Thrall",
    "Shaman",
    90,
    "Doomhammer",
    450
)

function findPlayer(name) {
    return guild.find(player => player.name === name)
}

function learnAbility(playerName, ability) {
    const player = guild.find(player => player.name === playerName)

    if(player){
        player.abilities.push(ability)
    } return player
}

function upgradeArmor(playerName, amount) {
    const player = guild.find(player => player.name === playerName)

    if(player){
        player.gear.armor +=(amount)
    }   return player
}

function renameWeapon(playerName, newWeapon) {
    const player = guild.find(player => player.name === playerName)

    if(player){
        player.gear.weapon = (newWeapon)
    } return player
}

function getHighLevelPlayers(minLevel) {
    return guild.filter(player => player.level >= minLevel);
}

function getAverageLevel() {
    let totalLevel = 0;

    for (let i = 0; i < guild.length; i++) {
    totalLevel += guild[i].level
}
     return totalLevel / guild.length;
}

function getPlayerNames() {
    return guild.map(player => player.name);
}