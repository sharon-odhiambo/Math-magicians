import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setInput] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    e.preventDefault();
    const buttonName = e.target.value;
    const { total, next, operation } = calculate(state, buttonName);
    setInput({ total, next, operation });
  };

  const { total, next, operation } = state;

  return (
    <form>
      <div className="result">{!total && !next && !operation ? 0 : [total, operation, next]}</div>
      <table>
        <tr>
          <td><input type="button" onClick={handleClick} value="AC" /></td>
          <td><input type="button" onClick={handleClick} value="+/-" /></td>
          <td><input type="button" onClick={handleClick} value="%" /></td>
          <td><input type="button" onClick={handleClick} className="result-end" value="&#247;" /></td>
        </tr>
        <tr>
          <td><input type="button" onClick={handleClick} value="7" /></td>
          <td><input type="button" onClick={handleClick} value="8" /></td>
          <td><input type="button" onClick={handleClick} value="9" /></td>
          <td><input type="button" onClick={handleClick} className="result-end" value="x" /></td>
        </tr>
        <tr>
          <td><input type="button" onClick={handleClick} value="4" /></td>
          <td><input type="button" onClick={handleClick} value="5" /></td>
          <td><input type="button" onClick={handleClick} value="6" /></td>
          <td><input type="button" onClick={handleClick} className="result-end" value="-" /></td>
        </tr>
        <tr>
          <td><input type="button" onClick={handleClick} value="1" /></td>
          <td><input type="button" onClick={handleClick} value="2" /></td>
          <td><input type="button" onClick={handleClick} value="3" /></td>
          <td><input type="button" onClick={handleClick} className="result-end" value="+" /></td>
        </tr>
        <tr>
          <td><input type="button" onClick={handleClick} value="0" /></td>
          <td><input type="button" onClick={handleClick} value="." /></td>
          <td><input type="button" onClick={handleClick} className="result-end" value="=" /></td>
        </tr>
      </table>
    </form>
  );
};

export default Calculator;
