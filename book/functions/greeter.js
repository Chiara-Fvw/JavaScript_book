let rlSync = require('readline-sync');

function ask(name, surname) {
  return name + ' ' + surname;
}

let completeName = ask(rlSync.question('What is your name? '), rlSync.question('What is your surname ?'));
console.log(completeName);

//book solution:
function getName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);
