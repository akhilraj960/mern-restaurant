import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./EditFood.module.css";

const EditFood = () => {
  const [formData, setFormData] = useState({
    _id:"",
    name: "",
    category: "",
    price: "",
    description: "",
    qty: "",
    image: null,
  });

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/admin/oneproduct/${id}`)
      .then((response) => {
        const { name, category, price, description, qty, _id } =
          response.data.product;

        setFormData((preData) => ({
          ...preData,
          _id,
          name,
          category,
          price,
          description,
          qty,
        }));
      })
      .catch((error) => {
        console.log("Error fetching product details:", error);
      });
  }, []);

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
          <img
            style={{ width: "50px" }}
            src={`http://localhost:5000/uploads/${formData._id}.jpg`}
            alt={formData._id}
          />
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

export default EditFood;
