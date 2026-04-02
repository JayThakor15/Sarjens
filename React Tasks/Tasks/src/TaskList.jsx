import React from "react";
import { Link } from "react-router-dom";

export default class TaskList extends React.Component {
    render() {
        return (
            <div>
                <h1>List of All Tasks</h1>
                <ul>
                    <li>Task 1: Create Single page Application using Navigation in React: <Link to={"/Home"}>Task1</Link></li>
                    <li>Task 2: Take a string from user and print in Uppercase and lowercase: <Link to={"/upperlower"}>Task2</Link></li>
                    <li>Task 3: Take String for User when ever user is typing charater print count number of charater: <Link to={"/charcount"}>Task3</Link></li>
                    <li>Task 4: Counter Application: <Link to={"/counterapp"}>Task4</Link>  </li>
                    <li>Task 5: Countdown Timer: <Link to={"/countdowntimer"}>Task5</Link></li>
                    <li>Task 6: Create Password Toggle TextBox <Link to={"/passwordtoggle"}>Task6</Link></li>
                    <li>Task 7: SignUp, Login, Dashboard, Forgot Password, Change Password: <Link to={"/Signup"}>Task7</Link></li>
                    <li>Task 8: Form and Display Form Data: <Link to={"/form"}>Task8</Link></li>
                    <li>Task 9: Todo List: <Link to={"/Todo"}>Task9</Link></li>
                    <li>Task 10: API Demo: <Link to={"/ApiDemo"}>Task10</Link></li>
                    <li>Task 11: Weather API Demo: <Link to={"/weatherAPIDemo"}>Task11</Link></li>
                    <li>Task 12: Movie Search App - <Link to={"/movieSearch"}>Task12</Link></li>
                    <li>Task 14: News Application - <Link to={"/news"}>Task14</Link></li>
                    <li>Task 15: Currency Convertor - <Link to={"/currencyConvertor"}>Task15</Link></li>
                    <li>Task 16: Dark/Light Mode - <Link to={"/darklight"}>Task16</Link></li>
                    <li><Link to={"/"}>Signup</Link></li>
                    <li><Link to={"/Login"}>Login</Link></li>
                    <li><Link to={"/Dashboard"}>Dashboard</Link></li>
                    <li><Link to={"/ForgotPassword"}>ForgotPassword</Link></li>
                    <li><Link to={"/Change-Password"}>Change-Password</Link></li>
                    <li><Link to={"/form"}>Form</Link></li>
                    <li><Link to={"/displayFormData"}>DisplayFormData</Link></li>
                    <li><Link to={"/Todo"}>Todo</Link></li>
                </ul>
            </div>
        )
    }
}