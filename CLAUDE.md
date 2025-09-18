# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (runs on port 3010 with Turbopack)
- **Build**: `npm run build` (uses Turbopack)
- **Production server**: `npm start`
- **Lint**: `npm run lint` (uses ESLint)

Note: This project uses Turbopack for faster builds and development.

## Project Architecture

### Application Structure
This is a Next.js 15 application using the App Router with internationalization support. The app follows a layered architecture:

```
src/
├── app/[locale]/          # App Router pages with locale support
│   ├── (auth)/           # Authentication routes (login, verify-email, reset-password)
│   ├── (root)/           # Public pages
│   └── dashboard/        # Protected dashboard routes
├── components/           # React components
│   ├── layout/          # Layout components (navbar, footer, sidebar, header)
│   ├── pages/           # Page-specific components
│   ├── ui/              # Reusable UI components (shadcn/ui based)
│   └── common/          # Common shared components
├── providers/           # Context providers (theme, auth, tanstack)
├── store/              # Zustand state management
├── services/           # API service layer
├── lib/                # Utility libraries and configurations
├── types/              # TypeScript type definitions
├── validation/         # Zod validation schemas
├── tanstack/           # React Query configurations
│   ├── query/          # Query hooks
│   └── mutation/       # Mutation hooks
└── routes/             # Route definitions
```

### Key Technologies & Patterns

**State Management**:
- Zustand for global state (see `src/store/index.ts`)
- React Query (TanStack Query) for server state
- Auth state managed through Zustand slice (`src/store/slices/auth.slice.ts`)

**Authentication**:
- JWT-based authentication with cookies
- Protected routes through AuthProvider
- Axios instance with credentials configured in `src/lib/axiosInstances.ts`

**UI Framework**:
- Tailwind CSS for styling
- Radix UI primitives for accessible components
- Custom UI components in `src/components/ui/`
- Sonner for toast notifications
- Custom theme provider for dark/light mode

**Form Handling**:
- React Hook Form with Zod validation
- Form schemas in `src/validation/`
- Consistent form patterns across auth pages

**Routing & Navigation**:
- Internationalized routes with `[locale]` parameter
- Dashboard layout with sidebar navigation
- Custom NavLink component for active states

### File Organization Patterns

- **Services**: API calls abstracted into service files (`src/services/`)
- **Types**: Centralized type definitions with proper imports
- **Constants**: Application constants (user types, navigation links)
- **Validation**: Zod schemas for form and API validation
- **Providers**: React context providers for cross-cutting concerns

### Dashboard Architecture
The dashboard uses a sidebar layout with:
- Role-based navigation items
- User menu with profile information
- Breadcrumb navigation
- Responsive design patterns

### API Integration
- Centralized axios instance with base URL configuration
- Separate query and mutation hooks using React Query
- Consistent error handling patterns
- Cookie-based authentication flow