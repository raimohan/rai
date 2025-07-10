# Replit.md - Huly Clone Landing Page

## Overview

This is a modern React application built to replicate the Huly productivity platform landing page. The project features a sophisticated dark-themed UI with 3D animations, glassmorphism effects, and comprehensive section layouts showcasing team collaboration features.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Animation**: Framer Motion for smooth animations and transitions
- **3D Graphics**: Three.js with @react-three/fiber for 3D background effects

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Development Setup**: Vite for fast development and hot module replacement
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **API Structure**: RESTful API endpoints prefixed with `/api`

### Build System
- **Bundler**: Vite for frontend, esbuild for backend production builds
- **Module System**: ES modules throughout the codebase
- **Development**: tsx for running TypeScript files directly in development

## Key Components

### Page Structure
- **Home Page**: Main landing page with multiple feature sections
- **Hero Section**: 3D animated background with call-to-action
- **Features Section**: Grid layout showcasing productivity features
- **Work Together Section**: Virtual office collaboration features
- **GitHub Sync Section**: Development workflow integration features
- **MetaBrain Section**: AI-powered knowledge management
- **Knowledge Section**: Document collaboration features
- **CTA Section**: Final call-to-action with signup encouragement

### UI Component System
- **Design System**: Based on shadcn/ui with New York style variant
- **Theming**: Custom CSS variables for consistent dark theme
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animations**: Framer Motion integration for scroll-based animations

### Navigation
- **Navbar**: Fixed position with glassmorphism effect
- **Mobile Menu**: Hamburger menu for responsive navigation
- **Footer**: Multi-column layout with social links and legal pages

### 3D Elements
- **Hero Background**: Animated starfield and light beams using Three.js
- **Performance**: Optimized rendering with proper cleanup and frame limiting

## Data Flow

### Current State
The application currently operates as a static landing page without dynamic data fetching. The storage interface is prepared for future database integration with basic user CRUD operations.

### Database Schema
- **Users Table**: Basic user model with id, username, and password fields
- **Type Safety**: Drizzle-zod integration for runtime validation
- **Migration Ready**: Drizzle migrations configured for schema changes

### API Preparation
- **Storage Interface**: Abstract storage layer supporting both memory and database implementations
- **Error Handling**: Centralized error handling middleware
- **Logging**: Request/response logging for API endpoints
- **CORS**: Configured for cross-origin requests

## External Dependencies

### Frontend Dependencies
- **React Query**: @tanstack/react-query for future API state management
- **Form Handling**: React Hook Form with Hookform resolvers
- **Icons**: Lucide React icons and React Icons (Social media icons)
- **Date Handling**: date-fns for date manipulation
- **Utility Libraries**: clsx and tailwind-merge for conditional styling

### Backend Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **ORM**: drizzle-orm with PostgreSQL dialect
- **Validation**: Zod for schema validation
- **Utilities**: nanoid for unique ID generation

### Development Tools
- **TypeScript**: Full TypeScript support with strict configuration
- **Linting**: ESLint configuration for code quality
- **Styling**: PostCSS with Tailwind CSS and Autoprefixer
- **Replit Integration**: Replit-specific plugins for development experience

## Deployment Strategy

### Development Environment
- **Hot Reload**: Vite dev server with HMR for instant updates
- **TypeScript Checking**: Real-time type checking during development
- **Error Overlay**: Runtime error modal for better debugging experience

### Production Build
- **Frontend**: Vite production build with optimized assets
- **Backend**: esbuild bundling for Node.js deployment
- **Static Assets**: Served from dist/public directory
- **Environment Variables**: DATABASE_URL required for PostgreSQL connection

### Hosting Considerations
- **Static Assets**: Frontend built as static files for CDN deployment
- **API Server**: Express server can be deployed to Node.js hosting platforms
- **Database**: Configured for Neon PostgreSQL serverless database
- **Session Storage**: PostgreSQL-based session management for scalability

### Performance Optimizations
- **Code Splitting**: Vite automatic code splitting for optimal loading
- **Asset Optimization**: Image optimization and lazy loading ready
- **3D Rendering**: Efficient Three.js scene management with proper cleanup
- **Animation Performance**: Framer Motion optimizations for smooth animations