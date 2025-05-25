import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import WhatIsDoping from "./components/WhatIsDoping";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import SideEffects from "./components/SideEffects";
export default function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async ({ firstname, lastname, email, password }) => {
  try {
    await axios.post("http://localhost:3000/signup", {
      firstname,
      lastname,
      email,
      password,
    });
    alert("Signup successful! Please log in.");
    navigate("/login"); // ✅ Go to login
  } catch (err) {
    console.error(err);
    alert("Signup failed. Email might already be in use.");
  }
};

 const handleLogin = async ({ email, password }) => {
  try {
    const res = await axios.post("http://localhost:3000/signin", {
      email,
      password,
    });

    if (res.data.token) {
      setUser({ email }); // Save email in state
      navigate("/profile");
    }
  } catch (err) {
    console.error(err);
    alert("Login failed. Invalid email or password.");
  }
};

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
<Route path="/what-is-doping" element={<WhatIsDoping />} />      
       
       <Route path="/side-effects" element={<SideEffects />} /> <Route
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              <Profile user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <Login onLogin={handleLogin} onSignup={handleSignup} />
          }
        />
        <Route
          path="*"
          element={<h2 style={{ textAlign: "center" }}>404 – Page not found</h2>}
        />
      </Routes>
      
    </>
  );
}
