import React, { useState } from "react";
import "./MainContainer.css";

// Color palette from requirements
const COLORS = {
  primary: "#1DE9B6",
  secondary: "#FF6F61",
  accentYellow: "#FFD600",
  accentPurple: "#8E24AA",
  darkBg: "#181A20",
  surface: "#23262F",
  text: "#FFF",
  border: "rgba(255,255,255,0.12)"
};

const TAB_LIST = [
  {
    key: "home",
    label: "Home",
    icon: "🏠",
    color: COLORS.primary,
    desc: "Dashboard with jars and avatars"
  },
  {
    key: "goal",
    label: "Goal",
    icon: "🎯",
    color: COLORS.accentYellow,
    desc: "Goal setup and management"
  },
  {
    key: "game",
    label: "Fun",
    icon: "🎮",
    color: COLORS.secondary,
    desc: "Gamification and rewards"
  },
  {
    key: "parent",
    label: "Parent",
    icon: "👨‍👩‍👧",
    color: COLORS.accentPurple,
    desc: "Parent dashboard"
  },
  {
    key: "learn",
    label: "Learn",
    icon: "📚",
    color: COLORS.accentYellow,
    desc: "Learning center"
  },
  {
    key: "report",
    label: "Report",
    icon: "📈",
    color: COLORS.primary,
    desc: "Savings report"
  },
  {
    key: "security",
    label: "Security",
    icon: "🔒",
    color: COLORS.secondary,
    desc: "Security & sharing"
  }
];

// Placeholder animated piggy avatar
function PiggyAvatar({ size = 48 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle at 60% 40%, #FFD600 60%, #FFEE88 100%)`,
        border: `3px solid ${COLORS.primary}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 6px 18px rgba(30,233,182,0.08)",
        position: "relative",
        overflow: "hidden"
      }}
      aria-label="Piggy Avatar"
    >
      <div style={{
        position:"absolute",
        top: "32%",
        left: "26%",
        width: "12px",
        height: "12px",
        background: "#fff",
        borderRadius: "50%",
        boxShadow: "18px 0 #fff, 11px 8px 0 4px #FFD600"
      }} />
      <div style={{
        position:"absolute",
        bottom: 6,
        left:"46%",
        width: "10px",
        height: "8px",
        borderBottom: "3px solid #FF6F61",
        borderRadius: "0 0 10px 10px"
      }} />
    </div>
  );
}

import HomeDashboard from "./components/HomeDashboard";
import GoalSetup from "./components/GoalSetup";
import Gamification from "./components/Gamification";
import ParentDashboard from "./components/ParentDashboard";
import LearningCenter from "./components/LearningCenter";
import SavingsReport from "./components/SavingsReport";
import SecurityAndSharing from "./components/SecurityAndSharing";

// --- Modular feature imports for each tab at top-level
import HomeDashboard from "./components/HomeDashboard";
import GoalSetup from "./components/GoalSetup";
import Gamification from "./components/Gamification";
import ParentDashboard from "./components/ParentDashboard";
import LearningCenter from "./components/LearningCenter";
import SavingsReport from "./components/SavingsReport";
import SecurityAndSharing from "./components/SecurityAndSharing";

// (Duplicate imports removed from inside file body)

// Individual "screen" selector for each tab
function TabScreen({ tab }) {
  switch (tab.key) {
    case "home":
      return <HomeDashboard />;
    case "goal":
      return <GoalSetup />;
    case "game":
      return <Gamification />;
    case "parent":
      return <ParentDashboard />;
    case "learn":
      return <LearningCenter />;
    case "report":
      return <SavingsReport />;
    case "security":
      return <SecurityAndSharing />;
    default:
      return null;
  }
}

function getTabDescription(tabKey) {
  switch(tabKey) {
    case "home":
      return "See your piggy jars, avatars, and goal progress at a glance!";
    case "goal":
      return "Set up goals, pick a piggy style, and watch your savings grow.";
    case "game":
      return "Spin, play, and earn badges to level up your piggy!";
    case "parent":
      return "Parents manage accounts, chores, and allowance easily.";
    case "learn":
      return "Fun lessons and quizzes for smart savers.";
    case "report":
      return "Visualize your savings and track milestones!";
    case "security":
      return "Lock your jars, set up PIN, and safely share or invite others!";
    default:
      return "";
  }
}

// Bottom-tab navigation bar
function BottomTabNav({ active, onSwitch }) {
  return (
    <nav
      role="tablist"
      aria-label="Main app navigation"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100vw",
        background: COLORS.surface,
        boxShadow: "0 -4px 16px rgba(20,0,40,0.26)",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        display: "flex",
        justifyContent: "space-around",
        padding: "10px 0 10px 0",
        zIndex: 110,
      }}
    >
      {TAB_LIST.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onSwitch(tab.key)}
          aria-current={active === tab.key}
          style={{
            flex: 1,
            background: "none",
            border: "none",
            outline: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transition: "color 0.1s, transform 0.15s",
            color: active === tab.key ? tab.color : "#fff",
            fontSize: 17,
            padding: "3px 0",
            fontWeight: 700,
            opacity: active === tab.key ? 1 : 0.6,
            transform: active === tab.key ? "scale(1.13)" : "scale(1)"
          }}
        >
          <span
            style={{
              fontSize: 28,
              filter: active === tab.key ? "drop-shadow(0 2px 7px "+tab.color+"44)" : "",
              marginBottom: 2,
              transition: "filter 0.15s"
            }}
          >
            {tab.icon}
          </span>
          <span
            style={{
              fontSize: 13,
              textShadow: active === tab.key ? `0 1px 8px ${tab.color}33` : "",
              borderRadius: 8,
              padding: active === tab.key ? "1.5px 7px" : "1.5px 0px"
            }}
          >
            {tab.label}
          </span>
        </button>
      ))}
    </nav>
  );
}

// PUBLIC_INTERFACE
/**
 * MainContainer - primary, cartoon-inspired, vibrant, modular layout for PiggyPal app.
 * Handles main navigation and hosts feature screens.
 */
function MainContainer() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div
      className="piggypal-main"
      style={{
        minHeight: "100vh",
        background: `radial-gradient(ellipse at 60% 0%, #23262f 50%, ${COLORS.darkBg} 100%)`,
        color: COLORS.text,
        fontFamily: "'Baloo 2', 'Quicksand', 'Comic Neue', 'Inter', sans-serif",
        transition: "background 0.25s"
      }}
    >
      {/* Top bar / App header */}
      <header
        style={{
          width: "100%",
          padding: "22px 0 0 0",
          zIndex: 120,
          position: "fixed",
          left: 0,
          top: 0,
          background: "none"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            userSelect: "none"
          }}
        >
          <PiggyAvatar size={40} />
          <span
            style={{
              color: COLORS.primary,
              fontSize: 24,
              fontWeight: 900,
              letterSpacing: 2,
              textShadow: "0 1px 14px #1DE9B670"
            }}
          >
            Piggy<span style={{ color: COLORS.secondary }}>Wise</span>
          </span>
        </div>
        <hr
          style={{
            border: "none",
            borderTop: `2.5px dashed ${COLORS.border}`,
            marginTop: 12,
            marginBottom: 0,
            width: "80vw",
            maxWidth: 420,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </header>
      {/* Spacer for header */}
      <div style={{ height: "98px" }} />

      <main style={{
        maxWidth: 470,
        width: "95vw",
        margin: "0 auto",
        paddingBottom: "5rem"
      }}>
        <TabScreen tab={TAB_LIST.find(t => t.key === activeTab)} />
      </main>

      <BottomTabNav active={activeTab} onSwitch={setActiveTab} />
    </div>
  );
}

export default MainContainer;
