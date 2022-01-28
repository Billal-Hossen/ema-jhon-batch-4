import React from 'react';

const Cart = (props) => {
    const {cart}=props;
    let total=0;
    // for( const product of cart){
    //     total=total+product.price;

    // }
    const cartReducer=(previous,current)=>previous+current.price;
    const totalPrice=cart.reduce(cartReducer,0);
    return (
        <div style={{"textAlign":'center'}}>
        <h3>Order Summary</h3>
        <h5>Order Quantity:{cart.length}</h5>
        <h6>Total: {totalPrice} </h6>
        
    </div>
    );
};

export default Cart;