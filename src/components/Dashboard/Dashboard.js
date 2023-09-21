import React from 'react';
import Header from '../Header/Header';
import DashboardImg from '../../Images/kisspng.png';
import './Dashboard.css';

const Dashboard = () => {
  return (
        <div className='main_background_img' id='main_dash'>     
            <img src = {DashboardImg} className='side_img'/>
            <div className='dash_container'>
                <p className='quote'>Dont let someone else catch your dreams.</p>
                <p className='quote_1'>You be the dream catcher</p>
                <button className='shop_now'>Explore</button>
            </div>
        </div>
  )
}

export default Dashboard
