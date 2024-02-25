import React, { useEffect, useState } from "react";
import styles from "./Order.module.css";
import axios from "axios";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/admin/orders").then((data) => {
      console.log(data.data);
      setOrders(data.data);
    });
  }, []);

  const handleSubmit = () => {};

  return (
    <div className={styles.container}>
      <h2>Orders</h2>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Landmark</th>
            <th>Item </th>
            <th>Action </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.user.name}</td>
                <td>{value.phone}</td>
                <td>{value.address}</td>
                <td>{value.landmark}</td>
                <td>{value.product.name}</td>
                <td>
                  <button onClick={() => handleSubmit(value._id)}>
                    Delivered
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
