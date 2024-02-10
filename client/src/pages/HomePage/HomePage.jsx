import React from "react";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Say Good Bye To Your Hunger!</h1>
        <p>
          Order healthy and tasty food online and whenever from{" "}
          <span>Logo</span>
        </p>
        <Link to="/foods" className={styles.btn}>
          Order Now
        </Link>
      </div>
      <div className={styles.image}>
        <img
          src="https://res.cloudinary.com/jamesmarycloud/image/upload/v1653207144/home-page_ldrxp1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomePage;
