const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const app = express();

let api = require('./routes/api');

// app.use (...) is used to configure middleware in express
// morgan('dev') - all requests and response go through this and is logged on the terminal
app.use(morgan('dev'));

/**
 * this is telling the application that if req.body contains json formatted data, parse it.
 * All requests goes through this step, and their req.body is examined.
 */
app.use(bodyParser.json())

// Routes for dishes
app.all((req, res, next)=> {
    res.writeHead(200, {'Content-Type': 'application/json'});
    next();
});

app.use('/api', api);


// User can request anything that is placed inside public folder(static content)
// _dirname - absolute path of the directory in which server.js resides
app.use(express.static(__dirname + '/public'));


app.use('/', (req, res)=> {
    res.writeHead(403, {'Content-Type' : 'text/html'});
    // when use res.send - error was thrown because res was sent before header was written
    res.end('No router match found');  
});

app.listen(3000, () => {
    console.log('Application starting at 3000');
});