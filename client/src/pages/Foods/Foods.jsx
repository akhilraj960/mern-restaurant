import axios from "axios";
import styles from "./Foods.module.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Foods = () => {
  const [foods, setFoods] = useState([]);

  const navigate = useNavigate();

  const id = localStorage.getItem("token");

  console.log(id);

  useEffect(() => {
    axios.get("http://localhost:5000/api/user/foods").then((response) => {
      console.log(response.data);
      setFoods(response.data);
    });
  }, []);

  const handleOrder = (pid) => {
    if (!id) {
      alert("Login Please");
      return;
    }
    axios
      .post(`http://localhost:5000/api/user/order/${pid}/${id}`)
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardwrapper}>
        {foods.map((value, index) => {
          return (
            <div className={styles.card}>
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
              </div>
              <button
                onClick={() => handleOrder(value._id)}
                className={styles.btn}
              >
                Order Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Foods;
