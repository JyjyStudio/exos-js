const url2 = `https://blockchain.info/ticker`;
async function recupererPrixViaFetch() {  
    let requete = await fetch(url2);
    let data = await requete.json();
    if(requete.ok) {
        let prixEnEuros = data.EUR.last;
        document.getElementById('price-label')!.textContent = prixEnEuros;
    }
    else {
        alert('Un problème est survenu, merci de réessayer plus tard.')
    }
}
recupererPrixViaFetch();
setInterval(recupererPrixViaFetch, 5000);