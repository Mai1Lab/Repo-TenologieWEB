/*
JavaScript Ajax:

FAccio una chiamata XMLHttpRequest fatta all'url di google.
LA chiamata darà errore perchè non ho un Bearer Token, non posso fare una XMLHttpRequest
Non ho un BearerToken autorizzato! per fare qst richiesta. L'errore lo vedo dalla Console.
- Mi blocca google perchè non accetta quel tipo di richiesta risorsa da un Dominio che non sia
quello d'origine o uno con BearerToken autorizzato.

Altro motivo per cui da errore è che google non accetta richieste da un altro dominio.
- Non posso fare richieste da un dominio diverso da quello d'origine.

L'url https://www.google.com restituisce una pagina html, se faccio una richiesta con 
XMLHttpRequest mi da errore perchè non è una API che ritorna un JSON
*/
console.log("Script avviato");


var url= "https://www.google.com";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 ) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    }
}
xhr.send();
