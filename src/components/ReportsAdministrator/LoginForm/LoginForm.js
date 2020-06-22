import React from "react";
import { Button } from "react-bootstrap";
import "./LoginForm.css";
import { isAdmin } from "../../../services/loginService";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loginStatus: null,
    };
  }

  loginValues = (e) => {
    const $value = e.target.value;
    this.setState({ [e.target.name]: $value });
  };

  loginCheck = () => {
    isAdmin(this.state)
      .then((res) => {
        if (res.statusText === "OK") {
          window.location.pathname = "/admin/listofreports";
        }
      })
      .catch((res) => alert("No Admin found"));
  };

  render() {
    return (
      <div className="LoginForm__wrapper">
        <input
          className="LoginForm__input"
          type="text"
          name="email"
          value={this.state.email}
          placeholder="Enter email..."
          onChange={this.loginValues}
        />
        <input
          className="LoginForm__input"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.loginValues}
          placeholder="Enter password..."
        />
        <Button className="LoginForm__btn" onClick={this.loginCheck}>
          Login
        </Button>
      </div>
    );
  }
}
export { LoginForm };
