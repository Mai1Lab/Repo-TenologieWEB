const express = require('express');// Importa il modulo express
const app = express();// Crea un'applicazione Express

app.get('/', (req, res) => { // Definisce una route per la root del server
    // Quando viene effettuata una richiesta GET alla root, invia una risposta
    res.send('hello express app!') // Invia un messaggio di benvenuto
        });
        
app.listen(3000, () => {// Avvia il server sulla porta 3000
    console.log('Server in ascolto sulla porta 3000');// Stampa un messaggio di avviso
});
