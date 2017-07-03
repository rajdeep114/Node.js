// JS object with two properties that are functions
var rectangle = {
    parameter: function(x, y) {
        return 2 * (x + y);
    },
    area: function(x, y) {
        return x * y;
    }
}

module.exports = rectangle;
