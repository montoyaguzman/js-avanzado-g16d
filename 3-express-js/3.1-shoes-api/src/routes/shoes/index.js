
const express = require('express');
const shoesRouter = express.Router();

let shoes = [
    { id: 1, brand: 'noke', price: 200, size: 29 },
    { id: 2, brand: 'edidas', price: 500, size: 22 },
    { id: 3, brand: 'floxi', price: 900, size: 25 },
];

// http://localhost:3000/shoes/
// Query Params: Filtrar información
// http://localhost:3000/shoes/?page=1&pageSize=10&brand=%22noke%22
// %20 => espacio en blanco
// %22 => comillas dobles
shoesRouter.get('/', (req, res) => {
    const { page, pageSize, brand } = req.query;
    if (page && pageSize && brand) {
        res.json({ page, pageSize, brand });
    } 
    res.json(shoes);
});

// Request Param: Son utilizados para ejecutar operaciones sobre un elemento especifico
// http://localhost:3000/shoes/999
shoesRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    const shoe = { id: 1, brand: 'noke', price: 200, size: 29, searching: id };
    res.json(shoe);
});

// http://localhost:3000/shoes/
// { id: 4, brand: 'pima', price: 600, size: 26 }
shoesRouter.post('/', (req, res) => {
    const newShoe = req.body;
    shoes.push(newShoe);
    console.log(shoes);
    const response = { message: 'shoe created!'};
    res.status(201).json(response);
});

// PARTIAL EDITION: PATCH
shoesRouter.patch('/:id', (req, res) => {
    const body = req.body;
    const { id } = req.params;
    const indexFounded = shoes.findIndex(shoe => shoe.id === parseInt(id));
    if (indexFounded !== -1) {
        const shoeCopy = { ...shoes[indexFounded] };
        shoes[indexFounded] = { ...shoeCopy, ...body };
        console.log(shoes);
        res.json({ message: 'modified with success!', body });
    } else {
        res.send('ese id no existe');
    }
});

// COMPLETE EDITION: PUT
shoesRouter.put('/:id', (req, res) => {
    const body = req.body;
    const { id } = req.params;
    const indexFounded = shoes.findIndex(shoe => shoe.id === parseInt(id));
    if (indexFounded !== -1) {
        const shoeCopy = { ...shoes[indexFounded] };
        shoes[indexFounded] = { ...shoeCopy, ...body };
        console.log(shoes);
        res.json({ message: 'modified with success!', body });
    } else {
        res.send('ese id no existe');
    }
});

// DELETE: DELETE
shoesRouter.delete('/:id', (req, res) => {
    const { id } = req.params;
    const indexFounded = shoes.findIndex(shoe => shoe.id === parseInt(id));
    if (indexFounded !== -1) {
        const shoesCopy = [ ...shoes ];
        shoesCopy.splice(indexFounded, 1);
        shoes = [ ...shoesCopy ];
        console.log('shoes:', shoes);
        res.json({ message: 'eliminado!', id });
    } else {
        res.send('ese id no existe');
    }
});

module.exports = shoesRouter;