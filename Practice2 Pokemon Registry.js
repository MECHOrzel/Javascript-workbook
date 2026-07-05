const pokemonCollection = [];

function addPokemon(name, level, type) {
  pokemonCollection.push({
    name,
    level,
    type,
  })
}

addPokemon("Chimchar", 15, "Fire");
addPokemon("Staravia", 18, "Flying");
addPokemon("Luxio", 16, "Electric");

function findPokemon(name) {
  return pokemonCollection.find(pokemon => pokemon.name === name);
}

const names = pokemonCollection.map(pokemon => pokemon.name);

const strongPokemon =  pokemonCollection.filter(pokemon => pokemon.level >= 16);


function levelUp(name) {
  
  const pokemon = pokemonCollection.find(pokemon => pokemon.name === name)

  if(pokemon) {
    pokemon.level += 1;
  }
  return pokemon
}

