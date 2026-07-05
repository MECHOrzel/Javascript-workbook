const roster = [];

function addCharacter(name, characterClass, level, faction) {
 roster.push({
    name,
    characterClass,
    level,
    faction,
 })
};

addCharacter("Uther", "Paladin", 90, "Alliance");
addCharacter("Thrall", "Shaman", 85, "Horde");
addCharacter("Jaina", "Mage", 88, "Alliance");

function findCharacter(name) {
    return roster.find(character => character.name === name);
}

const names = roster.map(character => character.name)

const alliance = roster.filter(character => character.faction === "Alliance")

function levelUp(name) {
     const character = roster.find(character => character.name === name)

     if(character) {
        character.level += 1
     }
     return character
};


function getAverageLevel() {
    const levels = roster.map(character => character.level)
        let sum = 0;
    for (let i = 0; i < levels.length; i++) {
        sum += levels[i];
    }
    return (sum / levels.length).toFixed(2);
}



console.log(getAverageLevel())