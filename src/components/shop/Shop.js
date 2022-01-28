import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
  

    const handleAddToCart=(product)=>{
       const newCart=[...cart,product];
       setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                <h1>Products: {products.length}</h1>
                {
                    products.map(product=>(<Product 
                        key={product.key}
                         product={product}
                         handleAddToCart={handleAddToCart}
                         />))
                }
            </div>
            <div className="cart-container">
            <Cart cart={cart}/>

            </div>
            
        </div>
    );
};

export default Shop;