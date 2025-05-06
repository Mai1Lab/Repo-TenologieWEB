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


//richiamo la rotta con un get e specificando l'id dell'oggetto
router.get('/item/:id', (req, res) => {
    const itemId = req.params.id; // Ottiene l'ID dell'oggetto dalla richiesta
    const item = { id: itemId, name: `Item ${itemId}` }; // Crea un oggetto con l'ID e il nome dell'oggetto
    res.render('item', { item }); // Renderizza la pagina "item.ejs" passando l'oggetto creato precedentemente come variabile
  });



module.exports = router;