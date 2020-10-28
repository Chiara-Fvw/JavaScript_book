let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];


function allMatches(words, regex) {
  let newArray = [];
  words.forEach(function (word) {
    if (word.match(regex)){
      newArray.push(word);
    }
  });
  return newArray;
}

allMatches(words, /lab/) // ['laboratory', 'flab', 'elaborate']


//book solutions
//ONE

/* function allMatches(words, pattern) {
  let matches = [];
  for ( let index = 0; index < words.length; index += 1) {
    if (pattern.test(words[index])) {
      matches.push(words[index]);
    }
  }
  return matches;
}
 */
//TWO

/* function allMatches(words, pattern) {
  return words.filter((word) => pattern.test(word));
} */
