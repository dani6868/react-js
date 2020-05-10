import React, { Component } from "react";

class FormApp extends Component {
  state = {
    form: { first_name: "", last_name: "", email: "", isEdit: false },
    btnName: "Save",
    btnClass: "ui primary button submit-button"
  };

  isEmpty(obj) {
    return Object.entries(obj).length === 0 && obj.constructor === Object;
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props && !this.isEmpty(this.props.customer)) {
      //console.log("update");
      this.setState({
        form: { ...this.props.customer, isEdit: true },
        btnName: "Update",
        btnClass: "ui yellow button submit-button"
      });
    }
  }

  handleChange = event => {
    const {name, value} = event.target;
    let form = this.state.form;
    form[name] = value;
    this.setState({form});
  }

  render() {
    return (
      <form className="ui form">
        <div className="fields">

          <div className="four wide field">
            <label>First Name </label>
            <input type="text" 
            name="firstName" 
            placeholder="First Name"  
            onChange={this.handleChange}
            value={this.state.form.first_name}/>
          </div>

          <div className="four wide field">
            <label>Last Name </label>
            <input type="text" 
            name="lastName" 
            placeholder="Last Name" 
            onChange={this.handleChange}
            value={this.state.form.last_name}/>
          </div>

          <div className="four wide field">
            <label>Email </label>
            <input type="email" 
            name="email" 
            placeholder="Email" 
            onChange={this.handleChange}
            value={this.state.form.email}/>
          </div>

          <div className="four wide field">
            <button className={this.state.btnClass}>
              {this.state.btnName}</button>
          </div>

        </div>
      </form>
    );
  }
}

export default FormApp;
