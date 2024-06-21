import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Products from './Components/Products/Products.js'
import './App.css'
import Display from './Components/Display.jsx'

let products = []
let dummyCart = []
function App() {
  products = [
    {
      id : 1,
      quantity : 0
    },
    {
      id : 2,
      quantity : 4
    },
    {
      id : 1,
      quantity : 0
    }

  ];
  console.log(products)
  const [cart, setCart] = useState([]);
  dummyCart = [];
  function increaseQuantity(id){
    let check = false;
    for(let i=0; i<cart.length; i++){
      if(cart[i][id] == id){
        cart[i][id]++;
        check = true;
        break;
      }
    }
    if(check == false){
      setCart(() => (dummyCart.push(products[id])));
    }
  }
  function decreaseQuantity(id){
    for(let i=0; i<cart.length; i++){
      if(cart[i][id] == id){
        cart[i][id]--;
        check = true;
        break;
      }
    }
  }
  return (
    <>
      <button onClick={() => {increaseQuantity(1)}}>+</button>
      <button onClick={() => {decreaseQuantity(2)}}>-</button>
      <Display cart = {cart}/>
    </>
  )
}

export default App
