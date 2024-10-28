import React from 'react'
import '../styles/Orderinfo.css'
import '../components/Productform'

const Orderinfo = ({ product, price, quantity }) => {
    const totalPrice = (price * quantity).toFixed(2);
        

    return(
        <div id='taable'>
            <h3>Order Summary</h3>
            <table>
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{product}</td>
                    <td>{quantity}</td>
                    <td>{totalPrice}€</td>
                </tr>
                </tbody>
            </table>
            </div>
    )
}

export default Orderinfo;