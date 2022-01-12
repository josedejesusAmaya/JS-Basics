const http = require('http');
const { addition } = require('./operations');

const server = http.createServer((request, response) => {
    // request.url
    response.writeHead(200, { "Content-Type": "text/html" });
    // response.writeHead(200, { "Content-Type": "application/json" });
    response.write(`<html><body><h1>First Server ${addition(2, 3)} </h1></body></html>`);
    response.end();
});

server.listen(8080);