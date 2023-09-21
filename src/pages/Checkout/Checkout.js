import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Checkout.css';
import Response from '../../Response';

const Checkout = () => {
  return (
    <div>
        <Header/>
            <div className='mainn'>
            <div className='content'>
                <div className='order-summary'>
                    {Response.cart_summary.map((e,idx) => {
                    return(
                        <div className='summaryy'>
                            <h2>Cart Summary</h2>
                            <p>Total Items: {e.toatl_items}</p>
                            <p>Total Price: Rs.{e.total_price}</p>
                        </div>
                        )
                        })}
                </div>
                <div className='billing-details'>
                    <h2>Billing Details</h2>
                    <form id='billing-form'>
                        <label for='name'>Full Name:</label>
                        <input type='text' id='name' name='name' required/>

                        <label for='name'>Email:</label>
                        <input type='email' id='email' name='email' required/>

                        <label for='address'>Address:</label>
                        <input type='text' id='address' name='address' required/>

                        <label for="city">City:</label>
                        <input type="text" id="city" name="city" required></input>

                        <label for="zip">ZIP Code:</label>
                        <input type="text" id="zip" name="zip" required></input>

                        <label for="country">Country:</label>
                        <select id="country" name="country" required>
                            <option value="tn">Tamil Nadu</option>
                            <option value="kl">Kerala</option>
                        </select>

                        <button type="submit" class="submit-btn">Place Order</button>
                    </form>
                </div>
            </div>
            </div>
        <Footer/>
    </div>
  )
}

export default Checkout
