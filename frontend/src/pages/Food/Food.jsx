import React, { useEffect, useState } from "react";
import "./Food.css";
import axios from "axios";
const Food = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/admin/getallproducts").then(({ data }) => {
      console.log(data.product);
      setFoods(data.product);
      console.log(foods);
    });
  }, []);

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
            <button>Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
