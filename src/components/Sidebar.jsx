import React from "react";
import { Link } from "react-router-dom";
import { mockPlaylists, mockGenres } from "../data/mockData";
import "../App.css";
import { getUserPlaylists } from "../data/likeAndPlaylistUtils";

const Sidebar = () => {
  // Get first 5 playlists and genres for sidebar
  const recentPlaylists = mockPlaylists.slice(0, 5);
  const recentGenres = mockGenres.slice(0, 5);

  // Get user playlists from localStorage
  const userPlaylists = getUserPlaylists();

  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <h3>Navigation</h3>
        <nav className="sidebar-nav">
          <Link to="/" className="nav-item">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </Link>
          <Link to="/search" className="nav-item">
            <i className="fas fa-search"></i>
            <span>Search</span>
          </Link>
          <Link to="/library" className="nav-item">
            <i className="fas fa-music"></i>
            <span>Your Library</span>
          </Link>
        </nav>
      </div>

      <div className="sidebar-section">
        <h3>Playlists</h3>
        <div className="sidebar-playlists">
        </div>
      </div>

      <div className="sidebar-section">
        <h3>Genres</h3>
        <div className="sidebar-genres">
          {recentGenres.map((genre) => (
            <Link
              key={genre.id}
              to={`/genre/${genre.id}`}
              className="genre-item"
            >
              <div
                className="genre-color"
                style={{ backgroundColor: genre.color }}
              >
                <i className={`fas ${genre.icon}`}></i>
              </div>
              <span className="genre-name">{genre.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
