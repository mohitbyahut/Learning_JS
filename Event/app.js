// let btns = document.querySelectorAll("button");

// // btn.onclick = function (){
// //   alert ("hellow")     
// // };

// for(btn of btns){
//    // btn.onclick = sayHello;
//    // btn.onmouseenter = sayHello;
//    // btn.onclick = sayName;
//    // btn.onclick = sayNames;
//    // btn.addEventListener("click",sayHello);
//    // btn.addEventListener("click",sayName);
//    // btn.addEventListener("click",sayNames);
   
//    btn.addEventListener("dblclick",function(){
//       console.log("Its Vinayak");
//    })
// }

// function sayHello(){
//    console.log("Hello WOrld");   
// }
// function sayName (){
//    alert("name");
// }
// function sayNames (){
//    alert("gupta");
// }


let box = document.querySelector(".box");

box.addEventListener("click", function(){
   alert("Hello Sir");
});
let box2 = document.querySelector(".box2");
box2.addEventListener("click",function(){
   box2.style.backgroundColor = "black"
});

