// Importa le dipendenze necessarie
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// Crea un'istanza dell'applicazione Express
const app = express();

app.set('view engine', 'ejs'); // Imposta il motore di visualizzazione su EJS


// Configura il middleware per il parsing del corpo delle richieste HTTP
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configura la cartella "public" per i file statici
app.use(express.static(path.join(__dirname, 'public')));


// Definisci le rotte dell'applicazione
const indexRouter = require('./routes/index'); // Importa il router per la home page e 
// nel file routes/index.js definisco la rotta per la pagina degli oggetti e altre rotte.

// const userRouter = require('./routes/user');
// const postRouter = require('./routes/post');
const myformRouter = require('./routes/myform'); 
app.use('/', indexRouter);
// app.use('/users', userRouter);
// app.use('/posts', postRouter);
app.use('/myform', myformRouter); // Aggiungi questa riga per gestire le richieste alla rotta "/posts"



// Gestisci gli errori
app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).send('Internal server error');
});
// Avvia il server sulla porta specificata
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Server avviato sulla porta ${PORT}`);
});