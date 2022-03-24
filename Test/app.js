// let x=document.createElement("p");
// x.innerHTML="Orange Coding Academy";
// document.getElementById("title").appendChild(x);


// let y=document.getElementsByTagName("li");
// console.log(y.length);

// function change(z){
//     z.style.color= "Orange";
//     z.style.fontSize="70px";
        
// }
        
//  function normal(z) {
//     z.style.color= "blue";
//     z.style.fontSize="40px";
// }
//////////////////////////////////////////////////////////////////////////////
let x=document.createElement("p");
x.innerHTML="Orange Coding Academy";
document.getElementById("title").appendChild(x);

let y=document.getElementsByTagName("li");
// for(let i=0; i<y.length; i++){
//     y[i].style.color="red";
// }

console.log(y);
console.log(typeof y);

function change(z) {
    z.style.color= "blue";
    z.style.fontSize="70px";
}

function normal(z) {
    z.style.color= "";
    z.style.fontSize="";
}



