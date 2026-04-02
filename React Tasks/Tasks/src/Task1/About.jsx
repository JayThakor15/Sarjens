import React from "react";
import { Link } from "react-router-dom";

export default class About extends React.Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <p>Welcome to the about page</p>
                <Link style={{ marginRight: "10px" }} to={"../Home"}>Home</Link>
                <Link style={{ marginRight: "10px" }} to={"../Contact"}>Contact</Link>
            </div>
        )
    }
}