let heureFinRdvMax = 16;
let minuteFinRdvMax = 30;
let dureeRdv = 10;
let messageRdvMax = `Les RDV doivent etre pris avant ${heureFinRdvMax}h${minuteFinRdvMax - dureeRdv}.`;
let finRdv;

let priseRdv = (heure, minute) => {
    let checkMinute = () => {
        if (minute + dureeRdv >= 60 && minute + dureeRdv < 70) {
            return finRdv = `${heure + 1}h0${minute + dureeRdv - 60}.`;
            // console.log(`Votre rdv a bien été pris à ${heure}h${minute}, il se terminera à ${finRdv}`);
        } else if (minute + dureeRdv >= 60 && minute + dureeRdv < 70 || minute > 10) {
            return finRdv = `${heure}h${minute + dureeRdv}.`;
            // console.log(`Votre rdv a bien été pris à ${heure}h${minute}, il se terminera à ${finRdv}`);
        }
        else if (minute >= 0 && minute < 60) {
            return finRdv = `${heure}h${minute + dureeRdv}.`;
        }
    }

    if (minute >= 60 || heure > 23 || heure < 0) {
        console.log('Veuillez verifier votre demande de rdv.');
    }
    else if (heure >= 8 && heure <= 16) {
        if (heure == 16) {
            if (minute + dureeRdv <= minuteFinRdvMax) {
                checkMinute();
                if (minute < 10) console.log(`Votre rdv a bien été pris à ${heure}h0${minute}, il se terminera à ${finRdv}`)
                else console.log(`Votre rdv a bien été pris à ${heure}h${minute}, il se terminera à ${finRdv}`)
            } else console.log(messageRdvMax)
        } else {
            checkMinute();
            if (minute < 10) console.log(`Votre rdv a bien été pris à ${heure}h0${minute}, il se terminera à ${finRdv}`)
            else console.log(`Votre rdv a bien été pris à ${heure}h${minute}, il se terminera à ${finRdv}`)
        }
    }
    else if (heure < 8) console.log('Les RDV commencent à 8h00.');
    else if (heure > 16) console.log(messageRdvMax);
}

/*prise de rdv entre 8h et 16h20. Duree du rdv de 10 minutes (variable). La fonction priseRdv() affiche l'heure de debut et de fin de rdv.
contraintes : 
    -on doit afficher l'heure de debut et fin du rdv (console)
    -les heure de rdv doivent etre entre 8h00 et 16h30
    -apres 60 minutes il faut remettre les minutes à 0 et ajouter 1h, exemple : 15h55 + 15 minutes = 16h10 et non pas 15h70 
    -le dernier rdv doit etre à 16h30 - 15 minutes, l'heure de fin de rdv et la durée des rdv peuvent varier
    -afficher une erreur si la demande est en dehors des heure de travail, exemple 'Les RDV commencent à 8h' et 'Les RDV doivent etre pris avant 16h20'
    -faire des demandes entre 0h et 24h et des minutes entre 0 et 60 (pas de demande à 38h78)
    -formatter l'heure pour afficher par exemple 15h09 et non 15h9
    -Pour tester la fonction: entrer en parametre 7h00, 7h50, 8h, 8h10, 8h50, 15h40, 15h50, 15h55, 17h, 17h90, 16h00, 16h10, 16h20, 16h30, 16h50 et verifier les valeurs
*/

priseRdv(27, 0)