// l'objet map permet de creer un nouveau tableau a partir d'un tableau existant qui va appliquer une fonction sur chacun des elements de ce tableau

//variable.set pour ajouter un element et variable.delete pour effacer

//exemple 1

let monMap = new Map([
    ['prenom', 'Mark'],
    ['nom', 'Zuckerberg']
]);

monMap.set('poste', 'PDG de Facebook')
monMap.set('age', '40')
console.log(monMap);
monMap.delete('age');
console.log(monMap);

//exemple 2 ajout d'éléments complets sous forme d'objet

let utilisateurs2 = new Map();

utilisateurs2.set('Mark Zuckerberg', {
    email: 'mark@facebook.com',
    poste: 'PDG de Facebook'
});
utilisateurs2.set('Bill Gates', {
    email: 'bill@microsoft.com',
    poste: 'PDG de Microsoft'
})

console.log(utilisateurs2);

//exercice : mettre au carré les chiffre de mon tableau

let tableau = [8, 1, 16, 2, 4, 3]

let resultat = tableau.map(value => value * value);
console.log(tableau);
console.log(resultat);
