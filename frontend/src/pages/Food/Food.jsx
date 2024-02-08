import React, { useEffect, useState } from "react";
import "./Food.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Food = () => {
  const [foods, setFoods] = useState([]);

  const navigate = useNavigate();

  const id = localStorage.getItem("token");

  useEffect(() => {
    axios.get("http://localhost:5000/admin/getallproducts").then(({ data }) => {
      setFoods(data.product);
    });
  }, []);

  const handleOrder = (pid) => {
    if (!id) {
      alert("Login Please");
      return;
    }
    axios.post(`http://localhost:5000/user/order/${id}/${pid}`).then((data) => {
      console.log(data);
    });
  };

  return (
    <div className="foodcontainer">
      <div className="foodcontaierwraper">
        {foods?.map((value, index) => (
          <div key={index} className="foodcardcontainer">
            <img
              style={{ width: "150px", backgroundPosition: "cover" }}
              src={`http://localhost:5000/uploads/${value._id}.jpg`}
              alt={value._id}
            />
            <p className="foodtitle">{value.name}</p>
            <p>price: {value.price} Rs</p>
            <p>{value.description}</p>
            <button onClick={() => handleOrder(value._id)}>Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
