function greet(greeting = 'Hello', follow = 'world!') {
  console.log(greeting + ', ' + follow + '!');
}

greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!
