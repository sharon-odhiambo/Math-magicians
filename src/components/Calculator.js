import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <input type="text" className="result" value="0" />
        <table>
          <tr>
            <td><input type="button" value="AC" /></td>
            <td><input type="button" value="+/-" /></td>
            <td><input type="button" value="%" /></td>
            <td><input type="button" className="result-end" value="&#247;" /></td>
          </tr>
          <tr>
            <td><input type="button" value="7" /></td>
            <td><input type="button" value="8" /></td>
            <td><input type="button" value="9" /></td>
            <td><input type="button" className="result-end" value="X" /></td>
          </tr>
          <tr>
            <td><input type="button" value="4" /></td>
            <td><input type="button" value="5" /></td>
            <td><input type="button" value="6" /></td>
            <td><input type="button" className="result-end" value="-" /></td>
          </tr>
          <tr>
            <td><input type="button" value="1" /></td>
            <td><input type="button" value="2" /></td>
            <td><input type="button" value="3" /></td>
            <td><input type="button" className="result-end" value="+" /></td>
          </tr>
          <tr>
            <td><input type="button" value="0" /></td>
            <td><input type="button" value="." /></td>
            <td><input type="button" className="result-end" value="=" /></td>
          </tr>
        </table>
      </form>
    );
  }
}
