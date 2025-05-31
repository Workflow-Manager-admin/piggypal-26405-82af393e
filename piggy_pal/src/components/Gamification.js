import React from "react";
import "./Gamification.css";

// PUBLIC_INTERFACE
/**
 * Gamification - Placeholder for games, badges, evolution and challenges. Dark cartoon style with spark effects.
 */
function Gamification() {
  // Placeholder badges and game
  return (
    <div className="gamification-root">
      <h2 className="gamification-title">
        🎮 Gamification Center
      </h2>
      <div className="gamification-badges">
        <span className="badge" data-type="saver">🥇 Saver</span>
        <span className="badge" data-type="streak">🔥 7 Day Streak</span>
        <span className="badge" data-type="piggy">🐽 Piggy Evolution</span>
      </div>
      <div className="gamification-mini-game">
        <div className="game-spin-wheel">
          <span role="img" aria-label="Spin Wheel" style={{ fontSize: 50 }}>🎰</span>
        </div>
        <div className="game-challenge-info">
          <span>Try your luck! <em>Spin to win bonus coins!</em></span>
          <button className="game-action-btn" disabled>Spin (soon)</button>
        </div>
      </div>
      <div className="gamification-challenges">
        <span>Daily Savings Challenge: <b>Save $2 today!</b></span>
        <br />
        <span>Weekly Goal: <b>Save $10 this week!</b></span>
      </div>
    </div>
  );
}

export default Gamification;
