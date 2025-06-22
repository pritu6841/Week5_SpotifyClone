import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { mockGenres } from "../data/mockData";
import "../App.css";
import { getUserPlaylists, getLikedSongs } from "../data/likeAndPlaylistUtils";

const Sidebar = () => {
  const [open, setOpen] = useState(window.innerWidth > 600);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const location = useLocation();
  const userPlaylists = getUserPlaylists();
  const likedSongs = getLikedSongs();
  const recentGenres = mockGenres.slice(0, 5);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 600;
      setIsMobile(mobile);
      setOpen(!mobile); // open sidebar by default on desktop, closed on mobile
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Mobile Hamburger */}
      {isMobile && (
        <button
          className="mobile-hamburger"
          aria-label="Toggle sidebar"
          onClick={() => setOpen((o) => !o)}
        >
          <i className={`fas fa-${open ? "times" : "bars"}`}></i>
        </button>
      )}
      {/* Sidebar Overlay for mobile */}
      {isMobile && open && (
        <div
          className="sidebar-overlay"
          onClick={() => setOpen(false)}
          aria-label="Close sidebar overlay"
        ></div>
      )}
      {/* Sidebar */}
      <aside
        className={`sidebar ${open ? "sidebar-open" : "sidebar-closed"}`}
        aria-label="Sidebar navigation"
      >
        {/* Logo/Brand */}
        <div className="sidebar-brand">
          <h2 className="brand-title">Music Player</h2>
        </div>

        {/* Navigation */}
        <div className="sidebar-section">
          <h3 className="sidebar-title">Navigation</h3>
          <nav className="sidebar-nav">
            <Link
              to="/"
              className={`nav-item ${location.pathname === "/" ? "nav-item-active" : ""}`}
            >
              <i className="fas fa-home"></i>
              <span>Home</span>
            </Link>
            <Link
              to="/search"
              className={`nav-item ${location.pathname === "/search" ? "nav-item-active" : ""}`}
            >
              <i className="fas fa-search"></i>
              <span>Search</span>
            </Link>
            <Link
              to="/library"
              className={`nav-item ${location.pathname.startsWith("/library") ? "nav-item-active" : ""}`}
            >
              <i className="fas fa-music"></i>
              <span>Your Library</span>
            </Link>
            <Link
              to="/liked-songs"
              className={`nav-item ${location.pathname === "/liked-songs" ? "nav-item-active" : ""}`}
            >
              <i className="fas fa-heart"></i>
              <span>Liked Songs</span>
              {likedSongs.length > 0 && (
                <span className="liked-count">({likedSongs.length})</span>
              )}
            </Link>
          </nav>
        </div>

        {/* Genres */}
        <div className="sidebar-section">
          <h3 className="sidebar-title">Genres</h3>
          <div className="sidebar-genres">
            {recentGenres.map((genre) => (
              <Link
                key={genre.id}
                to={`/genre/${genre.id}`}
                className="genre-item"
              >
                <div
                  className="genre-icon"
                  style={{ backgroundColor: genre.color }}
                >
                  <i className={`fas ${genre.icon}`}></i>
                </div>
                <span className="genre-name">{genre.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* User Playlists */}
        {userPlaylists.length > 0 && (
          <div className="sidebar-section">
            <h3 className="sidebar-title">Your Playlists</h3>
            <div className="sidebar-playlists">
              {userPlaylists.slice(0, 5).map((playlist) => (
                <Link
                  key={playlist.id}
                  to={`/playlist/${playlist.id}`}
                  className="playlist-item"
                >
                  <div className="playlist-cover">
                    <img
                      src="/default-cover.png"
                      alt={playlist.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/default-cover.png";
                      }}
                    />
                  </div>
                  <div className="playlist-info">
                    <div className="playlist-name">{playlist.name}</div>
                    <div className="playlist-songs">{playlist.songs.length} songs</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
