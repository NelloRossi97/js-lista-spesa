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
let listItem = document.createElement('li');

counter = 0;
while (counter < shopList.length && shopList){
    listItem.innerHTML += shopList[counter];
    shopListBox.appendChild(listItem);
    counter++;
}