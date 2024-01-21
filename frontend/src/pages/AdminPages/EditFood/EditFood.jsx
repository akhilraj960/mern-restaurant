import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditFood = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    cost: "",
    description: "",
    image: "",
  });

  const [category, setCategory] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/getoneproduct/${id}`)
      .then((response) => {
        const { name, category, price, description } = response.data;
        setFormData((prevData) => ({
          ...prevData,
          name,
          category,
          cost: price,
          description,
        }));
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/getcategory")
      .then((response) => {
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

    axios
      .put(`http://localhost:5000/admin/updateproduct/${id}`, formData)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  return (
    <div className="addfoodcontainer">
      <form onSubmit={handleSubmit}>
        <h2>Edit Form</h2>

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
            {category.map((item) => (
              <option key={item._id} value={item.name}>
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
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>

        {/* Display current image if available */}
        {formData.image && (
          <div className="inputcontainer">
            <label>Current Image:</label>
            <img src={formData.image} alt="Current" />
          </div>
        )}

        <div className="inputcontainer">
          <label htmlFor="image">Image</label>
          <input type="file" name="image" onInput={handleChange} />
        </div>

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditFood;
