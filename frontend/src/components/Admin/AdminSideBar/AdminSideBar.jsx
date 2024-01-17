import React from "react";
import "./AdminSideBar.css";

import { Link } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarmenu">
          <Link to={"/admin/food"}>Food</Link>
          <Link to={"/admin/user"}>Users</Link>
          <Link to={"/admin/addfood"}>Add Food</Link>
          <Link to={"/admin/addcategory"}>Add Category</Link>
          <Link to={"/admin/category"}>Category</Link>
        </div>
      </div>
    </>
  );
};

export default AdminSideBar;
