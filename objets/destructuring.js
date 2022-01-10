// Destructuring ou l'affectation par décomposition

let informations = ['supersayen', '25', 'homme'];

//sans decomposition
// let pseudo = informations[0];
// let age = informations[1];
// let sexe = informations[2];

//avec décomposition 
let [pseudo, age, sexe] = informations;

console.log(pseudo);
console.log(age);
console.log(sexe);