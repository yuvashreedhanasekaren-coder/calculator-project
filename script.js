// Display

const display = document.querySelector("#display");

// Number Buttons

const numberButtons = document.querySelectorAll(".buttons button:not(.function):not(.operator):not(.equal)");

// Operator Buttons

const operatorButtons = document.querySelectorAll(".operator");

// Current Input

let currentInput = "";

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