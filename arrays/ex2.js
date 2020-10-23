let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

for (i = 0; i < myArray.length; i += 1) {
  let nums = myArray[i];
  if (nums % 2 === 0) {
    console.log(nums);
  }
}

myArray.forEach(function(number){
  if(number % 2 === 0){
    console.log(number);
  }
})