import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/still-life-sustainability-concept-arrangement.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Talk To You </h1>
        <p>Z lahkoto poiščite najboljšo pomoč</p>
        <Link to="/menu">
          <button> Klikni tukaj </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
