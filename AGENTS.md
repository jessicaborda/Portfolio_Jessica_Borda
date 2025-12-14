# AGENTS.md

## Project Overview

Next.js 16 portfolio using **Container-Presentation pattern**.

## Architecture

### Pattern: Container-Presentation

| Layer | Location | Responsibility |
|-------|----------|----------------|
| **Container** | `app/page.tsx`, `app/layout.tsx` | Logic, data fetching, state |
| **Presentation** | `app/_components/*` | UI only, receive props, no logic |

```
app/
├── page.tsx          ← Container (logic + composition)
├── layout.tsx        ← Root layout
└── _components/      ← Presentation (pure UI)
    ├── Header/
    ├── Hero/
    └── ...
```

### Components Rule

- Components in `_components/` are **stateless/presentational**
- They receive data via **props only**
- All business logic stays in page/layout containers

## Styling

### SASS + CSS Modules

- Files: `*.module.scss`
- Import: `import styles from "./Component.module.scss"`

### BEM Methodology

```scss
// Block
.card-container { }

// Element
.card-container-title { }
.card-container-image { }

// Modifier (when needed)
.card-container--active { }
.card-container-title--large { }
```

**Access in JSX:**
```tsx
className={styles["card-container"]}
className={styles["card-container-title"]}
```

## Tools

| Tool | Purpose |
|------|---------|
| **Biome** | Formatting (auto on save) |
| **ESLint** | Linting (Next.js rules) |
| **TypeScript** | Type checking |

## Commands

```bash
npm run dev          # Development
npm run build        # Production build
npm run lint         # ESLint check
npm run format       # Biome format
```

