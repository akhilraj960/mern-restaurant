import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./AddFood.module.css";
import { useNavigate } from "react-router-dom";
const AddFood = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    qty: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

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

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "image" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:5000/api/admin/newproduct", formData, {
        headers: { "content-type": "multipart/form-data" },
      })
      .then((response) => {
        setLoading(false);
        alert(response.data.message);
        navigate("/admin/food");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>Add New Food</h2>
        <div className={styles.inputcontainer}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputcontainer}>
          <label htmlFor="category">Select Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            {categories.map((value, index) => (
              <option key={index} value={value.name}>
                {value.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.inputcontainer}>
          <label htmlFor="price">Price</label>
          <input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>{" "}
        <div className={styles.inputcontainer}>
          <label htmlFor="quantity">Quantitiy</label>
          <input
            type="number"
            name="qty"
            value={formData.qty}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputcontainer}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>
        <div className={styles.inputcontainer}>
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            required
          />
        </div>
        <input
          className="submit-button"
          type="submit"
          value={loading ? "Loading..." : "Submit"}
          disabled={loading}
        />
      </form>
    </div>
  );
};

export default AddFood;
