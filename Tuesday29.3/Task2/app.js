'use strict'
let Butn=document.getElementById("btn");
let data=[];

function storeInLocalStorage(){
    let stored=JSON.stringify(data);
    localStorage.setItem('clientsPur',stored);
}

function CallFromLocalStorage(){
    let getStored=localStorage.getItem('clientsPur');
    let StoredData=JSON.parse(getStored);
    if (StoredData != null){
    let l=StoredData.length;
    if (l != 0){
        for(let i=0; i<l; i++){
            let newRow= document.createElement('tr');
            let newCol1= document.createElement('td');
            let newCol2= document.createElement('td');
            let newCol3= document.createElement('td');
            let newCol4= document.createElement('td');
            newRow.appendChild(newCol1);
            newRow.appendChild(newCol2);
            newRow.appendChild(newCol3);
            newRow.appendChild(newCol4);
            document.getElementById('boadTa').appendChild(newRow);
            newCol1.innerHTML=StoredData[i].Name;
            newCol2.innerHTML=StoredData[i].phoneT;
            newCol3.innerHTML=StoredData[i].price;
            newCol4.innerHTML=StoredData[i].cond;
        }
        for(let i=l-1; i>=0; i--){
            data.unshift(StoredData[i]);
        }
    }
    }
}

Butn.addEventListener("click", phonePurchase);
function phonePurchase() {
    let clientName=document.getElementById('client').value;
    let phoneType=document.getElementById('typeName').value;

    new Client(clientName,phoneType);
}

CallFromLocalStorage()
function Client(clientName,phoneType){
    this.Name=clientName;
    this.phoneT=phoneType;
    this.price= Math.floor(Math.random()*(500-50)+50);
    let x;
    if (this.price<100){
        x= 'Used';
    }else{
        x= 'New Device';
    };
    this.cond= x;
    

    console.log(this);
    data.push(this);
    renderfun();
    storeInLocalStorage()
    console.log(localStorage.getItem('clientsPur'));
}

function renderfun(){
    let newRow= document.createElement('tr');
    let newCol1= document.createElement('td');
    let newCol2= document.createElement('td');
    let newCol3= document.createElement('td');
    let newCol4= document.createElement('td');
    newRow.appendChild(newCol1);
    newRow.appendChild(newCol2);
    newRow.appendChild(newCol3);
    newRow.appendChild(newCol4);
    document.getElementById('boadTa').appendChild(newRow);

    let l=data.length-1;

    newCol1.innerHTML=data[l].Name;
    newCol2.innerHTML=data[l].phoneT;
    newCol3.innerHTML=data[l].price;
    newCol4.innerHTML=data[l].cond;
}

////////////////////////////////////
let form= document.getElementById('locForm');
let result= document.getElementById("cityResult");
let showRes= document.getElementById("btn2");
let img= document.getElementById("img");

showRes.addEventListener('click',showLocation);

function showLocation(){
    let loc_name= document.getElementById("loc_Name").value;

    new locConstructor(loc_name)
}

function locConstructor(loc_name){
    this.location= loc_name;
    console.log(this);
    showOnPage(this.location)
}
async function showOnPage(x){
    let locReq= await fetch(`https://eu1.locationiq.com/v1/search.php?key=pk.1dd34aa6546423b1c1d1a72ee949f992&q=${x}&format=json`)
    let data=await locReq.json()
    console.log(data);
    
    
    result.innerHTML = `<h3 style="display:inline;"> location :</h3> ${data[0].display_name} <br> 
    <h3 style="display:inline;">lat:</h3> ${data[0].lat} <br> 
    <h3 style="display:inline;">lon:</h3> ${data[0].lon}`;
    img.src= `${data[0].icon}`;   
    
   
}
