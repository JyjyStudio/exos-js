function addition(...nombres) {
    let resultat = 0;
    nombres.forEach(nombre => {
        resultat += nombre;
    })
    console.log(resultat);
}

addition(1,2,3,4,5,6584,6,55,8,5,2,1,4,5,227854,26545,8,5,452,1452)

//Addition avec le rest parameter et reduce
const addition = (...a) => {
    return a.reduce((accumulator, number) => {
        return accumulator += number;
    });
}
let exemple1 = addition(1, 2); // 3
let exemple2 = addition(1, 2, 3, 4, 5); // 15
console.log(exemple1);
console.log(exemple2);