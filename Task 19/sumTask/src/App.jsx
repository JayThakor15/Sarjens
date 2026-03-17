import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: "",
      text2: "",
    };
  }

  handleNumberChange = (e) => {
    if (isNaN(e.target.value)) {
      this.setState({ msg: "Invalid Number" });
      return;
    }
    this.setState({
      msg: "",
      total: "",
      [e.target.name]: e.target.value,
    });
  };
  doSum = () => {
    var sum = parseInt(this.state.text1) + parseInt(this.state.text2);
    this.setState({
      total: sum,
    });
  };
  render() {
    return (
      <div>
        No 1:
        <input
          type="text"
          name="text1"
          value={this.state.text1}
          onChange={(e) => {
            this.handleNumberChange(e);
          }}
        />
        No 2:
        <input
          type="text"
          name="text2"
          value={this.state.text2}
          onChange={(e) => this.handleNumberChange(e)}
        />
        <button
          type="submit"
          className=""
          onClick={() => {
            this.doSum();
          }}
        >
          Add
        </button>
        <p className="error">{this.state.msg}</p>
        <p className="Output">{this.state.total}</p>
      </div>
    );
  }
}
export default App;
