import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets';

export const Login = ({setShowLogin}) => {

  const [currentState, setCurrentState] = useState('login');

  return (
    <div className='login'>
        <form className='login-container' >
          <div className='login-title'>
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} />
          </div>
          <div className='login-inputs'>
          {currentState ==='login'?<></>:<input type='text' placeholder='your name' required />}
            <input type='email' placeholder='email' required />
            <input type='password' placeholder='password' required />
          </div>
          <button>{currentState === 'sign up'?"create account":'login'}</button>
          <div  className='login-condition'>
            <input type='checkbox' required />
            <p>By continuing, i agree to the terms of use and privacy policy</p> 
          </div>
          { currentState ==='login'
            ? <p> create a new account? <span  onClick={()=> setCurrentState('sign up')}>Click here</span> </p>
            :<p> Already have an account? <span onClick={()=> setCurrentState('login')}>Login in </span></p>
          }
        </form>
    </div>
  )
}
