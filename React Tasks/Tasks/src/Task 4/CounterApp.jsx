import React from "react";

export default class CounterApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            error: ""
        }
    }
    handleIncrement = () => {
        if (this.state.count < 10) {
            this.setState({
                count: this.state.count + 1,
                error: ""
            })
        }
        else {
            this.setState({
                error: "Count cannot be greater than 10"
            })
        }
    }
    handleDecrement = () => {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1,
                error: ""
            })
        }
        else {
            this.setState({
                error: "Count cannot be less than 0"
            })
        }
    }
    render() {
        return (
            <div>
                <h1>Counter App</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.handleIncrement()}>Increment</button>
                <button onClick={() => this.handleDecrement()}>Decrement</button>
                <p>{this.state.count}</p>
                <p style={{ color: "red" }}>{this.state.error}</p>
            </div>
        )
    }
}
