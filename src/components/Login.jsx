import { useState } from "react";

export default function Login({ onLogin, onSignup }) {
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password || (isSignup && (!form.firstname || !form.lastname))) {
      alert("Please fill in all required fields.");
      return;
    }

    if (isSignup) {
      onSignup(form); // contains firstname, lastname, email, password
    } else {
      onLogin({ email: form.email, password: form.password });
    }
  };

  return (
<div className="login-page">
  <div className="login-container">
      <h1>{isSignup ? "Sign Up" : "Login"}</h1>
      <form onSubmit={handleSubmit} className="login-form">
        {isSignup && (
          <>
            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              placeholder="First name"
              value={form.firstname}
              onChange={handleChange}
              required
            />

            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              placeholder="Last name"
              value={form.lastname}
              onChange={handleChange}
              required
            />
          </>
        )}

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Your password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="button">
          {isSignup ? "Sign Up" : "Login"}
        </button>
      </form>

      <p className="toggle-text">
        {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
        <button
          type="button"
          className="toggle-button"
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup ? "Login" : "Sign Up"}
        </button>
      </p>
    </div>
    </div>
  );
}
