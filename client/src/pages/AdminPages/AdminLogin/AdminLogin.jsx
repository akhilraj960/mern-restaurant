import React, { useEffect, useState } from "react";
import styles from "./AdminLogin.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token && role === "admin") {
      navigate("/admin");
    }
  }, [navigate,token,role]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    axios
      .post("http://localhost:5000/api/auth/adminlogin", {
        email,
        password,
      })
      .then((response) => {
        setLoading(false);
        console.log(response);
        if (response.data.success === true) {
          alert(response.data.message);
          setEmail("");
          setPassword("");
          localStorage.setItem("token", response.data.id);
          localStorage.setItem("role", response.data.role);
          navigate("/admin");
        } else {
          setLoading(false);
          alert(response.data.message);
        }
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formcontainer}>
        <h1>Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
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
      </div>
    </div>
  );
};

export default AdminLogin;
