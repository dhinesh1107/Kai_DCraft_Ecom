import React from 'react';
import './Header.css';
import { Link } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';
import cart from '../../Images/cart.svg'

const Header = () => {
  const navigate = useNavigate();
  const Location = useLocation();
  const reDirect = (dash) => {
    if(Location.pathname === '/product'){
      if(dash === 'cart'){
        navigate('/cart');
      } else{
      navigate('/dash');
      }
    }
    else if(dash === 'dash'){
      navigate('/dash');
    } else if(dash === 'cart'){
      navigate('/cart');
    }
     else{
    navigate('/product');
    }
  }
  return (
      <div className="navContainer">
        <div className="container">
          <h4 className='title'>Kai-Dcraft</h4>
          <div className="nav_link">
            <Link className="link" id = '0' to='main_dash' onClick={() => {reDirect('dash');}} spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
            <Link className="link" id = '1' onClick={() => {reDirect();}} spy={true} smooth={true} offset={-100} duration={500}>Product</Link>
            <Link className="link" id = '2' to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact Us</Link>
            <img src = {cart} className='cart' onClick={() => {reDirect('cart');}}/> 
            {/* <a class="link" href='#'>Login</a> */}
          </div>
        </div>
      </div>
  );
}

export default Header;
