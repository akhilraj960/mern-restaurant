import React from "react";
import "./AdminLayout.css";

import AdminSideBar from "../../../components/Admin/AdminSideBar/AdminSideBar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="adminlayout">
      <AdminSideBar />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
