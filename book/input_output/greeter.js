let rlSync = require('readline-sync');
let name = rlSync.question('What is your name?');
let surname = rlSync.question('What is your surname?');
console.log(`Hello, ${name} ${surname}!`);