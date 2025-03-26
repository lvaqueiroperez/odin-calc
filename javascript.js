let a = "";
let b = "";
let operator = "";
let calculatorArray = [0];

// haré la calculadora mediante un array con todos los botones presionados, usando métodos como push, pop, split, join... etc.
// intentar usar mejor el event bubbling y que le código quede más limpio, sin tantas clases relativas a esto
const buttonsContainer = document.querySelector(".buttons");
const display = document.querySelector(".display");

display.textContent = "";

buttonsContainer.addEventListener("click", (event) => {

    if (event.target.className === "content") {
        display.textContent += event.target.textContent;
    } else {

        switch (event.target.id) {

            case "clear":
                clearDisplay();
                break;
            case "equal":
                console.log("OPERATE");
                //operate(getOperateParameters());
                break;

        }

    }

});


function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(num1, operator, num2) {

    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return substract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "SYNTAX ERROR";

    }

}