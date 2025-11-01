# AI Development Rules

This document provides guidelines for the AI assistant to follow when developing and maintaining this application. The goal is to ensure consistency, maintainability, and adherence to the project's architecture.

## Tech Stack

The application is built with a modern, component-based architecture. Key technologies include:

- **Framework**: React (v18) with Vite for a fast development experience.
- **Language**: TypeScript for type safety and improved developer experience.
- **UI Components**: shadcn/ui, a collection of beautifully designed, accessible, and reusable components built on top of Radix UI and Tailwind CSS.
- **Styling**: Tailwind CSS for a utility-first styling approach. All styling should be done via Tailwind classes.
- **Routing**: React Router (`react-router-dom`) for client-side navigation and routing.
- **Data Fetching & State**: TanStack Query (`@tanstack/react-query`) for managing server state, including caching, refetching, and mutations.
- **Forms**: React Hook Form (`react-hook-form`) for performant and flexible form handling, paired with Zod for schema validation.
- **Charting**: Recharts for creating responsive and interactive charts.
- **Icons**: Lucide React for a comprehensive and consistent set of icons.

## Library and Architecture Guidelines

### Component Strategy

- **Use shadcn/ui First**: Always prioritize using existing components from the `src/components/ui` directory.
- **Create New Components**: If a required component does not exist, create a new, reusable component in the `src/components/` directory. Keep components small and focused on a single responsibility.
- **No Custom CSS**: Avoid writing custom CSS files. All styling must be achieved using Tailwind CSS utility classes.

### File Structure

- **Pages**: All page-level components that correspond to a route should be placed in `src/pages/`.
- **Reusable Components**: All shared, reusable components should be placed in `src/components/`.
- **Custom Hooks**: Custom React hooks should be placed in `src/hooks/`.
- **Utilities**: General utility functions should be placed in `src/lib/`.
- **Static Data**: Mock data, constants, and static assets should be managed in the `src/data/` directory.

### Specific Library Usage

- **Routing**: Define all routes within `src/App.tsx` using `<BrowserRouter>`, `<Routes>`, and `<Route>` from `react-router-dom`.
- **Icons**: Only use icons from the `lucide-react` package.
- **Forms**: All forms must be built using `react-hook-form` and validated with a `zod` schema.
- **Charts**: Use `recharts` for all data visualizations. Refer to `TechnicianChart.tsx` and `CategoryChart.tsx` for styling examples.
- **Notifications**: Use `sonner` for toast notifications. The `<Toaster />` component is already configured in `src/App.tsx`.