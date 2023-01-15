const removeFromArray = function(array, ...args) {
    let dupArray = [...array];
    for (const number of dupArray) {
        for (const checkNum of args) {
            if (checkNum === number) {
                array.splice(array.indexOf(number), 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
