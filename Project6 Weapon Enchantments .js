const inventory = [];

function addItem(name, type, value, rarity) {
    inventory.push({
        name,
        stats:{
            type,
            value,
            rarity
        },
        enchantments: []
    })
    
};

function addEnchantment(itemName, enchantment) {

    const item = inventory.find(item => item.name === itemName);

    if(item){
        item.enchantments.push(enchantment);
    } return item
}

addItem(
  "Ashbringer",
  "Sword",
  5000,
  "Legendary"
);

addItem(
    "Doomhammer",
    "Mace",
    6000,
    "Legendary"
);

addItem(
    "Staff of Antonidas",
    "Stave",
    8000,
    "Legendary"
);

addEnchantment("Ashbringer", "Crusader");
addEnchantment("Ashbringer", "Lifestealing");

console.log(inventory)
