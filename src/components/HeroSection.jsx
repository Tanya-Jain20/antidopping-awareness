import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="floating-icons">
        <span className="float-icon" style={{ top: "20%", left: "10%" }}>🏅</span>
        <span className="float-icon" style={{ top: "70%", left: "80%" }}>⚽</span>
        <span className="float-icon" style={{ top: "40%", left: "85%" }}>🏊</span>
        <span className="float-icon" style={{ top: "80%", left: "15%" }}>🏃</span>
      </div>
      <h1>Championing Clean Sport Through Innovation</h1>
      <p>
        Harnessing cutting-edge technology to educate and empower athletes,
        coaches, and officials in the global fight against doping in sports.
      </p>
      <Link to="/quiz" className="button">Test Your Knowledge</Link>
    </section>
  );
}
