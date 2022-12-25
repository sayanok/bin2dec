import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [inputNumber, setInputNumber] = useState<number>();
  const [convertedNumber, setConvertedNumber] = useState<number>();
  const [digitErrorMessage, setDigitErrorMessage] = useState<string>();
  const [numericErrorMessage, setNumericErrorMessage] = useState<string>();

  function convert(inputNumber: number) {
    return convertedNumber;
  }

  function checkInputNumber(inputNumber: string) {
    if (inputNumber.length > 8) {
      setDigitErrorMessage("8桁までしか入力できないよ");
    } else {
      setDigitErrorMessage("");
    }
    if (
      inputNumber.includes("2") ||
      inputNumber.includes("3") ||
      inputNumber.includes("4") ||
      inputNumber.includes("5") ||
      inputNumber.includes("6") ||
      inputNumber.includes("7") ||
      inputNumber.includes("8") ||
      inputNumber.includes("9")
    ) {
      setNumericErrorMessage("0か1しか入力できないよ");
    } else {
      setNumericErrorMessage("");
    }
  }

  return (
    <div className="App">
      <form>
        <label>数字をいれてね</label>
        <input type="number" onChange={(e) => checkInputNumber(e.target.value)} />
      </form>
      {/* <p>{inputNumber}</p> */}
      <p>{digitErrorMessage}</p>
      <p>{numericErrorMessage}</p>
      <p>10進数だと{convertedNumber}だよ</p>
    </div>
  );
};

export default App;
