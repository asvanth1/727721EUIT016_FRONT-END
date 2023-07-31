import React, { useState } from 'react';
import './Signup.css';
import {Link} from "react-router-dom"

const SignupPage = () => {
     const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [mobile, setMobile] = useState('');
  
    const handleNameChange = (event) => {
        setName(event.target.value);
      };
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
    
    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
    };

    const handleMobileChange = (event) => {
      setMobile(event.target.value);
    };

    const handleupSubmit = (event) => {
      event.preventDefault();
     alert.window("Account Created Successfully");
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Mobile:', mobile);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmpassword);
    };

  return (
    <><center>
    <div className='logo1'>
    <div className="signup-page"> 
    <div className="signup1-page">
      <div className="signup-container">
      <h2>Create Your Account</h2>
      <p className='ab1'>.....................................................................................</p>
         <form onSubmit={handleupSubmit}>
         <h4 className='a1'>Username:</h4>
           <input
            type="text"
            className='signupinput'
            placeholder="Enter your Name"
            value={name}
            onChange={handleNameChange}
            required
          />

        <h4 className='a1'>Email:</h4>
         <input
            type="email"
            className='signupinput'
            placeholder="Enter your Email"
            value={email}
            onChange={handleEmailChange}
            required
          />

          <h4 className='a1'>Mobile No:</h4>
          <input
            type="tel"
            className='signupinput'
            placeholder="Enter your Mobile Number"
            onChange={handleMobileChange}
            required
          />

          <h4 className='a1'>Password:</h4>
          <input
            type="password"
            className='signupinput'
            placeholder="Enter New Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <h4 className='a1'>Confirm Password:</h4>
          <input
            type="password"
            className='signupinput'
            placeholder="Renter New Password"
            value={confirmpassword}
            onChange={handleConfirmPasswordChange}
            required
          /><br/>
          <button type="submit" className='signupbutton'><Link to="/Signin"><b>Sign Up</b></Link></button>
            <h3>------------- or -------------</h3>
        </form>
        <h4 className='a1'>Existing User?</h4>
          <div className="create1"><Link to="/Signin"><div className="b1"><u>Log Into Your Account</u></div></Link></div>  
          </div>
      </div>
    </div>
    
    </div></center></>
  );
};

export default SignupPage;