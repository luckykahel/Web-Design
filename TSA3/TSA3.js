let currentInput = '';
let operator = '';
let resultDisplayed = false;

function clear() {
  document.getElementById('display').value = '';
  currentInput = '';
  operator = '';
}

function backspace() {
  const display = document.getElementById('display');
  currentInput = currentInput.slice(0, -1);
  display.value = currentInput;
}

function appendNum(num) {
  if (resultDisplayed) {
    clear();
    resultDisplayed = false;
  }
  currentInput += num;
  document.getElementById('display').value = currentInput;
}

function setOperator(op) {
  operator = op;
  currentInput += ' ' + op + ' ';
  document.getElementById('display').value = currentInput;
}

function performCalculation() {
  const display = document.getElementById('display');
  try {
    const expression = currentInput.split(' ');
    const num1 = parseFloat(expression[0]);
    const num2 = parseFloat(expression[2]);
    if (isNaN(num1) || isNaN(num2)) throw new Error('Invalid input');
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) throw new Error('Division by zero');
        result = num1 / num2;
        break;
      default:
        throw new Error('Invalid operator');
    }
    display.value = result;
    currentInput = result.toString();
    resultDisplayed = true;
  } catch (error) {
    display.value = 'Error';
  }
}

function handleNumberClick(num) {
  appendNum(num);
}

function addNumberListeners() {
  for (let i = 0; i <= 9; i++) {
    document.getElementById('num' + i).addEventListener('click', () => handleNumberClick(i.toString()));
  }
}

document.getElementById('clear').addEventListener('click', clear);
document.getElementById('backspace').addEventListener('click', backspace);
document.getElementById('addition').addEventListener('click', () => setOperator('+'));
document.getElementById('subtraction').addEventListener('click', () => setOperator('-'));
document.getElementById('multiply').addEventListener('click', () => setOperator('*'));
document.getElementById('divide').addEventListener('click', () => setOperator('/'));
document.getElementById('decimal').addEventListener('click', () => appendNum('.'));
document.getElementById('equals').addEventListener('click', performCalculation);

addNumberListeners();