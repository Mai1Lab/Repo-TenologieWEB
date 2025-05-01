const express = require('express');
const router = express.Router();

// Mostra il form all'utente
router.get('/', (req, res) => {
  res.render('form'); // form.ejs nella cartella "views"
});

// Gestisce l'invio del form
router.post('/', (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;
  // Per ora stampiamo solo i dati
  console.log(`Nome: ${nome}, Email: ${email}`);
  res.send(`Hai inviato: ${nome}, ${email}`);
});

module.exports = router;