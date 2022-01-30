import React from 'react';

const Cart = (props) => {
    const {cart}=props;
    let total=0;
    let totalQuantity=0;
    for( const product of cart){
      
        if(!product.quantity){
            product.quantity=1;
        }
        totalQuantity=totalQuantity+product.quantity;
        total=total+product.quantity+ product.price * product.quantity;

    }
    // const cartReducer=(previous,current)=>previous+current.price;
    // const totalPrice=(cart.reduce(cartReducer,0));
    const delivayCharge=15;
    const tax= ((total+delivayCharge)*.10);
    const grandTotal=(total+delivayCharge+tax);
    return (
     <div style={{"textAlign":'center'}}>
        <h3>Order Summary</h3>
        <h5>Order Quantity:{totalQuantity}</h5>
        <h6>Total: {total.toFixed(2)} </h6>
        <p>DelevaryChage: {cart.length ?  delivayCharge : " 0"}</p>
        <p>Tax: {cart.length ? tax.toFixed(2) : " 0"}</p>
        <h5>Grand Total:{cart.length ? grandTotal.toFixed(2) : " 0" } </h5>

        
    </div>
    );
};

export default Cart;