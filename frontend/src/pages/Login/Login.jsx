import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await axios
      .post("http://localhost:5000/login", {
        name,
        email,
        password,
        cPassword,
      })
      .then((response) => {
        setLoading(false);
        if (response.data.success === true) {
          console.log(response.data.success);
          setName("");
          setEmail("");
          setPassword("");
          setCPassword("");
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
              className="submit-button"
              type="submit"
              value={loading ? "Login..." : "Login"}
              disabled={loading}
            />
          </form>
          <p className="login-link">
            Don't have an Account?
            <a href="/register">Register Now</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
