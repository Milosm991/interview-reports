import React from "react";
import { Button } from "react-bootstrap";
import style from "./LoginForm.module.css";
import { isAdmin } from "../../../services/loginService";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loginStatus: null,
      errorMessage: "",
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
          window.location.pathname = `/admin/listofreports`;
          sessionStorage.setItem("accsesKey", res.data.accessToken);
        }
      })
      .catch((res) =>
        this.setState({ errorMessage: "Sorry, you need preemision" })
      );
  };

  render() {
    return (
      <div className={style.LoginForm__wrapper}>
        <input
          className={style.LoginForm__input}
          type="text"
          name="email"
          value={this.state.email}
          placeholder="Enter email..."
          onChange={this.loginValues}
        />
        <input
          className={style.LoginForm__input}
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.loginValues}
          placeholder="Enter password..."
        />
        {this.state.errorMessage !== "" ? (
          <p className={style.error}>{this.state.errorMessage}</p>
        ) : null}
        <Button className="LoginForm__btn" onClick={this.loginCheck}>
          Login
        </Button>
      </div>
    );
  }
}
export { LoginForm };
