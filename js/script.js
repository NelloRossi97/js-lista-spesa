/* 
Descrizione:
Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. 

Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci 
impone, in particolare alla variabile di indice. 
*/
const shopList = [
    "pane",
    "latte",
    "uova",
    "cipolle",
    "pan grattato",
    "carne",
    "patate",
    "maionese",
    "salsa di soia"
]
const shopListBox = document.getElementById('shop-list');
let increment = 0;
let counter = 0;

while (counter < shopList.length && shopList){
    const checkBox = document.innerHTML = `<input id="chkbx${increment}" type="checkbox" class="me-3">`
    let listItem = document.createElement('li');
    listItem.innerHTML += checkBox + shopList[counter];
    shopListBox.appendChild(listItem);
    increment++;
    counter++;
}

const btnUncheck = document.querySelector('button');

btnUncheck.addEventListener('click', function(){
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < checkboxes.length; i++){
        checkboxes[i].checked = false;
    }
})