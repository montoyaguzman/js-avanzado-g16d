const express = require('express');
const colors = require('colors');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('Servidor express listening...'.rainbow);
});

app.get('/', (req, res) => {
    res.send('hola mundo!');
});

app.get('/shoes', (req, res) => {
    const shoes = [
        { id: 1, brand: 'noke', price: 200, size: 29 },
        { id: 2, brand: 'edidas', price: 500, size: 22 },
        { id: 3, brand: 'floxi', price: 900, size: 25 },
    ];
    res.json(shoes);
});

// Request Param: Son utilizados para ejecutar operaciones sobre un elemento especifico
app.get('/shoes/:id', (req, res) => {
    const id = req.params.id;
    const shoe = { id: 1, brand: 'noke', price: 200, size: 29, searching: id };
    res.json(shoe);
});

// Query Params: Filtrar información
// http://localhost:3000/shoes/?page=1&pageSize=10&brand='noke'
app.get('/shoes', (req, res) => {
    const page = req.query.page;
    const pageSize = req.query.pageSize;
    const brand = req.query.brand;
    if (page && pageSize) {
        res.json({ page: page, pageSize: pageSize, brand: brand });
    } else {
        res.send('no enviaste query params');
    }
});