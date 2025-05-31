import React from "react";
import "./LearningCenter.css";

// PUBLIC_INTERFACE
/**
 * LearningCenter - Animated literacy lessons, quizzes, cartoon guides. Dark cartoon style.
 */
function LearningCenter() {
  // Placeholder list for lessons/quizzes
  return (
    <div className="learning-root">
      <h2 className="learning-title">
        📚 Learning Center
      </h2>
      <div className="learning-modules">
        <div className="learning-module-card">
          <span role="img" aria-label="guide" className="module-emoji">🧑‍🏫</span>
          <div>
            <b>Lesson 1: Why Save?</b>
            <p>Watch a video: <span className="fake-link">Piggy tells you why savings matter!</span></p>
            <button disabled>Start Lesson</button>
          </div>
        </div>
        <div className="learning-module-card">
          <span role="img" aria-label="quiz" className="module-emoji">📝</span>
          <div>
            <b>Quiz: Smart Spending</b>
            <p>Interactive quiz with coins animation</p>
            <button disabled>Take Quiz</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningCenter;
