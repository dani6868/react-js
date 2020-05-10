import React, { Component } from "react";

class FormApp extends Component {
  render() {
    return (
      <form className="ui form">
        <div className="fields">

          <div className="four wide field">
            <label>First Name </label>
            <input type="text" name="firstName" placeholder="First Name" />
          </div>
          <div className="four wide field">
            <label>Last Name </label>
            <input type="text" name="lastName" placeholder="Last Name" />
          </div>
          <div className="four wide field">
            <label>Email </label>
            <input type="email" name="email" placeholder="Email" />
          </div>

          <div className="four wide field">
            <button className ="ui primary button submit-button">Save</button>
          </div>

        </div>
      </form>
    );
  }
}

export default FormApp;
