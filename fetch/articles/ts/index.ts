const container = document.getElementById('container') as HTMLElement;
const templateDiv = document.getElementById('template') as HTMLElement;
const apiUrl = `https://jsonplaceholder.typicode.com/posts`;

const  getArticles = async() => {
    try {
        const response = await fetch(apiUrl);
        const articles = await response.json();
        return articles;
    } catch (error) {
        alert(error);
    }
}

interface Article {
    title : string,
    body: string,
    id : number
}

function displayArticlesV1 (article:Article) {
    templateDiv.innerHTML += `
        <div id="article" class="article">
            <h2 id="articleTitle">${article.title}</h2>
            <p id="content">${article.body}</p>
            <a href="article.html?id=${article.id}" id="articleLink">Voir l'article</a>
        </div> `;
}

function displayArticlesV2 (article:Article) {
    const template = document.getElementById('templateArticle') as HTMLTemplateElement;
    const clone = document.importNode(template.content, true) as DocumentFragment;
    const link = clone.getElementById('articleLink') as HTMLLinkElement;

    clone.getElementById('articleTitle')!.textContent = article.title;
    clone.getElementById('content')!.textContent = article.body;
    link.href = `article.html?id=${article.id}`;

    container.appendChild(clone);
}

async function renderArticles() {
    const articles = await getArticles();
    for (let i = 0; i < 5; i++) {
        displayArticlesV2(articles[i]);
    }
}
renderArticles();