// Display

const display = document.querySelector("#display");

// Number Buttons

const numberButtons = document.querySelectorAll(".buttons button:not(.function):not(.operator):not(.equal)");

// Operator Buttons

const operatorButtons = document.querySelectorAll(".operator");

// Equal Button

const equalButton = document.querySelector(".equal");

// Current Input

let currentInput = "";
let firstNumber = "";
let secondNumber = "";
let currentOperator = "";


// Number Click

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

// Operator Click

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

// Equal Click

equalButton.addEventListener("click", function () {

    const numbers = currentInput.split(currentOperator);

    firstNumber = numbers[0];
    secondNumber = numbers[1];

    console.log(firstNumber);
    console.log(secondNumber);

});

// Equal Click

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