let input = document.getElementById('cp') as HTMLInputElement;
let form = document.getElementById('form') as HTMLFormElement;
let result = document.getElementById('result') as HTMLElement;
let ul = document.createElement('ul') as HTMLElement;
interface Ville {
    nom : string,
    population : string
}
input.addEventListener('keyup', async function() {
    ul.innerHTML = "";
    this.reportValidity();
    if(input.value.length == 5) {
        let li = document.createElement('li') as HTMLElement;
        let url = `https://geo.api.gouv.fr/communes?codePostal=${input.value}&fields=nom,code,codesPostaux,codeDepartement,codeREgion,population&format=json&geometry=centre` as string;
        try {
            let data = await fetch(url);
            let response = await data.json();
            if(response.length) {
                response.forEach((ville : Ville) => {
                    li.innerHTML += `<li><b>${ville.nom}</b> - ${ville.population} habitants.</li>`
                });
            }else {
                li.innerHTML += `<li><b>Il n'y a pas de ville avec ce code postal.</li>`
            }
        }catch (e) {
            console.error("Voici l'erreur: ", e)
            li.innerHTML += `<li><b>Il y a eu une erreur.</li>`
        } finally {
            ul.appendChild(li);
            result.appendChild(ul);
        }
    }
});
