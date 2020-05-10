import React, { Component } from "react";
import Customer from "./Customer";

class Customers extends Component {
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
                        return <Customer customer = {customer} key={customer.id}/>;
                })}
                </tbody>
                </table>
            </div>
        );
    }
}
export default Customers;