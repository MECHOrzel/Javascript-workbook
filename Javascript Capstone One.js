const party = [
    {
        name: "Uther",
        class: "Paladin",
        level: 20,
        health: 100,
        weapon: { name: "Ashbringer", damage: 50 }
    },
    {
        name: "Jaina",
        class: "Mage",
        level: 18,
        health: 65,
        weapon: { name: "Staff of Antonidas", damage: 60 }
    },
    {
        name: "Thrall",
        class: "Shaman",
        level: 19,
        health: 80,
        weapon: { name: "Doomhammer", damage: 55 }
    },
    {
        name: "Valeera",
        class: "Rogue",
        level: 17,
        health: 45,
        weapon: { name: "Daggers", damage: 45 }
    }
]

function getCharacter(name) {
    return party.find(character => character.name === name)
}

function upgradeWeapon(name, amount) {
    const character = party.find(character => character.name === name)

    if(character){
        character.weapon.damage += amount
    }
}

function getInjuredCharacters() {
    return party.filter(character => character.health < 70)
}

function getCharacterNames() {
    return party.map(character => character.name)
}

function removeCharacter(name) {
    const partyIndex = party.findIndex(character => character.name === name)

    if (partyIndex >= 0){
        party.splice(partyIndex, 1)
    }
}

function getTotalPartyDamage() {
    let total = 0

    for (let i = 0; i < party.length; i++){
        total += party[i].weapon.damage
    }
    return total
}   

function getHealthyPartyDamage() {
    let total = 0

    for (let i = 0; i < party.length; i++){
        if (party[i].health >= 70){
            total += party[i].weapon.damage
        }
    }
    return total
}

function getEliteCharacters() {
     return party.filter(character => character.health >= 70 && character.level >= 18)
} 

function getWeaponNames() {
    return party.map(character => character.weapon.name)
}

function getStrongHealthyDamage() {
    let total = 0

    for (let i = 0; i < party.length; i++){
        if(party[i].level >= 18 && party[i].health >= 70){
          total += party[i].weapon.damage
        }
    }
    return total
}

