import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminFood = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/admin/getallproducts").then((data) => {
      console.log(data.data.product);
      setProduct(data.data.product);
    });
  }, []);

  return (
    <>
      <div className="adminusercontainer">
        <h2>User Information Table</h2>

        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {product.map((value, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <a  href={`http://localhost:5000/uploads/${value._id}.jpg`}>
                    <img
                      style={{ width: "100px" }}
                      src={`http://localhost:5000/uploads/${value._id}.jpg`}
                      alt={value._id}
                    />
                  </a>
                </td>
                <td>{value.name}</td>
                <td>{value.price}</td>
                <td>{value.description}</td>
                <td>{value.category}</td>
                <td></td>
                <td>
                  <Link
                    to={`/admin/editfood/${value._id}`}
                    style={{ color: "Green" }}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminFood;
