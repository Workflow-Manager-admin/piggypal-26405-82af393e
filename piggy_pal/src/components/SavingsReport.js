import React from "react";
import "./SavingsReport.css";

// PUBLIC_INTERFACE
/**
 * SavingsReport - Visualizes savings, progress, milestones, and AI suggestions.
 */
function SavingsReport() {
  // Placeholder graphs
  return (
    <div className="report-root">
      <h2 className="report-title">
        📈 Savings Report
      </h2>
      <div className="report-graph-placeholder">
        <span role="img" aria-label="graph" className="report-graph-emoji">📊</span>
        <div className="report-graph-desc">Your savings trend chart appears here!</div>
      </div>
      <div className="report-streak-container">
        Current Streak: <b>9 days</b>
      </div>
      <div className="report-milestones">
        <b>Milestones:</b>
        <ul>
          <li>🏆 Saved first $10</li>
          <li>🥇 Reached a goal!</li>
        </ul>
      </div>
      <div className="report-ai-suggest">
        <span>💡 AI Suggestion: Try saving $2 every day to reach your bike goal faster!</span>
      </div>
    </div>
  );
}

export default SavingsReport;
