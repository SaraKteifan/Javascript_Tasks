let operation = prompt("Enter an operation sign (+, -, *, /): ");
let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");

let number1 = Number(num1);
let number2 = Number(num2);

switch (operation) {
    case "+": let Addition = number1 + number2 ;
            document.getElementById("result").innerHTML= Addition;
            break;
    case "-": let Subtraction = number1 - number2 ;
            document.getElementById("result").innerHTML= Subtraction;
            break;
    case "*": let Multiblication = number1 * number2 ;
            document.getElementById("result").innerHTML= Multiblication;
            break;
    case "/": let Division = number1 / number2 ;
            document.getElementById("result").innerHTML= Division;
            break;
}


