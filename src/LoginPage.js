import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f2f4f8",
    }}>
      <div style={{
        background: "#fff",
        padding: "30px 25px",
        borderRadius: "20px",
        boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
        width: "300px",
        textAlign: "center"
      }}>
        <div style={{
          background: "#a046f1",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 20px"
        }}>
          <span style={{ fontSize: "28px", color: "#fff" }}>👤</span>
        </div>
        <h2>Login Page</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <button onClick={handleLogin} style={buttonStyle}>Login</button>
        <div style={{ marginTop: "15px", fontSize: "12px" }}>
          <a href="#" style={{ color: "#777", textDecoration: "none", marginRight: "5px" }}>
            Forgot password?
          </a>
          <span style={{ color: "#aaa" }}>|</span>
          <a href="#" style={{ color: "#a046f1", marginLeft: "5px", textDecoration: "none" }}>
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "14px",
  outline: "none",
  boxSizing: "border-box"
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#a046f1",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "10px"
};

export default LoginPage;
