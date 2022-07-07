const fs = require('fs');

// const patito = require('fs');
// patito.writeFile('my-file.txt', 'Este texto lo escribi desde node');

const fileName = './my-file.txt';
const textContent = 'Este texto lo escribi desde node';
fs.writeFile(fileName, textContent, (err) => {
    if (err) {
        throw err;
    } else {
        console.log('¡archivo creado con extito!');
    }
});
