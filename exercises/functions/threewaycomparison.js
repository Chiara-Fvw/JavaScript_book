function compareByLength(s1, s2) {
   if(s1.length < s2.length){
     return -1;
   } else if(s1.length > s2.length){
     return 1;
   } else {
     return 0;
   }
}

console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));           //  0