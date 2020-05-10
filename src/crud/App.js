import React, { Component } from 'react';
import axios from "axios";
import Loader from "./Loader";
import FormApp from "./FormApp";
import CustomerList from "./CustomerList"
import "./app.css";

class App extends Component {
  state = {
    customers: [],
    url: "http://localhost/laravel-rest-api/public/api/customers"
  };

  getCustomers = async () => {
    this.setState({ loader: true });
    const customers = await axios.get(this.state.url);
    this.setState({ customers: customers.data, loader: false });
  };

  onDelete = id => {
    //console.log("app", id);
    this.deleteCustomer(id);
  };

  deleteCustomer = async id => {
    this.setState({loader: true});
    await axios.delete(this.state.url + "/" + id);

    this.getCustomers();
  };
  componentDidMount() {
    this.getCustomers();
  }


  render() {
    return (
      <div>
        <div className="ui fixed inverted menu">
          <div className="ui container">
            <a href="/#" className="header item">
              React with Laravel API
      </a>
          </div>
        </div>

        <div className="ui main container">
          <FormApp />
          {this.state.loader ? <Loader /> : ""}
          <CustomerList customers={this.state.customers} onDelete={this.onDelete} />
        </div>
      </div>
    );
  }
}

export default App;
