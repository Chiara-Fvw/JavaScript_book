function filter(input) {
  return Array.isArray(input);
}


console.log(filter([1, 2, 3]));
console.log(filter('foobar'));
console.log(filter(undefined));