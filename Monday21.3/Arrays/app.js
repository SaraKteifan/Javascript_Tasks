//////////Task1
[ 1, 7, 9,  45, ];

 ["Str", "alex","moh"];

 ['the', 'fox', 'over', 'lazy', 'dog'];


///////////Task2
console.log('Task2:');
var fruits=["Tomato","Banana","Watermelon"];
console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("Tomato"));
//index of "Banana” is 1
//index of "Tomato"is 0

//////////Task3
let favorite_food=["Mansaf", "Kabsah", "Msakhan", "Maqlubah", "Shawerma"];
let favorite_sport=["Football", "Basketball", "Tennis"];
let favorite_movie=["Shutter Island", "V for Venditta", "Leon the Proffesional", "Harry Poter"];


//////////Task4
console.log('Task4:');
function firstOfArray(array){
    return array[0];
}

console.log(firstOfArray([1,4,5]));
console.log(firstOfArray(["t","u","g","x"]));


//////////Task5
console.log('Task5:');
function lastOfArray(array){
    return array[array.length-1]
}

console.log(lastOfArray([1,4,5]));
console.log(lastOfArray(["t","u","g","x"]));


//////////Task6
console.log('Task6:');
var array = [0,5,7,9];
array.push(10);
array.unshift(1,3);
array[2] = 4;
array[3] = 6;
array[4] = 8;
console.log(array);


//////////Task7
console.log('Task7:');
var array2 = [5,9,-7,3.5];
array2.shift();
array2.pop();
array2.push(12);
array2.unshift(0);
console.log(array2);
console.log(array2.shift());
console.log(array2.pop());
console.log(array2.push());
console.log(array2.unshift());
console.log(array2);


//////////Task8
console.log('Task8:');
function middleOfArray(array){
    if (array.length % 2 != 0){
        return array[array.length/2-0.5];
    }
    else {
        return [array[array.length/2-1], array[array.length/2]];
    }
}

let array_1 = [1,2,3,4,5,6,7,8,9,10];
let array_2 = [3,6,9];

console.log(middleOfArray(array_1));
console.log(middleOfArray(array_2));
console.log(middleOfArray([1,4,5]));
console.log(middleOfArray(["t","u","g","x"]));


//////////Task9
console.log('Task9:');
var animals=['cat', 'ele', 'bird'];
console.log(animals)
animals[0] = 'zebra';
animals[1] = 'elephant';
animals.pop();
console.log(animals);

var nums=[1,2,3,8,9];
console.log(nums)
nums[0] = 5;
nums[1] = -22;
nums[2] = 3.5;
nums[3] = 44;
nums[4] = 98;
nums[5] = 44;
console.log(nums)


//////////Task10
console.log('Task10:');
function indexOfArray(array, index){
    return array[index];
}

nums = [1,2,3,8,9];
console.log(indexOfArray(nums,3));
console.log(indexOfArray(nums,1));
console.log(indexOfArray(nums,4));
console.log(indexOfArray(nums,0));
console.log(indexOfArray(nums,10));


//////////Task11
console.log('Task11:');
function arrayExceptLast(array){
    array.pop();
    return array;
}

var nums= [1,2,3,8,9];
console.log(arrayExceptLast(nums));
var array_a = ['a','b','c','d'];
console.log(arrayExceptLast(array_a));


//////////Task12
console.log('Task12:');
function addToEnd(array, value){
    array.push(value);
    return array;
}

var nums= [1,2,3,8,9];
console.log(addToEnd(nums,55));
var array_a = ['a','b','c','d'];
console.log(addToEnd(array_a, 'z'));


//////////Task13
console.log('Task13:');
//for loop:
function sumArray(array){
    let l= array.length;
    let sum_1=0;
    for (let i=0; i<l; i++){
        sum_1=sum_1+array[i];
    }
    return sum_1;
}

var nums= [1,2,3,8,9];
console.log(sumArray(nums));
var array_b=[1,2,3,4,5,6];
console.log(sumArray(array_b));
var ones=[1,1,1,1,1,1,1];
console.log(sumArray(ones));

//while loop:
function sumArray2(array){
    let L= array.length;
    let sum_2=0;
    let I=0;
    while (I<L){
        sum_2=sum_2+array[I];
        I++;
    }
    return sum_2;
}

var nums= [1,2,3,8,9];
console.log(sumArray2(nums));
var array_b=[1,2,3,4,5,6];
console.log(sumArray2(array_b));
var ones=[1,1,1,1,1,1,1];
console.log(sumArray2(ones));


//////////Task14
console.log('Task14:');
//for loop:
function minInArray(array){
    let l= array.length;
    var min = array[0];
    for(let i=1; i<l; i++){
        if(array[i]<min){
            var min = array[i];
        }
    }
    return min;
}

var nums= [1,2,3,8,9];
console.log(minInArray(nums));
var numberrs=[8,3,8,2,5,8,9,5,3,5];
console.log(minInArray(numberrs));

//while loop:
function minInArray2(array){
    let L= array.length;
    var MIN = array[0];
    let I=1;
    while(I<L){
        if(array[I]<MIN){
            var MIN = array[I];
        }
        I++;
    }
    return MIN;
}

var nums= [1,2,3,8,9];
console.log(minInArray2(nums));
var numberrs=[8,3,8,2,5,8,9,5,3,5];
console.log(minInArray2(numberrs));


//////////Task15
console.log('Task15:');
//for loop:
function removeFromArray(array, element){
    let l = array.length;
    for(let i=0; i<l; i++){
        if (array[i] == element){
            array.splice(i,1)
        }
    }
    return array;
}

var nums= [1,2,3,8,9];
console.log(removeFromArray(nums, 8));
var numberrs=[8,3,8,2,5,8,9,5,3,5];
console.log(removeFromArray(numberrs, 3));

//while loop:
function removeFromArray2(array, element){
    let L = array.length;
    let I=0;
    while(I<L){
        if (array[I] == element){
            array.splice(I,1)
        }
        I++
    }
    return array;
}

var nums= [1,2,3,8,9];
console.log(removeFromArray2(nums, 8));
var numberrs=[8,3,8,2,5,8,9,5,3,5];
console.log(removeFromArray2(numberrs, 3));


//////////Task16
console.log('Task16:');
//for loop:
function oddArray(array){
    let l=array.length;
    let list= [];
    for(let i=0; i<l; i++){
        if (array[i] % 2 != 0){
            list.push(array[i])
        }
    }
    return list;
}

var nums= [1,2,3,8,9];
console.log(oddArray(nums));
var numberrs=[8,3,8,2,5,8,9,5,3,5];
console.log(oddArray(numberrs));

//while loop:
function oddArray2(array){
    let L=array.length;
    let List=[];
    let I=0;
    while(I<L){
        if (array[I] % 2 != 0){
            List.push(array[I])
        }
    I++
    }
    return List;
}

var nums= [1,2,3,8,9];
console.log(oddArray2(nums));
var numberrs=[8,3,8,2,5,8,9,5,3,5];
console.log(oddArray2(numberrs));


//////////Task17
console.log('Task17:');
//for loop:
function aveArray(array){
    let l= array.length;
    let sum_1=0;
    for (let i=0; i<l; i++){
        sum_1=sum_1+array[i];
    }
    return sum_1/l;
}

var nums= [1,2,3,8,9];
console.log(aveArray(nums));
var nums2= [1,2,3,8,9,77];
console.log(aveArray(nums2));
var ones=[1,1,1,1,1,1,1];
console.log(aveArray(ones));

//while loop:
function aveArray2(array){
    let L= array.length;
    let sum_2=0;
    let I=0;
    while (I<L){
        sum_2=sum_2+array[I];
        I++;
    }
    return sum_2/L;
}

var nums= [1,2,3,8,9];
console.log(aveArray2(nums));
var nums2= [1,2,3,8,9,77];
console.log(aveArray(nums2));
var ones=[1,1,1,1,1,1,1];
console.log(aveArray2(ones));


//////////Task18
console.log('Task18:');
//for loop:
function shorterInArray(array){
    let l=array.length;
    var shortest = array[0];
    for(let i=1; i<l; i++){
        if(array[i].length < shortest.length){
            var shortest = array[i];
        }
    }
    return shortest;
}

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
console.log(shorterInArray(strings));
var fruits= ["banana", "strawbery", "apple"];
console.log(shorterInArray(fruits));

//while loop:
function shorterInArray2(array){
    let L=array.length;
    let I=1;
    var shortest2 = array[0];
    while(I<L){
        if(array[I].length < shortest2.length){
            var shortest2 = array[I];
        }
        I++;
    }
    return shortest2;
}

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
console.log(shorterInArray2(strings));
var fruits= ["banana", "strawbery", "apple"];
console.log(shorterInArray2(fruits));


//////////Task19
console.log('Task19:');
//for loop:
function repeatChar(string, char){
    let l= string.length;
    let sum1= 0;
    for(let i=0; i<l; i++){
        if(string[i]==char){
            sum1+=1;
        }
    }
    return sum1;
}


var string= "alex mercer madrasa rashed2 emad hala";
console.log(repeatChar(string,"a"));
console.log(repeatChar(string,"z"));
var myname="sara mahmoud mohammad kteifan";
console.log(repeatChar(myname,"a"));
console.log(repeatChar(myname,"m"));

//while loop:
function repeatChar2(string, char){
    let L= string.length;
    let sum2= 0;
    let I=0;
    while(I<L){
        if(string[I]==char){
            sum2+=1;
        }
        I++
    }
    return sum2;
}


var string= "alex mercer madrasa rashed2 emad hala";
console.log(repeatChar2(string,"a"));
console.log(repeatChar2(string,"z"));
var myname="sara mahmoud mohammad kteifan";
console.log(repeatChar2(myname,"a"));
console.log(repeatChar2(myname,"m"));


//////////Task20
console.log('Task20:');
//for loop:
function evenIndexOddLength(array){
    let l= array.length;
    let list=[];
    for(let i=0; i<l; i++){
        let sl= array[i].length;
        if ((sl % 2 != 0) && (i % 2 == 0)){
            list.push(array[i]);
        }
    }
    return list;
}

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
console.log(evenIndexOddLength(strings));
var myName= ['sara', 'mahmoud', 'kteifan'];
console.log(evenIndexOddLength(myName));

//while loop:
function evenIndexOddLength2(array){
    let L= array.length;
    let List=[];
    let I=0;
    while(I<L){
        let SL= array[I].length;
        if ((SL % 2 != 0) && (I % 2 == 0)){
            List.push(array[I]);
        }
        I++;
    }
    return List;
}

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
console.log(evenIndexOddLength2(strings));
var myName= ['sara', 'mahmoud', 'kteifan'];
console.log(evenIndexOddLength2(myName));


//////////Task21
console.log('Task21:');
//for loop:
function powerElementIndex(array){
    let l=array.length;
    let list=[];
    for (let i=0; i<l; i++){
        let x= Math.pow(array[i], i);
        list.push(x);
    }
    return list;
}

var nums= [44, 5, 4, 3, 2, 10];
console.log(powerElementIndex(nums));
var nums2= [1,2,3,8,9,77];
console.log(powerElementIndex(nums2));

//while loop:
function powerElementIndex2(array){
    let L= array.length;
    let List=[];
    let I=0;
    while(I<L){
        let x= Math.pow(array[I], I);
        List.push(x);
        I++;
    }
    return List;
}

var nums= [44, 5, 4, 3, 2, 10];
console.log(powerElementIndex2(nums));
var nums2= [1,2,3,8,9,77];
console.log(powerElementIndex2(nums2));


//////////Task22
console.log('Task22:');
//for loop:
function evenNumberEvenIndex(array){
    let l= array.length;
    let list=[];
    for(let i=0; i<l; i++){
        if ((array[i] % 2 == 0) && (i % 2 == 0)){
            list.push(array[i]);
        }
    }
    return list;
}

var nums= [5,2,2,1,8,66,55,77,34,9,55,1];
console.log(evenNumberEvenIndex(nums));
var numbers= [44, 5, 4, 3, 2, 10];
console.log(evenNumberEvenIndex(numbers));

//while loop:
function evenNumberEvenIndex2(array){
    let L= array.length;
    let List=[];
    let I=0;
    while(I<L){
        if ((array[I] % 2 == 0) && (I % 2 == 0)){
            List.push(array[I]);
        }
        I++;
    }
    return List;
}

var nums= [5,2,2,1,8,66,55,77,34,9,55,1];
console.log(evenNumberEvenIndex2(nums));
var numbers= [44, 5, 4, 3, 2, 10];
console.log(evenNumberEvenIndex2(numbers));