const sumAll = function(start, end) {
    let sum = 0;
    let temp;

    if (!Number.isInteger(end)) {
        return ("ERROR");
    }

    if (end < 0 || start < 0) {
        return ("ERROR");
    }
    if (start > end) {
        temp = start;
        start = end;
        end = temp;
    }
    for (i = start; i <= end; i++) {
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
