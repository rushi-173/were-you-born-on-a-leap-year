var readlineSync = require("readline-sync");
function check(year){
  if(year%4==0){
    console.log("Wow! You were born in a leap year.");
    console.log("Take a screenshot & Share it with your  friends.");
  }
  else{
    console.log("You were not born in a leap year.");
  }
}

function getInput(){
  let userInput = readlineSync.question("Enter your birthdate (mm/dd/yyyy): ");
  let birthdate = new Date(userInput);
  if(birthdate=="Invalid Date"){
    console.log("You have entered wrong input. ");
    getInput();
  }
  return birthdate.getYear();
}

let birthyear = getInput();
check(birthyear);