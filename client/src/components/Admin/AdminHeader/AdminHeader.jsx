import React from "react";
import styles from "./AdminHeader.module.css";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear("token");
    window.location.reload();
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/admin" className={styles.logo}>
        DashBoard
      </Link>

      <div className={styles.navlinks}>
        <Link onClick={handleLogout} className={styles.navlink}>
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default AdminHeader;
