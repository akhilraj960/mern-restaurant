import React, { useState } from "react";
import styles from "./RegisterPage.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    axios
      .post("http://localhost:5000/api/auth/register", {
        email,
        name,
        phone,
        address,
        password,
      })
      .then((response) => {
        console.log(response.data);
        setLoading(false);
        alert("User Registered");

        navigate("/login");
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formcontainer}>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <input
            type="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="phone"
          />
          <input
            type="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="address"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />

          <input
            className="btn"
            type="submit"
            value={loading ? "Registering..." : "Register"}
            disabled={loading}
          />
        </form>
        <p className={styles.loginlink}>
          Already have an Account?
          <a href="/login"> Login Now</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
