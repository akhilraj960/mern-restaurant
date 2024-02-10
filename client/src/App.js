import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layouts/Layout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AdminLayout from "./pages/Layouts/AdminLayout";
import AdminLogin from "./pages/AdminPages/AdminLogin/AdminLogin";
import Foods from "./pages/Foods/Foods";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<HomePage />} />
        <Route path="register" />
        <Route path="login" element={<LoginPage />} />
        <Route path="foods" element={<Foods />} />    
      </Route>

      <Route path="/admin/login" element={<AdminLogin />} />

      <Route path="/admin" element={<AdminLayout />}></Route>
    </Routes>
  );
};

export default App;
