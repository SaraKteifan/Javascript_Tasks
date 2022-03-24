function changefontfamily(){
    let x=document.getElementById("fontfamily").value;
    document.getElementById("textarea").style.fontFamily=x;
}

function changefontsize(){
    let x=document.getElementById("fontsize").value;
    document.getElementById("textarea").style.fontSize=x;
}


function italic(){
    if(document.getElementById("italic").checked == true){
        document.getElementById("textarea").style.fontStyle = "italic";
    }else {
            if (document.getElementById("italic").checked == false){
                document.getElementById("textarea").style.fontStyle = "normal";
        }
    }
}

function bold(){
    if(document.getElementById("bold").checked == true){
        document.getElementById("textarea").style.fontWeight = "bold";
    }else {
            if (document.getElementById("bold").checked == false){
                document.getElementById("textarea").style.fontWeight = "normal";
        }
    }
}

function underline(){
    if(document.getElementById("underline").checked == true){
        document.getElementById("textarea").style.textDecoration = "underline";
    }else {
            if (document.getElementById("underline").checked == false){
                document.getElementById("textarea").style.textDecoration = "none";
        }
    }
}