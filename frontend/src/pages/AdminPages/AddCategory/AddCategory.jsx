import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:5000/admin/addcategory", { category })
      .then((data) => {
        setLoading(false);
        alert(data.data.message);
      });
  };

  return (
    <>
      <div className="container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="New Category"
            />
            <input
              className="submit-button"
              type="submit"
              value={loading ? "Loading..." : "Add"}
              disabled={loading}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
