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
function numberBetweenUs(n1, n2){
    let num1=n1+1;
    let sum= `${num1}`;
    while(num1 !== n2-1){
        sum+= `, ${num1+1}`;
        num1 ++;
    }
    return sum;
}

console.log(numberBetweenUs(2,8));
console.log(numberBetweenUs(1,3));


////////////////////Tas9
console.log('Tas9: ----------');
function countDown(num){
    let sum= `${num}`;
    let i=1;
    while(i != num){
        sum+= `, ${num-i}`;
        i++;
    }
    if(i==num){
        sum+= `, done`;
    }
    return sum;
}

console.log(countDown(5));
console.log(countDown(2));
console.log(countDown(7));


////////////////////Tas10
console.log('Tas10: ----------');
function multiplication2(n1,n2){
    let i=0;
    let sum= 0;
    while(i != n2){
        sum+= n1;
        i++;
    }
    return sum;
}

console.log(multiplication2(5,4));
console.log(multiplication2(2,8));
console.log(multiplication2(7,6));


////////////////////Tas11
console.log('Tas11: ----------');
function mod2(n1,n2){
    if(n1<n2){
        return n1;
    }
    let x=n1;
    while(x>=n2){
        x-=n2;
    }
    return x;
}

console.log(mod2(5,4));
console.log(mod2(2,8));
console.log(mod2(7,4));
console.log(mod2(8,4));


////////////////////Tas12
console.log('Task12: ----------');
function repeatChar(string,char){
    let str= string.toLowerCase();
    let i=0;
    let l=string.length;
    let count=0;
    while(i<l){
        if(str[i] == char){
            count+=1;
        }
        i++
    }
    return count;
}


console.log(repeatChar("schOol","o"));
console.log(repeatChar("school","a"));
console.log(repeatChar("School","s"));
console.log(repeatChar("Sara","a"));

///////////////////////////////Advanced Part/////////////////
console.log('==========================');
console.log('Advanced Part');
console.log('==========================');
////////////////////Tas1
console.log('Task1: ----------');
function fibon(n){
    if (n == 0)
    return 1;
    if (n == 1)
    return 1;
    return fibon(n-1)+fibon(n-2);

}
console.log(fibon(7));
console.log(fibon(2));
console.log(fibon(1));
console.log(fibon(0));


////////////////////Tas2
console.log('Task2: ----------');
function mirror(string){
    let i=0;
    let l=string.length;
    let newString= '';
    let arr= string.split('');
    while(i<l){
        newString+= arr[l-1-i]
        i++;
    }
    return newString
}

function mirror2(string){
    let newString= '';
    let arr= string.split('');
    let reversedArr= arr.reverse();
    newString= reversedArr.join('');
    return newString;
}

console.log(mirror("school"));
console.log(mirror("car"));
console.log(mirror("maDrasa"));
console.log(mirror2('=========='));
console.log(mirror2("school"));
console.log(mirror2("car"));
console.log(mirror2("maDrasa"));


////////////////////Tas3
console.log('Task3: ----------');
function mirrorCaseAlso(string){
    let arr= string.split('');
    let l=arr.length;
    let i=0;
    while(i<l){
        if (arr[i].toUpperCase() == arr[i]){
            arr.splice(i,1,arr[i].toLowerCase())
        }else{
            arr.splice(i,1,arr[i].toUpperCase())
        }
        i++;
    }
    let reversedArr= arr.reverse();
    let newString= reversedArr.join('');
    return newString;
}

console.log(mirrorCaseAlso("sChOol"));
console.log(mirrorCaseAlso("THOR"));
console.log(mirrorCaseAlso("BaBa"));


////////////////////Tas4
console.log('Task4: ----------');
function repeatChar2(string,char){
    let sum=0;
    let arr=string.split('');
    let l=arr.length;
    let i=0;
    while(i<l){
        if(arr[i]==char){
            sum+=1;
        }
        i++;
    }
    return sum;
}

console.log(repeatChar2("schOol","o"));
console.log(repeatChar2("school","a"));
console.log(repeatChar2("School","S"));
console.log(repeatChar2("SArAa","A"));


////////////////////Tas5
console.log('Task5: ----------');
function welcomeSayHello(num){
    let i=1; 
    while(i<=num){
        if (i==1){
            console.log(`hi 1`)
        }
        if(i>1){
            let x= '1'
            for(let j=2; j<(i-1); j++){  
                x+= `, ${j}`;
            }
            if(i>2)
            x+= ` and ${i-1}`;
            console.log(`hi ${i} Now Please Say Hello To ${x}`);
        }
        i++;
    }  
}

welcomeSayHello(3);
welcomeSayHello(7);
