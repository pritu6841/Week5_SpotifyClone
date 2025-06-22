import React, { useState } from "react";
import { usePlayer } from "../context/PlayerContext";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaRandom,
  FaRedo,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";

const EnhancedPlayerControls = () => {
  const {
    currentSong,
    isPlaying,
    isShuffled,
    repeatMode,
    volume,
    progress,
    duration,
    togglePlay,
    playNext,
    playPrevious,
    toggleShuffle,
    toggleRepeat,
    seekTo,
    setVolumeLevel,
    pause,
  } = usePlayer();

  const [showVolume, setShowVolume] = useState(false);

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * duration;
    seekTo(newTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolumeLevel(newVolume);
  };

  const getRepeatIcon = () => {
    switch (repeatMode) {
      case "one":
        return <FaRedo style={{ color: "var(--spotify-green)" }} />;
      case "all":
        return <FaRedo />;
      default:
        return <FaRedo style={{ opacity: 0.5 }} />;
    }
  };

  if (!currentSong) {
    return (
      <div className="player-controls">
        <div className="player-info">
          <p>No song playing</p>
        </div>
      </div>
    );
  }

  return (
    <div className="enhanced-player-controls">
      {/* Progress Bar */}
      <div className="progress-container">
        <span className="time-display">{formatTime(progress)}</span>
        <input
          type="range"
          min="0"
          max="100"
          value={duration ? (progress / duration) * 100 : 0}
          onChange={handleProgressChange}
          className="progress-bar"
        />
        <span className="time-display">{formatTime(duration)}</span>
      </div>

      {/* Main Controls and Stop Button */}
      <div className="main-controls-with-stop" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <div className="main-controls" style={{ flex: 1 }}>
          <div className="control-buttons">
            <button
              onClick={toggleShuffle}
              className={`control-button ${isShuffled ? "active" : ""}`}
              title="Shuffle"
            >
              <FaRandom />
            </button>

            <button
              onClick={playPrevious}
              className="control-button"
              title="Previous"
            >
              <FaStepBackward />
            </button>

            <button
              onClick={togglePlay}
              className="play-button"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>

            <button onClick={playNext} className="control-button" title="Next">
              <FaStepForward />
            </button>

            <button
              onClick={toggleRepeat}
              className="control-button"
              title="Repeat"
            >
              {getRepeatIcon()}
            </button>
          </div>
        </div>
        {/* Cross icon to stop playback at the far right */}
        <button
          onClick={pause}
          className="control-button stop-button"
          title="Stop"
          style={{ marginLeft: 'auto', fontSize: '1.5em', color: '#e0245e', background: 'none', border: 'none' }}
        >
          &times;
        </button>
      </div>

      {/* Song Info */}
      <div className="song-info">
        <div className="song-details">
          <h4>{currentSong.title}</h4>
          <p>{currentSong.artist}</p>
        </div>
      </div>

      {/* Volume Control */}
      <div className="volume-control">
        <button
          onClick={() => setShowVolume(!showVolume)}
          className="volume-button"
          title="Volume"
        >
          {volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>

        {showVolume && (
          <div className="volume-slider-container">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedPlayerControls;
