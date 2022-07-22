
/**
 * Capa route, utilizada para el mapeo de los path
 */
const express = require('express');
const shoesRouter = express.Router();
const ShoesServices = require('../../services/shoes/');

const shoeService = new ShoesServices();

// http://localhost:3000/shoes/
// Query Params: Filtrar información
// http://localhost:3000/shoes/?page=1&pageSize=10&brand=%22noke%22
// %20 => espacio en blanco
// %22 => comillas dobles
shoesRouter.get('/', async (req, res) => {
    // 6.1.1: Leer la request
    const { price } = req.query;
    try {
        // 6.1.2: Acceder a la capa service para tener una respuesta
        const shoes = await shoeService.findAll(price);
        res.status(200).json(shoes);
    } catch(error) {
        // 6.1.3: Si hay un error al acceder al services respondemos un error generico
        res.status(404).json( { message: 'no hay datos'} );
    }
    
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
shoesRouter.post('/', async (req, res) => {
    // 6.1.1: Leer la request
    const newShoe = req.body;
    try {
        // 6.1.2: Acceder a la capa service para tener una respuesta
        await shoeService.create(newShoe);
        res.status(201).send();
    } catch(error) {
        // 6.1.3: Si hay un error al acceder al services respondemos un error generico
        res.status(500).send( { message: 'intenten más tarde' } );
    }
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