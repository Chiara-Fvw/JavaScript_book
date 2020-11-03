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
function extractLanguage(code){
  return code.split('_')[0];
}

function extractRegion(code){
  return code.split('.')[0]
             .split('_')[1];
}


function localGreet(locale){
  let language = extractLanguage(locale);
  let region = extractRegion(locale);
  if(language === 'en'){
    switch (region){
      case 'US' : return 'Hey!';
      case 'GB' : return 'Hello!';
      case 'AU' : return 'Howdy!';
    }
  } else {
    return greet(language);
  }
}


console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'