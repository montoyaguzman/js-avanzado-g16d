console.log(this); // {} o module.exports
console.log('Ruta donde se encuentra mi archivo: ', __dirname);
console.log('Ruta + nombre de mi archivo: ', __filename);
// exports: Para exportar modulos (archivos).
// module: Referencia al módulo actual.
// require(): Importa un archivo js como modulo. require('index.js');