    // Generazione del numero casuale tra 1 e 100
    // // Il numero misterioso da indovinare math.floor(Math.random() * 100) + 1;
    // // Math.floor() arrotonda il numero alla parte intera più vicina
var numeroMisterioso = Math.floor(Math.random() * 100) + 1;
console.log(numeroMisterioso); // per vedere il numero misterioso generato
    //random genera numeri casuali tra 0 e 1, moltiplicandolo per 100 ottengo numeri tra 0 e 99,
    // aggiungendo 1 ottengo numeri tra 1 e 100.


    // Contatore dei tentativi fatti
var numTentativi = 0;


    // Numero massimo di tentativi consentiti
var maxTentativi = 10;

    // Tempo massimo per indovinare il numero in secondi
var tempoMassimo = 30;

    //Tempo rimanente
var tempoRimanente = tempoMassimo; // al'inizio è uguale al tempo massimo

    // Intervallo del timer
var timerInterval;

    // Recupero dell'input dell'utente
var inputTentativo = document.getElementById("tentativo");
    // prelevo input da html  <input type="text" id="tentativo">
    // Recupero del pulsante di invio del numero inserito come id nel html


    // Aggiunta dell'evento "keypress" sull'input, do la possibiltà all'utente
    // di premere il tasto "Invio" per inviare il numero oltre a cliccare sul pulsante.
inputTentativo.addEventListener("keypress", function(event) {
    // Verifica se il tasto premuto è il tasto "Invio"
    // posso usare anche event.key === "Enter"
if (event.keyCode === 13) {
verificaTentativo();
}
});

    // Funzione per verificare il tentativo
function verificaTentativo()
 {
    // Incremento del numero di tentativi fatti
    numTentativi++; // incremento il numero di tentativi


    // Recupero del valore inserito dall'utente
    var valoreTentativo = parseInt(inputTentativo.value);


    // Verifica se il valore inserito è un numero valido
    if (isNaN(valoreTentativo)) { 
        // isNaN() verifica se il valore non è un numero
        // Se il valore non è un numero, mostro un messaggio di errore
    document.getElementById("risultato").innerHTML = "Devi inserire un numero!";
    } else if (valoreTentativo < 1 || valoreTentativo > 100) {
    document.getElementById("risultato").innerHTML = "Il numero deve essere compreso tra 1 e 100!";
    } else {
    // Verifica se il numero inserito è corretto
if (valoreTentativo === numeroMisterioso) { // che culo ho già trovato il numero giusto!!
    clearInterval(timerInterval); // fermo il timer
  
    
    document.getElementById("risultato").innerHTML ="Hai indovinato il numero in " + numTentativi + " tentativ" + (numTentativi > 1 ? "i" : "o") + "!";
    inputTentativo.disabled = true; // disabilito l'input per non far inserire altri numeri
} else {
    var messaggioRisultato = "Il numero è ";
    var iconaRisultato = "";
    if (valoreTentativo < numeroMisterioso) {
    messaggioRisultato += "più alto.";
    iconaRisultato = '<i class="fas fa-arrow-up"></i>';
    } else {
    messaggioRisultato += "più basso.";
    iconaRisultato = '<i class="fas fa-arrow-down"></i>';
    }
    document.getElementById("risultato").innerHTML = messaggioRisultato +iconaRisultato; //icona concatenata al messaggo
    }
    // Verifica se il numero massimo di tentativi è stato raggiunto
    if (numTentativi >= maxTentativi) {
    clearInterval(timerInterval);
    document.getElementById("risultato").innerHTML = "Hai esaurito i tentativi!";
    inputTentativo.disabled = true;
    }
    }
    // Aggiornamento del numero di tentativi effettuati
    var numTentativiElement = document.getElementById("num-tentativi");
    numTentativiElement.innerHTML = numTentativi;
    // Azzeramento del valore dell'input
    inputTentativo.value = "";
    };


    // Funzione per aggiornare il timer
function aggiornaTimer() {
    tempoRimanente--;
    if (tempoRimanente <= 0) {
    clearInterval(timerInterval);
    document.getElementById("risultato").innerHTML = "Tempo scaduto!";
    document.getElementById("tentativo").disabled = true;
    } else {
    document.getElementById("timer").innerHTML = tempoRimanente + "s";
    }
    }
    // Avvio del timer
    timerInterval = setInterval(aggiornaTimer, 1000);
    //setInterval() esegue la funzione aggiornaTimer ogni secondo (1000 millisecondi)
    // Avvio del timer all'inizio del gioco
    