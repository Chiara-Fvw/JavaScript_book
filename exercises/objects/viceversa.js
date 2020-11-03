let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
let object = {};
nestedArray.forEach(pair => {
  object[pair[0]] = pair[1];
})

console.log(object);
// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }


//book solution
let person = {};
for (let i = 0; i < nestedArray.length; i++) {
  let pair = nestedArray[i];
  person[pair[0]] = pair[1];
}

console.log(person);