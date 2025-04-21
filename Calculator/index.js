const calculator = [
  { id: 1, name: "e", class: "scientific" },
  { id: 2, name: "ù", class: "scientific" },
  { id: 3, name: "sin", class: "scientific" },
  { id: 4, name: "deg", class: "scientific" },
  { id: 5, name: "AC", class: "Reset" },
  { id: 6, name: "x", class: "Reset" },

  { id: 8, name: "/", class: "calc" },
  { id: 9, name: "*", class: "calc" },
  { id: 10, name: "7", class: "num" },
  { id: 11, name: "8", class: "num" },
  { id: 12, name: "9", class: "num" },
  { id: 13, name: "-", class: "calc" },
  { id: 14, name: "4", class: "num" },
  { id: 15, name: "5", class: "num" },
  { id: 16, name: "6", class: "num" },
  { id: 17, name: "+", class: "calc" },
  { id: 18, name: "1", class: "num" },
  { id: 19, name: "2", class: "num" },
  { id: 20, name: "3", class: "num" },
  { id: 21, name: "0", class: "num" },
  { id: 22, name: ".", class: "num" },
  { id: 23, name: "=", class: "calc" },
];

const calculatorContainer = document.getElementById("calculator");

// Loop through the calculator array and create buttons
calculator.forEach((button) => {
  const btn = document.createElement("button");
  btn.textContent = button.name;
  btn.classList.add(button.class); // Add the class to the button
  btn.addEventListener("click", () => handleButtonClick(button.name));
  calculatorContainer.appendChild(btn);
});

function handleButtonClick(value) {
  switch (value) {
    case "AC": // Clear the input
      display.value = "";
      break;
    case "x": // Backspace (remove last character)
      display.value = display.value.slice(0, -1);
      break;
    case "=": // Calculate the result
      try {
        display.value = eval(display.value); // Evaluate the expression
      } catch (error) {
        display.value = "Error"; // Handle invalid expressions
      }
      break;
    default: // Append the button's value to the input
      display.value += value;
  }
}
