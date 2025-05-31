# PiggyPal Main Container Architecture

## Overview

PiggyPal is envisioned as a playful and educational digital piggy bank application for children, teens, and their families. Its primary interaction and all major features are organized under a main container—the root of the React web application. This document describes the intended major container/component layout, navigation structure, theming approach, and the overall React organization, reflecting the current minimal implementation and future expansion pathways.

---

## 1. Major Container & Component Layout

### 1.1 Application Root

- **Main Container:**  
  Implemented in `src/App.js`, the `App` component acts as the highest-level container. All other feature modules, shared UI elements, and navigation will be composed beneath this root.

- **High-Level Structure:**  
  The main layout is split into three vertical zones:
  - **Top Navbar:** Contains branding, navigation, and action buttons. (`.navbar`)
  - **Main Content:** Flexible space, currently a "hero" landing, reserved for major feature modules and user flows. (`main > .container`)
  - **(Planned) Bottom Tab Bar:** Will provide persistent navigation among the main modules (e.g., Dashboard, Gamification, Reports), optimized for touch and easy access for young users.

```mermaid
flowchart TD
    A[Top Navbar<br/>(Brand & Nav)] --> B[Main Content Area<br/>(Dashboard, Features, Hero)]
    B --> C[(Planned) Bottom Tab Nav<br/>(Navigation Tabs)]
    style A fill:#1A1A1A,stroke:#E87A41,stroke-width:2px
    style C fill:#1A1A1A,stroke:#FFD600,stroke-width:2px
```

#### Current Minimal React Structure (from `App.js`):

```jsx
function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <span className="logo-symbol">*</span> KAVIA AI
          </div>
          <button className="btn">Template Button</button>
        </div>
      </nav>
      <main>
        <div className="container">
          <div className="hero">
            {/* Subtitle, Title, Description, CTA */}
          </div>
        </div>
      </main>
    </div>
  );
}
```

- All main content is wrapped in a responsive container (`.container`). The current layout is intentionally minimal to facilitate rapid extension.

---

### 1.2 Component Expansion Philosophy

- **Separation:**  
  Each major feature—Dashboard, Goal Setup, Gamification, Parent Dashboard, Learning Center, Reports, Security—will be represented as a modular, pluggable component. Components will be colocated in the main content area, their visibility managed via navigation context/state.

- **Reusability:**  
  UI elements like buttons, containers, navigation bars, and typographic styles are implemented as class-based CSS in `src/App.css`. No heavy UI frameworks are used, to maximize speed and maintainability.

- **File Structure Example:**
```
src/
 ├─ App.js               # Main Container
 ├─ App.css              # Theming and Common Components
 ├─ components/          # (Planned) Modular Feature Components
 └─ ...                  
```

---

## 2. Navigation Structure

### 2.1 Current Navigation

- **Static, Single Content:**  
  Navigation is presently static—no dynamic routing or component switching. The top navbar serves branding and future navigation expansion.

### 2.2 Planned Navigation

- **Bottom Tab Navigation:**  
  - A persistent bottom tab bar will anchor primary navigation. Tabs will likely include Home, Gamification, Learning, Parent/Child dashboards, and Reports. Each will be large, icon-driven, and touch friendly.
  - Navigation state will control which feature module/component is active within the main content area.
  - Planned to allow easy extension to dynamic routing (`react-router`), but will remain simple and React idiomatic initially.

- **Parent/Child View Separation:**  
  Navigation logic will ensure children and parents are routed to their respective dashboards, with access gated by roles.

---

## 3. Theming Approach

### 3.1 Theme Characteristics

- **Dark, Vibrant, Playful:**  
  The entire app uses a dark base (`--kavia-dark`) with vivid accent colors: Kavia Orange (`#E87A41`), Coral, Teal, Purple, and Yellow.

- **CSS Custom Properties:**  
  Defined in `App.css` under `:root`, these variables guarantee consistency and easy color scheme modification:
  ```css
  :root {
    --kavia-orange: #E87A41;
    --kavia-dark: #1A1A1A;
    --text-color: #ffffff;
    --text-secondary: rgba(255, 255, 255, 0.7);
    --border-color: rgba(255, 255, 255, 0.1);
  }
  ```

- **Component Styling:**  
  - `.navbar`, `.container`, `.hero`, `.btn`, `.title`, `.subtitle` reflect playful, cartoon-inspired design: rounded corners, large font sizes, accent icons, and soft shadows.
  - Typography is bold and readable; icons and buttons are sized for accessibility.

### 3.2 Visual Example (CSS from `App.css`):

```css
body {
  background-color: var(--kavia-dark);
  color: var(--text-color);
}

.btn {
  background-color: var(--kavia-orange);
  color: white;
  border-radius: 4px;
  /* ... */
}
```

---

## 4. React Application Structure

- **Entry Point:**  
  `src/index.js` renders the `App` root component into the DOM, importing global (`index.css`) and application (`App.css`) styles.

- **Single Root Node:**  
  All component trees are managed from `<App />`. As features grow, App will orchestrate view/component switching, theme/provider contexts, and global app state.

---

## 5. Summary Table

| Layer                 | Current State                              | Planned/Future                             |
|-----------------------|--------------------------------------------|--------------------------------------------|
| Root Component        | `App` (`src/App.js`)                       | `App` manages main feature modules         |
| Navigation            | Top navbar (static)                        | Bottom-tab navigation, dynamic modules     |
| Theming               | CSS vars in `App.css`, dark playful palette| Extension to support theme switching       |
| Features (Children)   | Hero CTA only                              | Dashboard, Learning, Gamification          |
| Features (Parent)     | N/A                                        | Parent-only dashboards, role-based views   |

---

## 6. Design Notes & Rationale

- **Why minimal?**  
  The current state intentionally leaves out most UI controls and feature logic, to provide a sandbox for staged modular feature development and user testing.

- **Why class-based CSS?**  
  Class selectors in `App.css` (rather than CSS-in-JS or frameworks) keep the bundle light, maximize compatibility, and empower easy customization and theme changing with variable overrides.

- **Branding:**  
  Vivid colors, soft edges, and playful layouts foster engagement and familiarity for children, and reflect a cartoon aesthetic in keeping with product goals.

---

## 7. Sources Consulted

- `src/App.js`
- `src/App.css`
- `src/index.js`
- Product requirements and container/component definition

---
