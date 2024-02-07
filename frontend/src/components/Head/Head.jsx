import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Explore,
  AdminPanelSettingsOutlined,
  PersonAdd,
  Logout,
} from "@mui/icons-material";
import "./Head.css"; // Import the CSS file

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
    if (role === "admin") {
      setIsAdmin(true);
    }
  }, [token, role]);

  const handleLogout = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("name", "");
    localStorage.setItem("role", "");
    window.location.reload();
  };

  return (
    <>
      <nav className="navbar">
        <div>
          {isAdmin ? (
            <Link to="/admin" style={{ textDecoration: "none" }}>
              <div className="nav-link">
                <AdminPanelSettingsOutlined className="icon" />
                <span style={{ fontSize: "24px" }}>Dashboard</span>
              </div>
            </Link>
          ) : (
            <Link className="logo" to="/">
              Logo
            </Link>
          )}
        </div>
        <div className="nav-links">
          <>
            {!isAdmin && (
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
              </>
            )}

            {!isLoggedIn ? (
              <Link to="/login">
                <div className="nav-link">
                  <PersonAdd className="icon" />
                  <span>Login</span>
                </div>
              </Link>
            ) : (
              <div onClick={handleLogout} className="nav-link">
                <Logout className="icon" />
                <span>Logout</span>
              </div>
            )}
          </>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
