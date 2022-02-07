const url = `https://blockchain.info/ticker`;
async function recupererPrix() {  
    let requete = await fetch(url);
    let data = await requete.json();
    if(requete.ok) {
        let prixEnEuros = data.EUR.last;
        document.getElementById('price-label')!.textContent = prixEnEuros;
    }
    else {
        alert('Un problème est survenu, merci de réessayer plus tard.')
    }
}
recupererPrix();
setInterval(recupererPrix, 5000);

export {} //permet d'éviter le probleme des variables de même nom sur plusieurs fichiers ts