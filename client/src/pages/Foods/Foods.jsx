import axios from "axios";
import styles from "./Foods.module.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Foods = () => {
  const [foods, setFoods] = useState([]);

  const navigate = useNavigate();

  const id = localStorage.getItem("token");

  useEffect(() => {
    axios.get("http://localhost:5000/api/user/foods").then((response) => {
      console.log(response.data);
      setFoods(response.data);
    });
  }, []);

  // const handleOrder = (pid) => {
  //   if (!id) {
  //     alert("Login Please");
  //     return;
  //   }

  //   navigate(`/address/${pid}`);

  // };

  const handleCart = (pid) => {
    if (!id) {
      alert("Login Please");
      return;
    }
    axios
      .post(`http://localhost:5000/api/user/addcart/${pid}/${id}`)
      .then((response) => {
        alert("added to cart");
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardwrapper}>
        {foods.map((value, index) => {
          return (
            <div key={index} className={styles.card}>
              <div className={styles.imgcontainer}>
                <img
                  src={`http://localhost:5000/uploads/${value._id}.jpg`}
                  alt=""
                />
              </div>

              <div className={styles.content}>
                <p>{value.name}</p>
                <p>{value.category}</p>
                <p>{value.description}</p>
                <p>Rs {value.price}/-</p>
              </div>
              <button
                onClick={() => handleCart(value._id)}
                className={styles.btn}
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Foods;
