import React from 'react'
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";

import Signin from './Signin'
import SignupPage from './Signup'
import HomePage from './HomePage';


function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route exact path="/" element={<Signin/>}></Route>
        <Route exact path="/Signup1" element={<SignupPage/>}></Route>
        <Route exact path="/Signin" element={<Signin/>}></Route>
        <Route exact path="/Home" element={<HomePage/>}></Route>
       </Routes>
  </Router> 

    </div>
  )
}

export default App