import React, { useState } from "react";

const App: React.FC = () => {
  const [convertedNumber, setConvertedNumber] = useState<number | string>("数字を入力してね");
  const [numericErrorMessage, setNumericErrorMessage] = useState<string>();
  const regexp = new RegExp("[^0-1]");

  function onChangeHandler(inputNumber: string): void {
    if (!checkInputNumber(inputNumber)) {
      setConvertedNumber("不正な値が入力されています");
    } else {
      setConvertedNumber(convertToBinary(inputNumber));
    }
  }

  function convertToBinary(inputNumber: string): number {
    let result = 0;
    for (let i = 0; i < inputNumber.length; i++) {
      const n = parseInt(inputNumber.charAt(i)) * 2 ** (inputNumber.length - (i + 1));
      result = result + n;
    }
    return result;
  }

  function checkInputNumber(inputNumber: string): boolean {
    if (regexp.exec(inputNumber)) {
      setNumericErrorMessage("0か1しか入力できないよ");
      return false;
    } else {
      setNumericErrorMessage("");
      return true;
    }
  }

  return (
    <div className="App">
      <form>
        <label>数字をいれてね</label>
        <textarea maxLength={8} rows={1} onChange={(e) => onChangeHandler(e.target.value)} />
      </form>
      <p>{numericErrorMessage}</p>
      <p>10進数だと「{convertedNumber}」</p>
    </div>
  );
};

export default App;
