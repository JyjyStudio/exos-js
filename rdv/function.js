let heureFinRdvMax = 16;
let minuteFinRdvMax = 30;
let dureeRdv = 10;
let messageRdvMax = `Les RDV doivent etre pris avant ${heureFinRdvMax}h${minuteFinRdvMax - dureeRdv}.`;
let finRdv;

let priseRdv = (heure, minute) => {
    if (minute < 60 && minute >= 0 && heure <= 16 && heure >= 8) {
        if (minute + dureeRdv >= 60 && minute + dureeRdv < 70) {
            finRdv = `${heure + 1}h0${minute + dureeRdv - 60}.`;
            console.log(`Votre rdv a bien été pris à ${heure}h${minute}, il se terminera à ${finRdv}`);
        }else if (minute > 10) {
            finRdv = `${heure}h${minute + dureeRdv}.`;
            console.log(`Votre rdv a bien été pris à ${heure}h${minute}, il se terminera à ${finRdv}`);
        }
        else {
            finRdv = `${heure}h${minute + dureeRdv}.`;
            console.log(`Votre rdv a bien été pris à ${heure}h0${minute}, il se terminera à ${finRdv}`);
        }
    }
    else if (heure == 16) {
        if (minute + dureeRdv <= minuteFinRdvMax) {
            console.log(`Votre rdv a bien été pris à ${heure}h${minute}, il se terminera à ${finRdv}`);
        } else console.log(messageRdvMax)
    }
    else if (heure < 8) console.log('Les RDV commencent à 8h00.');
    else if (heure > 16) console.log(messageRdvMax);
    else console.log('Veuillez verifier votre demande de rdv.');
}

//prise de rdv entre 8h et 16h20. Duree du rdv 10 minutes. Affiche l'heure de debut et de fin de rdv.

priseRdv(16, 9)