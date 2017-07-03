const http = require('http');
/**
 * Create a server and get access to the client req and server response
 * The callback function get req and res as parameter
 */

const port = 3000;
const hostname = 'localhost';

const server = http.createServer(function(req, res){
    console.log(req.headers);
    /**
     * writeHead(status code, content type)
     * content type defines the type of content in the http res
     * content type:  'Content-Type:, video/mp4', 
     *                'Content-Type: application/json; charset=utf-8'
     */
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(JSON.stringify({key: 'value'}));
});

server.listen(port, hostname, ()=> {
    console.log(`HTTP server was start and is listen on port ${port}`);
});