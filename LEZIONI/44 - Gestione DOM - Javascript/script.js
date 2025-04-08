function validaform(){
    var nome = document.getElementById("nome").value; // mi prendo il valore(.value) del campo nome
    var email = document.getElementById("email").value; // mi prendo il valore del campo email

    //vado a validare i campi inseriti con una serie di controlli

    if(nome==""){
        // se vuoto vuol dire che ritorno false
        alert("Il campo nome e' obbligatorio!");
        return false;
    }
    if (email==""){
        // se vuoto vuol dire che ritorno false
        alert("Il campo email è obbligatorio!");
        return false;
    }

    return true; // se non sono vuoti ritorno true ( form validata)

};


const itemList = document.querySelector('#item-list');

itemList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('selected');
    }
});

const form = document.querySelector('#add-item-form');// mi prendo il form
form.addEventListener('submit', function(event) {//mi prendo l'evento submit del form
    //evito il comportamento di default del form (cioè il refresh della pagina)     
    event.preventDefault(); // evito il refresh della pagina
    //mi prendo il valore del campo di input (il campo di testo)
    const input = document.querySelector('#item-input');
    const value = input.value.trim();  // trim() toglie gli spazi vuoti all'inizio e alla fine della stringa
    if (value !=='') {// se il valore non è vuoto
        //creo un nuovo elemento li (lista) e lo aggiungo alla lista
        addItemToList(value);
        input.value = '';
        input.focus();
    }
});

function addItemToList(value) {
    const newItem = document.createElement('li');
    newItem.textContent = value;
    itemList.appendChild(newItem);
}

 const removeSelectedButton=document.querySelector('#remove-selected-button');
 removeSelectedButton.addEventListener('click', function() {
    const selectedItems = document.querySelectorAll('.selected');
    selectedItems.forEach(function(item) {
        item.remove();
    });
 });