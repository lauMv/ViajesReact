import React, {Component} from 'react';
class RegisterBox extends React.Component {

    constructor(props) {
      super(props);
      this.state = { username : "", email : "", password : "", errors: [] };
    }
  
     showValidationErr(elm, msg) {
      this.setState((prevState) => ({ errors: [...prevState.errors, {elm, msg }] }));
    }

    clearValidationErr(elm) {
      this.setState((prevState) => {
        let newArr = [];
        for (let err of prevState.errors) {
          if (elm != err.elm) {
            newArr.push(err); }}
        return {errors: newArr};
      });
    }

    onUsernameChange(e) {
      this.setState({username: e.target.value});
      this.clearValidationErr("username");
    }
    
    onEmailChange(e) {
      this.setState({email: e.target.value});
      this.clearValidationErr("email");
    }
    
    onPasswordChange(e) {
      this.setState({password: e.target.value});
      this.clearValidationErr("password");
      this.setState({pwdState: "weak"});
      if (e.target.value.length > 8) {
        this.setState({pwdState: "medium"});
      } else if (e.target.value.length > 12) {
        this.setState({pwdState: "strong"});
      }
    }

    submitRegister(e) {

      console.log(this.state);
      if (this.state.username == "") {
        this.showValidationErr("username", "Username Cannot be empty!");
      }
      if (this.state.email == "") {
        this.showValidationErr("email", "Email Cannot be empty!");
      }
      if (this.state.password == "") {
        this.showValidationErr("password", "Password Cannot be empty!");
      }

      var obj = {
        name: document.getElementById("username").value,
        pass: document.getElementById("password").value,
        email: document.getElementById("email").value,
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
      let usernameErr = null, passwordErr= null, emailErr = null;
      for(let err of this.state.errors){
        if (err.elm == "username") {
          usernameErr = err.msg;
        }
        if (err.elm == "password") {
          passwordErr = err.msg;
        }
        if (err.elm == "email") {
          emailErr = err.msg;
        }
      }
      return (
        <div className="inner-container">
          <div className="header">
            Register
          </div>
          <div className="box">
  
            <div className="input-group"> 
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text" name="username"
                className="login-input"
                placeholder="Username"
                onChange={this.onUsernameChange.bind(this)}/>
                 <small className="danger-error">{usernameErr ? usernameErr: ""}</small>
            </div>
  
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" 
              className="login-input" 
              placeholder="Email"
              id="email"
              onChange={this.onEmailChange.bind(this)}/>
              <small className="danger-error">{emailErr ? emailErr: ""}</small>
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="login-input"
                placeholder="Password"
                onChange={this.onPasswordChange.bind(this)}/>
                <small className="danger-error">{passwordErr ? passwordErr: ""}</small>
            </div>
            {/* <Link to="/"> */}

            <button
              type="button"
              className="login-btn"
              onClick={this
              .submitRegister
              .bind(this)}>Register</button>
          </div>
          
        </div>
       
      );
    }
  }

  export default RegisterBox;