import React from "react";

export default class Upperlower extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            upperCase: "",
            lowerCase: ""
        }
    }
    handleUpperLowerConvertion = () => {
        this.setState({
            upperCase: this.state.userInput.toUpperCase(),
            lowerCase: this.state.userInput.toLowerCase()
        })
    }
    render() {
        return (
            <div>
                <h1>Upper and Lower Case</h1>
                <input type="text" placeholder="Enter a string" onChange={(e) => {
                    this.setState({
                        userInput: e.target.value,
                    })
                }} />
                <button onClick={() => this.handleUpperLowerConvertion()}>Convert</button>
                <p>Upper Case: {this.state.upperCase}</p>
                <p>Lower Case: {this.state.lowerCase}</p>
            </div>
        )
    }
}   