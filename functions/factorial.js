function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}
/*
let n1 = times (1, 1);
let n2 = times (n1, 2);
let n3 = times (n2, 3);
let n4 = times (n3, 4);
let n5 = times (n4, 5);*/

times(times(times(times(times(1, 1), 2), 3), 4), 5);