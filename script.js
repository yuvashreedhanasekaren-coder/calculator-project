// Display

const display = document.querySelector("#display");

// Number Buttons

const numberButtons = document.querySelectorAll(
    ".buttons button:not(.function):not(.operator):not(.equal)"
);

// Operator Buttons

const operatorButtons = document.querySelectorAll(".operator");

// Equal Button

const equalButton = document.querySelector(".equal");

// Clear Button

const clearButton = document.querySelector(".function");

// Delete Button

const deleteButton = document.querySelectorAll(".function")[1];

// Current Input

let currentInput = "";
let firstNumber = "";
let secondNumber = "";
let currentOperator = "";


// Numbers

numberButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const value = button.textContent;

        if (currentInput === "0") {
            currentInput = value;
        } else {
            currentInput += value;
        }

        display.value = currentInput;

    });

});


// Operators

operatorButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const operator = button.textContent;

        currentOperator = operator;

        if (currentInput === "") {
            return;
        }

        const lastCharacter = currentInput.slice(-1);

        if (
            lastCharacter === "+" ||
            lastCharacter === "-" ||
            lastCharacter === "×" ||
            lastCharacter === "÷"
        ) {
            currentInput = currentInput.slice(0, -1);
        }

        currentInput += operator;

        display.value = currentInput;

    });

});


// Equal Button

equalButton.addEventListener("click", function () {

    const numbers = currentInput.split(currentOperator);

    firstNumber = Number(numbers[0]);
    secondNumber = Number(numbers[1]);

    let result;

    switch (currentOperator) {

        case "+":
            result = firstNumber + secondNumber;
            break;

        case "-":
            result = firstNumber - secondNumber;
            break;

        case "×":
            result = firstNumber * secondNumber;
            break;

        case "÷":
            result = firstNumber / secondNumber;
            break;

        default:
            return;

    }

    currentInput = result.toString();

    display.value = currentInput;

});


// Clear Button

function clearDisplay() {

    currentInput = "";
    firstNumber = "";
    secondNumber = "";
    currentOperator = "";

    display.value = "0";

}

clearButton.addEventListener("click", clearDisplay);


// Delete Button

deleteButton.addEventListener("click", function () {

    currentInput = currentInput.slice(0, -1);

    if (currentInput === "") {
        currentInput = "0";
    }

    display.value = currentInput;

});