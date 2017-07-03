const express = require('express');
const morgan = require('morgan');
const app = express();


// app.use (...) is used to configure middleware in express
app.use(morgan('dev'));
// User can request anything that is placed inside public folder(static content)
// _dirname - absolute path of the directory in which server.js resides
app.use(express.static(__dirname + '/public'));
app.use('/', (req, res)=> {
    console.log(req.headers);
    res.writeHead(200, {'Content-Type' : 'text/html'});
    // when use res.send - error was thrown because res was sent before header was written
    res.end('yo');  
});

app.listen(3000, () => {
    console.log('Application starting at 3000');
});