let weather = "foggy";

if(weather === "sunny"){
  console.log("It's a beautiful day!");
} else if (weather === "rainy") {
  console.log("Grab your umbrella.");
} else {
  console.log("Let's stay inside.");
}

switch (weather){
  case "sunny" :
    console.log("It's a beautiful day!");
    break;
  case "rainy" :
    console.log("Grab your umbrella.");
    break;
  case "windy":
    console.log("Grab your brush.");
    break;
  case "foggy" :
    console.log("I can't see.");
    break;
  case "snowy":
    console.log("Oh the weather outside is frightful.");
    break;
  default:
    console.log("Let's stay inside.");
}