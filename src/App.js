import React from 'react';
import './App.css';
import Calc from './components/calculator';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <Calc />
    );
  }
}

export default App;
