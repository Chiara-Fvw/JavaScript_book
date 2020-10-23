let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];
// WAY 1
/* for (i = 0; i < myArray.length; i += 1) {

  for (s = 0; s < myArray[i].length; s++){
    let nums = myArray[i][s];
      if (nums % 2 === 0){
        console.log(nums)
      }
  }
} */

//WAY 2

myArray.forEach(function(nestedArray){
  nestedArray.forEach(function(subnum){
    if(subnum % 2 === 0){
      console.log(subnum);
    }
  })
  
})
