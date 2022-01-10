let monTableau = [["mark", "steve", "Tom"],
["Zuckerberg", "Jobs", "Hanks"]]
//console.log(monTableau[0][0]);

let monTableauAssociatif = {
    Prenom: 'Mark',
    Nom: 'zuckerberg',
    Poste: 'PDG de Facebook'
};
monTableauAssociatif['nationalité'] = "USA"; //Ajoute Nationalité : USA à la fin de mon tableau
console.log(monTableauAssociatif);

//console.log(monTableauAssociatif['Prenom'] + ' ' + monTableauAssociatif['Nom'] + ', ' + monTableauAssociatif['Poste']);

monTableau[0].push('Jeff'); //ajoute Jeff a la fin de mon tableau
monTableau[0].unshift('Jyhad'); //ajoute Jyhad au debut de mon tableau

//console.log(monTableau[0][4]); //Jeff
//console.log(monTableau[0][0]); //Jyhad

console.log('avant pop : ' + monTableau[0][4]); //Jeff
monTableau[0].pop() //efface le dernier element de mon tableau
console.log('après pop : ' + monTableau[0][4]); //Undefined car a été effacé plus haut 

console.log('avant shift : ' + monTableau[0][0])
monTableau[0].shift() //efface le premier element de mon tableau
console.log('apres shift : ' + monTableau[0][0]); //mark car Jyhad a été effacé plus haut 

