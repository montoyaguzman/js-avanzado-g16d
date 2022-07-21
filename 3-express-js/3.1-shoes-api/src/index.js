const express = require('express');
const colors = require('colors');
const app = express();
const port = 3000;
const routerApi = require('./routes/main.controller');

app.use(express.json());

app.listen(port, () => {
    console.log('Servidor express listening...'.rainbow);
});

routerApi(app);