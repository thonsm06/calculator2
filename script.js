function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

let num1 = "";
let operator = "";
let num2 = "";

function operate(operator, num1, num2) {
    switch(operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return sub(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);

    }
}
const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (event) => {
    let button = event.target.value;
    if (button.match(/\d/)) {
        
        if (num1 === "") {
            display.textContent = "";
        } else if (num1 !== "" && operator !== "") {
            num2 += button;
            display.textContent = num1 + operator + num2;
        }
        num1 += button;
        display.textContent = num1;
    }

    if (button.match(/[+-/*]/)) {
        operator = button;
        console.log(operator);
    }
    
    
})