// var userName=prompt("Give me your username");
// alert("This script works "+userName);

var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");

// outputDiv.innerText = "Aravind Gurav"

// function buttonClick(){
//     console.log("clicked!!");
//     console.log(txtInput.value);    
// }

function buttonClick(){
    outputDiv.innerText="asjasjasjasjasj "+ txtInput.value;
}


btnTranslate.addEventListener("click", buttonClick);
