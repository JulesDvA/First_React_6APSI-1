import React from "react";

const LandingPage = () => {
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      background: "linear-gradient(to right, #e0c3fc, #8ec5fc)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}>
      <div style={{
        backgroundColor: "#fff",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
        maxWidth: "500px",
        width: "90%",
        textAlign: "center"
      }}>
        <img
            src="https://images.ctfassets.net/ub3bwfd53mwy/5WFv6lEUb1e6kWeP06CLXr/acd328417f24786af98b1750d90813de/4_Image.jpg?w=750"
            alt="Welcome Illustration"
            style={{
                width: "150px",
                height: "150px", 
                marginBottom: "",
                borderRadius: "50%", 
                objectFit: "cover", 
                border: "4px solid #a046f1", 
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)" 
            }}
        />
        <h1 style={{ color: "#a046f1" }}>Welcome, Julia!</h1>
        <p style={{ color: "#555", marginBottom: "20px" }}>
          You’ve successfully logged in. We’re excited to have you here!
        </p>
        <button style={{
          backgroundColor: "#a046f1",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          padding: "10px 20px",
          cursor: "pointer",
          fontWeight: "bold"
        }}>
          View Dashboard
        </button>
        <p style={{ fontStyle: "italic", color: "#999", marginTop: "20px" }}>
          “When I wrote this code, only God and I understood what I did.”
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
