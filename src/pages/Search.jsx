import React, { useState, useEffect } from "react";
import { usePlayer } from "../context/PlayerContext";
import { searchSongs } from "../data/mockData";
import "../App.css";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { playSong } = usePlayer();

  useEffect(() => {
    if (searchQuery.trim()) {
      setIsLoading(true);
      // Use hardcoded search function
      const results = searchSongs(searchQuery);
      setSearchResults(results);
      setIsLoading(false);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSongClick = (song) => {
    playSong(song);
  };

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="search-page">
      <div className="search-header">
        <h1>Search</h1>
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search for songs, artists, or albums..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <i className="fas fa-search search-icon"></i>
        </div>
      </div>

      <div className="search-content">
        {isLoading ? (
          <div className="loading">Searching...</div>
        ) : searchQuery.trim() ? (
          <div className="search-results">
            <h2>Search Results for "{searchQuery}"</h2>
            {searchResults.length > 0 ? (
              <div className="songs-grid">
                {searchResults.map((song) => (
                  <div
                    key={song.id}
                    className="song-card"
                    onClick={() => handleSongClick(song)}
                  >
                    <div className="song-cover">
                      <img src={song.coverUrl} alt={song.title} />
                      <div className="play-overlay">
                        <i className="fas fa-play"></i>
                      </div>
                    </div>
                    <div className="song-info">
                      <h3>{song.title}</h3>
                      <p>{song.artist}</p>
                      <span className="duration">
                        {formatDuration(song.duration)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <p>No songs found for "{searchQuery}"</p>
                <p>Try searching for something else</p>
              </div>
            )}
          </div>
        ) : (
          <div className="search-suggestions">
            <h2>Popular Searches</h2>
            <div className="suggestions-grid">
              <div className="suggestion-card">
                <h3>Pop Hits</h3>
                <p>Latest pop music</p>
              </div>
              <div className="suggestion-card">
                <h3>Rock Classics</h3>
                <p>Timeless rock songs</p>
              </div>
              <div className="suggestion-card">
                <h3>Hip Hop</h3>
                <p>Best hip hop tracks</p>
              </div>
              <div className="suggestion-card">
                <h3>Electronic</h3>
                <p>Electronic music</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
