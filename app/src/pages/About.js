import React from "react";
import aboutImage from "../assets/aboutImage.png";
import "../Styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${aboutImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Our Story</h1>
        <p>
          It’s a simple equation that keeps our customers coming back for more.
          Always fresh toppings and great service plus low, low prices equals
          great pizza. Here at The Pizza Company, we strive to give our
          customers the best. We’re one of the few family-owned companies left
          that still truly care about our customers. Our customers can count on
          prompt and quality service, high-quality food made from high-quality
          products with the freshest ingredients available and great prices.
          Whether you’re looking to feed your family or cater a gathering or
          lunch meeting, feeding a large group is both easy and affordable at
          The Pizza Company.
        </p>
      </div>
    </div>
  );
}

export default About;
