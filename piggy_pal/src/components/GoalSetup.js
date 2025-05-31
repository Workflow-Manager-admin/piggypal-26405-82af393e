import React from "react";
import "./GoalSetup.css";

// PUBLIC_INTERFACE
/**
 * GoalSetup - Animated goal setup wizard for setting new savings jars with cartoon piggy style chooser.
 */
function GoalSetup() {
  // Placeholder: show all main fields as static previews
  return (
    <div className="goal-setup-root">
      <h2 className="goal-setup-title">
        🎯 Setup New Goal
      </h2>
      <div className="goal-setup-form">
        <div className="goal-setup-row">
          <label>Goal Name</label>
          <input type="text" disabled placeholder="Enter goal name..." value="e.g. Summer Trip" />
        </div>
        <div className="goal-setup-row">
          <label>Target Amount</label>
          <input type="number" disabled placeholder="e.g. 100" value="100" />
        </div>
        <div className="goal-setup-row">
          <label>Deadline</label>
          <input type="date" disabled value="2024-12-30" />
        </div>
        <div className="goal-setup-row">
          <label>Jar Style</label>
          <div className="goal-setup-avatar-list">
            <span className="goal-setup-avatar selected" title="Classic">{'🐷'}</span>
            <span className="goal-setup-avatar">{'🐽'}</span>
          </div>
        </div>
        <div className="goal-setup-row">
          <label>
            <input type="checkbox" disabled checked /> Auto-saving
          </label>
          <label>
            <input type="checkbox" disabled /> Set as Priority
          </label>
        </div>
        <button className="goal-setup-save-btn" disabled>
          <span role="img" aria-label="Save">💾</span> Save Goal
        </button>
      </div>
    </div>
  );
}

export default GoalSetup;
