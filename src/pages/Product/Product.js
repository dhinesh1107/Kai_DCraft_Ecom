import React from 'react';
import Header from '../../components/Header/Header';
import './Product.css';
import Footer from '../../components/Footer/Footer';
import Response from '../../Response';
import { useNavigate } from 'react-router-dom';


const Product = () => {
  const history = useNavigate();
  const directToproduct = (price) =>{
    history('/dash');
    console.log(price);
  }
  return (
    <>
    <Header/>
    <div className='product-list' id='product-list'>
        {/* <div className='product'>
            <img src={three} />
            <h2 className='product_name'>DreamChater</h2>
            <p>Price: Rs. 400</p>
            <button>Add to cart</button>
        </div>      */}
         {Response.products.map((e,idx) => {
            return (
            <div className='product' id={idx}>
                <img src={Object.values(e.img_path)}/>
                <div className='product_name' onClick={() =>{directToproduct(idx);}}>{e.product_name}</div>
                <p>Price: Rs.{e.price}</p>
                <button>Add to cart</button>
            </div>
            )
         })}
    </div>
    <Footer/>
</>
  )
}

export default Product
