///////////////////////////////////////Task1
let Sara={
    firstName: "Sara",
    lastName: "Kteifan",
    age: 22,
    dob: new Date(1999,8,9),
    favorite_food:["Mansaf", "Kabsah", "Msakhan"],
    favorite_movie:["Shutter Island", "V for Venditta", "Leon the Proffesional", "Harry Poter", "Forgotten"],
    show: function(){
        return `My name is ${this.firstName} ${this.lastName}, I am ${this.age} years old, my favorite movies are ${this.favorite_movie}.`},
}

console.log("Task1:", Sara)
document.getElementById("task1").innerHTML= Sara.show();


///////////////////////////////////////Task2
var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
  ];
  
function firstName(object){
    let n= object.length;
    let firstNames=[];
    for (let i=0; i<n; i++ ){
        let x= object[i].name.first;
        firstNames.push(x)
    }
    return firstNames;
}

console.log("Task2:", firstName(persons))
document.getElementById("task2").innerHTML= JSON.stringify(firstName(persons));


///////////////////////////////////////Task3
function averageAge(object){
    let n= object.length;
    let sum=0;
    for (let i=0; i<n; i++ ){
        let y= object[i].age;
        sum+=y;
    }
    return sum/n;
}

console.log("Task3:", averageAge(persons))
document.getElementById("task3").innerHTML= averageAge(persons);


///////////////////////////////////////Task4
function olderPerson(object){
    let n= object.length;
    let older=object[0];
    for (let i=1; i<n; i++ ){
        let y= object[i].age;
        let z= object[i-1].age;
        if (y>z){
            older=object[i];
        }
    }
    return `${older.name.first} ${older.name.last}`;
}

console.log("Task4:", olderPerson(persons));
document.getElementById("task4").innerHTML= olderPerson(persons);


///////////////////////////////////////Task5
function longestName(object){
    let n= object.length;
    let longest=object[0];
    for (let i=1; i<n; i++ ){
        let y1= object[i].name.first;
        let y2= object[i].name.last;
        let z1= object[i-1].name.first;
        let z2= object[i-1].name.last;
        let y= y1.length+y2.length;
        let z= z1.length+z2.length;
        if (y>z){
            longest=object[i];
        }
    }
    return `${longest.name.first} ${longest.name.last}`;
}

console.log("Task5/6:", longestName(persons));
document.getElementById("task5").innerHTML= longestName(persons);


///////////////////////////////////////Task6




///////////////////////////////////////Task7
function repeatWord(string){
    let x= string.toLowerCase();
    let obj={};
    let list= x.split(" ");
    let l=list.length;
    for (let i=0; i<l; i++){
        let key= obj[list[i]];

        if (key){
            count=key;
        }else {
            count=0;
        }
        obj[list[i]]=count+1;
    }
    return obj;
}

console.log("Task7:", repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO"));
document.getElementById("task7").innerHTML= JSON.stringify(repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO"));

///////////////////////////////////////Task8
function repeatChar(string){
    let x= string.toLowerCase();
    let obj={};
    let stringChars= x.split("");
    let l=stringChars.length;
    for (let i=0; i<l; i++){
        let key= obj[stringChars[i]];

        if (key){
            count=key;
        }else {
            count=0;
        }
        obj[stringChars[i]]=count+1;
    }
    return obj;
}

console.log("Task8:", repeatChar("mamababatetacedo")); 
document.getElementById("task8").innerHTML= JSON.stringify(repeatChar("mamababatetacedo"));


///////////////////////////////////////Task9
function selectFromObject(obj,arr){
    let newobj={};
    let objkeys= Object.keys(obj);
    let objvals=Object.values(obj);
    let l=objkeys.length;
    for(let i=0; i<l; i++){
        for(let j=0; j<arr.length; j++){
            if(objkeys[i] == arr[j]){
                newobj[objkeys[i]]=objvals[i];
            }
        }
    }
    return newobj;
}

console.log("Task9:", selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd']));
document.getElementById("task9").innerHTML= JSON.stringify(selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd']));


///////////////////////////////////////Task10
function objectToArray(obj){
    let arr=[];
    let objkeys= Object.keys(obj);
    let objvals=Object.values(obj);
    let l=objkeys.length;
    for(let i=0; i<l; i++){
        arr.push(objkeys[i]);
        arr.push(objvals[i]);
    }
    return arr; 
}

 console.log("Task10:",objectToArray({firstName:"Moh",age:24}));
 document.getElementById("task10").innerHTML= JSON.stringify(objectToArray({firstName:"Moh",age:24}));

 ///////////////////////////////////////Task11
 function arrayToObject(arr){
    let obj={};
    let l= arr.length;
    for (let i=0; i<l;){
        obj[arr[i]]=arr[i+1];
        i+=2;
    }
    return obj;
 }

console.log("Task11:", arrayToObject(["firstName","Moh","age",24]));
document.getElementById("task11").innerHTML= JSON.stringify(arrayToObject(["firstName","Moh","age",24]));


 ///////////////////////////////////////Task12
 function onlyNumber(obj){
     let newobj={};
     let objkeys= Object.keys(obj);
     let objvals= Object.values(obj);
     let l= objkeys.length;
     for (let i=0; i<l;i++){
         if(typeof(objvals[i]) == 'number'){
           newobj[objkeys[i]] = objvals[i];
         }
     }
     return newobj;
 }

console.log("Task12:", onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})); 
document.getElementById("task12").innerHTML= JSON.stringify(onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]}));


///////////////////////////////////////Task13
function onlyString(obj){
    let newobj={};
    let objkeys= Object.keys(obj);
    let objvals= Object.values(obj);
    let l= objkeys.length;
    for (let i=0; i<l;i++){
        if(typeof(objvals[i]) == 'string'){
          newobj[objkeys[i]] = objvals[i];
        }
    }
    return newobj;
}

console.log("Task13:", onlyString({firstName:"Moh",age:34,movies:[1,5,"string"]})); 
document.getElementById("task13").innerHTML= JSON.stringify(onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]}));


///////////////////////////////////////Task14
function onlyArray(obj){
    let newobj={};
    let objkeys= Object.keys(obj);
    let objvals= Object.values(obj);
    let l= objkeys.length;
    for (let i=0; i<l;i++){
        if(Array.isArray(objvals[i])){
          newobj[objkeys[i]] = objvals[i];
        }
    }
    return newobj;
}

console.log("Task14:", onlyArray({firstName:"Moh",age:34,movies:[1,5,"string"]})); 
document.getElementById("task14").innerHTML= JSON.stringify(onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]}));

///////////////////////////////////////Task15
function keysArray(obj){
    let list=Object.keys(obj);
    return list;
}

console.log("Task15:", keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]}));
document.getElementById("task15").innerHTML= JSON.stringify(keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]}));