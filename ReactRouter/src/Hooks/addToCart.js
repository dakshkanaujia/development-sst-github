// import global data storing array

let cart = [
    {
        name : "",
        price : ""
    }
];

function addToCart({inputV}){
    cart.push(inputV);
    return (
        <div>{inputV}</div>
    )
}

export default addToCart;