import React, { useEffect, useState } from "react";
import styles from "./CartPage.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CartPage = () => {
  const [items, setItems] = useState([]);
  const [qty, setQty] = useState();

  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      alert("Login please");
      return navigate("/login");
    }

    axios
      .get(`http://localhost:5000/api/user/cart/${token}`)
      .then((response) => {
        setItems(response.data.response);
        console.log(response.data.response[0]);
      });
  }, [token, navigate]);

  const handleOrder = (pid) => {
    if (!token) {
      alert("Login Please");
      return;
    }

    navigate(`/address/${pid}/${qty}`);
  };

  const handleRemove = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.cardcontainer}>
        {items.map((value, index) => {
          return (
            <div key={index} className={styles.card}>
              <div className={styles.imgcontainer}>
                <img
                  src={`http://localhost:5000/uploads/${value.product._id}.jpg`}
                  alt=""
                  width={"200px"}
                  height={"200px"}
                />
              </div>
              <div className={styles.contentcontainer}>
                <h3>{value.product.category}</h3>
                <h2>{value.product.name}</h2>
                <p>{value.product.description}</p>
              </div>
              <select onChange={(e) => setQty(e.target.value)}>
                <option value="quarter">Quarter</option>
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className={styles.btncontainer}>
                <button
                  onClick={() => {
                    handleOrder(value._id);
                  }}
                >
                  Order Now
                </button>
                <button onClick={() => handleRemove(value._id)}>Remove</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartPage;
