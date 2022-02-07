let articleDiv = document.getElementById('article') as HTMLElement;
let articleTitle = document.getElementById('articleTitle') as HTMLElement;
let contentDiv = document.getElementById('content') as HTMLElement;
let url = location.search
let id = new URLSearchParams(url).get('id') as string;
console.log(id);


const  getArticle = async() => {
    let apiUrl = `https://jsonplaceholder.typicode.com/posts`;
    let response = await fetch(apiUrl);
    let data = await response.json();
    articleTitle.textContent = data[(parseInt(id)-1)].title
    contentDiv.textContent = data[(parseInt(id)-1)].body
}
getArticle();
