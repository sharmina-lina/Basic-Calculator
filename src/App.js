import React, { useState } from "react";

import "./App.css";

function AppCalculator() {
  const [displayValue, setdisplayValue] = useState(0);
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleClearClick = () => {
    setdisplayValue("0");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const handleDigitalClick = (digit) => {
    if (waitingForSecondOperand) {
      setdisplayValue(digit);
      setWaitingForSecondOperand(false);
    } else {
      setdisplayValue(displayValue === "0" ? digit : displayValue + digit);
    }
  };

  const handleOperatorClick = (newOperator) => {
    const inputValue = parseFloat(displayValue);
    if (firstOperand == null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = performCalculation();
      setdisplayValue(String(result));
      setFirstOperand(result);
    }
    setWaitingForSecondOperand(true);
    setOperator(newOperator);
  };

  const performCalculation = () => {
    const inputValue = parseFloat(displayValue);
    if (operator === "+") {
      return firstOperand + inputValue;
    } else if (operator === "-") {
      return firstOperand - inputValue;
    } else if (operator === "*") {
      return firstOperand * inputValue;
    } else if (operator === "/") {
      return firstOperand / inputValue;
    }
    return inputValue;
  };

  const handleEqualsClick = () => {
    if (operator && !waitingForSecondOperand) {
      const result = performCalculation();
      setdisplayValue(String(result));
      setFirstOperand(result);
      setOperator(null);
      setWaitingForSecondOperand(true);
    }
  };

  return (
    <div className="AppCalculator">
      <h1>Basic-Calculator</h1>
      <div className="displayValue">{displayValue}</div>
      <div className="row-1">
        <button className="btnC" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btnE" onClick={handleEqualsClick}>
          =
        </button>
        <button className="btnP" onClick={() => handleOperatorClick("+")}>
          +
        </button>
      </div>
      <div className="row-2">
        <button className="btn7" onClick={() => handleDigitalClick("7")}>
          7
        </button>
        <button className="btn8" onClick={() => handleDigitalClick("8")}>
          8
        </button>
        <button className="btn9" onClick={() => handleDigitalClick("9")}>
          9
        </button>
        <button className="btnM" onClick={() => handleOperatorClick("-")}>
          -
        </button>
      </div>
      <div className="row-3">
        <button className="btn4" onClick={() => handleDigitalClick("4")}>
          4
        </button>
        <button className="btn5" onClick={() => handleDigitalClick("5")}>
          5
        </button>
        <button className="btn6" onClick={() => handleDigitalClick("6")}>
          6
        </button>
        <button className="btnMU" onClick={() => handleOperatorClick("*")}>
          *
        </button>
      </div>
      <div className="row-4">
        <button className="btn1" onClick={() => handleDigitalClick("1")}>
          1
        </button>
        <button className="btn2" onClick={() => handleDigitalClick("2")}>
          2
        </button>
        <button className="btn3" onClick={() => handleDigitalClick("3")}>
          3
        </button>
        <button className="btnD" onClick={() => handleOperatorClick("/")}>
          /
        </button>
      </div>
    </div>
  );
}

export default AppCalculator;
