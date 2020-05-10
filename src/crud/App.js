import React, { Component } from 'react';
import axios from "axios";
import FormApp from "./FormApp";
import CustomerList from "./CustomerList"
import "./app.css";

class App extends Component {
  state = {
    customers: [],
    url: "http://localhost/laravel-rest-api/public/api/customers"
  };

  getCustomers = async() => {
    this.setState({loader: true});
    const customers = await axios.get(this.state.url);
    this.setState({customers: customers.data, loader: false});
  };

  componentDidMount(){
    this.getCustomers();
  }

  render() {
    return (
      <div>
        <div clasName="ui fixed inverted menu">
          <div className="ui container">
            <a href="/#" className="header item">
              React with Laravel API
      </a>
          </div>
        </div>

        <div className="ui main container">
          <FormApp />
          <CustomerList customers= {this.state.customers} />
        </div>
      </div>
    );
  }
}

export default App;
