import React from "react";
import './App.css';

const LandingPage = () => {
  return (
    <div className="landing-wrapper">
      <div className="landing-box">
        <img
          src="https://images.ctfassets.net/ub3bwfd53mwy/5WFv6lEUb1e6kWeP06CLXr/acd328417f24786af98b1750d90813de/4_Image.jpg?w=750"
          alt="Welcome Illustration"
          className="landing-image"
        />
        <h1 className="landing-title">Welcome, Julia!</h1>
        <p className="landing-text">
          You’ve successfully logged in. We’re excited to have you here!
        </p>
        <button className="landing-button">View Dashboard</button>
        <p className="landing-quote">
          “When I wrote this code, only God and I understood what I did.”
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
