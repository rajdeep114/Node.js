var func = function(x, y, callback) {
    try {
        if(x < 0|| y < 0) {
            throw new Error('Area cannot be calculated');
            /** 
             * callback(p1, p2);
             * p1 - error by convention
             * p2 - is js object that has two properties(area and parameter)
             * x and y can be used inside p2 because of closures
            */
        } else {
            callback(null, {
                parameter: () => {
                    return 2 * (x + y);
                },
                area: () => {
                    return x * y;
                }
            });
        }
    } catch(error) {
        callback(error, null);
    }
}
module.exports = func;
