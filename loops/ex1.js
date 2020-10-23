let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you? \n'));
console.log(`You are ${age} years old`);
for (i = 10; i < 41; i += 10) {
  console.log(`In ${i} years, you will be ${age + i} years old.`);
}