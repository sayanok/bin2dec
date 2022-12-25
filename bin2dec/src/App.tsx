import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [convertedNumber, setConvertedNumber] = useState<number>();
  const [numericErrorMessage, setNumericErrorMessage] = useState<string>();
  const regexp = new RegExp("[^0-1]");

  function convertToBinary(inputNumber: number): void {
    let hoge: number;

    hoge = 10;

    setConvertedNumber(hoge);
  }

  function checkInputNumber(inputNumber: string): void {
    if (regexp.exec(inputNumber)) {
      setNumericErrorMessage("0か1しか入力できないよ");
    } else {
      setNumericErrorMessage("");
    }
  }

  return (
    <div className="App">
      <form>
        <label>数字をいれてね</label>
        <textarea
          maxLength={8}
          rows={1}
          onChange={(e) => [checkInputNumber(e.target.value), convertToBinary(parseInt(e.target.value))]}
        />
      </form>
      <p>{numericErrorMessage}</p>
      <p>10進数だと{convertedNumber}だよ</p>
    </div>
  );
};

export default App;
