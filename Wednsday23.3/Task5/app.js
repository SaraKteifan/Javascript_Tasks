function passwordcheck(){
    let x = document.getElementById("password").value;
    if (x.length < 6){
        document.getElementById("pass").innerHTML= "Too Short";
    }else{
        document.getElementById("pass").innerHTML= "";
    }
}

function repeatcheck(){
    let x = document.getElementById("password").value;
    let y= document.getElementById("repeat").value;
    if (x != y){
        document.getElementById("rep").innerHTML="The two passwords don't match";
    }else{
        document.getElementById("rep").innerHTML="";
    }
    if(x == y && x.length >= 6){
        document.getElementById("btn").style.display= "block";
    }
}