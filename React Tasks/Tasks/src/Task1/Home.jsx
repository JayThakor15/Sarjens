import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>Welcome to the home page</p>
                <Link style={{ marginRight: "10px" }} to={"../About"}>About</Link>
                <Link style={{ marginRight: "10px" }} to={"../Contact"}>Contact</Link>
            </div>
        )
    }
}