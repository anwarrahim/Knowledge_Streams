//making the caculator

//addition 
let userInput1 = prompt("Put the number first!");
let userInput2 = prompt("Put the number first!");

const addition = (num1, num2)=> {
    console.log(`This is the additiong function.`);
    //convert the user input into number using parseFloat

   const number1 = parseFloat(num1);
   const number2 = parseFloat(num2);
   //check the conversion is successful or not

   if (!isNaN(number1) && !isNaN(number2)){
    const result = number1 + number2;
    console.log(`this is the addition ${result}`);
   }
   else{
    console.log("This is not a number!");
   }
}
addition(userInput1 + userInput2);