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

  renderFunc = displayElem => {
    return <div className={"small-width-wrapper"}>{displayElem}</div>;
  };

  render() {
    const sumVal = this.state.fieldVals.reduce((sum, val) => sum + val, 0);
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className={"flex-wrapper"}>
          <div className={"med-width-wrapper"}>
            <SumField
              value={this.state.fieldVals[0]}
              onChange={event => this.onNumChange(0, event.target.value)}
              render={this.renderFunc}
            />
            <SumField
              value={this.state.fieldVals[1]}
              onChange={event => this.onNumChange(1, event.target.value)}
              render={this.renderFunc}
            />
          </div>
          <div className={"med-width-wrapper"}>
            <SumField
              value={this.state.fieldVals[2]}
              onChange={event => this.onNumChange(2, event.target.value)}
              render={this.renderFunc}
            />
            <SumDisplay displayVal={sumVal} render={this.renderFunc} />
          </div>
        </div>
        {this.state.error && <span className={"error-text"}>{this.state.error}</span>}
      </div>
    );
  }
}

export default App;
