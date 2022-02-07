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
const container = document.getElementById('container');
const templateDiv = document.getElementById('template');
const apiUrl = `https://jsonplaceholder.typicode.com/posts`;
const getArticles = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(apiUrl);
        const articles = yield response.json();
        return articles;
    }
    catch (error) {
        alert(error);
    }
});
function displayArticlesV1(article) {
    templateDiv.innerHTML += `
        <div id="article${article.id}" class="article">
            <h2 id="articleTitle">${article.title}</h2>
            <p id="content">${article.body}</p>
            <a href="article.html?id=${article.id}" id="articleLink">Voir l'article</a>
        </div> `;
}
function displayArticlesV2(article) {
    const template = document.getElementById('templateArticle');
    const clone = document.importNode(template.content, true);
    const link = clone.getElementById('articleLink');
    const articleTitle = clone.querySelector('.article h2');
    const content = clone.querySelector('.article p');
    const linkId = clone.querySelector('.article a');
    clone.getElementById('articleTitle').textContent = article.title;
    clone.getElementById('content').textContent = article.body;
    articleTitle.id = `article${article.id}`;
    content.id = `content${article.id}`;
    link.id = `link${article.id}`;
    link.href = `article.html?id=${article.id}`;
    container.appendChild(clone);
}
function renderArticles() {
    return __awaiter(this, void 0, void 0, function* () {
        const articles = yield getArticles();
        for (let i = 0; i < 5; i++) {
            displayArticlesV2(articles[i]);
        }
    });
}
renderArticles();
