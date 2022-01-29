import React from 'react';

const Cart = (props) => {
    const {cart}=props;
    let total=0;
    // for( const product of cart){
    //     total=total+product.price;

    // }
    const cartReducer=(previous,current)=>previous+current.price;
    const totalPrice=(cart.reduce(cartReducer,0));
    const delivayCharge=15;
    const tax= ((totalPrice+delivayCharge)*.10);
    const grandTotal=(totalPrice+delivayCharge+tax);
    return (
        <div style={{"textAlign":'center'}}>
        <h3>Order Summary</h3>
        <h5>Order Quantity:{cart.length}</h5>
        <h6>Total: {totalPrice.toFixed(2)} </h6>
        <p>DelevaryChage: {cart.length ?  delivayCharge : " 0"}</p>
        <p>Tax: {cart.length ? tax.toFixed(2) : " 0"}</p>
        <h5>Grand Total:{cart.length ? grandTotal.toFixed(2) : " 0" } </h5>

        
    </div>
    );
};

export default Cart;