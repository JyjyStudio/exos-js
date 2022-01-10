// Fiche technique sur les objets Set, Map, WeakSet et WeakMap

// Voici une fiche technique résumant l'ensemble des fonctions liées aux objets Set, Map, WeakSet et WeakMap.



// L'objet Set
// Créer un objet Set

let monObjet = new Set();
// ou
let monObjet = new Set(['un', 'deux', 'trois']);
// Ajouter un élément

monObjet.add('quatre');
// Supprimer un élément

monObjet.delete('quatre');
// Supprimer tous les éléments

monObjet.clear();
// Avoir la taille de l'objet (le nombre d'éléments)

monObjet.size;
// Vérifier si un élément existe (renvoie donc true ou false)

monObjet.has('un');
// Retourner tous les éléments

monObjet.values();
// ou
monObjet.keys();


// L'objet Map
// Créer un objet Map

let monObjet = new Map();
// Ajouter un élément

monObjet.set('John Doe', {
    email: 'john@doe.com',
});
// Supprimer un élément

monObjet.delete('John Doe');
// Supprimer tous les éléments

monObjet.clear();
// Vérifier si un élément existe (renvoie donc true ou false)

monObjet.has('John Doe');
// Retourner un élément

monObjet.get('John Doe');
// Retourner tous les éléments

monObjet.values();
// ou
monObjet.keys();


// L'objet WeakSet
// Créer un objet WeakSet

let monObjet = new WeakSet();
// ou
let monObjet = new WeakSet([objet1, objet2, objet3]);
// Ajouter un élément
let objet4 = {
    marque : 'Renault', 
    modele : 'Kangoo'
}
monObjet.add(objet4);
console.log(monObjet);
// Supprimer un élément

monObjet.delete(objet4);
// Avoir la taille de l'objet (le nombre d'éléments)

monObjet.length();
// Vérifier si un élément existe (renvoie donc true ou false)

monObjet.has(objet4);


// L'objet WeakMap
// Créer un objet WeakMap

let monObjet = new WeakMap();
// Ajouter un élément

const objet1 = {
    nom: 'John Doe',
}
 
monObjet.set(objet1, {
    email: 'john@doe.com',
});
// Supprimer un élément

monObjet.delete(objet1);
// Avoir la taille de l'objet (le nombre d'éléments)

monObjet.length();
// Vérifier si un élément existe (renvoie donc true ou false)

monObjet.has(objet1);
// Retourner un élément

monObjet.get(objet1);
