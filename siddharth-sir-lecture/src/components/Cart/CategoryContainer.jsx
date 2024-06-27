import React from "react";
import './CategoryContainer.css';

function CategoryContainer({Category}){
    return (
        <div className="category-container">
            <h2>{Category.name}</h2>
            <div className="products-container">
                {Category.products.map((product) => {
                    return (
                        <div className="product-card">
                            <p > {product.title}</p>
                            <p > {product.price}</p>
                            <div className="imageContainer">
                                <img src={product.image} alt="ltm"/>
                            </div>
                            <p>{ product.quantity }</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CategoryContainer;