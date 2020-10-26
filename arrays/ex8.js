

function oddLengths(arr) {
  return arr.reduce((accumulator, string) => {
   if (string.length % 2 !== 0){
     let length = string.length;
     accumulator.push(length);
   }
   return accumulator;
 }, []);
}
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]


