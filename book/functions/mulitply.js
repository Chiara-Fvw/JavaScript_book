function factor(prompt) {
  let readlineSync = require('readline-sync');
  let number = readlineSync.question(prompt);
  return number;
}

let firstNumber = factor('Type a number: ');
let secondNumber = factor('Type another number: ');
console.log(`${firstNumber} * ${secondNumber} =  ${firstNumber * secondNumber}`);

//book solution:

function multiply(left, right){
  return left * right;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');

console.log(`${left} * ${right} =  ${multiply(left,right)}`);