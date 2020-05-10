import React, { Component } from "react";

class FormApp extends Component {
  render() {
    return (
      <form className = "ui form">
      <div className = "fields">

      <div className = "four wide field">
      <label>First Name </label>
      <input type="text" name="firstName" placeholder="First Name" />
      </div>

      </div>
      </form>
    );
  }
}

export default FormApp;
