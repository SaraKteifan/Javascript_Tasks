//////////Task1
function tellFortune(jobTitle, location, partner, numOfChilds){
    return ("You will be a "+jobTitle+" in "+location+", and married to "+partner+" with "+numOfChilds+" kids.");

}

console.log(tellFortune('software engineer', 'Jordan', 'Alice', 3));
console.log(tellFortune('football player', 'spain', 'Antonilla', 3));


//////////Task2
function calculateDogAge(puppyAge){
    let age = puppyAge*7;
    return ("Your doggie is "+age+" years old in dog years!");
}

console.log(calculateDogAge(1));


//////////Task3
function calculateSupply(age, ammountPerDay){
    let teaAmmount= (100-age)*365*ammountPerDay;
    return ("You will need "+teaAmmount+ " cups of tea to last you until the ripe old age of 100.")
}

console.log(calculateSupply(30, 3));


//////////Task4
function greet(name){
    return ("Hello "+name);
}

console.log(greet("Adam"));


//////////Task5
function double(x) {
    return 2 * x;
}
  
function double(num) {
    return 2 * num;
}
  
function double(y) {
    return 2 * y;
}


//////////Task6
function double1(x) {
    return 2 * x ;
}
  
function double2 (x){
  return 2 * x;
}
  
function  double3(x) {
    return 2 * x;
}


//////////Task7
function cube(num){
    return Math.pow(num,3);
}

console.log(cube(4));


//////////Task8
function multiply(num1, num2){
    return (num1*num2);
}

console.log(multiply(3,4));
console.log(multiply(5,4));


//////////Task9
function canIGetADrivingLicense(age){
    if(age >= 20){
        return "Yes you can"
    }else{
        return ("Please come back after "+(20-age)+" years to get one")
    }
}

console.log(canIGetADrivingLicense(21));
console.log(canIGetADrivingLicense(17));
console.log(canIGetADrivingLicense(20));


//////////Task10
function sameLength(string1, string2){
    let L1= string1.length;
    let L2= string2.length;
    if(L1 == L2){
        return true;
    }else{
        return false;
    }
}

console.log(sameLength("tree","clue"));
console.log(sameLength("tree","car"));


//////////Task11