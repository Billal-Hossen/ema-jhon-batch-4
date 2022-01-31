import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/local';
import Cart from '../cart/Cart';
import ReviewItem from '../reviewItem/ReviewItem';
const Review = () => {
    const [products]= useProducts();
    const [cart,setCart]= useCart(products);
    const removeHandle=(key)=>{
        const newCart= cart.filter(product=>product.key !==key);
        setCart(newCart)
        removeFromDb(key)
       
    }
 
    return (
        <div className='shop-container'>
            <div className="">
                {
                    cart.map(product=><ReviewItem removeHandle={removeHandle} key={product.key} product={product}/>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}/>
            </div>
            
        </div>
    );
};

export default Review;