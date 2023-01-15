const fibonacci = function(num) {
    const num1 = Number(num);
    if (num1 < 0) {
        return ("OOPS");
    }
    if(num1 < 2){
        return num1;
    }
    return fibonacci(num1 - 1) + fibonacci(num1 - 2);


};

// Do not edit below this line
module.exports = fibonacci;
