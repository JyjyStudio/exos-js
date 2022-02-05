const container = document.getElementById('container') as HTMLElement;
const templateDiv = document.getElementById('template') as HTMLElement;
const apiUrl = `https://jsonplaceholder.typicode.com/posts`;

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
        </div> `
}
function displayArticlesV2 (article:Article) {
    const template = document.getElementById('templateArticle') as HTMLTemplateElement;
    const clone = document.importNode(template.content, true) as any;
    
    clone.getElementById('articleTitle').textContent = article.title;
    clone.getElementById('content').textContent = article.body;
    
    container.appendChild(clone);
}

// const  getArticles = async() => {
//     const response = await fetch(apiUrl);
//     const data = await response.json()
//     .then(function (articles) {return articles})
// }
// getArticles();
async function getArticles() {
    try {
        const httpBodyResponse = await fetch(apiUrl);
        const articles = await httpBodyResponse.json();
        return articles;
    } catch (error) {
        alert(error);
    }
}

async function main() {
    const articles = await getArticles();
    console.log(articles[0].title);
    
    for (let i = 0; i < 6; i++) {
        //     displayArticlesV1(data[i])
            displayArticlesV2(articles[i])
        }
  }
  main()