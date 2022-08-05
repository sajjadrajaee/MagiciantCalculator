import React from 'react';
import calculate from '../logic/calculate';
import TempButton from './button';
// eslint-disable-next-line react/prefer-stateless-function
class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataObject: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.updateObject = this.updateObject.bind(this);
  }

  componentDidUpdate() {
    this.updateScreen();
  }

  updateObject(event) {
    const val = event.target.textContent;
    this.setState((prevState) => ({
      dataObject: { ...calculate(prevState.dataObject, val) },
    }));
  }

  updateScreen() {
    const screen = document.querySelector('.result-screen');
    const { dataObject } = this.state;
    if (dataObject.next && !dataObject.total) {
      screen.value = dataObject.next;
    } else if (!dataObject.next && dataObject.total) {
      screen.value = dataObject.operation
        ? `${dataObject.total} ${dataObject.operation}`
        : dataObject.total;
    } else if (!dataObject.next && !dataObject.total) {
      screen.value = '';
    } else {
      screen.value = `${dataObject.total} ${dataObject.operation
        ? `${dataObject.operation} ${dataObject.next}`
        : dataObject.next
      }`;
    }
  }

  render() {
    return (
      <div className="container">
        <input type="text" className="result-screen" value={0} readOnly />
        <TempButton firstButton="AC" secondButton="+/-" thirdButton="%" fourthButton="÷" updateObject={this.updateObject} />
        <TempButton firstButton="7" secondButton="8" thirdButton="9" fourthButton="x" updateObject={this.updateObject} />
        <TempButton firstButton="4" secondButton="5" thirdButton="6" fourthButton="-" updateObject={this.updateObject} />
        <TempButton firstButton="1" secondButton="2" thirdButton="3" fourthButton="+" updateObject={this.updateObject} />
        <TempButton secondButton="0" thirdButton="." fourthButton="=" updateObject={this.updateObject} />
      </div>
    );
  }
}
export default Calc;
