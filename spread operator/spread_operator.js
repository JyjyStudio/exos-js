let fruits = ['banane', 'pomme', 'fraise'];
let aliments = ['chocolat', 'farine', 'lait'];

let total = aliments.concat(fruits)      //without spread operator : [ 'chocolat', 'farine', 'lait', 'banane', 'pomme', 'fraise' ]
let total2 = [...aliments, ...fruits]   //with spread operator     : [ 'chocolat', 'farine', 'lait', 'banane', 'pomme', 'fraise' ]


//exemple 2
let profil = { firstname : 'Jyhad', fullProfile : false };
let UpdatedProfil = { lastname : 'Ben Youssef', fullProfile : true };

let clone = { ...profil };    // Object { firstname: 'Jyhad', fullProfile: false }
let fullProfile = {...profil, ...UpdatedProfil};    // Object { firstname: 'Jyhad', lastname: 'Ben Youssef', fullProfile: true };
