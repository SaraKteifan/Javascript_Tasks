//////////Task1
console.log('Task1:----------');
function tellFortune(jobTitle, location, partner, numOfChilds){
    return ("You will be a "+jobTitle+" in "+location+", and married to "+partner+" with "+numOfChilds+" kids.");

}

console.log(tellFortune('software engineer', 'Jordan', 'Alice', 3));
console.log(tellFortune('football player', 'spain', 'Antonilla', 3));


//////////Task2
console.log('Task2:----------');
function calculateDogAge(puppyAge){
    let age = puppyAge*7;
    return ("Your doggie is "+age+" years old in dog years!");
}

console.log(calculateDogAge(1));


//////////Task3
console.log('Task3:----------');
function calculateSupply(age, ammountPerDay){
    let teaAmmount= (100-age)*365*ammountPerDay;
    return ("You will need "+teaAmmount+ " cups of tea to last you until the ripe old age of 100.")
}

console.log(calculateSupply(30, 3));


//////////Task4
console.log('Task4:----------');
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
console.log('Task7:----------');
function cube(num){
    return Math.pow(num,3);
}

console.log(cube(4));


//////////Task8
console.log('Task8:----------');
function multiply(num1, num2){
    return (num1*num2);
}

console.log(multiply(3,4));
console.log(multiply(5,4));


//////////Task9
console.log('Task9:----------');
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
console.log('Task10:---------');
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
console.log('Task11:---------');
function largerNumber(num1, num2){
    let largestNum= num1;
    if (num2>num1){
        largestNum= num2;
    }
    return largestNum;
}

console.log(largerNumber(5,6));
console.log(largerNumber(5,3));

//////////Task12
console.log('Task12:---------');
function smallerNumber(num1, num2, num3){
    let smallest= num1;
    if (num2<num1){
        smallest=num2;
    }
    if(num3<num1 && num3<num2){
            smallest=num3;
    }
    return smallest;
}

console.log(smallerNumber(8,6,7));
console.log(smallerNumber(5,99,34));
console.log(smallerNumber(5,99,3));
console.log(smallerNumber(5,3,3));


//////////Task13
console.log('Task13:---------');
function shorterString(s1,s2,s3,s4,s5){
    let s1l= s1.length;
    let s2l= s2.length;
    let s3l= s3.length;
    let s4l= s4.length;
    let s5l= s5.length;
    shortest=s1;
    if (s2l<s1l){
        shortest=s2;
    }
    if (s3l<s1l && s3l<s2l){
        shortest=s3;
    }
    if (s4l<s1l && s4l<s2l && s4l<s3l){
        shortest=s4;
    }
    if (s5l<s1l && s5l<s2l && s5l<s3l && s5l<s4l){
        shortest=s5;
    }
    return shortest;
}

console.log(shorterString("air","school","car","by","github"));
console.log(shorterString("air","tr","car","by","github"));
console.log(shorterString("by","tr","car","air","github"));
console.log(shorterString("air","by","car","school","github"));
console.log(shorterString("air","tr","by","car","github"));
console.log(shorterString("air","tr","car","github","by"));


//////////Task14
console.log('Task14:---------');
function longerString(s1,s2,s3,s4){
    let s1l= s1.length;
    let s2l= s2.length;
    let s3l= s3.length;
    let s4l= s4.length;
    longest=s1;
    if (s2l>s1l){
        longest=s2;
    }
    if (s3l>s1l && s3l>s2l){
        longest=s3;
    }
    if (s4l>s1l && s4l>s2l && s4l>s3l){
        longest=s4;
    }
    return longest;
}

console.log(longerString("air","school","car","github"));
console.log(longerString("air","schoo","car","github"));
console.log(longerString("air","github","car","school"));


//////////Task15
console.log('Task15:---------');
function isEven(number){
    if(number %2 == 0){
        return true;
    }else{
        return false;
    }
}

console.log(isEven(1));
console.log(isEven(2));


//////////Task16
console.log('Task16:---------');
function isOdd(number){
    if(number %2 != 0){
        return true;
    }else{
        return false;
    }
}

console.log(isOdd(4));
console.log(isOdd(5));


//////////Task17
console.log('Task17:---------');
function positive(number){
    return Math.abs(number);
}

console.log(positive(4));
console.log(positive(-5));


//////////Task18
console.log('Task18:---------');
function fullName(firstName, lastNname){
    return firstName+' '+lastNname;
}

console.log(fullName("Adam","McCallen"));
console.log(fullName("Alex", "Mercer"));


//////////Task19
console.log('Task19:---------');
function average(n1, n2, n3, n4, n5){
    let sum= n1+n2+n3+n4+n5;
    let average= sum/5;
    return average;
}

console.log(average(1,2,3,4,5));
console.log(average(5,7,9,3,5));


//////////Task20
console.log('Task20:---------');
function randomNumber(){
    return Math.random();
}

console.log(randomNumber());
console.log(randomNumber());


//////////Task21
console.log('Task21:---------');
function randomBetweenNumbers(num1, num2){
    return (num2-num1)*Math.random()+num1;
}

console.log(randomBetweenNumbers(1,8));
console.log(randomBetweenNumbers(3,100));


//////////Task22
console.log('Task22:---------');
function scoreInUniversity(mark){
    let grade= '';
    if (0<=mark && mark<=49){
        grade= 'F';
    }
    if (50<=mark && mark<=69){
        grade= 'D';
    }
    if (70<=mark && mark<=84){
        grade= 'C';
    }
    if (85<=mark && mark<=94){
        grade= 'B';
    }
    if (95<=mark && mark<=100){
        grade= 'A';
    }
    return grade;
}

console.log(scoreInUniversity(96));
console.log(scoreInUniversity(3));
console.log(scoreInUniversity(71));


//////////Task23
console.log('Task23:---------');
var count_num=0;
function counter(){
    return ++count_num;
}

console.log(counter());
console.log(counter());
console.log(counter());


//////////Task24
console.log('Task24:---------');
function resetCounter(){
    let oldCount_num= count_num;
    count_num= 0;
    return oldCount_num + ' and the counter is reset now.';
}

console.log(resetCounter());
console.log(counter());
console.log(counter());
console.log(resetCounter());
console.log(counter());