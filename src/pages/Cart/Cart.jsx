import React, { useContext } from 'react'
import './Cart.css'
import {StoreContext} from '../../context/StoreContext'

const Cart = () => {
  const {cartIterms,food_list,removeFromCart} = useContext(StoreContext);
  return (
    <div className='cart'>
      <div className="cart-iteems">
        <div className="cart-items title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantinty</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      </div>
      <br/>
      <hr/>
      
      
    </div>
  )
}

export default Cart
