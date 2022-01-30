import React from 'react';
import Rating from 'react-rating';
import './Products.css';
const Product = (props) => {
    const {name,price, img, stock,seller,star}=props.product;
    return (
        <div className='product-container'>
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h3>Name: {name}</h3>
                <p>By: <small>{seller}</small></p>
                <p>Price: {price}</p>
                <p>stock: {stock}</p>
                <Rating 
                  initialRating={star}
                  emptySymbol="far fa-star rating"
                fullSymbol="fas fa-star rating"
               
                ></Rating>
                <br />
                <button  className='btn-regular' onClick={()=>props.handleAddToCart(props.product)}><i class="fas fa-cart-arrow-down"></i> Add To Cart</button>
            </div>
            
        </div>
    );
};

export default Product;