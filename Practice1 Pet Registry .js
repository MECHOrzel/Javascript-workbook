const pets = [];

function addPets(name, species, age) {
    pets.push({
        name, 
        species, 
        age})
};


addPets("Alexa", "Doberman", 15)
addPets("Jake", "Beagle", 15)
addPets("Gwen", "Pitbull", 15)


function findPet(name) {
    return pets.find(pet => pet.name === name)
}

const names = pets.map(pets => pets.name);

console.log(names)