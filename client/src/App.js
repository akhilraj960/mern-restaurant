import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layouts/Layout";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AdminLayout from "./pages/Layouts/AdminLayout";
import AdminLogin from "./pages/AdminPages/AdminLogin/AdminLogin";
import Foods from "./pages/Foods/Foods";
import AddFood from "./pages/AdminPages/AddFood/AddFood";
import NewCategory from "./pages/AdminPages/NewCategory/NewCategory";
import Category from "./pages/AdminPages/Category/Category";
import AdminFoods from "./pages/AdminPages/AdminFoods/AdminFoods";
import Users from "./pages/AdminPages/Users/Users";
import EditFood from "./pages/AdminPages/EditFood/EditFood";
import Orders from "./pages/AdminPages/Orders/Orders";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddressPage from "./pages/AddressPage/AddressPage";
import CartPage from "./pages/CartPage/CartPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="foods" element={<Foods />} />
        <Route path="address/:pid/:qty" element={<AddressPage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>

      <Route path="/admin/login" element={<AdminLogin />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="addfood" element={<AddFood />} />
        <Route path="addcategory" element={<NewCategory />} />
        <Route path="category" element={<Category />} />
        <Route path="food" element={<AdminFoods />} />
        <Route path="users" element={<Users />} />
        <Route path="editfood/:id" element={<EditFood />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>
  );
};

export default App;
