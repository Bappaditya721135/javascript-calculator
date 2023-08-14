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
    }
    else {
        input2 = input2 + val;
        screenStr = screenStr + val;
        // displaying on the screen 
        display(screenStr)
    }
})



// operator section click handler 
opSection.addEventListener("click", (e) => {
    if(e.target === e.currentTarget) return;
    if(!input1) return;

    if(operator && input1 && input2) {
        // store the result and combine with the operator input and display it 
        screenStr = calculate(input1, input2, operator)
        input1 = screenStr;
        input2 = "";
        operator = e.target.dataset.operator;
        screenStr = screenStr + e.target.dataset.operator
        display(screenStr)
        return;
    }

    // check if the first input exist 
    if(input1 !== "" && !operator) {
        operator = e.target.dataset.operator;
        screenStr = screenStr + operator;
        display(screenStr)
    }
})



// calculate functionality 
function calculate(num1,num2, operator) {
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





equalToBtn.addEventListener("click", (e) => {
    if(!input2) return;
    if(input1 && input2 ) {
        // replace the screenStr value with the result and display it 
        screenStr = calculate(input1,input2, operator)
        input1 = screenStr;
        input2 = "";
        operator = "";
        display(screenStr)
    }
})




// function to display on screen 
function display(str) {
    screen.textContent = str;
}

// clear functionality 

clearBtn.addEventListener("click", (e) => {
    if(!input1) return;

    if(input2) {
        input2 = input2.substring(0, input2.length-1)   
        // updating and displaying the new screenStr 
        screenStr = screenStr.substring(0, screenStr.length - 1)
        display(screenStr)
        return;
    }
    
    if(operator) {
        operator = "";
        // updating and displaying screen str 
        screenStr = screenStr.substring(0, screenStr.length - 1)
        display(screenStr)
        return;
    }

    if(input1) {
        input1 = input1.substring(0, input1.length - 1)
        // updating and displaying screen str 
        screenStr = screenStr.substring(0, screenStr.length - 1)
        display(screenStr)
        return;
    }
})