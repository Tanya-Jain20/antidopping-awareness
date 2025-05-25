import { Link } from "react-router-dom";

export default function Navbar({ user, onLogout }) {
  return (
    <nav className="navbar">
     <div className="navbar-left">
  <Link to="/" className="nav-logo">
    <span className="logo-white">Pure</span><span className="logo-green">Athlete</span>
  </Link>
        
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/quiz" className="nav-link">Quiz</Link>
     <Link to="/what-is-doping" className="nav-link">
  What is Doping
</Link>
        <Link to="/side-effects" className="nav-link">
  Side Effects & Cases
</Link>

      </div>

      <div className="navbar-right">
        {user ? (
          <>
            <span className="nav-username">Hello, {user.name || user.username}</span>
            <Link to="/profile" className="nav-link">Profile</Link>
            <button className="nav-button" onClick={onLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login" className="nav-link">Login</Link>
        )}
      </div>
    </nav>
  );
}
