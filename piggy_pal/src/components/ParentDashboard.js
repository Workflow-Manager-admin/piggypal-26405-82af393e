import React from "react";
import "./ParentDashboard.css";

// PUBLIC_INTERFACE
/**
 * ParentDashboard - Manage child accounts, assign chores, transfer allowance, and approvals. Playful dark theme.
 */
function ParentDashboard() {
  // Placeholder for parental controls
  return (
    <div className="parent-dashboard-root">
      <h2 className="parent-dashboard-title">
        👨‍👩‍👧 Parent Dashboard
      </h2>
      <div className="parent-dashboard-card">
        <b>Manage Children:</b>
        <ul className="parent-dashboard-children-list">
          <li>
            <span>Alex 🐷</span>
            <button disabled>Switch</button>
          </li>
          <li>
            <span>Sam 🐽</span>
            <button disabled>Switch</button>
          </li>
        </ul>

        <b>Chore Board:</b>
        <ul className="parent-dashboard-chores-list">
          <li>
            <span>Take out trash</span>
            <button disabled>Reward</button>
          </li>
          <li>
            <span>Do homework</span>
            <button disabled>Reward</button>
          </li>
        </ul>

        <b>Allowance:</b>
        <div className="parent-dashboard-actions">
          <button disabled>Transfer</button>
          <button disabled>Approve Withdrawals</button>
          <button disabled>Add New Goal</button>
        </div>
      </div>
    </div>
  );
}

export default ParentDashboard;
