import React from "react";
import './CategoryContainer.css';

function CategoryContainer({ Category }) {
    if (!Category) {
        return <div className="category-container">No category data available</div>;
    }

    return (
        <div className="category-container">
            <h2>{Category.name}</h2>
            <div className="products-container">
                {Category.products && Category.products.length > 0 ? (
                    Category.products.map((product, index) => (
                        <div className="product-card" key={index}>
                            <p>{product.title}</p>
                            <p>{product.price}</p>
                            <div className="imageContainer">
                                <img src={product.image} alt="Product"/>
                            </div>
                            <p>{product.quantity}</p>
                        </div>
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </div>
        </div>
    );
}

export default CategoryContainer;
