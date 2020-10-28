let array1 = [1, 2, undefined, 4]; // length = 4

let array2 = [1];
array2.lenght = 5; // length = 5

let array3 = [];
array3[-1] = [1]; // length = 0

let array4 = [1, 2, 3, 4, 5];
array4.length = 3; // length = 3

let array5 = [];
array5[100] = 3; // length = 1 --> The length of array5 is 101. As already noted, the length is the highest index position that has a value, plus 1. In this case, the highest index position that has a value is 100, so the length is 101.