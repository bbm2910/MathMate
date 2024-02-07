// --------------------- Global variables ------------------------


const wrapper = document.querySelector(".wrapper");
const body = document.body;
const darkMode = document.querySelector(".toggleDark-mode");
const button = document.querySelectorAll(".button");

const resetButton = document.querySelector(".reset-button");
const deleteButton = document.querySelector(".delete-button");
const modulusButton = document.querySelector(".modulus-button");
const equalButton = document.querySelector(".equal-button");

const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");

const decimalButton = document.querySelector(".decimal-button");


// --------------------- build the calculator ------------------------
let operator = "";
let previousValue = "";
let currentValue = "";


let numberDisplay = document.querySelector(".number-display");
numberDisplay.textContent = "0";
let totalDisplay = document.querySelector(".total-display");
totalDisplay.textContent = "0";

numberButton.forEach((number) => number.addEventListener("click", function (e) {
    handleNumber(e.target.textContent);
    numberDisplay.textContent = previousValue + operator + currentValue;
}));

function handleNumber(number) {
    if (currentValue.length < 6) {
        currentValue += number;
    }
}


operatorButton.forEach((op) => op.addEventListener("click", function (e) {
    handleOperator(e.target.textContent);
    numberDisplay.textContent = previousValue + operator;
}));

function handleOperator(op) {
    operator = op;
    if (previousValue !== "") {
        operate();
    }
    previousValue = currentValue;
    currentValue = "";
}

function operate() {
    switch (operator) {
        case "+":
            totalDisplay.textContent = Math.round((parseInt(previousValue) + parseInt(currentValue)) * 100 + Number.EPSILON) / 100;
            break;
        case "-":
            totalDisplay.textContent = Math.round((parseInt(previousValue) - parseInt(currentValue)) * 100 + Number.EPSILON) / 100;
            break;
        case "*":
            totalDisplay.textContent = Math.round((parseInt(previousValue) * parseInt(currentValue)) * 100 + Number.EPSILON) / 100;
            break;
        case "/":
            if (currentValue == "0") {
                totalDisplay.textContent = "err..";
                totalDisplay.style.color = "#DC3535";
            }
            else {
                totalDisplay.textContent = Math.round((parseInt(previousValue) / parseInt(currentValue)) * 100 + Number.EPSILON) / 100;
            }
            break;
        default:
            console.log("default");
            break;
    }
}

equalButton.addEventListener("click", function () {
    operate();
    previousValue = "";
    currentValue = totalDisplay.textContent;
});


function deleteLastChar() {
    if (currentValue.length > 0) {
        currentValue = currentValue.slice(0, -1);
        numberDisplay.textContent = currentValue;
    }
}
deleteButton.addEventListener("click", deleteLastChar);





// --------------------- Style and dark-mode ------------------------
numberButton.forEach(numberButton => {
    numberButton.style.color = "#990000";
});


darkMode.addEventListener("click", function () {
    const nightText = document.querySelector(".bi");
    const logos = document.querySelectorAll(".logo"); // Select all elements with class 'logo'

    if (this.classList.toggle("bi-lightbulb")) {
        body.classList.add('dark-mode');
        wrapper.classList.add('wrapper-dark-mode');
        logos.forEach(function (logo) { // Loop through each logo element
            logo.style.filter = 'invert(100%)';
        });
    } else {
        body.classList.remove('dark-mode');
        wrapper.classList.remove('wrapper-dark-mode');
        logos.forEach(function (logo) { // Loop through each logo element
            logo.style.filter = 'invert(0%)';
        });
    }
});




//-------------- Reset the calculator ----------------
resetButton.addEventListener("click", function () {

    const strConfirm = confirm("Are you sure you want to delete everything?");
    if (strConfirm == true) {
        operator = "";
        previousValue = "";
        currentValue = "";
        numberDisplay.textContent = "0";
        totalDisplay.textContent = "0";
        totalDisplay.style.color = "#191a19";
    }
})

