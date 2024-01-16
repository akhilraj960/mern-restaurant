import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Explore,
  AdminPanelSettingsOutlined,
  PersonAdd,
  Logout,
  ShoppingBasket,
  Menu,
} from "@mui/icons-material";
import "./Head.css"; // Import the CSS file

const Navbar = () => {
  const handleLogout = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("role", "");
    window.location.reload();
  };

  return (
    <>
      <nav className="navbar">
        <div>
          <Link className="logo" to="/">
            Logo
          </Link>
        </div>
        <div className="nav-links">
          <>       
              <Link to="/">
                <div className="nav-link">
                  <Home className="icon" />
                  <span>Home</span>
                </div>
              </Link>
              <Link to="/foods">
                <div className="nav-link">
                  <Explore className="icon" />
                  <span>Explore</span>
                </div>
              </Link>
              <Link to="/admin/foods">
                <div className="nav-link">
                  <AdminPanelSettingsOutlined className="icon" />
                  <span>Dashboard</span>
                </div>
              </Link>

              <div className="nav-link">
                <Logout className="icon" />
                <span>Logout</span>
              </div>
              <Link to="/login">
                <div className="nav-link">
                  <PersonAdd className="icon" />
                  <span>Login</span>
                </div>
              </Link>
          </>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
