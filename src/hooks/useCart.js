import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/local";


const useCart= (products)=>{
    const [ cart, setCart]= useState([]);
  useEffect(()=>{
    if(products.length){
        const saveCart=getStoredCart();
    const storedCart=[];
    for (const key in saveCart) {
       
           const addedProduct= products.find(pd=>pd.key===key);
           if (addedProduct) {
           const quantity=saveCart[key];
           addedProduct.quantity=quantity;
           storedCart.push(addedProduct)
 
            
        }
    }
    setCart(storedCart);

   
    }
 
  },[products])
  return [cart,setCart];


   
}

export default useCart;