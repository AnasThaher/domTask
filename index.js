console.log("index.js is run0");
let stackValue=[];
let helpStak=[];
let innerHtmlV=`<div></div>`;
// let innerHtmlV = document.createElement("div");


function push(){
let number =document.getElementById("num").value;
if(number==""){

    console.log("the value is null")
    alert("the value is null");
}else{
    // innerHtmlV.innerText=`${number}`;
    // let str =document.getElementById("first-child");
    stackValue.push(number);
    console.log(number);

    for(let val of stackValue){
        console.log(val);

        innerHtmlV +=`<div>${val}</div>`;

    console.log(innerHtmlV);
    helpStak.push(number);
    stackValue=[];
    console.log(helpStak);
    
}
document.getElementById("stack").innerHTML = innerHtmlV;
}




}

function pop(){
    console.log("pop is run");
    helpStak.pop();
    console.log(helpStak)
    for(let val of helpStak){
        console.log(val);

        innerHtmlV +=`<div>${val}</div>`;

    console.log(innerHtmlV);
    // stackValue=[];
    
}
document.getElementById("stack").innerHTML = '<div></div>';

document.getElementById("stack").innerHTML = innerHtmlV;
    
}