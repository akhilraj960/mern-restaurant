import React from "react";
import { Link } from "react-router-dom";
import styles from "./AdminSideBar.module.css";
const AdminSideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.menu}>
        <Link to={"/admin/orders"}>Orders</Link>
        <Link to={"/admin/food"}>Food</Link>
        <Link to={"/admin/user"}>Users</Link>
        <Link to={"/admin/category"}>Category</Link>
        <Link to={"/admin/addfood"}>Add Food</Link>
        <Link to={"/admin/addcategory"}>Add Category</Link>
      </div>
    </div>
  );
};

export default AdminSideBar;
