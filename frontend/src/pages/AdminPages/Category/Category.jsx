import axios from "axios";
import React, { useEffect, useState } from "react";

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/admin/getcategory").then((data) => {
      console.log(data.data);
      setCategory(data.data);
    });
  }, []);

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
              <td>{value.status ? <p style={{color:"green"}}>Active</p> : <p style={{color:"red"}}>InActive</p>}</td>
              <td>
                {!value.status ? (
                  <button>Activate</button>
                ) : (
                  <button style={{backgroundColor:"red"}}>DeActivate</button>
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
