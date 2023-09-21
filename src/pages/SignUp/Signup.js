import React from 'react'
import '../Login/Login.css'

const Signup = () => {
  return (
    <div className='container'>
        <div className='form'>
            <h3 className='title'>Kai_DCraft</h3>
            <form>
                <div className='form-group'>
                    <input type='text' required/><label>Name</label>
                </div>
                <div className='form-group'>
                    <input type='email' required/><label>Email ID</label>
                </div>
                <div className='form-group'>
                    <input type='password' required/><label>Password</label>
                </div>
                <div className='form-group'>
                    <input type='password' required/><label>Conform Password</label>
                </div>
                <input type='button' value='Sign Up' className='submit'/>
            </form>   
        </div>
        <div className='last'>
            <a>T&C</a>
            <a>Policy</a>
        </div>
    </div>
  )
}

export default Signup
