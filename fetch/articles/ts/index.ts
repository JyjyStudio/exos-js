let templateDiv = document.getElementById('template') as HTMLElement;
let apiUrl = `https://jsonplaceholder.typicode.com/posts`;

interface Artcicle {
    title : string,
    body: string,
    id : number
}

function displayArticles (article:Artcicle) {
    templateDiv.innerHTML += `
        <div id="article" class="article">
            <h2 id="articleTitle">${article.title}</h2>
            <p id="content">${article.body}</p>
            <a href="article.html?id=${article.id}" id="articleLink">Voir l'article</a>
        </div> `
}

const  getArticles = async() => {
    let response = await fetch(apiUrl);
    let data = await response.json();
    console.log(data[0]);
    
    for (let i = 0; i < 6; i++) {
        displayArticles(data[i])
    }
}
getArticles();
