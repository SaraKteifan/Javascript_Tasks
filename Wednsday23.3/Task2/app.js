let x=document.getElementById("div1").style.backgroundColor ="blue";

function fun1(z){
    if (z.style.backgroundColor == "blue"){
        z.style.backgroundColor = "red";
    }
   else {
        if (z.style.backgroundColor == "red"){
        z.style.backgroundColor = "green";
        }
        else {
            if (z.style.backgroundColor == "green"){
            z.style.backgroundColor = "blue";
            }
    }
   }
}

