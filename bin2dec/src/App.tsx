import React, { useState } from "react";

const App: React.FC = () => {
  const [convertedNumber, setConvertedNumber] = useState<number>(0);
  const [numericErrorMessage, setNumericErrorMessage] = useState<string>();
  const regexp = new RegExp("[^0-1]");

  function convertToBinary(inputNumber: string): void {
    if (!inputNumber) {
      setConvertedNumber(0);
    } else {
      setConvertedNumber(parseInt(inputNumber, 2));
    }
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
          onChange={(e) => [checkInputNumber(e.target.value), convertToBinary(e.target.value)]}
        />
      </form>
      <p>{numericErrorMessage}</p>
      <p>10進数だと{convertedNumber}だよ</p>
    </div>
  );
};

export default App;
