

const addTodb = item=>{
    const db=getDb();
    if(item in db){
        db[item]= db[item]+1;
    }
    else{
        db[item]=1;
    }
    saveDb(db);
}


const removeDb=item=>{
    const db= getDb();
    delete db[item];
    saveDb();
}

const saveDb= db=>{
    localStorage.setItem('shoppini_cart',JSON.stringify(db))
}

const getDb=()=>{
    const saveDb=localStorage.getItem('shopping_cart');

    return saveDb? JSON.stringify(saveDb) : {};
 }

 export { addTodb, saveDb, removeDb };

