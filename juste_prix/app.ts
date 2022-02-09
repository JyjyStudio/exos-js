const formulaire2 = document.getElementById('form') as HTMLDivElement; 
const priceInput = document.getElementById('prix') as HTMLInputElement;
const small = document.querySelector('small') as HTMLElement;
const instructions = document.getElementById('instructions') as HTMLElement;

const maxValue = 1001;
let randomNumber = Math.floor(Math.random() * maxValue);
console.log(randomNumber);

priceInput.disabled = false;
let tentative = 0;

small.style.display = 'none';

formulaire2.addEventListener('submit', (e) => {
    e.preventDefault();
    let priceValue = parseInt(priceInput.value);
    
    if(!priceValue || isNaN(priceValue)) {
        priceInput.style.boxShadow = "0 0 10px red";
        small.style.display = 'block';
    }else {
        tentative++
        let instruction = document.createElement('div') as HTMLElement;
        if(priceValue == randomNumber) {
            priceInput.style.boxShadow = "0 0 10px green";
            instruction.classList.add('instruction', 'fini');
            instruction.textContent = `(#${tentative}) (${priceValue}) Bravo, vous avez trouvé le bon nombre !`;
            instructions.prepend(instruction);
            priceInput.disabled = true;
            document.querySelector('button')!.disabled = true;
        } else if(priceValue < randomNumber) {
            priceInput.style.boxShadow = "0 0 10px red";
            instruction.classList.add('instruction', 'plus');
            instruction.textContent =`(#${tentative}) (${priceValue}) C'est plus !`;
            instructions.prepend(instruction);
        } else {
            priceInput.style.boxShadow = "0 0 10px red";
            instruction.classList.add('instruction', 'moins');
            instruction.textContent = `(#${tentative}) (${priceValue}) C'est moins !`;
            instructions.prepend(instruction);
        }
        if(instructions.childElementCount > 4) { //pour garder seulement les 4 derniers résultats
            instructions.lastChild!.remove()
        }
    }
    priceInput.value = "";    //reinitialise l'entrée de l'input après chaque tentative
});

formulaire2.addEventListener('keyup', () => {
    if(!isNaN(parseInt(priceInput.value))){
        small.style.display = 'none';
        priceInput.style.boxShadow = "none";
    }
});