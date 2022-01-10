//methode 1 avec add 
let voitures = new WeakSet();

let voitureA = {
    constructeur : 'Mercedes',
    modele : 'classe S'
}
let voitureB = {
    constructeur : 'Renault',
    modele : 'Espace'
}
voitures.add(voitureA)
voitures.add(voitureB)

console.log(voitures)


//methode 2 sans add en ajoutant voitureA et voitureB dans newWeakSet
let voitureA = {
    constructeur : 'Mercedes',
    modele : 'classe S'
}
let voitureB = {
    constructeur : 'Renault',
    modele : 'Espace'
}

let voitures = new WeakSet([voitureA, voitureB]);
console.log(voitures)