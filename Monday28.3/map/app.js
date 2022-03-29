/////////////////Task1
console.log('Task1==========');
function doubleNumbers(arr){
    let narr=arr.map(function(v){
        return v*2;
    })
    return narr;
}

console.log(doubleNumbers([2, 5, 100]));


/////////////////Task2
console.log('Task2==========');
function stringItUp(arr){
    let narr=arr.map(function(v){
        return String(v);
    })
    return narr;
}

console.log(stringItUp([2, 5, 100]));


/////////////////Task3
console.log('Task3==========');
function capitalizeNames(arr){
    let narr=arr.map(function(v){
        let y= v[0].toUpperCase() + v.slice(1);
        return y;
    })
    return narr;

}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));


/////////////////Task4
console.log('Task4==========');
function namesOnly(arr){
    let narr=arr.map(function(v){
        return v.name;
    })
    return narr;
}

console.log(namesOnly([
       {
           name: "Angelina Jolie",
           age: 80
       },
       {
           name: "Eric Jones",
           age: 2
       },
       {
           name: "Paris Hilton",
           age: 5
       },
       {
           name: "Kayne West",
           age: 16
       },
       {
           name: "Bob Ziroll",
           age: 100
       }
       ])); 

/////////////////Task5
console.log('Task5==========');
function makeStrings(arr){
    let narr=arr.map(function(v){
        if(v.age<18){
            return v.name+' is under age!!';
        }else{
            return v.name+' can go to The Matrix';
        }
    })
    return narr;
}
console.log(makeStrings([
        {
           name: "Angelina Jolie",
           age: 80
       },
       {
           name: "Eric Jones",
           age: 2
       },
       {
           name: "Paris Hilton",
           age: 5
       },
       {
           name: "Kayne West",
           age: 16
       },
       {
           name: "Bob Ziroll",
           age: 100
       }
     ])); 


/////////////////Task6
console.log('Task6==========');
function readyToPutInTheDOM(arr){
    let narr=arr.map(function(v){
        return `<h1> ${v.name} </h1><h2> ${v.age} </h2>`;
    })
    return narr;
}

console.log(readyToPutInTheDOM([
       {
           name: "Angelina Jolie",
           age: 80
       },
       {
           name: "Eric Jones",
           age: 2
       },
       {
           name: "Paris Hilton",
           age: 5
       },
       {
           name: "Kayne West",
           age: 16
       },
       {
           name: "Bob Ziroll",
           age: 100
       }
     ])); 


/////////////////Task7
console.log('Task7==========');
function doubleValues(arr){
    let narr=arr.map(function(v){
        return v*2;
    })
    return narr;
}

console.log(doubleValues([1,2,3]));
console.log(doubleValues([1,-2,-3]));


/////////////////Task8
console.log('Task8==========');
function valTimesIndex(arr){
    let narr=arr.map(function(v,i){
        return v*i;
    })
    return narr;
}

console.log(valTimesIndex([1,2,3]) );
console.log(valTimesIndex([1,-2,-3]));


/////////////////Task9
console.log('Task9==========');
function extractKey(arr, key){
    let narr=arr.map(function(v){
        return v[key];
    })
    return narr;
}

console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name'));


/////////////////Task10
console.log('Task10==========');
function extractFullName(arr){
    let narr=arr.map(function(v){
        return `${v.first} ${v.last}`;
    })
    return narr;
}

console.log(extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]));