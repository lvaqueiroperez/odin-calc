let a = "";
let b = "";
let operator = "";
let operationArray = [];

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
                clearDisplay(display);
                break;

            case "equal":
                changeTextContent();
                break;

            case "backspace":
                backspace(display);
                break;
        }

    }

});

function clearDisplay(element) {
    element.textContent = "";
}

function backspace(element) {

    let newText = element.textContent.split("");
    newText.splice(-1, 1);
    newText = newText.join("");
    element.textContent = newText;


}

function changeTextContent() {
    if (checkTextContent(display.textContent)) {
        display.textContent = operate(...operationArray);
    }
}

function checkTextContent(string) {

    if (string === "") {

        display.textContent = "";
        return false;

    } else if (!isNaN(+string)) {

        display.textContent = string;
        return false;

    } else if (string.includes("/")) {

        operationArray = string.split("/");

        if (checkOperationArray(operationArray)) {

            operationArray.push("/");
            return true;

        } else {
            display.textContent = "SYNTAX ERROR";
            return false;
        }

    } else if (string.includes("*")) {

        operationArray = string.split("*");
        if (checkOperationArray(operationArray)) {

            operationArray.push("*");
            return true;

        } else {
            display.textContent = "SYNTAX ERROR";
            return false;
        }

    } else if (string.includes("-")) {

        operationArray = string.split("-");
        if (checkOperationArray(operationArray)) {

            operationArray.push("-");
            return true;

        } else {
            display.textContent = "SYNTAX ERROR";
            return false;
        }

    } else if (string.includes("+")) {

        operationArray = string.split("+");
        if (checkOperationArray(operationArray)) {

            operationArray.push("+");
            return true;

        } else {
            display.textContent = "SYNTAX ERROR";
            return false;
        }

    }

}

function checkOperationArray(operationArray) {
    // in some cases, array.split() puts empty spaces in the array, so we have to check for those just in case
    if ((operationArray.length === 2) && (!isNaN(operationArray[0])) && (!isNaN(operationArray[1])) && (operationArray[0] !== "") && (operationArray[1] !== "")) {
        console.log(operationArray);
        console.log("approved!");
        return true;
    } else {
        return false;
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

function operate(num1, num2, operator) {

    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return substract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);

    }

}