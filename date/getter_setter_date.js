let dateActuelle = new Date();

// getter : permet de recuperer une date
console.log(dateActuelle.getDay()); // jour de la semaine (0 pour dimanche, 6 pour samedi) => 0 (aujourd'hui nous sommes dimanche)
console.log(dateActuelle.getFullYear()); // année => 2022
console.log(dateActuelle.getDate()); // jour du mois => 13 (13 fevrier)

console.log(dateActuelle.getUTCDay()); // => 0 
// Renvoi la date pour l'heure UTC (donc de Londres)
// Les fonctions sont identiques, on ajoute simplement UTC

// setter : setfullYear, setDay, setDate... C'est comme les getters mais on remplace get par set 
// permet de definir une date
dateActuelle.setFullYear(2750);
console.log(dateActuelle.getFullYear()); // => 2750