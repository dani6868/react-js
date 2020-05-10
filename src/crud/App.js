import React, { Component } from 'react';
import FormApp from "./FormApp";

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
        </div>
      </div>
    );
  }
}

export default App;
