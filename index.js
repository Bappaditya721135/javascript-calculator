"use strict";


// all the button's parent element 
const opSection = document.querySelector(".operator-section");
const numSection = document.querySelector(".number-section");
const clearBtn = document.querySelector(".clear-btn");
const equalToBtn = document.querySelector(".equalTo-btn");


// two empty inputs 
let input1 = "";
let input2 = "";
let inputStr = "";
let operator;


// operator click 

opSection.addEventListener("click", (e) => {
    if(e.target === e.currentTarget) return;

    // check if a input is already entered 
    if(inputStr === "") return;

    console.log(e.target)

})


// Number click 
numSection.addEventListener("click", (e) => {
    if(e.target === e.currentTarget) return;

    console.dir(Number(e.target.dataset.number))
    if(operator) {
        input1 = input1 + e.target.dataset.number;
        inputStr = inputStr + input1;
        console.log(input1)
    }
    else {
        input2 = input2 + e.target.dataset.number;
        inputStr = inputStr + input1;
        console.log(input2)
    }


    console.log(`input 1 is ${input1}`)
    console.log(`input 2 is ${input2}`)
    console.log(`input str is ${inputStr}`)
    
})


// clear btn click 
clearBtn.addEventListener("click", (e) => {
    if(inputStr === "") return;
    console.log("clear")
})


// equalToBtn click 
equalToBtn.addEventListener("click", (e) => {
    if(inputStr === "") return;
    console.log("equal")
})



function operation(num1,num2, operator) {
    if(operator === "+") return "sum";
    if(operator === "-") return "sub";
    if(operator === "*") return "mul";
    if(operator === "/") return "div";
    if(operator === "%") return "mod";
}


console.log(operation(1,1, "+"));
console.log(operation(1,1, "-"));
console.log(operation(1,1, "*"));
console.log(operation(1,1, "/"));
console.log(operation(1,1, "%"));






