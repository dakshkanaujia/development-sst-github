import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Cart.css';
import CategoryContainer from "./CategoryContainer";

function Cart(){
    const items = useSelector((state) => {
        return state.items;
    })
    // convert items to array
    const itemsArray = Object.keys(items).map((key) => {
        return items[key];
    }
    )
    let mySet = new Set();
    const categories = [];
    itemsArray.forEach((product) => {
        mySet.add(product.category);
    })
    mySet.forEach((category) => {
        let obj = {
            name: category,
            products: []
        }
        let products = itemsArray.filter((product) => {
            return product.category === category;
        })
        obj.products = products;
        categories.push(obj);
    })
    console.log(categories[0]);
    const [stateCategory, setStateCategory] = useState(categories[0]);
    const changeCategory = (category) => {
        setStateCategory(category);
    }
    console.log(stateCategory);
    return (
        <>
        <div className="cart-container">
            <ul className = "">
                {/* <li>
                    <button onClick = {() => setStateCategory(categories)}>All</button>
                </li> */}
                {
                    categories.map((category) => {
                        return (
                            
                            <li>
                                <button onClick = {() => changeCategory(category)}>
                                  {category.name}
                                </button>
                            </li>
                        )
                    })
                }
                <CategoryContainer Category = {stateCategory}/>

            </ul>
        </div>
        </>
    )
}

export default Cart;