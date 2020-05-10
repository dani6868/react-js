import React, { Component } from 'react';
import FormApp from "./FormApp";
import Customers from "./Customers"
import "./app.css";

class App extends Component {
  render() {
    return (
      <div>
        <div clasName="ui fixed inverted menu">
          <div className="ui container">
            <a href="/#" className="header item">
              React and Laravel API
      </a>
          </div>
        </div>

        <div className="ui main container">
          <FormApp />
          <Customers />
        </div>
      </div>
    );
  }
}

export default App;
