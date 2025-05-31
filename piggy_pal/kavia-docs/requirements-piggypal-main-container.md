# PiggyPal Main Container: Product & Architecture Requirements

## 1. Product Requirements

### 1.1 Overview
PiggyPal ("PiggyWise") is a digital piggy bank app designed for children, teens, and families. Its primary aim is to encourage goal-based savings and healthy financial habits through playful interaction, gamification, parental controls, and age-appropriate learning tools. The main container forms the root of the web application, organizing core navigation, layout, branding, and integration of major features.

### 1.2 User Needs
- **Children & Teens**
  - Must easily visualize and track their various savings goals.
  - Need motivation and engagement via interactive games, rewards, and progress visualization.
  - Require a fun, visually appealing interface that is easy to use and understand.
  - Must have access to financial learning materials appropriate for their age.
- **Parents/Guardians**
  - Need oversight and management of children's accounts (goals set, chores assigned, allowance transferred, approvals).
  - Must be able to securely authenticate and control permissions.
  - Require reporting and analytics features to monitor progress and behaviors.
- **Families**
  - Require options to share saving efforts (group saving, gifting, secure transfer).
  - Need meaningful, easy communication across user segments (children and parents).

### 1.3 Major Features
The main container coordinates and displays the following core features, which are to be made available to users in a modular, navigable manner:
- **Home Dashboard:** Overview of all savings jars/goals (visualized as piggy avatars), each with a name, icon, progress bar, and key stats. Add goal button and total balance summary.
- **Goal Setup:** Interface for creating/editing savings goals (name, target, deadline, custom avatar/jar, autosave, etc.).
- **Gamification:** Rewards center (badges, piggy evolution), mini-games (spin wheel, coin drop), and savings challenge tracking.
- **Parent Dashboard:** Dedicated view for parental management (chores, allowance, approvals for withdrawals/goals).
- **Learning Center:** Age-appropriate financial lessons, quizzes, interactive content, and animated guides.
- **Savings Report:** Visual reports and charts tracking progress over time, AI goal tips, streaks, and milestones.
- **Security & Sharing:** User authentication, goal-locking, gifting (links/QR), and group-saving tools.

### 1.4 User Interface Style
- **Theme:** Vibrant dark theme, consistent brand colors (`Teal: #1DE9B6`, `Coral: #FF6F61`, `Accent Yellow: #FFD600`, `Purple: #8E24AA`, and KAVIA orange: `#E87A41`).
- **Design Language:** Cartoon-inspired, playful, and child-friendly with rounded elements, soft shadows, large touch areas, and piggy-themed avatars.
- **Typography:** Big, readable fonts for all screens, making navigation accessible to young users.
- **Navigation:** Bottom-tab navigation with large, touch-friendly icons (planned), top navbar for branding.
- **Engagement:** Animated transitions (i.e., coins, piggy avatars), interactive elements, and positive feedback cues.
- **Responsiveness:** Layout should be responsive, mobile-friendly, and scale up for desktop use.

### 1.5 Constraints
- No heavy UI libraries; use React + vanilla CSS for lightweight, fast performance.
- Modular components to support future expansion.
- All features must support accessibility and clear separation between parent/child views.

---

## 2. Architecture Requirements

### 2.1 Technology Stack
- **Frontend:** React JS (no additional UI frameworks)
- **Languages:** JavaScript (ES6+), with modern React idioms (hooks, JSX)
- **Styling:** Vanilla CSS using CSS custom properties (variables) for branding and theming
- **Testing:** Jest with `@testing-library/jest-dom` (test setup provided)

### 2.2 Component Structure
- **App Component:** The root container (see `src/App.js`), which includes:
  - **Navbar** with branding and navigation buttons (currently at the top, but planned for extension as features are implemented)
  - **Main Content** area organized as a centralized container for feature modules such as Dashboard, Goal Setup, etc.
  - **Hero Section** placeholder for initial app introduction or landing visuals.
- **Common Components:** Button, Container, Navbar, Typography, each styled in `src/App.css`.
- **Future Extension:** Add modular, pluggable components for each major feature (Dashboard, Gamification, Parent View, etc.) beneath the main container.

### 2.3 Theming & Styles
- **Global CSS Variables:** Defined in `src/App.css` under the `:root` scope for consistent application-wide theming.
    - Example:
      ```css
      :root {
        --kavia-orange: #E87A41;
        --kavia-dark: #1A1A1A;
        --text-color: #ffffff;
        --text-secondary: rgba(255, 255, 255, 0.7);
        --border-color: rgba(255, 255, 255, 0.1);
      }
      ```
- **Component Styles:** Buttons, typography, containers, and navigation are defined with class-based CSS for lightweight customization.
- **Brand Consistency:** All elements must adhere to the defined color palette to reinforce playful, friendly branding.
- **Accessibility:** Ensure sufficient contrast in dark theme and readable text for children and adults.

### 2.4 Navigation Approach
- **Current State:** Single page with static layout and placeholder for main features.
- **Planned:** Bottom tab navigation for primary modules (Home, Gamification, Reports, etc.), with clear separation for parental controls.
- **Extensibility:** Navigation should be easily upgradable to support dynamic routing (e.g., React Router in future).

### 2.5 Modularization Strategy
- **File Structure:** Follow clear folder/component separation (seen in `src/`), keeping all core logic isolated and reusable.
- **Component Expansion:** Design components and containers for each feature as standalone modules that plug into the main content area.
- **Testing:** Maintain tests per module/component as complexity grows.

### 2.6 Security & Compliance
- **User Access:** Enable secure authentication (PIN/FaceID planned), with clear role separation.
- **Sharing:** Generate secure, unique share links or QR codes (for gifting/group saving).
- **Data Privacy:** Avoid storing sensitive user data in the frontend.

---

## 3. Implementation Reference

### 3.1 Main App Skeleton (as in `src/App.js`)
```jsx
function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          {/* Branding and navigation to be further extended */}
        </div>
      </nav>
      <main>
        <div className="container">
          {/* Placeholder section for app hero/landing */}
        </div>
      </main>
    </div>
  );
}
```

### 3.2 Theme Snippet (see `src/App.css`)
```css
:root {
  --kavia-orange: #E87A41;
  --kavia-dark: #1A1A1A;
  --text-color: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.7);
  --border-color: rgba(255, 255, 255, 0.1);
}
/* ...More CSS for components... */
```

---

## 4. Summary

This document outlines the user-focused product requirements and pragmatic architecture decisions for the PiggyPal main container, serving as a baseline for further development. All features, UI/UX, and technical specifications are derived from the current implementation, supported files, and planning context.

---
**Sources Consulted:**
- `piggy_pal/README.md`
- `piggy_pal/src/App.css`
- `piggy_pal/src/App.js`
- Product work item and plan
