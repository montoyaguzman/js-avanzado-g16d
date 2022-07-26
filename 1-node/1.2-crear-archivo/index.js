const fs = require('fs');

// const patito = require('fs');
// patito.writeFile('my-file.txt', 'Este texto lo escribi desde node');

// code runner - se ejecuta en la raiz del proyecto
const fileName = './1-node/1.2-crear-archivo/my-file.txt';

// node index.js - se ejecuta dentro de la carpeta 1.2-crear-archivo
// const fileName = './my-file.txt';

const textContent = 'Este texto lo escribi desde node';
fs.writeFile(fileName, textContent, (err) => {
    if (err) {
        throw err;
    } else {
        console.log('¡archivo creado con éxito!');
    }
});
