"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let response = yield fetch('https://jsonplaceholder.typicode.com/users');
        if (response.ok) {
            let data = yield response.json();
            console.log(data);
        }
        else
            console.error('Retour du serveur : ', response.status);
    }
    catch (e) {
        console.log('catch : ', e);
    }
});
getUsers();
const postUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    let response = yield fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        let responseData = yield response.json();
        console.log('data envoyée :', data);
        console.log('data reçue :', responseData);
    }
    else
        console.error('Retour de serveur : ', response.status);
});
postUser({
    nom: 'Ben Youssef',
    prenom: 'Jyhad',
    age: 31
});
const getInfoFromGithub = (pseudo) => __awaiter(void 0, void 0, void 0, function* () {
    let response = yield fetch(`https://api.github.com/users/${pseudo}`);
    let responseData = yield response.json();
    console.log(responseData);
    return responseData;
});
let div = document.getElementById('infosGit');
div.style.color = 'green';
getInfoFromGithub('jyjystudio').then(response => div.innerHTML = `by ${response.login}`);
