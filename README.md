![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-4.4-646CFF?logo=vite&logoColor=white) ![Redux](https://img.shields.io/badge/Redux%20Toolkit-2.11-764ABC?logo=redux&logoColor=white) ![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?logo=tailwindcss&logoColor=white) ![License](https://img.shields.io/badge/License-MIT-blue)

# Fast React Pizza Store

- Single-page pizza ordering experience featuring dynamic menus, cart management, and order tracking.
- Built with React Router data APIs, Redux Toolkit, and Tailwind CSS for a responsive, modern UI.
- Integrates with Jonas Schmedtmann's React Fast Pizza API and reverse geocoding for address autofill.

## Tech Stack

- React 18 with React Router 6 for declarative routing, loaders, actions, and fetchers.
- Redux Toolkit and React Redux for predictable state management of user context and cart data.
- Vite 4 for fast dev server, HMR, and optimized production builds.
- Tailwind CSS 3 with custom component utilities defined in src/index.css for consistent styling.
- ESLint, Prettier, and vite-plugin-eslint to enforce code quality during development.

## Features

- Interactive menu that pulls live pizza data via getMenu and handles sold-out inventory gracefully.
- Persistent cart experience with quantity updates, removal controls, and real-time totals in CartOverview.
- Guided checkout with address autofill using browser geolocation and reverse geocoding, plus phone validation.
- Order workflow that posts to createOrder, clears the Redux cart, and redirects to an order confirmation view.
- Live order tracking that fetches order details, highlights priority upgrades, and exposes Add Priority via updateOrder.
- Global layout with loader overlay, searchable order lookup, and username persistence across routes.

## Getting Started

- Install dependencies: `npm install`.
- Run the dev server: `npm run dev` and open the served URL.
- Build for production: `npm run build`.
- Preview the production build locally: `npm run preview`.
- Lint the project before committing: `npm run lint`.

## Project Structure

- [src/App.jsx](src/App.jsx) configures RouterProvider routes, loaders, and actions.
- [src/store.js](src/store.js) wires Redux Toolkit slices for user and cart domains.
- [src/features/menu](src/features/menu) renders the pizza catalog and item-level cart interactions.
- [src/features/cart](src/features/cart) manages cart slice logic, derived selectors, and UI components.
- [src/features/order](src/features/order) drives order creation, status views, search, and server mutations.
- [src/features/user](src/features/user) handles username capture, geolocation, and address fetching.
- [src/services](src/services) wraps REST calls for pizza APIs and reverse geocoding.
- [src/ui](src/ui) contains shared layout, navigation, and reusable buttons with Tailwind styling.
- [src/utils/helpers.js](src/utils/helpers.js) centralizes currency, date, and ETA formatting helpers.

## Environment Notes

- The app consumes https://react-fast-pizza-api.jonas.io/api for menu and order operations.
- Geolocation features require HTTPS and user consent in supported browsers.
- Tailwind styles rely on the configuration in tailwind.config.js and postcss.config.js.
