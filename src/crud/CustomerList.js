import React, { Component } from "react";
import Customer from "./Customer";

class CustomerList extends Component {
    onDelete = id => {
        console.log("customer list" , id);
    };
    render() {
        const customers = this.props.customers;
        return (
            <div className="data">
                <table className="ui celled table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                { customers.map(customer => {
                        return <Customer 
                        customer = {customer} 
                        key={customer.id} 
                        onDelete={this.onDelete}/>;
                })}
                </tbody>
                </table>
            </div>
        );
    }
}
export default CustomerList;