function extractLanguage(code){
  console.log(code.substring(0,2));
  //book solution: return code.split('_')[0];
}

function extractRegion(code){
  //console.log(code.slice(3, 5));
  // book: 
  return code.split('.')[0]
             .split('_')[1];
}


extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'

extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16');