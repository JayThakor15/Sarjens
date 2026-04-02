import { Component } from "react";
import { Navigate } from "react-router-dom";

export class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      redirectToForm: false,
    };
  }
  componentDidMount() {
    const savedData = localStorage.getItem("formData");
    console.log("🚀 ~ Display ~ componentDidMount ~ savedData:", savedData);
    if (savedData) {
      this.setState({
        userData: JSON.parse(savedData),
      });
    }
  }

  render() {
    if (this.state.redirectToForm) {
      return <Navigate to="/form" />;
    }
    return (
      <>
        <div style={{ width: "400px", margin: "50px auto" }}>
          <h2>Display Data</h2>

          <table border="1" cellPadding="10" width="100%">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>City</th>
              </tr>
              {this.state.userData.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.mobile}</td>
                  <td>{data.city}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            onClick={() => this.setState({ redirectToForm: true })}
            style={{ marginTop: "15px" }}
          >
            Go Back
          </button>
        </div>
      </>
    );
  }
}

export default Display;
