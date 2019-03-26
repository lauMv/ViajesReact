import React, { Component } from 'react';
import PropTypes from 'prop-types';



import {Link} from 'react-router-dom';


class Usuario extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };    

  render() {
    const {items} = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12" id="capaForm">             
            <nav className="navbar navbar-default navbar-fixed-top">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
                </button>
                <a className="navbar-brand">Brand</a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  {items && items.map(
                    (item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>)}
                </ul>
              </div>
            </nav>          
          </div>
        </div>
      </div>    
    );
  }
}

export default Usuario;