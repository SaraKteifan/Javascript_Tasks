let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
let num3 = prompt("Enter third number");

let number1 = Number(num1);
let number2 = Number(num2);
let number3 = Number(num3);

if (number1 % 3 == 0) {
    document.getElementById("number1").innerHTML ="Fizz";
    if (number1 % 5 == 0) {
        document.getElementById("number1").innerHTML ="Fizz Buzz";
    }
} else if (number1 % 5 == 0) {
    document.getElementById("number1").innerHTML ="Buzz";
} else {document.getElementById("number1").innerHTML = number1;}

////////////////////////////////////////////////////////////////

if (number2 % 3 == 0) {
    document.getElementById("number2").innerHTML ="Fizz";
    if (number2 % 5 == 0) {
        document.getElementById("number2").innerHTML ="Fizz Buzz";
    }
} else if (number2 % 5 == 0) {
    document.getElementById("number2").innerHTML ="Buzz";
} else {document.getElementById("number2").innerHTML = number2;}

////////////////////////////////////////////////////////////////

if (number3 % 3 == 0) {
    document.getElementById("number3").innerHTML ="Fizz";
    if (number3 % 5 == 0) {
        document.getElementById("number3").innerHTML ="Fizz Buzz";
    }
} else if (number3 % 5 == 0) {
    document.getElementById("number3").innerHTML ="Buzz";
} else {document.getElementById("number3").innerHTML = number3;}