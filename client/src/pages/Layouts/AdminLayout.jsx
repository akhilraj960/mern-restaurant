import React, { useEffect } from "react";
import AdminHeader from "../../components/Admin/AdminHeader/AdminHeader";
import { Outlet, useNavigate } from "react-router-dom";
import AdminSideBar from "../../components/Admin/AdminSideBar/AdminSideBar";

const AdminLayout = () => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
    }
  }, [token,navigate]);

  return (
    <>
      <div style={{ width: "100vw", display: "flex" }}>
        <AdminSideBar />
        <div style={{ width: "100%" }}>
          <AdminHeader />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
