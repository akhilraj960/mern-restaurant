import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/admin/getcategory").then((data) => {
      console.log(data.data);
      setCategory(data.data);
    });
  }, []);

  const navigate = useNavigate();

  const Activate = (id) => {
    axios
      .put("http://localhost:5000/admin/activatecategory", { id })
      .then((data) => {
        alert(data.data.message);
        window.location.reload(false);
      });
  };

  const DeActivate = (id) => {
    axios
      .put("http://localhost:5000/admin/deactiavtecategory", { id })
      .then((data) => {
        console.log(data);
        alert(data.data.message);
        window.location.reload(false);
      });
  };

  return (
    <div className="adminusercontainer">
      <h2>Category Table</h2>

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
          {category.map((value, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{value.name}</td>
              <td>
                {value.status ? (
                  <p style={{ color: "green" }}>Active</p>
                ) : (
                  <p style={{ color: "red" }}>InActive</p>
                )}
              </td>
              <td>
                {!value.status ? (
                  <button onClick={() => Activate(value._id)}>Activate</button>
                ) : (
                  <button
                    onClick={() => DeActivate(value._id)}
                    style={{ backgroundColor: "red" }}
                  >
                    DeActivate
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Category;
