import './App.css';
import { a, b } from './components/Products/Products';
import Products from './components/Products/Products';
import { useState } from 'react';
import CartContext from './context/CartContext';
import Cart from './components/Cart/Cart.jsx';
function App() {
  // state variable
  // inc
  // dec
  let [cart, setCart] = useState({});
  function increaseQuantity(product) {
    const newCart = { ...cart };
    // if(cart[product.id])
    if (!newCart[product.id]) {
      newCart[product.id] = {
        ...product,
        quantity: 0
      };
    }
    newCart[product.id].quantity += 1;
    console.log(newCart);
    setCart(newCart);
  }

  function decreaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) return;
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }
    setCart(newCart);
  }

  console.log(a, b);
  return (
      <div className="App">

        <div className='productContainer'>
          <h1>PRODUCTS</h1>
          <Products  />
        </div>
        <div className="cartContainer">
          <h1>CART</h1>
          <Cart />
        </div>
      </div>
  );
}

export default App;

// {1:{id: 1, quantity: 11}, 2:{id: 2, quantity: 10}, 3:{id: 3, quantity: 10}, 4:{id: 4, quantity: 10}}

// button
// - 1 +

// let a = {b:10, c:20};
//a.b = 30;
// let b = {...a};

// a => 1234
// a => 12

// {cart: cart, increaseQuantity: increaseQuantity}