import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/RegisterBox';
import Login from './components/LoginBox';
import Navbar from './components/CustomNavbar';
import JoinUs from './components/JoinUs'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Navbar /> */}
          <Route exact path="/" component={Home} />
          <Route path="/JoinUs" component={JoinUs} />
        </div>
      </Router>
    );
  }
}

export default App;

