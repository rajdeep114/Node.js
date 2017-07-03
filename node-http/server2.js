const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;
/**
 * This server only resolves GET request and only fetches .html file
 * If not a GET or .html file request, 404 if returned.
 */
const server = http.createServer(function(req, res){
    console.log(req.url + '  ' + req.method);

    // Only takes care of GET request
    if(req.method == 'GET') {
        let fileURL;
        if(req.url == '/')
            fileURL = '/index.html';
        else fileURL = req.url;
        // gets absolute path of the file
        let filePath = path.resolve('./public' + fileURL);
        console.log('this is the file path ' + filePath);
        // Checks if file has a .html extention, else send 404
        if(path.extname(filePath) == '.html') {
            fs.exists(filePath, function(exists) {
                if(!exists) {
                    res.writeHead(404, {'Content-type':'text/html'});
                    res.end(`File ${fileURL} does not exist`);
                    return;
                }
                res.writeHead(200, {'Content-type':'text/html'});
                fs.createReadStream(filePath).pipe(res);
            });
        } else {
            res.writeHead(404, {'Content-type':'text/html'});
            res.end(`File ${fileURL} could not be return`);
            return;
        }
    
    } else {
        res.writeHead(403, {'Content-type':'text/html'});
        res.end(`Not a GET request`);
    }
   
});

server.listen(port, hostname, ()=> {
    console.log(`Running server on: ${port}`);
});