import { useContext } from "react";
import store from "../../store";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";

function Cart(){
    const items = useSelector((state) => {
        return state.items;
    })
    return (
        <div>
                {Object.keys(items).map((key) => {
                    let product = items[key]
                    return (
                        <div className="product-card">
                            <p > {product.title}</p>
                            <p > {product.price}</p>
                            <div className="imageContainer">
                                <img src={product.image} />
                            </div>
                            <p>{ product.quantity }</p>
                        </div>
                    )
                })}
        </div>
    )
}

export default Cart;