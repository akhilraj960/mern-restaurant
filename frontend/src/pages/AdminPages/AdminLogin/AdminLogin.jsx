import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

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
          console.log(response.data.success);
          setEmail("");
          setPassword("");
          navigate("/");
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
