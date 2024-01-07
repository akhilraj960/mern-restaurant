import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Head from "./components/Head/Head";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import AdminFood from "./pages/AdminPages/AdminFood/AdminFood";
import AdminUser from "./pages/AdminPages/AdminUser/AdminUser";
import AdminLayout from "./pages/AdminPages/AdminLayout/AdminLayout";
import AddNewFood from "./pages/AdminPages/AddNewFood/AddNewFood";
import AdminLogin from "./pages/AdminPages/AdminLogin/AdminLogin";

const App = () => {
  return (
    <>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/food" element={<AdminFood />} />
          <Route path="/admin/user" element={<AdminUser />} />
          <Route path="/admin/addfood" element={<AddNewFood />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
