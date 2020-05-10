import React, { Component } from "react";

class Client extends Component {
    render() {
        const {id, first_name, last_name, email} = this.props.customer;
        return (
            <tr>
                <td>{id}</td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
                <td>
                    <button className="mini ui green button"> Edit</button>
                    <button className="mini ui pink button"> Delete </button>
                </td>
            </tr>
        );
    }
}

export default Client;
