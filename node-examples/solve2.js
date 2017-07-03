var rectangle = require('./rectangle2');

rectangle(2, 3, (error, formulas)=> {
    if(error) {
        console.log(error);
    } else {
        // x and y are availale to the callback because of closure
        console.log('Parameter is: ' + formulas.parameter());
        console.log('Are is: ' + formulas.area());
    }
});