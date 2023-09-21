import React, { useState } from 'react';
import './Login.css';
import eye_slash from '../../Images/eye.svg'
import eye from '../../Images/eye_slash.svg'
import { Link, useLocation } from 'react-router-dom';
import { routers } from '../../Constant/index.js'

const Login = () => {
    const {pathname} = useLocation();
    const [hidden, setHidden] = useState(false);
  return (
    <div className='container'>
        <div className='form'>
            <h3 className='title'>Kai_DCraft</h3>
            <form>
                <div className='form-group'>
                    <input type='text' required/><label>Username</label>
                </div>
                <div className='form-group'>
                    <div className='showpass'>
                        <input id = 'password' type={hidden ? 'text' : 'password'} required/><label>Password</label>
                        <img className='svg' onClick={ () => {setHidden(!hidden)}} src={hidden ? eye_slash : eye} id = 'eyeIcon'/>
                    </div>
                    <Link to='/forgot' style= {routers.includes(pathname) ? {} : {}}>
                    <a className='forgotpass'>Forgot Password?</a>
                    </Link>
                </div>
                <input type='button' value='Sign In' className='submit'/>
                <div className='row'>
                    <p>Not Yet Registered?
                    <Link to='/signup' style= {routers.includes(pathname) ? {} : {}}>
                         <a>Sign Up</a>
                    </Link>
                    </p>
                </div>
            </form>   
        </div>
        <div className='last'>
            <a>T&C</a>
            <a>Policy</a>
        </div>
    </div>
  )
}

export default Login
