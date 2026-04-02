import { Component } from "react";
import { Navigate } from "react-router-dom";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mobile: "",
      city: "",
      errors: [],
      userData: {},
      redirectToDisplay: false,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, mobile, city } = this.state;
    console.log("🚀 ~ Form ~ city:", city);
    console.log("🚀 ~ Form ~ mobile:", mobile);
    console.log("🚀 ~ Form ~ name:", name);
    let errors = [];
    if (!name) {
      errors.push("Name is required");
    }
    if (!mobile) {
      errors.push("Mobile number is required");
    }
    if (!city) {
      errors.push("City is required");
    }
    this.setState({ errors });
    if (errors.length === 0) {
      let existingData = localStorage.getItem("formData");

      existingData = existingData ? JSON.parse(existingData) : [];

      existingData.push({ name, mobile, city });

      localStorage.setItem("formData", JSON.stringify(existingData));
      alert("Form submitted successfully!");
      this.setState({ redirectToDisplay: true });
    }
  };
  render() {
    if (this.state.redirectToDisplay) {
      return <Navigate to="/displayFormData" />;
    }
    return (
      <>
        <div className="">
          <h1 className="">User Details</h1>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
            className=""
          />
          <input
            type="text"
            placeholder="Mobile no"
            className=""
            onChange={(e) => {
              this.setState({ mobile: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="City"
            className=""
            onChange={(e) => {
              this.setState({ city: e.target.value });
            }}
          />
          <button className="" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      </>
    );
  }
}

export default Form;
