const roster = [];

function addCharacter(name,characterClass,level,weaponName,damage){
    roster.push({
        name,
        characterClass,
        level,
        weaponName,
        damage
    })
  };

 addCharacter(
  "Uther",
  "Paladin",
  90,
  "Ashbringer",
  150
);

addCharacter(
    "Jaina",
    "Mage",
    90,
    "Staff of Antonidas",
    170
);

addCharacter(
    "Thrall",
    "Shaman",
    90,
    "Doomhammer",
    140

);

function findCharacter(name) {
    return roster.find(character => character.name === name)
}
const heroNames = roster.map(character => character.name)

function upgradeWeapon(name, amount) {
    const weapon = roster.find(character => character.name === name)

    if (weapon) {
        weapon.damage += (amount)
    } return weapon
}

function renameWeapon(name, newWeaponName) {
    const weapon = roster.find(character => character.name === name)

       if (weapon) {
        weapon.weaponName = (newWeaponName)
    } return weapon
}

console.log(renameWeapon("Uther", "The Ashbringer"))