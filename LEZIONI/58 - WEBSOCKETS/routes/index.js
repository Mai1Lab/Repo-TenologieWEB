// routes/index.js
const express = require('express');
const router = express.Router();

// GET homepage
router.get('/', (req, res) => {
  res.render('index', { titolo: 'Benvenuto nella Home Page!' });
});

router.get ('/items', (req, res) => { // Definisce una route per la pagina degli oggetti
    // Quando viene effettuata una richiesta GET alla pagina degli oggetti, invia una risposta
    const title = 'Lista degli oggetti';
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];

  res.render('items', { title, items }); // renderizzo la pagina items.ejs e passo il titolo e gli oggetti come variabili
}); // Invia la lista degli oggetti come risposta quando viene effettuata una richiesta GET alla pagina localhost:3000/items



module.exports = router;