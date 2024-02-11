import React, { useEffect, useState } from "react";
import styles from "./Category.module.css";
import axios from "axios";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/admin/categories")
      .then((response) => {
        setCategories(response.data.categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const activate = (id) => {
    axios
      .put("http://localhost:5000/api/admin/status/activate", { id })
      .then((data) => {
        alert(data.data.message);
        window.location.reload(false);
      });
  };

  const deactivate = (id) => {
    axios
      .put("http://localhost:5000/api/admin/status/inactivate", { id }) // Corrected endpoint
      .then((data) => {
        console.log(data);
        alert(data.data.message);
        window.location.reload(false);
      });
  };

  return (
    <div className={styles.container}>
      <h2>Categories</h2>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Category</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((value, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{value.name}</td>
              {/* You can add status and action columns here */}
              <td>
                {value.status ? (
                  <p style={{ color: "green" }}>Active</p>
                ) : (
                  <p style={{ color: "red" }}>InActive</p>
                )}
              </td>
              <td>
                {!value.status ? (
                  <button onClick={() => activate(value._id)}>Activate</button>
                ) : (
                  <button
                    onClick={() => deactivate(value._id)}
                    style={{ backgroundColor: "red" }}
                  >
                    DeActivate
                  </button>
                )}{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Category;
