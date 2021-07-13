// // // DOM events
// // var button = document.getElementsByTagName("button")[0]//[0] stands for 1st occurence of button tag .All button tags are stored in an array ,[0] stands for 1st button.

// // button.addEventListener("click" ,function(){
// //     console.log("CLICK!!!");
// // })

// var input=document.getElementById("userinput");
// var button=document.getElementById("enter");
// var ol=document.querySelector("ol");

// function inputlength(){
//     return input.value.length
// }

// button.addEventListener("click" , function(){
    
//      if (inputlength>0)
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value))
//         ol.appendChild(li);
//         input.value="";
// })

// input.addEventListener("keypress"  , function(event){
    
//      if (inputlength>0 && event.keycode===13)
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value))
//         ol.appendChild(li);
//         input.value="";
// })



// Exercise Background Generator
//javascript can read from the DOM 
var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");

function setGradient(){
    body.style.background="Linear-gradient(to right,"+color1.value+","+color2.value+")";

    css.textContent=body.style.background+";"//this is added get our style link 
}

color1.addEventListener("input" , setGradient);

color2.addEventListener("input" , setGradient);



