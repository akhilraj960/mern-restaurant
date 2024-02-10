import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin");
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token && role === "admin") {
      setIsAdmin(true);
      navigate("/admin");
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await axios
      .post("http://localhost:5000/admin/login", {
        email,
        password,
      })
      .then((response) => {
        setLoading(false);
        if (response.data.success === true) {
          alert(response.data.message);
          setEmail("");
          setPassword("");
          localStorage.setItem("token", response.data.id);
          localStorage.setItem("role", response.data.role);
          navigate("/admin");
          window.location.reload();
        } else {
          alert(response.data.message);
        }
      });
  };
  return (
    <>
      <div className="container">
        <div className="form-container">
          <h1>Admin Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" password"
            />

            <input
              className="submit-button"
              type="submit"
              value={loading ? "Login..." : "Login"}
              disabled={loading}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
