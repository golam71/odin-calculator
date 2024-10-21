function add(x, y) {
  return x + y;
}

function substract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}

function devide(x, y) {
  if (y == 0) {
    return "Can't divide by 0";
  }
  return x / y;
}

let firstNum = 0;
let secondNum = 0;
let operatorSign;
let result;
const display = document.querySelector(".display");

//start with 0 and then get clicks store them in .display div
// after that listen for an operator click
// when clicked clear the display and store the number and operator in variable
// then add numbers agaian
// when user presses =
// get the first variable and the operator and the current num
// calculate
// return

document.querySelectorAll("#num").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (Number(display.innerText) !== 0) {
      display.innerText += btn.innerText;
    } else display.innerText = btn.innerText;
  });
});

document.querySelectorAll("#sign").forEach((btn) => {
  btn.addEventListener("click", () => {
    firstNum = Number(display.innerText);
    operatorSign = btn.innerText;
    display.innerText = 0;
  });
});

document.getElementById("calculate").onclick = () => {
  secondNum = Number(display.innerText);
  switch (operatorSign) {
    case "+":
      result = add(firstNum, secondNum);
      break;
    case "-":
      result = substract(firstNum, secondNum);
      break;
    case "*":
      result = multiply(firstNum, secondNum);
      break;
    case "/":
      result = devide(firstNum, secondNum);
      break;

    default:
      result = display.innerText;
      break;
  }
  display.innerText = result;
  firstNum = 0;
  secondNum = 0;
  result = 0;
};

document.getElementById("clear").onclick = () => {
  firstNum = 0;
  secondNum = 0;
  display.innerText = 0;
};

document.addEventListener("keydown", (event) => {
  // Find the button that matches the pressed key's value
  document.querySelectorAll("#num").forEach((btn) => {
    if (btn.innerText === event.key) {
      // Simulate a click on the found button
      btn.click();
    }
  });
});

document.addEventListener("keydown", (event) => {
  document.querySelectorAll("#sign").forEach((btn) => {
    if (btn.innerText === event.key) {
      // Simulate a click on the found button
      // console.log(event.key);
      btn.click();
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "=") {
    document.getElementById("calculate").click();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "c") {
    document.getElementById("clear").click();
  }
});
