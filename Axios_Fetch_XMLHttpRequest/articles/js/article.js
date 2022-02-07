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
let articleDiv = document.getElementById('article');
let articleTitle = document.getElementById('articleTitle');
let contentDiv = document.getElementById('content');
let url = location.search;
let id = new URLSearchParams(url).get('id');
console.log(id);
const getArticle = () => __awaiter(void 0, void 0, void 0, function* () {
    let apiUrl = `https://jsonplaceholder.typicode.com/posts`;
    let response = yield fetch(apiUrl);
    let data = yield response.json();
    articleTitle.textContent = data[(parseInt(id) - 1)].title;
    contentDiv.textContent = data[(parseInt(id) - 1)].body;
});
getArticle();
