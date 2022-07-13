// PETICIONES
// localhost:8080/index.html

const http = require('http');
const url = require('url');
const fs = require('fs');
const colors = require('colors');

const MIME_TYPES = {
    html: 'text/html',
    css: 'text/css',
    jpg: 'image/jpg',
    ico: 'image/x-icon',
    mp3: 'audio/mpeg3',
    mp4: 'video/mp4',
    json: 'application/json'
};
// MIME_TYPES.html
// MIME_TYPES['html']

const server = http.createServer((request, response) => {
    
    // Paso 1: Obtener la path de la request
    const urlObject = url.parse(request.url);
    const path = urlObject.path;
    console.log(`Path solicitada: `, path);

    // Paso 2: Definimos las variables que le vamos a setear a la response
    let status = 0;
    let responseObj = {};
    let fileSytemPath = '';

    if (path) {
        fileSytemPath = `static${path}`;
    }

    fs.stat(fileSytemPath, error => {
        if (!error) {
            fs.readFile(fileSytemPath, (error, file) => {
                if (!error) {
                    // fileSytemPath = index.html
                    status = 200;
                    const aux = fileSytemPath.split('.'); // index.html => ['index', 'html']
                    const extension = aux[ aux.length - 1 ];
                    const mimeType = MIME_TYPES[extension]; // MIME_TYPES.html;
                    response.writeHead(status, { 'Content-Type': mimeType } );
                    response.write(file);
                    response.end();        
                } else {
                    status = 500;
                    responseObject = { message: 'Internal server error' };
                    response.writeHead(status, { 'Content-Type': MIME_TYPES.json } );
                    response.write(responseObject);
                    response.end();        
                }
            });
        } else {
            status = 404;
            responseObject = { message: 'Not found' };
            response.writeHead(status, { 'Content-Type': MIME_TYPES.json } );
            response.write(responseObject);
            response.end();
        }
    });

});

server.listen(9000);
console.log('API en node...'.rainbow);
console.log('Esperando peticiones....'.yellow);
