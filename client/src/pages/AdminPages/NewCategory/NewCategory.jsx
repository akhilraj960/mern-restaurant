import React, { useState } from "react";
import styles from "./NewCategory.module.css";
import axios from "axios";

const NewCategory = () => {
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    axios
      .post("http://localhost:5000/api/admin/newcategory", { category })
      .then((response) => {
        setLoading(false);
        setCategory("");
        alert(response.data.message);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formcontainer}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="category"
          />
          <input
            className="submit-button"
            type="submit"
            value={loading ? "Loading..." : "Submit"}
            disabled={loading}
          />
        </form>
      </div>
    </div>
  );
};

export default NewCategory;
