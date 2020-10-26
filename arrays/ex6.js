let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths() {
  let lengths = arr.map(x => x.length);
 return lengths.filter(z => z % 2 !== 0);
}



console.log(oddLengths(arr)); // => [1, 5, 3]