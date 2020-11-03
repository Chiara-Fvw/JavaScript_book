let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let newArray = Object.entries(person);
console.log(newArray);
// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]