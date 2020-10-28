let string = ['a', 'b', 'c', 'd'];

string.reduce((accumulator, element) => {
  return accumulator + element.toUpperCase()
}, '');