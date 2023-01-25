import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="headerContainer"></div>
      <h1>Mario's Pizzaria</h1>
      <p>PIZZA TO FIT ANY TASTE</p>
      <Link to="/menu">
        <button>ORDER NOW</button>
      </Link>
    </div>
  );
}

export default Home;
