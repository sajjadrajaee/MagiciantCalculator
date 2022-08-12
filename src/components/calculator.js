import React, { useEffect, useState } from 'react';
import calculate from '../logic/calculate';
import TempButton from './button';
import '../App.css';
// eslint-disable-next-line react/prefer-stateless-function
/* eslint-disable react/jsx-no-bind */
export default function Calc() {
  const [dataObj, setDataObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  function updateObject(event) {
    const val = event.target.textContent;
    setDataObj((prevDataObj) => calculate(prevDataObj, val));
  }

  function updateScreen() {
    const screen = document.querySelector('.result-screen');
    if (dataObj.next && !dataObj.total) {
      screen.value = dataObj.next;
    } else if (!dataObj.next && dataObj.total) {
      screen.value = dataObj.operation
        ? `${dataObj.total} ${dataObj.operation}`
        : dataObj.total;
    } else if (!dataObj.next && !dataObj.total) {
      screen.value = '';
    } else {
      screen.value = `${dataObj.total} ${dataObj.operation
        ? `${dataObj.operation} ${dataObj.next}`
        : dataObj.next
      }`;
    }
  }

  useEffect(() => {
    updateScreen();
  }, [dataObj]);

  return (
    <div className="main-container">
      <div className="title">
        <h3>Lets do some math!</h3>
      </div>
      <div className="container">
        <input type="text" className="result-screen" value={0} readOnly />
        <TempButton firstButton="AC" secondButton="+/-" thirdButton="%" fourthButton="÷" updateObject={updateObject} />
        <TempButton firstButton="7" secondButton="8" thirdButton="9" fourthButton="x" updateObject={updateObject} />
        <TempButton firstButton="4" secondButton="5" thirdButton="6" fourthButton="-" updateObject={updateObject} />
        <TempButton firstButton="1" secondButton="2" thirdButton="3" fourthButton="+" updateObject={updateObject} />
        <TempButton secondButton="0" thirdButton="." fourthButton="=" updateObject={updateObject} />
      </div>
    </div>
  );
}
