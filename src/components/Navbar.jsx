import React from "react";
import { useAuth } from "../context/AuthContext";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar">
      <h2>Spotify 2.0</h2>

      {user ? (
        <div className="user-info">
          <div className="user-avatar">
            {user.username?.charAt(0).toUpperCase() || "U"}
          </div>
          <span className="username">{user.username}</span>
          <button onClick={handleLogout} className="logout-btn" title="Logout">
            <FaSignOutAlt />
          </button>
        </div>
      ) : (
        <div className="auth-buttons">
          <Link to="/login" className="auth-link">
            Login
          </Link>
          <Link to="/signup" className="auth-link signup">
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
