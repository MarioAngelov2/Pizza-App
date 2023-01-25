import React from "react";
import { Link } from "react-router-dom";
import landing from "../assets/pizza.jpg";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${landing})` }}>
      <div className="headerContainer">
        <h1>Mario's Pizzaria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
