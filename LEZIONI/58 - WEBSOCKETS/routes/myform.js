const express = require('express');
const router = express.Router();

// Mostra il form
router.get('/', (req, res) => {
  res.render('form'); // Assicurati che ci sia views/form.ejs
});

// Gestisce l'invio del form
router.post('/', (req, res) => { // Assicurati che il form invii una richiesta POST a questa rotta
  // Estrai i dati dal corpo della richiesta
  const nome = req.body.nome; // Assicurati che il form abbia un campo "nome"
  const email = req.body.email;     // Assicurati che il form abbia un campo "email"

  // Log per debug
  console.log(`Nome: ${nome}, Email: ${email}`);

  // Mostra la pagina di successo
  res.render('success', { nome, email }); // Assicurati che ci sia views/success.ejs
});

module.exports = router;
// In questo file definisco la rotta per il form e gestisco l'invio del form stesso.