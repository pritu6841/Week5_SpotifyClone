import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserPlaylists, createPlaylist, saveUserPlaylists } from "../data/likeAndPlaylistUtils";
import { mockSongs } from "../data/mockData";
import "../App.css";

const getFirstSongCover = (playlist) => {
  if (playlist.songs && playlist.songs.length > 0) {
    const firstSong = mockSongs.find(song => song.id === playlist.songs[0]);
    return firstSong ? firstSong.coverUrl : "/default-cover.png";
  }
  return "/default-cover.png";
};

const Library = () => {
  const [playlists, setPlaylists] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  const [selectedSongs, setSelectedSongs] = useState([]);

  useEffect(() => {
    setPlaylists(getUserPlaylists());
  }, []);

  const handleCreatePlaylist = () => {
    if (!playlistName.trim() || selectedSongs.length === 0) return;
    const newPlaylist = {
      id: Date.now(),
      name: playlistName.trim(),
      songs: selectedSongs,
    };
    const updated = [...getUserPlaylists(), newPlaylist];
    saveUserPlaylists(updated);
    setPlaylists(updated);
    setShowModal(false);
    setPlaylistName("");
    setSelectedSongs([]);
  };

  const handleSongToggle = (songId) => {
    setSelectedSongs((prev) =>
      prev.includes(songId)
        ? prev.filter((id) => id !== songId)
        : [...prev, songId]
    );
  };

  return (
    <div className="library-page">
      <h1>Your Library</h1>
      <button className="modal-option-btn" style={{marginBottom: '1em'}} onClick={() => setShowModal(true)}>
        + Create Playlist
      </button>
      {playlists.length === 0 ? (
        <div style={{ color: '#888', fontSize: '18px', marginTop: '2em' }}>No playlists yet. Create one from any song!</div>
      ) : (
        <div className="playlists-grid">
          {playlists.map((playlist) => (
            <Link
              key={playlist.id}
              to={`/playlist/${playlist.id}`}
              className="playlist-card"
            >
              <div className="playlist-cover">
                <img
                  src={getFirstSongCover(playlist)}
                  alt={playlist.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/default-cover.png";
                  }}
                />
              </div>
              <div className="playlist-info">
                <h3>{playlist.name}</h3>
                <span className="song-count">{playlist.songs.length} songs</span>
              </div>
            </Link>
          ))}
        </div>
      )}
      {showModal && (
        <div className="playlist-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="playlist-modal" onClick={e => e.stopPropagation()}>
            <h3>Create Playlist</h3>
            <input
              type="text"
              placeholder="Playlist name"
              value={playlistName}
              onChange={e => setPlaylistName(e.target.value)}
              style={{marginBottom: '1em', width: '100%'}}
            />
            <div style={{maxHeight: 200, overflowY: 'auto', marginBottom: '1em'}}>
              {mockSongs.map(song => (
                <div key={song.id} style={{display: 'flex', alignItems: 'center', marginBottom: 4}}>
                  <input
                    type="checkbox"
                    checked={selectedSongs.includes(song.id)}
                    onChange={() => handleSongToggle(song.id)}
                    id={`song-${song.id}`}
                  />
                  <label htmlFor={`song-${song.id}`} style={{marginLeft: 8}}>
                    {song.title} - {song.artist}
                  </label>
                </div>
              ))}
            </div>
            <button className="modal-option-btn" onClick={handleCreatePlaylist} disabled={!playlistName.trim() || selectedSongs.length === 0}>
              Create
            </button>
            <button className="back-btn" onClick={() => setShowModal(false)} style={{marginTop: 8}}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Library; 