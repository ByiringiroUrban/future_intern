const screen = document.getElementById("screen");
let currentInput = "";
let operator = "";
let previousInput = "";
let isResult = false;  // Flag to track if result has been calculated

document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", (e) => {
    const value = e.target.textContent;

    if (value === "C") {
      // Clear the screen and reset all variables
      currentInput = "";
      previousInput = "";
      operator = "";
      isResult = false;  
      screen.value = "";
    } else if (value === "←") {
      // Backspace to delete the last character
      currentInput = currentInput.slice(0, -1);
      screen.value = currentInput;
    } else if (value === "=") {
      // Calculate result
      if (previousInput !== "" && operator !== "" && currentInput !== "") {
        currentInput = calculate(previousInput, currentInput, operator);
        screen.value = currentInput;
        previousInput = ""; 
        operator = ""; 
        isResult = true;
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      // If an operator is clicked, store the previous input and operator
      if (currentInput !== "") {
        previousInput = currentInput;
        operator = value;
        currentInput = "";
        screen.value = previousInput + operator;
        isResult = false; 
      }
    } else {
      // If result is calculated and user clicks a number, start fresh calculation
      if (isResult) {
        currentInput = value;
        screen.value = currentInput;
        isResult = false; 
      } else {
        // Append number or decimal to current input
        currentInput += value;
        screen.value = currentInput;
      }
    }
  });
});

// Function to perform calculations
function calculate(a, b, op) {
  a = parseFloat(a);
  b = parseFloat(b);

  switch (op) {
    case "+":
      return (a + b).toString();
    case "-":
      return (a - b).toString();
    case "*":
      return (a * b).toString();
    case "/":
      return b !== 0 ? (a / b).toString() : "Error";
    default:
      return "";
  }
}
