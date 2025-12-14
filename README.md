# Jessica Borda Portfolio

A personal portfolio website built with Next.js 16, showcasing skills, experience, and projects.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** SASS + CSS Modules (BEM methodology)
- **Linting:** ESLint + Biome

## Architecture

This project follows the **Container-Presentation pattern**:

- **Containers** (`app/page.tsx`, `app/layout.tsx`) — Handle logic, data fetching, and state
- **Presentation** (`app/_components/`) — Pure UI components that receive props

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Format code
npm run format
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Project Structure

```
app/
├── page.tsx              # Main container (logic + composition)
├── layout.tsx            # Root layout
├── _components/          # Presentation components
│   ├── Header/
│   ├── Hero/
│   ├── Skills/
│   ├── Experience/
│   ├── Projects/
│   └── Contact/
└── _styles/              # Global styles and variables
```
