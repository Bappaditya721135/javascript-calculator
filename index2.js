"use strict";

// screen 
const screen = document.querySelector(".screen");
// all the button's parent element 
const opSection = document.querySelector(".operator-section");
const numSection = document.querySelector(".number-section");
const clearBtn = document.querySelector(".clear-btn");
const equalToBtn = document.querySelector(".equalTo-btn");

let input1 = "";
let input2 = "";
let operator = "";
let screenStr = "";



// num section click handler 
numSection.addEventListener("click", (e) => {
    
    if(e.target === e.currentTarget) return;


    // check if a operator exist on the screen 
    const val = e.target.dataset.number;
    if(operator === "") {
        input1 = input1 + val;
        screenStr = screenStr + val;

        // displaying on the screen 
        display(screenStr)
        console.log(`string : = ${screenStr}`)
    }
    else {
        input2 = input2 + val;
        screenStr = screenStr + val;
    

        // displaying on the screen 
        display(screenStr)
        console.log(`string : = ${screenStr}`)
    }

    console.log(input1)
    console.log(input2)
})



// operator section click handler 
opSection.addEventListener("click", (e) => {
    if(e.target === e.currentTarget) return;
    if(!input1) return;

    if(operator && input1 && input2) {

        // store the result and combine with the operator input and display it 
        screenStr = calculate(input1, input2, operator)
        screenStr = screenStr + e.target.dataset.operator
        console.log("problem")
        display(screenStr)
        return;
    }

    // check if the first input exist 
    if(input1 !== "" && !operator) {
        operator = e.target.dataset.operator;
        screenStr = screenStr + operator;


        display(screenStr)
    }
    console.log(operator)
})



// calculate functionality 
function calculate(num1,num2, operator) {
    console.log(num1, num2, operator)

    // convert num1 and num2 into number 
    const n1 = Number(num1);
    const n2 = Number(num2);


    // calculate 
    if(operator === "+") return n1 + n2;
    if(operator === "-") return n1 - n2;
    if(operator === "*") return n1 * n2;
    if(operator === "/") return n1 / n2;
    if(operator === "%") return n1 % n2;
}


console.log(calculate(1,1, "+"));
console.log(calculate(1,1, "-"));
console.log(calculate(1,1, "*"));
console.log(calculate(1,1, "/"));
console.log(calculate(1,1, "%"));



equalToBtn.addEventListener("click", (e) => {
    console.log("working")
    if(input1 && input2 ) {

        // replace the screenStr value with the result and display it 
        screenStr = calculate(input1,input2, operator)
        display(screenStr)
    }
})




// function to display on screen 
function display(str) {
    screen.textContent = str;
}

