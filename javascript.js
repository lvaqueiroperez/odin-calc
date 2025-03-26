let a = "";
let b = "";
let operator = "";
let calculatorArray = [0];

// CALCULADORA SIMPLE, 22+22 SOLO UN OPERADOR Y 2 OPERANDOS
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
                getOperateParameters(display.textContent);
                break;

        }

    }

});

function clearDisplay() {
    display.textContent = "";
}

// split meterá un espacio vacío en el array que devuelve si solo existe un elemento y el separador en esa string "a/" por ejemplo, también en otros casos lo pone.
function getOperateParameters(string) {

    let operationArray = [];

    if (string === "") {

        display.textContent = "";

    } else if (string.includes("/")) {

        operationArray = string.split("/");
        checkOperationArray(operationArray);

    } else if (string.includes("*")) {

        operationArray = string.split("*");
        checkOperationArray(operationArray);

    } else if (string.includes("-")) {

        operationArray = string.split("-");
        checkOperationArray(operationArray);

    } else if (string.includes("+")) {

        operationArray = string.split("+");
        checkOperationArray(operationArray);

    }



}

function checkOperationArray(operationArray) {
    // in some cases, array.split() puts empty spaces in the array, so we have to check for those just in case
    if ((operationArray.length === 2) && (!isNaN(operationArray[0])) && (!isNaN(operationArray[1])) && (operationArray[0] !== "") && (operationArray[1] !== "")) {
        console.log(operationArray);
        console.log("approved!");
    } else {
        display.textContent = "SYNTAX ERROR";
    }
}

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