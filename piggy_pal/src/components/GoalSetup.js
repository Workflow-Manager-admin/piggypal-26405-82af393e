import React, { useState } from "react";
import "./GoalSetup.css";

// PUBLIC_INTERFACE
/**
 * GoalSetup - Animated goal setup wizard for setting new savings jars with cartoon piggy style chooser.
 */
function GoalSetup() {
  // Form state for interactive fields
  const [goalName, setGoalName] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [deadline, setDeadline] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("🐷");
  const [autoSaving, setAutoSaving] = useState(true);
  const [priority, setPriority] = useState(false);

  // Form validation logic
  const isFormValid =
    goalName.trim().length > 0 &&
    !!targetAmount &&
    !isNaN(parseFloat(targetAmount)) &&
    parseFloat(targetAmount) > 0 &&
    !!deadline &&
    selectedAvatar;

  // Placeholder: mock save handler
  function handleSubmit(e) {
    e.preventDefault();
    if (!isFormValid) return;
    alert(
      `Goal "${goalName}" saved!\nTarget: $${targetAmount}, Deadline: ${deadline}\nAvatar: ${selectedAvatar}\nAuto-saving: ${autoSaving ? "ON" : "OFF"}, Priority: ${priority ? "Yes" : "No"}`
    );
    // Clear form for demo
    setGoalName("");
    setTargetAmount("");
    setDeadline("");
    setSelectedAvatar("🐷");
    setAutoSaving(true);
    setPriority(false);
  }

  const avatarOptions = [
    { icon: "🐷", label: "Classic" },
    { icon: "🐽", label: "Snouty" }
  ];

  return (
    <div className="goal-setup-root">
      <h2 className="goal-setup-title">🎯 Setup New Goal</h2>
      <form className="goal-setup-form" autoComplete="off" onSubmit={handleSubmit}>
        <div className="goal-setup-row">
          <label htmlFor="goalName">Goal Name</label>
          <input
            id="goalName"
            type="text"
            placeholder="Enter goal name..."
            value={goalName}
            onChange={e => setGoalName(e.target.value)}
            autoFocus
            required
          />
        </div>
        <div className="goal-setup-row">
          <label htmlFor="goalTarget">Target Amount</label>
          <input
            id="goalTarget"
            type="number"
            placeholder="e.g. 100"
            min="1"
            value={targetAmount}
            onChange={e => setTargetAmount(e.target.value.replace(/[^0-9.]/g, ""))}
            required
          />
        </div>
        <div className="goal-setup-row">
          <label htmlFor="goalDeadline">Deadline</label>
          <input
            id="goalDeadline"
            type="date"
            value={deadline}
            min={new Date().toISOString().slice(0, 10)}
            onChange={e => setDeadline(e.target.value)}
            required
          />
        </div>
        <div className="goal-setup-row">
          <label>Jar Style</label>
          <div className="goal-setup-avatar-list">
            {avatarOptions.map((a) => (
              <span
                key={a.icon}
                className={
                  "goal-setup-avatar" +
                  (selectedAvatar === a.icon ? " selected" : "")
                }
                title={a.label}
                tabIndex={0}
                role="button"
                aria-pressed={selectedAvatar === a.icon}
                onClick={() => setSelectedAvatar(a.icon)}
                onKeyPress={e => {
                  if (e.key === " " || e.key === "Enter") setSelectedAvatar(a.icon);
                }}
              >
                {a.icon}
              </span>
            ))}
          </div>
        </div>
        <div className="goal-setup-row">
          <label>
            <input
              type="checkbox"
              checked={autoSaving}
              onChange={e => setAutoSaving(e.target.checked)}
            />{" "}
            Auto-saving
          </label>
          <label>
            <input
              type="checkbox"
              checked={priority}
              onChange={e => setPriority(e.target.checked)}
            />{" "}
            Set as Priority
          </label>
        </div>
        <button
          className="goal-setup-save-btn"
          disabled={!isFormValid}
          type="submit"
          aria-disabled={!isFormValid}
        >
          <span role="img" aria-label="Save">💾</span> Save Goal
        </button>
      </form>
    </div>
  );
}

export default GoalSetup;
