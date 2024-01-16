import React, { useEffect } from "react";

import AdminSideBar from "../../../components/Admin/AdminSideBar/AdminSideBar";
import { Outlet, useNavigate } from "react-router-dom";

const token = localStorage.getItem("token");
const role = localStorage.getItem("role");

const AdminLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || role !== "admin") {
      navigate("/admin/login");
    }
  }, []);

  return (
    <div className="adminlayout">
      <AdminSideBar />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
