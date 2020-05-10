import React, { Component } from "react";

class Customer extends Component {
onDelete = () => {
    //console.log("customer on delete");
    this.props.onDelete(this.props.customer.id);
};

    render() {
        const {id, first_name, last_name, email} = this.props.customer;
        return (
            <tr>
                <td>{id}</td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
                <td>
                    <button className="mini ui green button"> Edit</button>
                    <button className="mini ui pink button" onClick = {this.onDelete}> Delete </button>
                </td>
            </tr>
        );
    }
}

export default Customer;
