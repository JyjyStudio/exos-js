// let people = [
//     {name : 'Julien', age : 36},
//     {name : 'Mathieu', age : 22},
//     {name : 'Abdel', age : 56},
//     {name : 'Mamad', age : 28},
//     {name : 'Sophie', age : 22},
//     {name : 'Issa', age : 31}
// ];
// const result = people.reduce((groupedPeople, person) => {
//     const age = person.age;
//     if(groupedPeople[age] == null) groupedPeople[age] = [];
//     groupedPeople[age].push(person);
//     return groupedPeople;
// }, {});
// console.log(result);

// let numbers = [2,4,5,8,9,3,22];
// const total = numbers.reduce((result, number) => {
//    return result + number;
// }, 0);
// console.log(total);
let pokemons = [
    { name: "Salameche", type: "Feu" },
    { name: "Carapuce", type: "Eau" },
    { name: "Bulbizarre", type: "Plante" }
];
console.log(pokemons);
const result = pokemons.reduce((accu, pokemon) => {
    accu[pokemon.name] = {type : pokemon.type}
    return accu;
}, {});
console.log(result);