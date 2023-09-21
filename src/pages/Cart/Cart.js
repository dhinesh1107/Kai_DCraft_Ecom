import React from 'react';
import './Cart.css';
import empty_cart from '../../Images/empty_cart.svg';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useState } from 'react';
import Response from '../../Response';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const [cart, emptycart] = useState(true);
    const navigation = useNavigate();

    const reDirect = () => {
        navigation('/checkout');
    }
  return (
    <>
      <Header/>
      <div className='main'>
            <div className='cart-items'>
                {!cart ? (
                <div className='empty-cart'>
                    <img src = {empty_cart}/>
                    <p>Your cart is empty. Start shopping now!</p>
                </div>
                ) : (
                    Response.cart_product.map((e, idx) => {
                        return(
                            <div className='cart-item' id = {idx}>
                                <img src ={Object.values(e.img_path)}/>
                                <div className='item-details'>
                                    <h2>{e.product_name}</h2>
                                    <p>Price: Rs.{e.price}</p>
                                    <p>Quantity: {e.Quantity} </p>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
            {!cart ? '' : (
            Response.cart_summary.map((e,idx) => {
                return(
                    <div className='summary'>
                        <h2>Cart Summary</h2>
                        <p>Total Items: {e.toatl_items}</p>
                        <p>Total Price: Rs.{e.total_price}</p>
                        <button className='checkout-btn' onClick={() => {reDirect();}}>Proceed to Checkout</button>
                    </div>
                )
            }))}
      </div>
      <Footer/>
    </>
  )
}

export default Cart
