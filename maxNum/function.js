//Le plus grand chiffre
const maxNum = (a, ...b) => console.log(`Le plus grand chiffre est ${Math.max(a, ...b)}.`);
maxNum(3, 56, 20, 2, 21, 222);

//Le plus petit chiffre
const minNum = (a, ...b) => console.log(`Le plus petit chiffre est ${Math.min(a, ...b)}.`);
minNum(3, 56, 20, 2, 21, 222);

//Addition avec le rest parameter
const addition = (...a) => {
    return a.reduce((accumulator, number) => {
        return accumulator += number;
    });
}
let exemple1 = addition(1, 2); // 3
let exemple2 = addition(1, 2, 3, 4, 5); // 15
console.log(exemple1);
console.log(exemple2);

//fonction reduce v1
const getMapFromArray = data => data.reduce((accu, item) => {
        // add object key to our object i.e. charmander: { type: 'water' }
        accu[item.name] = { type: item.type };
        return accu;
    }, {});

let pokemon = [
    { name: "Salameche", type: "Feu" },
    { name: "Carapuce", type: "Eau" },
    { name: "Bulbizarre", type: "Plante" }
];

let pokemonModified = getMapFromArray(pokemon);
console.log(pokemon);
console.log(pokemonModified);

// //fonction reduce V2
const getMapFromArray2 = pokemon.reduce((accu, item) => {
    // add object key to our object i.e. charmander: { type: 'water' }
    accu[item.name] = { type: item.type };
    return accu;
}, {});

console.log(getMapFromArray2);

//reunir les personnes par age 
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

//chainage optionnel 
const country = {
    name : 'Finland',
    population : 500000,
    shores : true,
    forest : true, 
    welcome() {console.log('Tervetuola suomeen')}, //Bienvenue en Finlande
    superficy : 338440, 
    borders : ['Sweden', 'Russia', 'Norway']
};
console.log(country);
country.welcome?.();//si la fonction welcome existe => tu l'excecute
console.log(country?.population);// si country existe affiche moi population
country.population?console.log(country.population) : ""; //equivalent a la ligne du dessus
console.log(country.borders?.[0]); // si la prop borders existe alors affiche moi son premier element
country.borders?.forEach(border => console.log(border)); //si border alors affiche moi ttes les borders 