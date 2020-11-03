let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

  function contains(city, list){
      for(let i = 0; i < list.length; i += 1){
        if(city === list[i]){
          return true;
        } 
          
        }
        return false;
      }
  

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false