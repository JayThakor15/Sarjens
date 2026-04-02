
import React from "react";

export default class PasswordToggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            password: "",
            showPassword: false
        }
    }
    handlePasswordToggle = () => {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Password Toggle</h1>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <input
                        type={this.state.showPassword ? "text" : "password"}
                        placeholder="Enter a password"
                        value={this.state.password}
                        onChange={(e) => {
                            this.setState({
                                password: e.target.value
                            })
                        }}
                    />
                    <button onClick={this.handlePasswordToggle}>
                        {this.state.showPassword ? "❌" : "👁️"}
                    </button>
                </div>
            </div>
        )
    }
}

