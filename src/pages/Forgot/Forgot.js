import React from 'react';
import '../Login/Login.css';

const Forgot = () => {
  return (
    <div className='container'>
        <div className='form'>
            <h3 className='title'>We will send you the password through mail Id</h3>
            <form>
                <div className='form-group'>
                    <input type='email' required/><label>Email ID</label>
                </div>
                <input type='button' value='Submit' className='submit'/>
            </form>
        </div>
        <div className='last'>
            <a href='#'>T&C</a>
            <a href='#'>Policy</a>
        </div>      
    </div>
  )
}

export default Forgot;
