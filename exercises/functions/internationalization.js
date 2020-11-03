function greet(lang) {
  switch (lang){
    case 'en' : return 'Hi!';
    case 'fr' : return 'Salut!';
    case 'af' : return 'Haai!';
    case 'pt' : return 'Olá!';
    case 'de' : return 'Hallo!';
    case 'sv' : return 'Hej!';
    case 'it' : return 'Ciao!';
  }
}

console.log(greet('en'));
console.log(greet('fr'));
console.log(greet('pt'));
console.log(greet('de'));
console.log(greet('sv'));
console.log(greet('af'));
console.log(greet('it'));
