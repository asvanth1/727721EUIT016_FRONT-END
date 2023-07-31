// import React from 'react'

// export default function HomePage() {
//   return (
//     <div>Home</div>
//   )
// }
import React from "react";
import { Link } from "react-router-dom";
// import BannerImage from "../assets/pizza.jpeg";
import "./Home.css";

function Home() {

  return (
    <div className="home"
     style={{ backgroundImage: `url(abc001.jpg)` }}>
      <div className="headerContainer">
        <h1>WELCOME</h1>
        <p> Home Garden</p>1

        <Link to="/Signin">
          <button> Login/Signin </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;