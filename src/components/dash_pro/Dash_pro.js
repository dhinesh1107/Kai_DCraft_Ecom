import React from 'react';
import one from '../../Images/DC_img/one.jpg';
import two from '../../Images/DC_img/two.jpg';
import three from '../../Images/DC_img/three.jpg';
import './Dash_pro.css';
import { useNavigate } from 'react-router-dom';

const Dash_pro = () => {
const navigate = useNavigate();
  const reDirect = () => {
    navigate('/product');
  };
  return (
      <div className="Home_container_img" id='main_pro'>
            <div className="img_containers">
                <div className="img_container">
                    <img src={one} className="dc_img"/>
                    <div className="img_details">
                        <p className="img_title">Blue Catcher</p>
                        <button className="btn">Buy Now</button>
                    </div>
                </div>
                <div className="img_container">
                    <img src={two} className="dc_img"/>
                    <div className="img_details">
                        <p className="img_title">Blue Catcher</p>
                        <button className="btn">Buy Now</button>
                    </div>
                </div>
                <div className="img_container">
                    <img src={three} className="dc_img"/>
                    <div className="img_details">
                        <p className="img_title">Blue Catcher</p>
                        <button className="btn">Buy Now</button>
                    </div>
                </div>
            </div>
            <button className='btn' onClick={() => {reDirect();}}>Shop More</button>
        </div>
  )
}

export default Dash_pro
