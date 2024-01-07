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
  const [openDrawer, setOpenDrawer] = useState(false);
  const isMatch = false; /* Replace this with your actual condition for responsive design */
  const cart = []; // Assuming this is your cart data
  const user = null; // Assuming this is your user data

  const handleLogout = () => {
    // Implement your logout logic here
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
          {isMatch ? (
            <>
              {/* Drawer Content */}
              <div className="drawer">
                <Link to="/" onClick={() => setOpenDrawer(false)}>
                  <div className="nav-link">
                    <Home className="icon" />
                    <span>Home</span>
                  </div>
                </Link>
                <Link to="/foods" onClick={() => setOpenDrawer(false)}>
                  <div className="nav-link">
                    <Explore className="icon" />
                    <span>Explore</span>
                  </div>
                </Link>
                {user !== null && user.role === "admin" && (
                  <Link to="/admin/foods" onClick={() => setOpenDrawer(false)}>
                    <div className="nav-link">
                      <AdminPanelSettingsOutlined className="icon" />
                      <span>Dashboard</span>
                    </div>
                  </Link>
                )}
                {user !== null ? (
                  <div className="nav-link" onClick={handleLogout}>
                    <Logout className="icon" />
                    <span>Logout</span>
                  </div>
                ) : (
                  <Link to="/login" onClick={() => setOpenDrawer(false)}>
                    <div className="nav-link">
                      <PersonAdd className="icon" />
                      <span>Login</span>
                    </div>
                  </Link>
                )}
              </div>
            </>
          ) : (
            /* Regular Navigation Links */
            <>
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/foods" className="nav-link">
                Explore
              </Link>
              {user !== null && user.role === "admin" && (
                <Link to="/admin/foods" className="nav-link">
                  Dashboard
                </Link>
              )}
              {user !== null ? (
                <div className="nav-link" onClick={handleLogout}>
                  <span>Logout</span>
                </div>
              ) : (
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              )}
            </>
          )}

          {/* Shopping Cart Icon */}
          <Link to="/cart" className="nav-link cart">
            <ShoppingBasket className="icon" />
            {cart.length > 0 && <span className="badge">{cart.length}</span>}
          </Link>
          {isMatch && (
            <div
              className="nav-link menu"
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              <Menu className="icon" />
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
