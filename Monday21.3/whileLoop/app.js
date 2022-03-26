console.log('Here is : While');
////////////////////Task1
console.log('Task1: ----------');
function subtract(n){
    let x= n;
    i= 1;
    while(i!=n+1){
        x= x-(n-i);
        i++;
    }
    return x;
}

console.log(subtract(2));
console.log(subtract(5));
console.log(subtract(9));

////////////////////Task2
console.log('Task2: ----------');
function factorial(n){
    i=1;
    let x =n;
    while(i<n){
        x= x* (n-i);
        i++;
    }
    return x;
}

console.log(factorial(2));
console.log(factorial(4));

////////////////////Task3
console.log('Task3: ----------');
function repeatStr(string,num){
    let con= string;
    let i= 1;
    while(num-i !== 0){
    con+= ' '+string;
    i++;
    }
    return con;
}

console.log(repeatStr("to",2));
console.log(repeatStr("to",4));


////////////////////Task4
console.log('Task4: ----------');
function sum2(num1,num2){
    let sum= num1;
    let i= num1+1;
    while(i != num2+1){
        sum+= i;
        i++;
    }
    return sum;
}

console.log(sum2(4, 5));
console.log(sum2(3, 6));


////////////////////Task5
console.log('Task5: ----------');
function repeatStr2(str1, str2){
    let con= str1;
    let i= 1;
    let num= str2.length;
    while(num-i !== 0){
    con+= ' '+str1;
    i++;
    }
    return con;
}

console.log(repeatStr2("ro","cc"));
console.log(repeatStr2("ro","fff"));


////////////////////Task6
console.log('Task6: ----------');
function multiOf(n1,n2,n3){
    return n1*(Math.pow(n2, n3));
}

console.log(multiOf(4,10,3));
console.log(multiOf(6,3,2));
console.log(multiOf(6,2,3));


////////////////////Task7
console.log('Task7: ----------');
function muti2(num1,num2){
    let mult= num1;
    let i= num1+1;
    while(i != num2+1){
        mult*= i;
        i++;
    }
    return mult;
}

console.log(muti2(4, 5));
console.log((muti2(3, 6)));


////////////////////Task8
console.log('Task8: ----------');
function numberBetweenUs(num1, num2){
    
}