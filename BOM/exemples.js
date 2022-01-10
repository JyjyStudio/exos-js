// Modifier title
document.title="Browser Objet Model BOM"

// Objet window

function ouvrir() {
    fenetre = window.open('', '', 'width=900, height=600');
}

function redimentionner() {
    fenetre.resizeTo(500, 300);
}

function fermer() {
    fenetre.close();
}

function nouvelOnglet(){ window.open('https://github.com/jyjystudio', '_blank')}

document.querySelector('#open').addEventListener('Click', ouvrir)
document.querySelector('#resize').addEventListener('Click', redimentionner)
document.querySelector('#close').addEventListener('Click', fermer)
document.querySelector('#nouvelOnglet').addEventListener('click', nouvelOnglet)

// Objet navigator

document.querySelector("#cookies").innerHTML = 'Les cookies sont-ils acceptés sur cette page ? <b>' + navigator.cookieEnabled;
document.querySelector("#systeme").innerHTML = '</b>Le systeme d\'exploitation est : <b>' + navigator.platform;
document.querySelector("#langue").innerHTML = '</b>La langue sur cette page est : <b>' + navigator.language + '</b>';
document.querySelector("#connection").innerHTML = '</b>Network : voir console</b>', console.log(navigator.connection);
document.querySelector("#navigateur").innerHTML = '</b>navigateur : <b>'+ navigator.vendor + '</b>', console.log(navigator.vendor );

// Objet History

let back = document.querySelector('#back')
let forward = document.querySelector('#forward')
function retour() { history.back() }
function apres() { history.forward()}

back.addEventListener('click', retour);
forward.addEventListener('click', apres);

// Objet location (url)

function recharger() {location.reload()}
document.querySelector('#recharger').addEventListener('click', recharger)

function rediriger() {location.href = 'https://github.com/jyjystudio'}
document.querySelector('#rediriger').addEventListener('click', rediriger)

// Objet screen

document.querySelector('#hauteur').innerHTML = "largeur de l'écran : <b>" + screen.availWidth + "px</b>"
document.querySelector('#largeur').innerHTML = "hauteur de l'écran : <b>" + screen.availHeight + "px</b>"
document.querySelector('#resolution').innerHTML = "résolution : <b>" + screen.pixelDepth + " PPP</b>" 