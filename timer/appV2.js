"use strict";
let btn = document.getElementById('btn');
let second = 10;
let interval;
btn.addEventListener('click', start);
function start() {
    document.body.innerHTML += `${second}<br>`;
    interval = setInterval(count, 1000);
}
function count() {
    second--;
    if (second == 0) {
        stop();
    }
    else {
        document.body.innerHTML += `${second}<br>`;
    }
}
function stop() {
    clearInterval(interval);
    document.body.innerHTML += 'Stop !';
}
