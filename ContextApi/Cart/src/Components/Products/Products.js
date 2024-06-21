import { useState } from "react";

function products(){
    const[products, setProducts] = useState([]); 
    fetch("https://fakestoreapi.com/products")
    .then((res)=>{
        res.json();
    })
    .then((res)=>{
        setProducts(res);
    })
    return products;
}
export default products;