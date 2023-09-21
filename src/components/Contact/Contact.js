import React from 'react';
import './Contact.css';
import logo from '../../Images/logo.png'

const Contact = () => {
  return (
    <div className ="contact_container_section" id='contact'>
            <img src={logo} className="contact_img"/>
            <div className="contact">
                <div className="contact_header">
                    <input className="contact_ip" type="text" placeholder="Name"/>
                    <input className="contact_ip" type="email" placeholder="EmailID"/>
                    <input className="contact_ip" type="text" placeholder="Message"/>
                    <button className="contactus">Contact Us</button>
                </div>
            </div>
    </div>
  )
}

export default Contact
