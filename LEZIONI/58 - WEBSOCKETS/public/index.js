const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
const title = 'Homepage';
const items = [
{ id: 1, name: 'Item 1' },
{ id: 2, name: 'Item 2' },
{ id: 3, name: 'Item 3' },
];
res.render('index', { title, items });
});
app.get('/item/:id', (req, res) => {
const id = req.params.id;
const item = { id, name: `Item ${id}` };
res.render('item', { item });
});