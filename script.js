const chosenNumber = document.querySelector(".chosen-number");
// chosenNumber.textContent = "10"; //display the numbers that you work with

const total = document.querySelector(".total");
total.textContent = "5"; //display the total

const wrapper = document.querySelector(".wrapper");

// const darkMode = document.querySelector(".toggleDark-mode");
const resetButton = document.querySelector(".reset-button");
const deleteButton = document.querySelector(".delete-button");
const modulusButton = document.querySelector(".modulus-button");
const multiplyButton = document.querySelector(".multiply-button");
const substractButton = document.querySelector(".substract-button");
const addButton = document.querySelector(".add-button");
const decimalButton = document.querySelector(".decimal-button");
const equalButton = document.querySelector(".equal-button");
const operatorButton = document.querySelectorAll(".operators");
const numberButton = document.querySelectorAll(".number");
// numberButton[0].textContent = "A";



//get the numbers from the keyboard
let numar = numberButton.forEach(numberButton => {
    numberButton.addEventListener('click', () => {
        console.log(numberButton.textContent);
    })
})





// function add() {
//     return a + b;
// };
// add();


// function subtract() {
//     return a - b;
// };



// function multiply() {
//     return a * b;
// };


// function devide() {
//     return a / b;
// };

// const num = 3;
// const num2 = 10;



//Toogle Day - Dark mode
// darkMode.addEventListener("click", function () {
//     this.classList.toggle("bi-lightbulb-fill");
//     if (this.classList.toggle("bi-lightbulb")) {
//         wrapper.style.background = "#000000";
//         equalButton.style.background = "#C69749";

//     } else {
//         wrapper.style.background = "#f5f5f5";

//     }
// });