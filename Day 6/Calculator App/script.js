// Caclculator class
class Caclculator {
  constructor() {
    this.prevInput = null;
    this.input = "";
    this.operation = null;
    this.result = null;
    this.inputElement = document.querySelector("#input");
    this.resultElement = document.querySelector("#result");
  }

  renderInput() {
    // updates input value on DOM element
    if (!this.input) this.input = "0";
    this.inputElement.textContent = this.input;
  }

  renderResult() {
    this.resultElement.textContent = this.result;
  }

  takeInput(input) {
    if (this.input === "0") this.input = "";
    this.input += input;
    this.renderInput();
  }

  allClear() {
    this.prevInput = null;
    this.input = "";
    this.operation = null;
    this.result = "";
    this.renderInput();
    this.renderResult();
  }

  backspace() {
    // this.input -= this.input[this.input.length - 1];
    // split is a string method - "string" => ["s","t","r","i","n","g"]
    let splitInput = this.input.split(""); //[] of string elements
    splitInput.pop(); // remove last element
    let joinSplitInput = splitInput.join(""); // join array into in string
    this.input = joinSplitInput;

    this.renderInput();
  }

  chooseOperation(operation){
   this.operation = operation;
   let equation = `${this.prevInput || this.input} ${this.operation}`
   this.result = equation;
   this.renderResult();

  }

  compute() {
    if (!this.prevInput && !this.input) return;
    if (!this.prevInput) {
      this.prevInput = this.input;
      Calc.input = "";
      this.renderInput();
      return;
    }

    let prevInput = Number(this.prevInput);
    let newInput = Number(this.input);
    let result = 0;
    switch (this.operation) {
      case "%":
        result = prevInput % newInput;
        break;
      case "+":
        result = prevInput + newInput;
        break;
      case "-":
        result = prevInput - newInput;
        break;
      case "/":
        result = prevInput / newInput;
        break;
      case "*":
        result = prevInput * newInput;
        break;
      default:
        return;
    }

    this.result = String(result);
    this.prevInput = this.result;
    this.renderResult();
    Calc.input = "";
    this.renderInput();
  }

  equals() {
    this.compute();
  }
}

const Calc = new Caclculator();

const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operation");

// digits element array
digits.forEach((elm) => {
  let digit = elm;
  elm.addEventListener("click", () => {
    let digitValue = digit.getAttribute("data-btn");
    Calc.takeInput(digitValue == "." ? "0." : digitValue);
  });
});

// operation elements
operators.forEach((elm) => {
  let operationType = elm.getAttribute("data-opr");
  elm.addEventListener("click", () => {
    if (operationType === "DEL") {
      Calc.backspace();
    } else if (operationType === "AC" || operationType === "CE") {
      Calc.allClear();
    } else if (operationType === "=") {
      Calc.equals();
    } else {
      Calc.chooseOperation(operationType);
      Calc.compute();
    }
  });
});


// add key press functionality - homework
