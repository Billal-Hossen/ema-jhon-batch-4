import React from 'react';
import Rating from 'react-rating';
import './ReviewItem.css';
const ReviewItem = (props) => {
    const {name,seller,price,stock,star,key}=props.product;
    const removeHandle= props.removeHandle;
    return (
        <div className='product-details review-item'>
             <h3>Name: {name}</h3>
                <p>By: <small>{seller}</small></p>
                <p>Price: {price}</p>
                <p>stock: {stock}</p>
                <Rating 
                  initialRating={star}
                  emptySymbol="far fa-star rating"
                fullSymbol="fas fa-star rating"
               
                ></Rating><br />
                <button onClick={()=>removeHandle(key)} className='btn-regular'>Remove</button>
        </div>
    );
};

export default ReviewItem;