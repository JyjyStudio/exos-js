let dateActuelle = Date();
console.log(dateActuelle); // norme anglo-saxonne : Sun Feb 13 2022 16:40:39 GMT+0100 (heure normale d’Europe centrale)

let dateEnSecondes = Date.now();
console.log(dateEnSecondes); // nombre de secondes depuis le 1er janvier 1970 à minuit UTC (londres)

let datePrecise = new Date(2022, 1, 13, 16, 40);
// pour datePrecise, on doit mettre :
//   - annee (obligatoire)
//   - mois (obligatoire) qui commence par 0 pour janvier et 11 pour décembre

//   - jour (facultatif) qui commence par 1
//   - heure (facultatif) qui commence par 0
//   - minute (facultatif) qui commence par 0
//   - secondes (facultatif) qui commence par 0
//   - millisecondes (facultatif) qui commence par 0

console.log(datePrecise);  // Sun Feb 13 2022 16:40:00 GMT+0100 (heure normale d’Europe centrale)
