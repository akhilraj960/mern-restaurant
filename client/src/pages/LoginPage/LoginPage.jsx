import React, { useEffect, useState } from "react";
import styles from "./LoginPage.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [navigate, token]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    axios
      .post("http://localhost:5000/api/auth/login", { email, password })
      .then((response) => {
        setLoading(false);

        console.log(response.data)

        if (response.data.success === true) {
          alert(response.data.message);
          setEmail("");
          setPassword("");
          localStorage.setItem("token", response.data.id);
          window.location.reload();
          navigate("/");
        } else {
          setLoading(false);
          alert(response.data.message);
        }
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formcontainer}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email address"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" password"
          />

          <input
            className="btn"
            type="submit"
            value={loading ? "Login..." : "Login"}
            disabled={loading}
          />
        </form>
        <p className={styles.loginlink}>
          Don't have an Account?
          <a href="/register"> Register Now</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
