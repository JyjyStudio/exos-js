"use strict"
let dateActuelle = new Date();

// toLocaleDateString = jour, mois, année 
// toLocalTimeString = l'heure
// toLocaleString = jour, mois, année, heure
// On choisi les options qu'on veux ex weekday

let dateLocale = dateActuelle.toLocaleString(navigator.language, {
    weekday : 'long', // short : 3 premieres lettres du jour, narrow (premiere lettre), long (toutes les lettres)
    year : 'numeric', // numeric (xxxx) , 2-digit (xx)
    month : 'long', // short, narrow, long, digit
    day : 'numeric', // numeric ou 2-digit
    hour : 'numeric', 
    minute : 'numeric', // numeric ou 2-digit
    second : 'numeric' // numeric ou 2-digit
})
console.log(dateLocale); //lundi 14 février 2022, 17:58:52 (sur navigateur, pas vscode)


// copyright footer
let date = new Date().getFullYear();
let copyright = `${date} Jyjystudio`;
console.log(copyright); // => 2022 Jyjystudio, l'année change automatiquement chaque année 