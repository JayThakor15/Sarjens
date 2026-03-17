import { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: parseInt(localStorage.getItem("count")) || 0,
      msg: "",
    };
  }
  componentDidMount() {
    if (isNaN(this.state.count)) {
      this.setState({ msg: "Invalid Number" });
    }
    localStorage.setItem("count", this.state.count);
  }
  componentDidUpdate() {
    localStorage.setItem("count", this.state.count);
  }
  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <h2>{this.state.count}</h2>
        <button
          onClick={() => {
            if (this.state.count == NaN || this.state.count == undefined) {
              this.setState({ msg: "Invalid Number" });
            } else if (this.state.count == 10) {
              this.setState({
                msg: "Counter value should not greater than 10",
              });
            } else {
              this.setState({ count: this.state.count + 1, msg: "" });
            }
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            if (this.state.count <= 0) {
              this.setState({ msg: "Counter value should not less than 0" });
            } else {
              this.setState({ count: this.state.count - 1, msg: "" });
            }
          }}
        >
          -
        </button>
        <p className="Message" style={{ color: "red" }}>
          {this.state.msg}
        </p>
      </div>
    );
  }
}
