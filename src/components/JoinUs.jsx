import React, { Component } from 'react';
import './JoinUs.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RegisterBox from './RegisterBox';
import LoginBox from './LoginBox';
class JoinUs extends Component {

  state = { characters: []};

  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: false,
      isRegisterOpen: true
    };
   
  }

  

showLoginBox() {
  this.setState({isLoginOpen: true, isRegisterOpen: false})
 }

showRegisterBox() {
 this.setState({isRegisterOpen: true, isLoginOpen: false})
 }

 render() {
    return (
      <div className='body'
      style ={ { backgroundImage: "url('assets/fondo3.jpg')" } }>
        <div className="root-container" >
         <div className="box-container">
           <div className="box-controller">
             <div
                className={"controller " + (this.state.isLoginOpen
                 ? "selected-controller": "")}
                  onClick={this.showLoginBox.bind(this)}>
                Login
               </div>
               <div
                className={"controller " + (this.state.isRegisterOpen
                 ? "selected-controller": "")}
                 onClick={this.showRegisterBox.bind(this)}>
                Register
              </div>
            </div>
   
          {this.state.isRegisterOpen && <RegisterBox/>}
          {this.state.isLoginOpen && <LoginBox/>}
          </div>
          </div>
          </div>
    );
  }
}

  export default JoinUs;