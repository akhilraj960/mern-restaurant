import React, { useEffect, useState } from "react";
import styles from "./Order.module.css";
import axios from "axios";
const Orders = () => {
  const [reload, setReload] = useState(false);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/admin/orders").then((data) => {
      console.log(data.data);
      setOrders(data.data);
    });
  }, []);

  const handleSubmit = (id) => {
    axios
      .put(`http://localhost:5000/api/admin/order/status/${id}`)
      .then((data) => {
        setReload((prev) => !prev);
        console.log(data);
        alert(data.data.message);
      });
  };

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
                <td>{value.user[0].name}</td>
                <td>{value.phone}</td>
                <td>{value.address}</td>
                <td>{value.landmark}</td>
                <td className={styles.tableproductcontainer}>
                  {value.product.map((value, index) => {
                    return (
                      <div className={styles.tableproduct} key={index}>
                        <img
                          style={{ width: "50px" }}
                          src={`http://localhost:5000/uploads/${value._id}.jpg`}
                          alt={value._id}
                        />
                        <p>{value.name}</p>
                        <p>{value.category}</p>
                      </div>
                    );
                  })}
                </td>
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
