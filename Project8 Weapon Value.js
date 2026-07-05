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

console.log(findPlayer("Jaina"))