const http = require('http');

const port = 3000;
const hostname = 'localhost';

const server = http.createServer();
var body = [];
server.on('request', (request, response) => {
    
    if(request.method == 'GET' && request.url == '/echo') {
        request.on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {
            console.log('This is the request-------:  ');
            body = Buffer.concat(body).toString();
            response.end(body);
        });
     }
    // if(request.method == 'GET' && request.url == '/echo') {
    //     request.pipe(response);
    // }
    //response.end('hello');
});

server.listen(port, hostname, () => {
    console.log('Server has started');
});

