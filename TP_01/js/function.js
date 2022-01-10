let masques = [
    ['immunologie', 10],
    ['radiologie', 18],
    ['chirurgie', 5],
    ['neurologie', 15],
    ['pneumologie', 0],
    ['cardiologie', 30],
    ['odontologie', 24],
    ['dermatologie', 0],
    ['cardiologie', 46],
    ['traumatologie', 12]
];

let table = document.getElementById('table');
console.log(table);

for (let i = 0; i < masques.length; i++) {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let service = masques[i][0];
    let qtte = masques[i][1]
    let td_label1 = document.createTextNode(service);
    td1.appendChild(td_label1);
    tr.appendChild(td1);
    if (i % 2)  {
        tr.setAttribute('class', 'white')
    }else tr.setAttribute('class', 'gray')
    let td_label2 = document.createTextNode(qtte);
    td2.appendChild(td_label2);
    Number(td_label2.textContent) == 0 ? td2.innerHTML = '<button>Réapprovisionner</button>' : ''; 
    tr.appendChild(td2);
    table.appendChild(tr);
}