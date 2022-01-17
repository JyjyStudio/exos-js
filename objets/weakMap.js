let weakMap = new WeakMap();
let index = {
    id : 1, 
    id2 : 2
}
let voitureA = {
    marque : 'Renault',
    modele : 'Scenic'
}

weakMap.set(index, voitureA);
console.log(weakMap);