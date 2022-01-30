const addToDB=id=>{
const exists=getDb();
let shopping_card={};
if(!exists){
    shopping_card[id]=1;
    
}
else{
    shopping_card=JSON.parse(exists);
    if(shopping_card[id]){
        const newCount=shopping_card[id] + 1;
        shopping_card[id] = newCount;
 
    }
    else{
        shopping_card[id]=1;
    }
    
}
updateDb(shopping_card);


}

// const removeFromDB=id=>{
//     const exists= localStorage.getItem("shopping_cart");
//     if(!exists){

//     }
//     else{
//         const shopping_card=JSON.parse(exists);
//         delete shopping_card[id];
//         localStorage.setItem('shopping_card', JSON.stringify(shopping_card))
//     }
// }

const getDb = () => localStorage.getItem('shopping_card');
const updateDb = cart => {
  localStorage.setItem('shopping_card', JSON.stringify(cart));
}

const getStoredCart = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
  }

export { addToDB, getStoredCart };

