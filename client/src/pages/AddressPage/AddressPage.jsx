import React, { useState } from "react";
import styles from "./AddressPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const AddressPage = () => {
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const { pid, qty } = useParams();
  const id = localStorage.getItem("token");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`http://localhost:5000/api/user/order/${pid}/${id}`, {
        address,
        landmark,
        phone,
        qty,
      })
      .then((data) => {
        setLoading(false);
        console.log(data);
        alert(data.data.message);
        navigate("/");
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formcontainer}>
        <h1>Contact Info</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="address"
            value={address}
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            name="landmark"
            value={landmark}
            placeholder="Land mark"
            onChange={(e) => setLandmark(e.target.value)}
          />
          <input
            type="number"
            name="phone"
            value={phone}
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            className="btn"
            type="submit"
            value={loading ? "Order..." : "Order Now"}
            disabled={loading}
          />
        </form>
      </div>
    </div>
  );
};

export default AddressPage;
