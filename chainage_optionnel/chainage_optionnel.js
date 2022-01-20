//chainage optionnel 
const country = {
    name : 'Finland',
    population : 500000,
    shores : true,
    forest : true, 
    welcome() {console.log('Tervetuola suomeen')}, //Bienvenue en Finlande
    superficy : 338440, 
    borders : ['Sweden', 'Russia', 'Norway']
};
console.log(country);
country.welcome?.();//si la fonction welcome existe => tu l'excecute
console.log(country?.population);// si country existe affiche moi population
country.population?console.log(country.population) : ""; //equivalent a la ligne du dessus
console.log(country.borders?.[0]); // si la prop borders existe alors affiche moi son premier element
country.borders?.forEach(border => console.log(border)); //si border alors affiche moi ttes les borders 