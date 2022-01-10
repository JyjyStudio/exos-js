function addition(a,b) {return a+b}
function soustraction(a,b) {return a-b}
function multiplication(a,b) {return a*b}
function division(a,b) {if(b !==0) {return (a/b)} else throw new Error('Impossible de diviser par 0.')}

let restart = false;

do {
    do {
        var question = Number(prompt('Que souhaitez vous faire ?\n\n1- Addition \n2- Soustraction\n3- Multiplication\n4- Division'))
    } while (question != 1 && question !=2 && question !=3 && question !=4);

    do {
        var chiffre1 = Number(prompt('Entrez un 1er chiffre'))
    } while (isNaN(chiffre1));

    do {
        var chiffre2 = Number(prompt('Entrez un 2nd chiffre'))
    } while (isNaN(chiffre2));

    try {
        switch (question) {
            case 1:
                var resultat = addition(chiffre1, chiffre2)
                break;
            case 2:
                var resultat = soustraction(chiffre1, chiffre2)
                break;
            case 3:
                var resultat = multiplication(chiffre1 ,chiffre2)
                break;
            case 4:
                var resultat = division(chiffre1, chiffre2)
                break;
        
            default:
                throw new Error('Une erreur est survenue')
                break;
        }    
        alert(`Voici le résultat : ${resultat}`);
    } catch (error) {
        alert(error);
    }
    restart = confirm('Souhaitez vous recommencer un calcul ?');
} while(restart)