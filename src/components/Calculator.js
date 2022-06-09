import '../styles/Calculator.css';
import { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

export default function Calculator() {
  const [obj, newObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (btnValue) => {
    newObj({ ...obj, ...calculate(obj, btnValue) });
  };

  const result = obj.next || obj.total;
  const btnData = [
    'AC',
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];

  return (
    <div className="calculator">
      <input type="text" className="calculator-screen" value={result ? Number(result) : 0} disabled />
      <div className="calculator-keys">
        {btnData.map((btn) => (
          <Button key={btn} value={btn} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}
