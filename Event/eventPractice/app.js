// let inp = document.querySelector("input");
// let btn = document.querySelector("button");

let from = document.querySelector("form");

from.addEventListener("submit", function (event) {
    event.preventDefault();
    // alert("Submited");

    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");

    alert(`your user is ${user.value}, pass is ${pass.value}`);

})