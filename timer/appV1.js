"use strict";
let btn2 = document.getElementById('btn');
btn2.addEventListener('click', function start() {
    for (let i = 0; i < 10; i++) {
        setTimeout(function decompte() {
            if (i !== 9) {
                document.body.innerHTML += `${9 - i}<br>`;
            }
            else {
                document.body.innerHTML += 'Stop !';
            }
        }, i * 1000);
    }
});
