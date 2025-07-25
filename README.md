# React Query + Zustand Practice Project

A modern, visually appealing React application demonstrating the integration of **React Query** for server state management and **Zustand** for client state management, built with TypeScript and Vite.

## Overview

This project showcases a GitHub repository browser with a beautiful, responsive UI that allows users to view and manage their favorite repositories. It demonstrates best practices for combining different state management solutions with modern design principles in a React application.

## Features

- 🔍 **Repository Browsing**: Fetch and display GitHub repositories with rich metadata
- ⭐ **Favorites Management**: Add/remove repositories to/from favorites with visual feedback
- 💾 **Persistent Storage**: Favorites are persisted using localStorage
- ⚡ **Optimized Data Fetching**: Efficient server state management with React Query
- 🎯 **Type Safety**: Full TypeScript integration for enhanced development experience
- 🎨 **Modern UI Design**: Beautiful gradient backgrounds, glassmorphism effects, and smooth animations
- 📊 **Statistics Dashboard**: Real-time stats showing repository metrics and favorites count
- 📱 **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- 🌟 **Rich Repository Cards**: Display stars, forks, language indicators, and last update dates
- 🎭 **Loading States**: Elegant loading animations and error handling
- ♿ **Accessibility**: ARIA labels and semantic HTML for screen readers

## Tech Stack

- **React 18** - Modern React with hooks and semantic HTML
- **TypeScript** - Type-safe development with comprehensive interfaces
- **Vite** - Fast build tool and development server with HMR
- **React Query (TanStack Query)** - Server state management and data fetching
- **Zustand** - Lightweight client state management with persistence
- **Axios** - HTTP client for GitHub API requests
- **Modern CSS** - Custom styling with gradients, animations, and responsive design

## Architecture

### State Management Strategy

The application implements a dual state management approach:

- **Server State** (React Query): Handles GitHub API data fetching, caching, and synchronization
- **Client State** (Zustand): Manages local application state like favorite repositories

### Key Components

- **`App.tsx`**: Main application component with header, stats dashboard, and repository grid
- **`Card.tsx`**: Enhanced repository display component with rich metadata and interactive elements
- **`StatsBar.tsx`**: Statistics dashboard showing repository metrics, favorites, and language diversity
- **`useRepos.ts`**: Custom hook for GitHub API integration using React Query
- **`favoriteRepos.ts`**: Zustand store for managing favorite repositories with localStorage persistence

### UI/UX Design Principles

- **Glassmorphism**: Modern glass effect with backdrop filters for header and stats components
- **Gradient Design**: Beautiful color gradients throughout the interface
- **Micro-interactions**: Smooth hover effects, transitions, and button feedback
- **Information Hierarchy**: Clear visual hierarchy with proper typography and spacing
- **Responsive Grid**: Adaptive layout that works seamlessly across all device sizes

## Project Structure

```text
src/
├── api/
│   └── github.ts          # GitHub API configuration
├── components/
│   ├── Card.tsx           # Enhanced repository card with rich metadata
│   └── StatsBar.tsx       # Statistics dashboard component
├── hooks/
│   ├── useRepos.ts        # React Query hooks for data fetching
│   └── types.ts           # TypeScript interfaces for GitHub API
├── store/
│   └── favoriteRepos.ts   # Zustand store with persistence
├── App.tsx                # Main application with layout and state orchestration
├── index.css              # Global styles with modern CSS design system
└── main.tsx               # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- Yarn (configured via Volta for consistent development environment)

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `yarn dev` - Start development server with hot module replacement
- `yarn build` - Build for production with TypeScript compilation
- `yarn preview` - Preview production build locally

## Key Learning Points

This project demonstrates:

1. **Separation of Concerns**: Clear distinction between server and client state management
2. **Modern React Patterns**: Usage of custom hooks, functional components, and semantic HTML
3. **Type Safety**: Comprehensive TypeScript integration with proper interfaces
4. **Performance Optimization**: Efficient data fetching, caching strategies, and component optimization
5. **State Persistence**: Local storage integration for user preferences with Zustand middleware
6. **Modern CSS Techniques**: Gradients, glassmorphism, responsive design, and micro-interactions
7. **User Experience**: Loading states, error handling, and accessibility considerations
8. **Component Architecture**: Reusable, maintainable component structure with clear responsibilities

## Design Features

### Visual Design

- **Color Palette**: Modern gradient design with purple-blue themes
- **Typography**: System font stack for optimal readability across platforms
- **Layout**: CSS Grid and Flexbox for responsive, adaptive layouts
- **Animations**: Smooth transitions and hover effects for enhanced interactivity

### User Experience

- **Loading States**: Animated spinners and skeleton screens
- **Error Handling**: Graceful error messages with recovery suggestions
- **Empty States**: Informative messages when no data is available
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support

## API Integration

The application integrates with the GitHub REST API v3 to fetch repository data. The API client is configured with proper headers and base URL for optimal performance.

## Future Enhancements

Potential improvements could include:

- Repository search and filtering functionality
- Advanced sorting options (by stars, forks, update date)
- Dark/light theme toggle
- Repository details modal with commit history
- GitHub authentication for private repositories
- Export favorites functionality
- Performance metrics dashboard
- Repository comparison features

---

*This project serves as a comprehensive example of modern React development practices, showcasing the effective combination of popular state management libraries with contemporary UI/UX design principles.*
