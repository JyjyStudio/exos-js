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

    if (minute >= 60) {
        console.log('Veuillez verifier votre demande de rdv.');
    }
    else if (heure >= 8 && heure <= 16) {
        if(heure == 16) {
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

//prise de rdv entre 8h et 16h20. Duree du rdv 10 minutes. Affiche l'heure de debut et de fin de rdv.
/*
contraintes : 
    -heure de rdv entre 8h00 et 16h30
    -apres 60 minutes on remet les minutes à 0 et on ajoute 1h exemple : 15h55 + 15 minutes = 16h10 
    -le dernier rdv doit etre (dureeRdv - heure de fin de journée) ici : à 16h30 - 15 minutes
    -on doit afficher l'heure de debut et fin du rdv
    -afficher une erreur si en dehors des heure de travail exemple 'Les RDV commencent à 8h' et 'Les RDV doivent etre pris avant 16h20'
    -formatter l'heure pour afficher par exemple 15h09 et non 15h9
    -Pour tester la fonction: entrer en parametre 16h00, 16h10, 16h20, 16h30, 16h50, 15h40, 15h50, 15h55, 7h00, 7h50, 8h, 8h10, 8h50, 17h, 17h90 et verifier les valeurs
*/
priseRdv(15, 50)