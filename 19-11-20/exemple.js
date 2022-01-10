


//Exercice 2 Section 7 : Body Mass Index (Niveau Avancé)

//1ere methode :

// let poids         = prompt("Quel est votre poids ? (en Kg)");
// let tailleEnCm    = prompt("Quel est votre taille en cm ?");
// function calculerIMC(poids, tailleEnCm) {
//     let tailleEnMetres = (tailleEnCm / 100);
//     imc                = poids / ( tailleEnMetres * tailleEnMetres );
//     return imc;
//     }
// alert(calculerIMC(poids, tailleEnCm));


// //2eme methode:

// let poids         = prompt("Quel est votre poids ? (en Kg)");
// let tailleEnCm    = prompt("Quel est votre taille en cm ?");
// function calculerIMC(poids, tailleEnCm) {
//     return poids / ( Math.pow((tailleEnCm / 100), 2) );
//     }
// alert(calculerIMC(poids, tailleEnCm));


//Exercice 1 Section 7 : Abracadabra (Niveau Débutant)

// function abracadabra() {
//     let prenom = prompt("Quel est votre prénom ?");
//     let nom    = prompt("Quel est votre nom ?");    
//     let age    = prompt("Quel est votre age ?");
//     alert("Sapristi! On ne m'avait pas prévenu que c'était vous " 
//     + prenom 
//     + " ! Euh.. Je veux dire.. Monsieur le grand magicien " 
//     + nom 
//     +" ! Cela fait déjà "
//     + age 
//     + " ans que vous faites rayonner notre contrée !") 
// }

// abracadabra();


// Exercice Voyages Quizz fin section 6

// function voyager(nombreAdultes = 0, nombreEnfants = 0, classe ="Eco") {
//     let prix = 0;
//     if (classe == "Eco"){
//        prix = (nombreAdultes * 400) + (nombreEnfants * 100);
//     }
//     else if (classe == "Business") {
//         prix = (nombreAdultes * 900) + (nombreEnfants * 400);
//     }
//     else {
//         prix = (nombreAdultes * 1400) + (nombreEnfants * 900);
//     }
//     console.log("Bonjour et Bienvenue à bord, Voici le montant à payer: " + prix + "€ !")
// }
// voyager(2, 2, 'Eco');


// Les fonctions Anonymes :
// -> Premiere façon d'appeler une fonction anonyme :

// let fonctionAnonyme = function () {
//     console.log("je suis une fonction anonyme");
// }
// fonctionAnonyme(); 

// ->Seconde façon d'appeler une fonction anonyme :
// Autoexecution de la fonction :
//(function () { console.log("je suis une fonction anonyme")} )();

// function prevoirAge(){
//     let age = prompt("Quel âge avez-vous ?");
//     //age = parseFloat(age); //nombres entier et decimaux
//     //age = parseInt(age); //nombre entier seulement
//     age = Number(age); //tous les nombres
//     alert("vous aurez bientot " + (age + 1) + " ans.");
// }
// prevoirAge();
// nombre = 45;
// nombreEnString  = nombre + ""; //"45", méthode barbare
// nombreEnString = nombre.toString(); //"45" bonne méthode


// Challenge section 6 session 30 :

// function demanderAge() {
//     const age = prompt("Quel age avez vous?");

//     if( isNaN(age) ){
//     alert("il y a une erreur!");
// }
//     else{
//         alert("vous avez " + age + " ans");
//     }
// }
// demanderAge();

////les paramètres par défaut : Gateaux

// function cuisiner(nombreDeGateaux, minutesDePreparation = 10, minutesDeCuisson = 15) {
//     let resultat = nombreDeGateaux * (minutesDePreparation + minutesDeCuisson);
//     return resultat;  
// }

// let tempsDePreparationGateauChocolat = cuisiner(4);
// let tempsDePreparationGateauFraisier = cuisiner(1, 20);
// console.log(tempsDePreparationGateauChocolat + tempsDePreparationGateauFraisier);

////Difference entre retourner et afficher :

// let nombreUn = 4, nombreDeux = 7;
// function addition(nombreA, nombreB) {
//     let result = nombreA + nombreB;
//     return result;  //Retourne result
// }
// addition(nombreUn,nombreDeux); // result non affiché car pas de console.log
// console.log(addition(nombreUn,nombreDeux)); //result affiché avec le console.log

////Difference entre retourner et afficher (2)

// let nombreUn = 4, nombreDeux = 7;
// function addition(nombreA, nombreB) {
//     let result = nombreA + nombreB;
//    console.log(result); //affiche result
// }
// addition(nombreUn,nombreDeux); //affiche result


////Variable globale et locale :

// let cri = "Toujours plus bas !";  //variable globale
// function criDeGuerre() {
//     let cri = "Toujours plus fort !"; // variable locale, elle est déja définie plus haut puis modifiée a l'instant seulement pour ma fonction
//     console.log(cri);
// }
// criDeGuerre(); //contient la variable locale cri, dans ma fonction elle vaut: Toujours plus fort!
// console.log(cri); // cri vaut : Toujours plus bas ! car est défini comme cela, en dehors de ma fonction



////variable globale, qui est définie à la racine de notre projet et qui sera accessible partout dans notre code : 

// let cri;
// function criDeGuerre() {
//     cri = "Toujours plus fort !"; // variable globale, car elle est déja définie plus haut puis modifiée a l'instant
//     console.log(cri);
// }
// criDeGuerre(); // -> Toujours plus fort !
// console.log(cri); // -> Toujours plus fort !



////variable locale:

// function criDeGuerre() {
//     let cri = "Toujours plus fort !"; //variable locale, non connue en dehors de ma fonction
//     console.log(cri);
// }
// criDeGuerre(); -> Toujours plus fort !
// console.log(cri) // -> variable cri non définie -> erreur



////fonction direBonjour avec prenom (alert + variable) :

// function direBonjour(prenom) {
//     alert("Bonjour " + prenom + " !")
// }
// direBonjour("Jyhad");



////Fonction addition : 

// function addition(nombreUn, nombreDeux) {
//     console.log(nombreUn + nombreDeux)
// }
// addition(50,80.5);



////Fonction direBonjour : (alert)

// function direBonjour() {
//     alert("Bonjour !")
// }
// direBonjour();



////prompt, confirm et alert, avec un peu de if et de else

// const age = prompt("Entrez votre age :");
// if(isNaN(age)){
// alert("il y a une erreur!")
// }
// else{alert("bonjour, vous avez " + age + " ans.");}
// const reponse = confirm("Ai-je raison??");
// if (reponse == true){
//     alert("Super =)")
// }
// else{
//     alert("ah mince =/")
// }
// if (confirm('Souhaitez-vous confirmer ?')){
//     document.write("merci d'avoir confirmé!");
// }
// else {
//     document.write("Vous avez cliqué sur le bouton Annuler");
// }


//// = += -= ++ --

// let nombreUn = 8, nombreDeux = 4, result;
// result = (nombreUn + nombreDeux) * 9; //108
// result += 2;  // result = result + 2 //110
// result++; //incrémentation, on ajoute 1 //111
// result--; //décrementation, on enlève 1 //110
// console.log(result); //110


//// Constantes :

// const prenom = 'Jyhad';
// const nom    = 'Ben Youssef'; 
// console.log('Bonjour ' + prenom + ' ' + nom + ' !');