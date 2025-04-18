let a = "";
let b = "";
let operator = "";
let operationArray = [];
let operationDone = false;

// AÑADIR KEYBOARD SUPPORT PARECE FÁCIL CON LOS EVENTOS DE KEYDOWN Y USANDO EL TARGET.KEY ETC
// CALCULADORA SIMPLE, 22+22 SOLO UN OPERADOR Y 2 OPERANDOS
// intentar usar mejor el event delegation y que le código quede más limpio, sin tantas clases relativas a esto
// 27 CHARACTERS MAX
// TUVE QUE ABARCAR ESTE PROYECTO CON MÁS PLANIFICACIÓN PARA QUE AL FINAL TODO ESTUVIESE PERFECTAMENTE PLANEADO Y CODIFICADO...
const buttonsContainer = document.querySelector(".buttons");
const display = document.querySelector(".display");

display.textContent = "";

buttonsContainer.addEventListener("click", (event) => {

    checkPressedButton(event);

});

function checkPressedButton(event) {

    if (event.target.className === "content") {

        checkDisplayLength();

        if (operationDone) {

            display.textContent = event.target.textContent;
            operationDone = false;

        } else {
            display.textContent += event.target.textContent;
        }

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

}

function checkDisplayLength() {
    if (display.textContent.length === 27) {
        display.textContent = display.textContent.slice(0, display.textContent.length - 1);
    }
}

function clearDisplay(element) {
    element.textContent = "";
    operationArray = [];
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
        operationArray = [];
        operationDone = true;

    } else {
        if (display.textContent === "") {
            display.textContent = "";
        } else if (!isNaN(+display.textContent)) {
            display.textContent = display.textContent;
        } else {
            display.textContent = "SYNTAX ERROR";
            operationDone = true;
        }
    }

}

function checkTextContent(string) {

    if (string === "") {

        return false;

        // we want a whole operation, not only a number
    } else if (!isNaN(+string)) {

        return false;

    } else if (string.includes("/")) {

        operationArray = string.split("/");

        if (checkOperationArray(operationArray)) {

            operationArray.push("/");
            return true;

        } else {
            return false;
        }

    } else if (string.includes("*")) {

        operationArray = string.split("*");
        if (checkOperationArray(operationArray)) {

            operationArray.push("*");
            return true;

        } else {
            return false;
        }

    } else if (string.includes("-")) {

        operationArray = string.split("-");
        if (checkOperationArray(operationArray)) {

            operationArray.push("-");
            return true;

        } else {
            return false;
        }

    } else if (string.includes("+")) {

        operationArray = string.split("+");
        if (checkOperationArray(operationArray)) {

            operationArray.push("+");
            return true;

        } else {
            return false;
        }

    }

    // if nothing is true, just return false
    return false;

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