// var userName=prompt("Give me your username");
// alert("This script works "+userName);

var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");

function buttonClick(){
    console.log("clicked!!");
    console.log(txtInput.value);    
}

btnTranslate.addEventListener("click", buttonClick);
