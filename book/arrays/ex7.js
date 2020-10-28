/* let numbers = [3, 5, 7];
console.log(sumOfSquares(numbers));

function sumOfSquares(numbers) {
  let squares = [];
  numbers.forEach(num => squares.push(num * num));
  return squares.reduce((accumulator, element) => accumulator + element, 0);
} */

//book solution

function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number
  }, 0);
}

let numbers = [3, 5, 7];
console.log(sumOfSquares(numbers));

/* if we do not set the initialValue, the result will be 77 as the callback function will start executing on index 1 and not 0:

3 + (5*5) = 28
28 + (7*7) = 77 */