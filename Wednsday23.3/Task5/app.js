let password= document.getElementById(password);
let repeat= document.getElementById(repeat);
let button= document.getElementById(btn);

function passwordcheck(){
    if (password.innerText.length < 6){
        document.getElementById(pass).innerHTML= "too Short";
    }else{
        document.getElementById(pass).innerHTML= "";
    }
}