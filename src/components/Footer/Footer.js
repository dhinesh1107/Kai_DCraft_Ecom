import React from 'react'
import fb from '../../Images/fb.svg';
import insta from '../../Images/insta.svg';
import './Footer.css';

let copyright = String.fromCodePoint(0x00A9);

const Footer = () => {
  return (
    <div className='footer_container'>
        <div className='footer'>
            <div className='copyryt'>
            <h4>COPYRIGHT {copyright} KAI-DCRAFT 2023</h4>
            </div>
            <div className='icons'>
                <button className='fb'>
                    <img src={fb}/>
                </button>
                <button className='insta'>
                    <img src={insta}/>
                </button>
            </div>
        </div>      
    </div>
  )
}

export default Footer
