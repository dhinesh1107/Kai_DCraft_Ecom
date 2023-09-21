import React from 'react';
import Header from '../../components/Header/Header';
import Dashboard from '../../components/Dashboard/Dashboard';
import Dash_pro from '../../components/dash_pro/Dash_pro';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

const Landing = () => {
  return (
    <div>
        <Header/>
        <Dashboard/>
        <Dash_pro/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Landing;
