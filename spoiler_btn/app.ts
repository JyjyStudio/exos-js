let spoilerBtn = document.getElementById('btn') as HTMLButtonElement;
spoilerBtn!.textContent = 'Afficher';
let hiddenText = document.createElement('p')
hiddenText.textContent = 'Voici le texte caché';

let hidden = true;
spoilerBtn.addEventListener('click', ()=> {
    if(hidden){
        document.body.append(hiddenText);
        spoilerBtn!.textContent = 'Cacher';
        hidden = false;
    }
    else {
        hiddenText.remove();
        spoilerBtn!.textContent = 'Afficher';
        hidden = true;
    }
})