let x = prompt("Enter first number");
let y = prompt("Enter second number");

let num1 = Number(x);
let num2 = Number(y);

if (num1 > num2) {
    console.log("Hello World");
    document.getElementById("demo").innerHTML ="Hello World";
}
else {
    console.log("Goodbye");
    alert("Goodbye")
}

