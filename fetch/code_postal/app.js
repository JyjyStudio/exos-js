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
let input = document.getElementById('cp');
let form = document.getElementById('form');
let result = document.getElementById('result');
let ul = document.createElement('ul');
input.addEventListener('keyup', function () {
    return __awaiter(this, void 0, void 0, function* () {
        ul.innerHTML = "";
        this.reportValidity();
        if (input.value.length == 5) {
            let li = document.createElement('li');
            let url = `https://geo.api.gouv.fr/communes?codePostal=${input.value}&fields=nom,code,codesPostaux,codeDepartement,codeREgion,population&format=json&geometry=centre`;
            try {
                let data = yield fetch(url);
                let response = yield data.json();
                if (response.length) {
                    response.forEach((ville) => {
                        li.innerHTML += `<li><b>${ville.nom}</b> - ${ville.population} habitants.</li>`;
                    });
                }
                else {
                    li.innerHTML += `<li><b>Il n'y a pas de ville avec ce code postal.</li>`;
                }
            }
            catch (e) {
                console.error("Voici l'erreur: ", e);
                li.innerHTML += `<li><b>Il y a eu une erreur.</li>`;
            }
            finally {
                ul.appendChild(li);
                result.appendChild(ul);
            }
        }
    });
});
