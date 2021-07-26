import React, { Component } from 'react';
import Link from "next/link";
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

class CartProduct extends Component {

    render() {
        console.log("CartProduct ===> ", this.props)

        return (
            <>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Name</th>
                            <th scope="col">Unit Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="product-thumbnail" colSpan="5">
                                <p>Empty.</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    }
}

export default connect(
    null,
    null
)(CartProduct)
