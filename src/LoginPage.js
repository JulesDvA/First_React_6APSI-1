import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "Julia" && password === "Abasolo") {
      navigate("/landing");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="login-avatar">
          <span role="img" aria-label="cat">🐱</span>
        </div>
        <h2>Login Page</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">Login</button>
        <div className="login-footer">
          <a href="#">Forgot password?</a>
          <span>|</span>
          <a href="#">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
