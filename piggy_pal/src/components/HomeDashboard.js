import React from "react";
import "./HomeDashboard.css";

// PUBLIC_INTERFACE
/**
 * HomeDashboard - Shows savings jars as cartoon piggy avatars, each with progress, goal name, and quick actions.
 * Cartoon-inspired vibrant dark style.
 */
function HomeDashboard() {
  // Placeholder state - in the future you'd fetch data
  const jars = [
    { name: "New Bike", saved: 30, target: 100 },
    { name: "Comics", saved: 12, target: 20 },
    { name: "Gift for Mom", saved: 40, target: 50 }
  ];

  return (
    <div className="dashboard-root">
      <div className="dashboard-balance">
        <span className="dashboard-balance-label">Total Balance</span>
        <span className="dashboard-balance-value">$82.00</span>
      </div>
      <div className="dashboard-jars">
        {jars.map((jar, i) => (
          <div className="dashboard-jar-card" key={jar.name}>
            <div className="dashboard-piggy-avatar" data-style={i % 2 === 0 ? "yellow" : "coral"}>
              <span role="img" aria-label="Piggy" style={{ fontSize: 32 }}>
                🐷
              </span>
            </div>
            <div className="dashboard-jar-details">
              <span className="dashboard-jar-name">{jar.name}</span>
              <div className="dashboard-jar-progress">
                <div
                  className="dashboard-jar-progress-bar"
                  style={{
                    width: `${Math.round((jar.saved / jar.target) * 100)}%`
                  }}
                ></div>
              </div>
              <span className="dashboard-jar-amount">{`$${jar.saved} / $${jar.target}`}</span>
            </div>
          </div>
        ))}
        <button className="dashboard-add-goal-btn">
          <span className="dashboard-add-emoji" role="img" aria-label="Add goal">➕</span> Add Jar
        </button>
      </div>
    </div>
  );
}

export default HomeDashboard;
