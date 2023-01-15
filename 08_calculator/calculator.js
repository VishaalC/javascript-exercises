const add = function(num1, num2) {
  return (num1 + num2);
	
};

const subtract = function(num1, num2) {
	return (num1 - num2);
};

const sum = function(array) {
  let sum = 0;
  for (const num of array) {
      sum += num;
  }
  return sum;
	
};

const multiply = function(args) {
  let pdt = 1;
  for (const num of args) {
    pdt *= num;
  }
  return pdt;

};

const power = function(num1, num2) {
  return (Math.pow(num1, num2));
	
};

const factorial = function(num) {
  pdt = 1;
  if (num == 0) {
    return 1;
  }
  while(num != 0) {
    pdt *= num;
    num--;
  }
  return pdt;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
