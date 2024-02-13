import React, { useEffect, useState } from "react";
import styles from "./AdminFoods.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
const AdminFoods = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/admin/products").then((response) => {
      setProducts(response.data.products);
    });
  },[]);

  return (
    <div className={styles.container}>
      <h2>Foods</h2>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((value, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <a href={`http://localhost:5000/uploads/${value._id}.jpg`}>
                    <img
                      style={{ width: "50px" }}
                      src={`http://localhost:5000/uploads/${value._id}.jpg`}
                      alt={value._id}
                    />
                  </a>
                </td>
                <td>{value.name}</td>
                <td>{value.price}</td>
                <td>{value.qty}</td>
                <td>{value.description}</td>
                <td>{value.category}</td>
                <td>
                  <Link
                    to={`/admin/editfood/${value._id}`}
                    style={{ color: "Green" }}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminFoods;
