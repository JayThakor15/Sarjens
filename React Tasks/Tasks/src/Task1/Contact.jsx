import React from "react";
import { Link } from "react-router-dom";

export default class Contact extends React.Component {
    render() {
        return (
            <div>
                <h1>Contact</h1>
                <p>Welcome to the contact page</p>
                <Link style={{ marginRight: "10px" }} to={"../Home"}>Home</Link>
                <Link style={{ marginRight: "10px" }} to={"../About"}>About</Link>
            </div>
        )
    }
}