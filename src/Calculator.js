/* eslint-disable react/prefer-stateless-function */
import './Calculator.css';
import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <input type="text" className="calculator-screen" value="0" disabled />

        <div className="calculator-keys">
          <button type="button" className="btn" value="all-clear">     AC</button>
          <button type="button" className="btn" value="+/-">          +/-</button>
          <button type="button" className="btn" value="%">              %</button>
          <button type="button" className="btn orange" value="/">&divide;</button>
          <button type="button" className="btn" value="7">              7</button>
          <button type="button" className="btn" value="8">              8</button>
          <button type="button" className="btn" value="9">              9</button>
          <button type="button" className="btn orange" value="*">       X</button>
          <button type="button" className="btn" value="4">              4</button>
          <button type="button" className="btn" value="5">              5</button>
          <button type="button" className="btn" value="6">              6</button>
          <button type="button" className="btn orange" value="-">       -</button>
          <button type="button" className="btn" value="1">              1</button>
          <button type="button" className="btn" value="2">              2</button>
          <button type="button" className="btn" value="3">              3</button>
          <button type="button" className="btn orange" value="+">       +</button>
          <button type="button" className="btn double" value="0">       0</button>
          <button type="button" className="btn" value=".">              .</button>
          <button type="button" className="btn orange" value="=">       =</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
