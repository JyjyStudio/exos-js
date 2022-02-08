const url1 = `https://blockchain.info/ticker`;
function recupererPrix() {  
    let requete = new XMLHttpRequest(); // Crée un objet
    requete.open('GET', url1); //1er paramètre: GET ou POST ; 2e paramètre: l'url
    requete.responseType = 'json'; // nous attendons du Json
    requete.send(); // nous envoyons notre requete
    requete.onload = function() { // Dès qu'on recoit la reponse, cette fonction va s'executer
        if(requete.readyState === XMLHttpRequest.DONE) { //requete terminée
            if(requete.status == 200) { //200 = ca c'est bien passé
                let reponse = requete.response; // on stock la réponse
                let prixEnEuros = reponse.EUR.last;
                console.log('Prix du Bitcoin en €: ', prixEnEuros);
                document.getElementById('price-label')!.textContent = prixEnEuros;
            }
            else {
                alert('Un problème est survenu, merci de réessayer plus tard.')
            }
        }
    }
}
recupererPrix();
setInterval(recupererPrix, 5000);