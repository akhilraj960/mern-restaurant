import React, { useEffect, useState } from "react";
import axios from "axios";

const AddNewFood = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    cost: "",
    description: "",
    image: "",
  });

  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/getcategory")
      .then((response) => {
        console.log(response.data);
        setCategory(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the entire formData object
    console.log("Form submitted:", formData);
    // You can add further processing or send the data to a server here
  };

  return (
    <div className="addfoodcontainer">
      <form onSubmit={handleSubmit}>
        <h2>Add Form</h2>

        <div className="inputcontainer">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="inputcontainer">
          <label htmlFor="category">Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            {category.map((value, index) => (
              <>
                {value.status && (
                  <option key={index} value={value.name}>
                    {value.name}
                  </option>
                )}
              </>
            ))}
          </select>
        </div>

        <div className="inputcontainer">
          <label htmlFor="cost">Price:</label>
          <input
            type="number"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
            required
          />
        </div>

        <div className="inputcontainer">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>

        <div className="inputcontainer">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            value={formData.image}
            name="image"
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddNewFood;
