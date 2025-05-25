import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>PureAthlete</h3>
            <p>
              Leading digital anti-doping education with innovation and integrity.
            </p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/quiz">Quizzes</Link>
            <Link to="/what-is-doping">What is Doping</Link>
            <Link to="/side-effects">Side Effects & Cases</Link>
          </div>
          <div>
            <h3>Contact</h3>
            <p>Email: info@pureathlete.com</p>
            <p>Phone: +91 8950160725</p>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "2rem", opacity: 0.6 }}>
          © 2025 PureAthlete | All rights reserved.
        </div>
      </div>
    </footer>
  );
}
