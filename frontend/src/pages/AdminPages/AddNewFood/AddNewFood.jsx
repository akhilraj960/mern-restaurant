import React, { useEffect, useState } from "react";
import axios from "axios";

const AddNewFood = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    cost: "",
    description: "",
    qty:"",
    image: null,
  });

  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/admin/getcategory"
        );
        setCategory(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "image" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/admin/addproduct",
        formData,
        { headers: { "content-type": "multipart/form-data" } }
      );
      console.log(response);
      if (response.data) {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
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
            <option value="">Select Category</option>
            {category.map((item, index) => (
              <option key={index} value={item.value}>
                {item.name}
              </option>
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
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="text"
            name="qty"
            value={formData.qty}
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
          <input type="file" name="image" onChange={handleChange} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddNewFood;
