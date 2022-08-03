import React from 'react';
import TempButton from './button';
// eslint-disable-next-line react/prefer-stateless-function
class Calc extends React.Component {
  render() {
    return (
      <div className="container">
        <input type="text" className="input" placeholder="0" />
        <TempButton firstButton="AC" secondButton="+/-" thirdButton="%" fourthButton="÷" />
        <TempButton firstButton="7" secondButton="8" thirdButton="9" fourthButton="x" />
        <TempButton firstButton="4" secondButton="5" thirdButton="6" fourthButton="-" />
        <TempButton firstButton="1" secondButton="2" thirdButton="3" fourthButton="+" />
        <TempButton firstButton="0" secondButton="." thirdButton="=" />
      </div>
    );
  }
}
export default Calc;
