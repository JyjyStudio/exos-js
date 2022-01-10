document.title = "Document Object Model DOM";

let header = document.getElementsByTagName('header');
let logo = document.getElementById('logo');
let container = document.getElementsByClassName('container');
let p1 = document.getElementsByTagName('p'); 
let p2 = document.querySelectorAll('p');

console.log(header);
console.log(logo);
console.log(container);
console.log(p1);
console.log(p2);

// header.innerHTML = "test";