import React, { useEffect, useState } from 'react';
import { addToDB, getStoredCart } from '../../utilities/local';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    const [searchProducts,setSearchProducts] = useState([])
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data);
            setSearchProducts(data)
        })
    },[])

    useEffect(()=>{
        if(products.length){
            const saveCart=getStoredCart();
            const soredCart= [];
            for (const key in saveCart) {
                console.log(key,saveCart[key]);
               const addedProduct= products.find((product)=>product.key===key);
                if(addedProduct){
                    const quantity=saveCart[key];
                    addedProduct.quantity=quantity;
                    soredCart.push(addedProduct)
                }
            }
            setCart(soredCart)

        }

    },[products])
  

    const handleAddToCart=(product)=>{
       const newCart=[...cart,product];
       addToDB(product.key)
       setCart(newCart);
       
    }

    //// .................search functionality..............
    const handleSearch= event=>{
        let searchText= event.target.value;
        const getProducts=products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()))
        setSearchProducts(getProducts)
        // console.log(getProducts.length);
    
    }
    return (
       <div>
           <div className='search-container'>
               <input type="text" onChange={handleSearch} placeholder='Search here your product' />
           </div>
           <div className='shop-container'>
            <div className="products-container">
                <h1>Products: {products.length}</h1>
                {
                    searchProducts.map(product=>(<Product 
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
       </div>
    );
};

export default Shop;