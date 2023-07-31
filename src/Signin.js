import React, { useState } from 'react';
import './signin.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './Google';
// import logo from "./wallpaperflare.com_wallpaper.jpg"

import {Link} from "react-router-dom"

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

 

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    console.log('Login form submitted');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
        <div className='logo'>
      
      <div className="login-container">
        <h2>Sign In</h2>
        <p className='ab'>.....................................................................................</p>
        <form onSubmit={handleSubmit}>
            <h4 className='a'>Email:</h4>
          <input className='logininput'
          type="email"
          value={email}
          name="email"
          placeholder="Enter your Email"
          onChange={handleEmailChange} 
          required/> 
          <h4 className='a'>Password:</h4>  
          <input className='logininput' 
          type="password" 
          value={password}
          name="password" 
          placeholder="Enter your Password" 
          onChange={handlePasswordChange} 
          required/>

           <button className='but' type="submit"><Link to="/Home"><b>Login</b></Link></button>
          <h3>------------- or -------------</h3>
          <center><div className='google'><GoogleOAuthProvider clientId="">
          <Google />
        </GoogleOAuthProvider></div> </center> <br/>
        </form>
          <br/><h4 className='ad'>New User?</h4>
          <div className="create"><Link to="/Signup1"><div className="b"><u>Create New Account</u></div></Link></div>  
          </div>
      </div>
      <div>
    </div>
          </>
  );
};
export default LoginPage;