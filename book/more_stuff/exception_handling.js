let names = ['bob', 'joe', 'steve', undefined, 'frank'];

names.forEach(name => {
  try {
    console.log(`${name}'s has ${name.length} letters in it.`);
  } catch (exception){
    console.log('Something went wrong');
  }
});