/* V1
const getUsers = () => {
    let data = fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) //renvoi une promesse avec la data de l'url
        .then(console.log) //met en console la data recue
}
getUsers();
*/

/* V2
const getUsers = async () => {
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) 
    console.log(data)
}
getUsers();
*/

/*V3*/ 
const getUsers = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(response.ok) {
            let data = await response.json();
            console.log(data);
        } else console.error('Retour du serveur : ', response.status);
    }catch(e) {
        console.log('catch : ', e)
    }
}
getUsers();

// To add an user via POST
const postUser = async (data: any) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    });
    if(response.ok){
        let responseData = await response.json()
        console.log('data envoyée :', data); 
        console.log('data reçue :', responseData); 
    }else console.error('Retour de serveur : ', response.status)
}
postUser({
    nom : 'Ben Youssef',
    prenom : 'Jyhad',
    age : 31
});


//Fetch user from github
const getInfoFromGithub = async (pseudo: any) => {
    let response = await fetch(`https://api.github.com/users/${pseudo}`)
    let responseData = await response.json()
    console.log(responseData);
    return responseData;
}
// getInfoFromGithub('jyjystudio');
let div = <HTMLElement>document.getElementById('infosGit');
div.style.color = 'green';
getInfoFromGithub('jyjystudio').then(response => div.innerHTML = `by ${response.login}`);