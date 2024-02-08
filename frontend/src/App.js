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
import AddCategory from "./pages/AdminPages/AddCategory/AddCategory";
import Category from "./pages/AdminPages/Category/Category";
import EditFood from "./pages/AdminPages/EditFood/EditFood";
import Food from "./pages/Food/Food";
import Orders from "./pages/Orders/Orders";
import AdminOrders from "./pages/AdminPages/AdminOrders/AdminOrders";

const App = () => {
  return (
    <>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/foods" element={<Food />} />
        <Route path="/orders" element={<Orders />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/food" element={<AdminFood />} />
          <Route path="/admin/user" element={<AdminUser />} />
          <Route path="/admin/addfood" element={<AddNewFood />} />
          <Route path="/admin/editfood/:id" element={<EditFood />} />
          <Route path="/admin/addcategory" element={<AddCategory />} />
          <Route path="/admin/category" element={<Category />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
