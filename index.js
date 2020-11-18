var readlineSync = require("readline-sync");
const chalk = require('chalk');
function check(year){
  if(year%400==0){
    console.log(chalk.black.bgGreen("Wow! You were born in a leap year."));
    console.log(chalk.blue.bgYellow.bold("Take a screenshot & Share it with your  friends."));
  }
  else if(year%100==0){
    console.log(chalk.bgRed("You were not born in a leap year."));
  }
  else if(year%4==0){
    console.log(chalk.black.bgGreen("Wow! You were born in a leap year."));
    console.log(chalk.blue.bgYellow.bold("Take a screenshot & Share it with your  friends."));
  }
  else{
    console.log(chalk.bgRed("You were not born in a leap year."));
  }
}

function getInput(){
  let userInput = readlineSync.question(chalk.green("Enter your birthdate (mm/dd/yyyy): "));
  let birthdate = new Date(userInput);
  if(birthdate=="Invalid Date"){
    console.log(chalk.red("You have entered wrong input. "));
    getInput();
  }
  return birthdate.getYear();
}

let birthyear = getInput();
check(birthyear);