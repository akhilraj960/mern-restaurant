import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const token = localStorage.getItem("token");


  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token]);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear("token");
    setIsLoggedIn(false);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        Logo
      </Link>

      <div className={styles.navlinks}>
        <Link to="/" className={styles.navlink}>
          Home
        </Link>
        <Link to="/foods" className={styles.navlink}>
          Explore
        </Link>
        <Link to="/cart" className={styles.navlink}>
          Cart
        </Link>
        {!isLoggedIn ? (
          <Link to="/login" className={styles.navlink}>
            Login
          </Link>
        ) : (
          <Link onClick={handleLogout} className={styles.navlink}>
            Logout
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
