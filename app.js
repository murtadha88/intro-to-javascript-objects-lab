const pokemon = require('./data.js');
const game = {
    party: [],
    gyms: [
        { location: "Pewter City", completed: false, difficulty: 1 },
        { location: "Cerulean City", completed: false, difficulty: 2 },
        { location: "Vermilion City", completed: false, difficulty: 3 },
        { location: "Celadon City", completed: false, difficulty: 4 },
        { location: "Fuchsia City", completed: false, difficulty: 5 },
        { location: "Saffron City", completed: false, difficulty: 6 },
        { location: "Cinnabar Island", completed: false, difficulty: 7 },
        { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
        { name: "potion", quantity: 4 },
        { name: "pokeball", quantity: 8 },
        { name: "rare candy", quantity: 99 },
    ],
}
//EX1:
console.log("===============================EX1===============================")
// console.dir(pokemon, { maxArrayLength: null })

//EX2:
console.log("===============================EX2===============================")
console.log(game);

//EX3:
console.log("===============================EX3===============================")
game.difficulty = "Hard";

//EX4:
console.log("===============================EX4===============================")
const starterPoke = pokemon[24];
game.party.push(starterPoke);

//EX5:
console.log("===============================EX5===============================")
const poke1 = pokemon[50];
game.party.push(poke1);

const poke2 = pokemon[100];
game.party.push(poke2);

const poke3 = pokemon[150];
game.party.push(poke3);

//EX6:
console.log("===============================EX6===============================")
for(let i=0; i<game.gyms.length; i++){
    if(game.gyms[i].difficulty < 3){
        game.gyms[i].completed = true;
    }
}

//EX7:
console.log("===============================EX7===============================")
const evolvedPoke = pokemon[starterPoke.number];
for (let i = 0; i < game.party.length; i++) {
    if (game.party[i].number === starterPoke.number) {
        game.party.splice(i, 1, evolvedPoke);
    }
}

//EX8:
console.log("===============================EX8===============================")
for (let i=0; i<game.party.length; i++){
    console.log(game.party[i].name);
}

//EX9:
console.log("===============================EX9===============================")
for(let i=0; i<pokemon.length; i++){
    if(pokemon[i].starter === true){
        console.log(pokemon[i]);
    }
}

//EX10:
console.log("===============================EX10===============================")
pokemon.catchPokemon = function(pokemonObj) {
    game.party.push(pokemonObj);
}
pokemon.catchPokemon(pokemon[8]);

//EX11:
console.log("===============================EX11===============================")
pokemon.catchPokemon = function(pokemonObj) {
    game.party.push(pokemonObj);
    game.items[1].quantity = game.items[1].quantity-1;
}
pokemon.catchPokemon(pokemon[7]);
console.log(game.items);

//EX12:
console.log("===============================EX12===============================")
for(let i=0; i<game.gyms.length; i++){
    if(game.gyms[i].difficulty < 6){
        game.gyms[i].completed = true;
    }
}

//EX13:
console.log("===============================EX13===============================")
game.gymStatus = function() {
    gymTally = {
        completed: 0,
        incompleted: 0,
    }
    for(let i=0; i<game.gyms.length; i++){
        if(game.gyms[i].completed === true){
            gymTally.completed++;
        }
        else {
            gymTally.incompleted++;
        }
    }
    console.log(gymTally);
}
game.gymStatus();

//EX14:
console.log("===============================EX14===============================")
game.partyCount = function () {
    let count = 0;
    for(let i=0; i<game.party.length; i++){
        count++;
    }
    return count;
}
console.log("You have ", game.partyCount() , " Pokemons in your party.");

//EX15:
console.log("===============================EX15===============================")
for(let i=0; i<game.gyms.length; i++){
    if(game.gyms[i].difficulty < 8){
        game.gyms[i].completed = true;
    }
}

//EX16:
console.log("===============================EX16===============================")
console.log(game);