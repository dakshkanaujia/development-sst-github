import './ProductCard.css';
// import AddToCart from '../AddToCart/AddToCart';
import { useRef, useState } from 'react';
import logo1 from '../../assests/logo1.png';
import ReduxAddToCart from '../ReduxAddToCart/ReduxAddToCart';
import { useSelector } from 'react-redux';
import {Provider} from 'react-redux';
import store from '../../store.js';

function ProductCard({ product }) {
  var a = 10;
  a = a + 1;
  // let pRef = useRef(0);
  // let iRef = useRef(0);
  // let oRef = useRef(0);
  // let [inputV, setInputV] = useState('Class');
  // console.log("pc", product.id)

  // setInput(value);
  // function printTitle() {
    // console.log("printTitle");
    // console.log(pRef.current.innerText);
    // if (pRef.current.style.display === "none") {
    //   pRef.current.style.display = "block";
    // } else {
    //   pRef.current.style.display = "none";
    // }
  // }
  // console.log("Rerendered", inputV);
  // function displayOutput(e) {
    // console.log(iRef.current);
    // console.log(oRef.current);
    // oRef.current.innerText = `Output here: ${ iRef.current.value }`;
    // oRef.current.innerText = oRef.current.innerText + iRef.current.value;
    // setInputV(e.target.value);
  // }

  // const store = useSelector((state) => {
  //   return state;
  // });
  // const 

  return (
    // wrap in react-
    <Provider store={store}>
      <div className="product-card">
        <p > {product.title}</p>
        <p > {product.price}</p>
        <div className="imageContainer">
          <img src={product.image} />
        </div>
        <ReduxAddToCart product={product} />
      </div>
    </Provider>
    )
  }
  
export default ProductCard;
  

//ProductCard()

// useState
// useRef
// useEffect

// custom hooks 
// default hooks
// they should not render a ui 
// they should be on the top of a function 
// they should be not in any conditon or loops 



// state variable = 
// whenver a state variable is set it would cause a rerender of the component
// and the value of the variable would be retained on rerenders

// function or component is called for the first time 
// Mounting

// useState(default value)
// returns [stateVar, setterFn];


// useEffect(fn, [])