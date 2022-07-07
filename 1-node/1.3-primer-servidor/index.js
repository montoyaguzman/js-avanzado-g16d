const http = require('http');
 
const server = http.createServer((request, response) => {
    const status = 200;
    const mimeType = { 'Content-Type' : 'text/html' } ;
    response.writeHead(status, mimeType);
    response.write('<html> <body> Adios </body> </html>');
});

server.listen(8000);
console.log('Inicie el servidor...')


