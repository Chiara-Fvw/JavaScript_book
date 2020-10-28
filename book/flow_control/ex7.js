function change(string) {
  if(string.length > 10) {
    console.log(string.toUpperCase());
  } else {
    console.log(string);
  }
}

change('Hello World');
change('goodbye');