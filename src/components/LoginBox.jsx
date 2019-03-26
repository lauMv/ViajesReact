import React, { Component } from "react";
import { Link } from 'react-router-dom';

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitLogin() {
    var obj = {
      name: document.getElementById("username").value,
      pass: document.getElementById("password").value,
      /*email: document.getElementById("email").value,
      pass: document.getElementById("password").value8*/
    };
    console.log(JSON.stringify(obj));
    console.log(obj);

    var fileText = new Blob([JSON.stringify(obj)], {
      type: "application/json"
    });
    var textURL = window.URL.createObjectURL(fileText);
    var downloadLink = document.createElement("a");
    downloadLink.download = "myJson.json";
    downloadLink.innerHTML = "";
    downloadLink.href = textURL;
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }

  render() {
    return (
      <div className="inner-container">
        <div className="header">Login</div>
        <div className="box">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"
              id="username"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"
            />
          </div>
          <Link to="/">
          <button
            type="button"
            className="login-btn"
            onClick={this.submitLogin.bind(this)}
          >
            Login
          </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default LoginBox;
