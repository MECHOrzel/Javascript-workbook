const hangar = [];

function addShip(name, shipClass, value) {
    hangar.push({
        name,
        shipClass,
        value,
    })
};

addShip("Tristan", "Frigate", 1200000);
addShip("Caracal", "Cruiser", 15000000);
addShip("Drake", "Battlecruiser", 55000000);
addShip("Heron", "Frigate", 800000);

function findShip(name) {
    return hangar.find(ship => ship.name === name)
}

const shipNames = hangar.map(ship => ship.name)

const frigates = hangar.filter(ship => ship.shipClass === "Frigate")

function upgradeShip(name, amount) {
    const spaceCraft = hangar.find(ship => ship.name === name)

      if(spaceCraft) {
        spaceCraft.value += (amount)
    } return spaceCraft
};

function sellShip(name) {
    const index = hangar.findIndex(ship => ship.name === name);

  if (index !== -1) {
    hangar.splice(index, 1);
  }
};

