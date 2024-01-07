import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="content">
          <h1> Say good bye to your hunger!</h1>
          <p>
            Order healthy and tasty food online wherever and whenever from{" "}
            <span>Logo</span>{" "}
          </p>
          <Link to="/food">
            <button className="btn">Order now</button>
          </Link>
        </div>
        <div className="imgsection">
          <img
            src="https://res.cloudinary.com/jamesmarycloud/image/upload/v1653207144/home-page_ldrxp1.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Home;
