import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    const buttonName = e.target.value;
    const { total, next, operation } = calculate(this.state, buttonName);
    this.setState({ total, next, operation });
  }

  render() {
    const { total } = this.state;
    return (
      <form>
        <input type="text" className="result" value={total || 0} />
        <table>
          <tr>
            <td><input type="button" onClick={this.handleClick} value="AC" /></td>
            <td><input type="button" onClick={this.handleClick} value="+/-" /></td>
            <td><input type="button" onClick={this.handleClick} value="%" /></td>
            <td><input type="button" onClick={this.handleClick} className="result-end" value="&#247;" /></td>
          </tr>
          <tr>
            <td><input type="button" onClick={this.handleClick} value="7" /></td>
            <td><input type="button" onClick={this.handleClick} value="8" /></td>
            <td><input type="button" onClick={this.handleClick} value="9" /></td>
            <td><input type="button" onClick={this.handleClick} className="result-end" value="x" /></td>
          </tr>
          <tr>
            <td><input type="button" onClick={this.handleClick} value="4" /></td>
            <td><input type="button" onClick={this.handleClick} value="5" /></td>
            <td><input type="button" onClick={this.handleClick} value="6" /></td>
            <td><input type="button" onClick={this.handleClick} className="result-end" value="-" /></td>
          </tr>
          <tr>
            <td><input type="button" onClick={this.handleClick} value="1" /></td>
            <td><input type="button" onClick={this.handleClick} value="2" /></td>
            <td><input type="button" onClick={this.handleClick} value="3" /></td>
            <td><input type="button" onClick={this.handleClick} className="result-end" value="+" /></td>
          </tr>
          <tr>
            <td><input type="button" onClick={this.handleClick} value="0" /></td>
            <td><input type="button" onClick={this.handleClick} value="." /></td>
            <td><input type="button" onClick={this.handleClick} className="result-end" value="=" /></td>
          </tr>
        </table>
      </form>
    );
  }
}
