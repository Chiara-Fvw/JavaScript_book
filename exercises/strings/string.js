//1
console.log("These aren't the droids you're looking for.".length);
//2
console.log('confetti floating everywhere'.toUpperCase());
//3 
function repeat(times, string){
  let repetitions = '';

  while (times > 0) {
    repetitions += string;
    times -= 1;
  }

  return repetitions;
}

console.log(repeat(3, 'ha')); // 'hahaha'

//4
let rhyme = 'A pirate I was meant to be!\nTrim the sails and roam the sea!'

console.log(rhyme);

//5
let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

string1.toUpperCase() === string2.toUpperCase();
//6

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
byteSequence.includes('x');

//7
function isBlank(string){
  /* if(string === ''){
    return true;
  } else {
    return false;
  } */

  return string.length === 0;
}
isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true

//8
function isBlank(string){
  return string.trim().length === 0;

}
isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true

//9

let string = 'launch school tech & talk'
  let words = string.split(' ');
  let capitalizedWords = [];
  
  for(let i = 0; i < words.length; i += 1){
    word = words[i];
    capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
  }

console.log(capitalizedWords.join(' '));