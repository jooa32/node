"use strict";



const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("button");

function login(){
    // console.log("bye");
    const req = {
        id: id.value,
        psword: psword.value,
    };
    console.log(req);
}

loginBtn.addEventListener("click", login);


// console.log(id);
// console.log("hello");

    