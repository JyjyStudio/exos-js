"use strict"
const arr = [1, 2, 3, 4, 5, 6];

// 1er exemple :

function test1(array, callback) {
    return array.map(item => {
        let result = item * 2
        return callback(result);
    })
}
const mapResult = test1(arr, callback => callback / 2);
console.log(mapResult); // => [1, 2, 3, 4, 5, 6]


// 2e exemple :

function test2(array, callback) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]));
    }
    return newArr;
}
const forResult = test2(arr, val => val * 2);
console.log(forResult); // => [2, 4, 6, 8, 10, 12]