import React, { useEffect, useState } from "react";
import { usePlayer } from "../context/PlayerContext";
import { getLikedSongs } from "../data/likeAndPlaylistUtils";
import { mockSongs } from "../data/mockData";
import "../App.css";

const LikedSongs = () => {
  const [likedSongIds, setLikedSongIds] = useState([]);
  const [likedSongs, setLikedSongs] = useState([]);
  const { playSong, currentSong, isPlaying } = usePlayer();

  useEffect(() => {
    const fetchLikedSongs = () => {
      const likedIds = getLikedSongs();
      setLikedSongIds(likedIds);
      
      // Get the actual song objects from mock data
      const songs = mockSongs.filter(song => likedIds.includes(song.id));
      setLikedSongs(songs);
    };

    fetchLikedSongs();
  }, []);

  const handleSongClick = (song) => {
    playSong(song, likedSongs, likedSongs.findIndex(s => s.id === song.id));
  };

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  if (likedSongs.length === 0) {
    return (
      <div className="liked-songs-page">
        <div className="liked-songs-header">
          <div className="liked-songs-cover">
            <div className="liked-songs-icon">
              <i className="fas fa-heart"></i>
            </div>
          </div>
          <div className="liked-songs-info">
            <h1>Liked Songs</h1>
            <p className="description">Your favorite tracks</p>
            <p className="song-count">0 songs</p>
          </div>
        </div>
        <div className="liked-songs-content">
          <div className="empty-state">
            <i className="fas fa-heart-broken"></i>
            <h3>No liked songs yet</h3>
            <p>Start liking songs to see them here</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="liked-songs-page">
      <div className="liked-songs-header">
        <div className="liked-songs-cover">
          <div className="liked-songs-icon">
            <i className="fas fa-heart"></i>
          </div>
        </div>
        <div className="liked-songs-info">
          <h1>Liked Songs</h1>
          <p className="description">Your favorite tracks</p>
          <p className="song-count">{likedSongs.length} songs</p>
        </div>
      </div>

      <div className="liked-songs-content">
        <div className="songs-grid">
          {likedSongs.map((song) => (
            <div
              key={song.id}
              className={`song-card ${
                currentSong?.id === song.id ? "playing" : ""
              }`}
              onClick={() => handleSongClick(song)}
            >
              <div className="song-cover">
                <img
                  src={song.coverUrl}
                  alt={song.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/default-cover.png";
                  }}
                />
                <div className="play-overlay">
                  {currentSong?.id === song.id && isPlaying ? (
                    <i className="fas fa-pause"></i>
                  ) : (
                    <i className="fas fa-play"></i>
                  )}
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
      </div>
    </div>
  );
};

export default LikedSongs; 