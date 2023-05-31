// --------------------- Global variables ------------------------


const wrapper = document.querySelector(".wrapper");
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



// deleteButton.addEventListener("click", function () {
//     if (numberDisplay.textContent.length >= 1) {
//         let displayArray = numberDisplay.textContent.split("");
//         displayArray.pop();
//         let displayString = displayArray.join("");
//         numberDisplay.textContent = displayString;
//     }
// });



// --------------------- Style and dark-mode ------------------------
numberButton.forEach(numberButton => {
    numberButton.style.color = "#990000";
});


darkMode.addEventListener("click", function () {
    // this.classList.toggle("bi-lightbulb-fill");
    if (this.classList.toggle("bi-lightbulb")) {
        wrapper.classList.add("wrapper-dark-mode");
        button.forEach(button => {
            button.style.boxShadow = "inset 6px 6px 12px #949494, inset -6px -6px 12px #ffffff";
        });

    } else {
        wrapper.classList.remove("wrapper-dark-mode");
        button.forEach(button => {
            button.style.boxShadow = "8px 8px 13px #d0d0d0, -8px -8px 13px #ffffff";
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

