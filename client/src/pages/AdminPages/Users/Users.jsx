import React, { useEffect, useState } from "react";
import styles from "./Users.module.css";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/admin/users").then((response) => {
      setUsers(response.data.users);
       console.log(response.data)
    });
  }, []);

  return (
    <div className={styles.container}>
      <h2> Users</h2>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>{value.phone}</td>
                <td>{value.email}</td>
                <td>{value.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
