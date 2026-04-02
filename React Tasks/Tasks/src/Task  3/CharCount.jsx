import React from "react";

export default class CharCount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInput: "",
            charCount: 0
        }
    }
    // on backspace (deleting character) it should reduce the lenght tooo
    handleCharCount = (e) => {
        this.setState({
            userInput: e.target.value,
            charCount: e.target.value.length
        })
    }

    render() {
        return (
            <div>
                <h1>Character Count</h1>
                <input type="text" placeholder="Enter a string" onChange={(e) => {
                    this.handleCharCount(e)
                }} />
                <p>Character Count: {this.state.charCount}</p>
            </div>
        )
    }





}