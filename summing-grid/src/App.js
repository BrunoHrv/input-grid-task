import React, { Component } from "react";
import "./App.css";
import SumField from "./SumField";
import SumDisplay from "./SumDisplay";
import { isNum } from "./utils";

class App extends Component {
  constructor(props) {
    super(props);
    const numFields = 3;
    this.state = {
      numFields: numFields,
      fieldVals: new Array(numFields).fill(0.0),
      error: ""
    };
  }

  onNumChange = (fieldIndex, newNum) => {
    if (!isNum(newNum)) {
      this.setState({ error: "Please only type numbers" });
    } else {
      let newFields = this.state.fieldVals;
      const val = !!newNum ? parseFloat(newNum) : 0.0;
      newFields[fieldIndex] = val;
      this.setState({ fieldVals: newFields });
    }
  };

  render() {
    const sumVal = this.state.fieldVals.reduce((sum, val) => sum + val, 0);
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.fieldVals.map((val, index) => (
          <SumField
            key={index}
            value={val}
            onChange={event => this.onNumChange(index, event.target.value)}
          />
        ))}
        <SumDisplay displayVal={sumVal} />
      </div>
    );
  }
}

export default App;
