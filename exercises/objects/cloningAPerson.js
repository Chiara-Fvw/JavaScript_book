function clone(obj) {
  // let obj2 =  {};
  // Object.assign(obj2, obj);
  // return obj2;

  // easyer from book!
  return Object.assign({}, obj);
}

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33