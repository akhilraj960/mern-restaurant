import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
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
      .post("http://localhost:5000/register", {
        name,
        email,
        password,
        cPassword,
      })
      .then((data) => {
        setLoading(false);
        setName("");
        setEmail("");
        setPassword("");
        setCPassword("");
        navigate("/login");
      });
  };

  return (
    <>
      <div className="container">
        <div className="form-container">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
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
              placeholder="New password"
            />
            <input
              type="password"
              name="cPassword"
              value={cPassword}
              onChange={(e) => setCPassword(e.target.value)}
              placeholder="Confirm password"
            />
            <input
              className="submit-button"
              type="submit"
              value={loading ? "Registering..." : "Register"}
              disabled={loading}
            />
          </form>
          <p className="login-link">
            Already have an account?
            <a href="/login">Login Now</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
