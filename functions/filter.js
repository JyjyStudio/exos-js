 let fruits = [
    'pomme',
    'poire',
    'fraise',
    'banane', 
    'caillou'
];
let fruitsFiltres = fruits.filter(fruit => {
    if(fruit != 'caillou') return true; //equivalent a return fruit
});
// console.log(fruitsFiltres);

//Exemple avec tableau d'objets
let voitures = [
    {marque : 'Renault',
    modele : 'Scenic',
    vitesse : 180},
    {marque : 'Toyota',
    modele : 'Prius',
    vitesse : 190},
    {marque : 'Volkswagen',
    modele : 'Golf R32',
    vitesse : 280}
];

/*
let voituresFiltres = voitures.filter(voiture => {
    if(voiture.vitesse > 200){
        return true;
    };
});

EQUIVAUT A :

let voituresFiltres = voitures.filter(voiture => {
    return (voiture.vitesse > 200); 
}); 

EQUIVAUT A LA LIGNE 42
*/

let voituresFiltres = voitures.filter(voiture => voiture.vitesse > 200);

console.log(voituresFiltres);
voitures.forEach(voiture => console.log(`La ${voiture.marque} ${voiture.modele} à une vitesse max de ${voiture.vitesse}km/h.`));
voituresFiltres.forEach(voiture => console.log(`La ${voiture.marque} ${voiture.modele} roule à plus de 200km/h.`));
console.log('la voiture la plus rapide est la '+voituresFiltres[0].marque + ' ' + voituresFiltres[0].modele);