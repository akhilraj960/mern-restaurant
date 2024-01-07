import React, { useState } from "react";
import "./AddNewFood.css";

const AddNewFood = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    cost: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add further processing or send the data to a server here
    console.log("Form submitted:", formData);
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
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />{" "}
        </div>
        <div className="inputcontainer">
          <label htmlFor="category">Cost:</label>
          <input
            type="number"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
            required
          />
        </div>
        <div className="inputcontainer">
          <label htmlFor="cost">Description:</label>
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
