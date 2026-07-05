const shop = [];

function addItem(name, type, value, rarity) {
    shop.push({
        name,
            stats:{
                type,
                value,
                rarity
            },
            enchantments: []
    })  
};

addItem(
    "Ashbringer",
    "Sword",
    5000,
    "Legendary"
)


addItem(
    "Staff of Antonidas",
    "Stave",
    9000,
    "Legendary"
)


addItem(
    "Thunderfury",
    "Sword",
    10000,
    "Legendary"
)

function findItem(name) {
    return shop.find(weapon => weapon.name === name)
}

function addEnchantment(itemName, enchantment){
    const weapon = shop.find(item => item.name === itemName);

        if(weapon){
        weapon.enchantments.push(enchantment);
        } return weapon
}

function upgradeValue(itemName, amount){
    const weapon = shop.find(item => item.name === itemName);

    if(weapon){
        weapon.stats.value += (amount)
    } return weapon
}

