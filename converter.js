const input = require('sync-input');
let currencies = {"USD":1, "JPY": 113.5, "EUR": 0.89, "RUB": 74.36, "GBP":0.75};
let currencyNames = Object.keys(currencies);
function entryMessage(){
  Object.keys(currencies).forEach(currency => {
  	console.log(`1 USD equals ${currencies[currency]} ${currency}`);
  });
}
function runProgram() {
  while (true){
    console.log("What do you want to convert?");
    let currencyFrom = input("From: ").toUpperCase();
    if (!(currencyFrom in currencies)) {
     console.log("Unknown currency");
    }
    else{
      let currencyTo = input("To: ").toUpperCase();
      if (!(currencyTo in currencies)) {
        console.log("Unknown currency");
      }
      else{
        while (true){
    let amount = input("Amount: ");
    if (isNaN(amount)) {
    console.log("The amount has to be a number");
    }
    else if (amount < 1) {
    console.log("The amount cannot be less than 1");
    }
    else {
      let result = ((amount * currencies[currencyTo])/currencies[currencyFrom]).toFixed(4);
      console.log(`Result: ${amount} ${currencyFrom} equals ${result} ${currencyTo}`);
      break;
    }
  }
        break;
      }
    }
  }
}
console.log("Welcome to Currency Converter!");
entryMessage();
while (true){
  console.log("What do you want to do?");
  console.log("1-Convert currencies 2-Exit program");
  userChoice = input("");
  if (userChoice == 2) {
    console.log("Have a nice day!")
    break;
  }
  else if(userChoice == 1){
    runProgram();
  }
  else{
    console.log("Unknown input");
  }
}
