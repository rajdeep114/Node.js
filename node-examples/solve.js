
var rectangle = require('./rectangle');

function solveReact(x, y) {
    console.log('Area of the rectangle is: ' + rectangle.area(x, y) + ' and parameter is: ' + rectangle.parameter(x, y));
}

solveReact(2, 3);
solveReact(5, 5);