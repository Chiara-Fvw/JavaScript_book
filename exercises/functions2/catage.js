function catAge(n){
  if(n - 2 > 0) {
    return 15 + 9 + ((n - 2) * 4);
  } else if(n === 0) {
    return 0;
  } else {
    return 15 + ((n - 1) * 9)
  }
}
console.log(catAge(0));
console.log(catAge(1));
console.log(catAge(2));
console.log(catAge(3));
console.log(catAge(4));
catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32
