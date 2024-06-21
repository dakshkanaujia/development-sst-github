import React from 'react'
import { useEffect } from 'react'

function Display({cart}) {
  return (
    useEffect(() => (
        <div>
            {cart.map((product) => {
                return (
                    <div>{product.id + " " + product.quantity}</div>
                )
            })}
        </div>
    ), [cart])
  )
}

export default Display
