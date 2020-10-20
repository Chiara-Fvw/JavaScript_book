function evenOrOdd(number){
  if(Number.isInteger(number)){
    if (number%2 === 0){
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('This is not a number');
    return;
  }
  
}

evenOrOdd('a');