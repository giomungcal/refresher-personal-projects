const resultsField = document.querySelector(".results");
const calculationsTxt = document.querySelector(".calculation-text");

const numbers = document.querySelectorAll(".numbers");
const operatorBtns = document.querySelectorAll(".operators");

const equalBtn = document.querySelector(".equal");

const clearBtn = document.querySelector(".clear-btn");
const backspaceBtn = document.querySelector(".backspace-btn");

let num1 = 0;
let num2 = 0;
let operator = "";
let isResultDisplayed = false;

numbers.forEach((numBtn) => {
  numBtn.addEventListener("click", () => {
    console.log(isResultDisplayed);

    if (isResultDisplayed) {
      // If there is a result, overwrite the field when clicking on a new number.
      resultsField.textContent = numBtn.textContent;
      isResultDisplayed = false;
    } else {
      // If 0 is the first input, it stays as 0.
      if (resultsField.textContent === "0" && numBtn.textContent === "0") {
        resultsField.textContent = "0";
      } else resultsField.textContent += numBtn.textContent;
    }

    if (resultsField.textContent.length > 1) {
      resultsField.textContent = resultsField.textContent.replace(/^0+/, "");
    }
  });
});

operatorBtns.forEach((operBtn) => {
  operBtn.addEventListener("click", () => {
    // To enable changing of operator if, as long as field is blank.
    // resultsField.textContent === "" ? (operator = "") : operator;

    if (resultsField.textContent === "" && operator) {
      operator = operBtn.textContent;
      calculationsTxt.textContent = `${num1} ${operator}`;
      return;
    }

    if (operator) {
      num2 = resultsField.textContent;
      num1 = evaluateResults(num1, num2, operator);
    } else if (num1 === 0) {
      num1 = resultsField.textContent;
    }

    operator = operBtn.textContent;
    calculationsTxt.textContent = `${num1} ${operator}`;
    resultsField.textContent = "";
  });
});

equalBtn.addEventListener("click", () => {
  num2 = resultsField.textContent;
  calculationsTxt.textContent = "";
  resultsField.textContent = evaluateResults(num1, num2, operator);
  num1 = 0;
  num2 = 0;
  operator = "";
  isResultDisplayed = true;
});

backspaceBtn.addEventListener("click", () => {
  resultsField.textContent = resultsField.textContent.slice(0, -1);
});

clearBtn.addEventListener("click", () => {
  resultsField.textContent = "";
  calculationsTxt.textContent = "";
  num1 = 0;
  num2 = 0;
  operator = "";
  isResultDisplayed = false;
});

function evaluateResults(num1, num2, operator) {
  switch (operator) {
    case "+":
      return +num1 + +num2;
    case "-":
      return +num1 - +num2;
    case "*":
      return +num1 * +num2;
    case "/":
      return (+num1 / +num2).toFixed(5);
    default:
      return "Error";
  }
}
