////////////////////Task1
console.log('Task1:----------');
function doubleValues(array){
    let newList=[];
    array.forEach(element => {newList.push(element*2)});
    return newList;
}

console.log(doubleValues([1,2,3]));
console.log(doubleValues([5,1,2,3,10]));

////////////////////Task2
console.log('Task2:----------');
function onlyEvenValues(array){
    let newList=[];
    array.forEach(element => {
        if(element %2 ==0){
        newList.push(element)
        }
    });
    return newList;
}

console.log(onlyEvenValues([1,2,3]));
console.log(onlyEvenValues([5,1,2,3,10]));

////////////////////Task3
console.log('Task3:----------');
function showFirstAndLast(array){
    let newList=[];
    array.forEach(element => {
        let firstAndLast= element[0]+element[element.length-1];
        newList.push(firstAndLast);
    });
    return newList;
}

console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy']));
console.log(showFirstAndLast(['hi', 'goodbye', 'smile']));

////////////////////Task4
console.log('Task4:----------');
function addKeyAndValue(array, key, value){
    array.forEach(element => {
        element.key =value;
    });
    return array;
}

console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'));


////////////////////Task5
console.log('Task5:----------');
let obj={};
    let a= 0;
    let e= 0;
    let i= 0;
    let o= 0;
    let u= 0;
function vowelCount(string){
    let list=[];
    for(let i=0; i<string.length; i++){
        list.push(string[i])
    }
    console.log(list);
    list.forEach(counting());
function counting(){
    if (element == 'a' || element == 'A'){
        obj.a=a+1;
    }
    if (element == 'e' || element == 'E'){
        obj.e=e+1;
    }
    if (element == 'i' || element == 'I'){
        obj.i=i+1;
    }
    if (element == 'o' || element == 'O'){
        obj.o=o+1;
    }
    if (element == 'u' || element == 'U'){
        obj.u=u+1;
    }
};
return obj;
}

console.log(vowelCount('Elie'));
console.log(vowelCount('Tim'));
console.log(vowelCount('Matt'));
console.log(vowelCount('hmmm'));
console.log(vowelCount('I Am awesome and so are you'));
