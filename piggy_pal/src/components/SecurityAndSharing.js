import React from "react";
import "./SecurityAndSharing.css";

// PUBLIC_INTERFACE
/**
 * SecurityAndSharing - Placeholder for PIN, locking jars, gifting & group saving.
 */
function SecurityAndSharing() {
  return (
    <div className="security-root">
      <h2 className="security-title">
        🔒 Security & Sharing
      </h2>
      <div className="security-options-list">
        <div className="security-option-card" data-style="pin">
          <span role="img" aria-label="PIN" className="option-emoji">🛡️</span>
          <b>Face ID / PIN</b>
          <span className="option-desc">Unlock with facial recognition or simple PIN.</span>
          <button className="option-btn" disabled>Manage (coming soon)</button>
        </div>
        <div className="security-option-card" data-style="lock">
          <span role="img" aria-label="Lock" className="option-emoji">🔐</span>
          <b>Lock a Jar</b>
          <span className="option-desc">Prevent changes to your savings jar.</span>
          <button className="option-btn" disabled>Lock Jar</button>
        </div>
        <div className="security-option-card" data-style="share">
          <span role="img" aria-label="Gift" className="option-emoji">🎁</span>
          <b>Gift Link / QR</b>
          <span className="option-desc">Get a link or QR to let others contribute!</span>
          <button className="option-btn" disabled>Copy/Gift</button>
        </div>
      </div>
    </div>
  );
}

export default SecurityAndSharing;
