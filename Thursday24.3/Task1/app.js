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
document.getElementById("task2").innerHTML= firstName(persons);


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
// function repeatWord(string){
//     let list= string.split(" ")
//     list.forEach(function1());
    
// }

// function function1(){


// }




// console.log(repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO"));

// let x="Hello my name is Sara I am sara My car is pursche ";
// console.log(x.split(" "));


///////////////////////////////////////Task8
// function repeatChar(string){

// }


// x= 'Hello My Name is Sara';
// y= x.toUpperCase();
// console.log(x, y)

// array=['a', 'b', 'c', 'd', 'f', 'e'];
// console.log(array.sort());