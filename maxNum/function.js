//Le plus grand chiffre
const maxNum = (a, ...b) => console.log(`Le plus grand chiffre est ${Math.max(a, ...b)}.`);
maxNum(3, 56, 20, 2, 21, 222);

//Le plus petit chiffre
const minNum = (a, ...b) => console.log(`Le plus petit chiffre est ${Math.min(a, ...b)}.`);
minNum(3, 56, 20, 2, 21, 222);

//Addition avec le rest parameter
const addition = (...a) => {
    return a.reduce((accumulator, number) => {
        return accumulator += number;
    });
}
let exemple1 = addition(1, 2); // 3
let exemple2 = addition(1, 2, 3, 4, 5); // 15
console.log(exemple1);
console.log(exemple2);
