//fonction reduce v1 (exemple obtenir un objet à partir d'un tableau)

let pokemon = [
{ name: "Salameche", type: "Feu" },
{ name: "Carapuce", type: "Eau" },
{ name: "Bulbizarre", type: "Plante" }
];

const getMapFromArray = data => data.reduce((accu, item) => {
    // add object key to our object i.e. charmander: { type: 'water' }
    accu[item.name] = { type: item.type };
    return accu;
}, {});

let pokemonModified = getMapFromArray(pokemon);
console.log(pokemon);
console.log(pokemonModified);

// //fonction reduce V2
const getMapFromArray2 = pokemon.reduce((accu, item) => {
accu[item.name] = { type: item.type };
return accu;
}, {});

console.log(getMapFromArray2);


//reunir des personnes par age 
const personnes = [
    { prenom: "Jyhad", age: 31 },
    { prenom: "Toto", age: 26 },
    { prenom: "Claude", age: 26 },
    { prenom: "foo", age: 35 },
    { prenom: "bar", age: 42 }
];

const result = personnes.reduce((groupePersonnes, personnes) => {
    const age = personnes.age;
    if (groupePersonnes[age] == null) groupePersonnes[age] = [];
    groupePersonnes[age].push(personnes.prenom);
    return groupePersonnes;
}, {});

console.log(result);

//Addition avec reduce et le rest parameter
const addition = (...a) => {
    return a.reduce((accumulator, number) => {
        return accumulator += number;
    });
}
let exemple1 = addition(1, 2); // 3
let exemple2 = addition(1, 2, 3, 4, 5); // 15
console.log(exemple1);
console.log(exemple2);

