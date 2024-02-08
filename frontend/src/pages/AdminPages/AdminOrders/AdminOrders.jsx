import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminOrders = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/admin/orders").then(({ data }) => {
      setData(data.orders);
    });
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="adminusercontainer">
      <h2>Orders</h2>

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>User</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Product</th>

            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((order, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{order.user.name}</td>
              <td>{order.user.phone}</td>
              <td>{order.user.address}</td>
              <td>{order.product[0].name}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrders;
