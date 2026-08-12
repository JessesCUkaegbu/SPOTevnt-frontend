# SPOTevnt Frontend

SPOTevnt is a React frontend for discovering events, purchasing tickets, managing events as an organizer, and verifying tickets at the door.

## Prerequisites

Install the following before starting:

- Node.js 18 or newer
- npm 9 or newer
- Git

Check your versions:

```bash
node --version
npm --version
git --version
```

## Setup

Clone the repository and move into the project directory:

```bash
git clone <repository-url>
cd SPOTevnt-frontend
```

Install the project dependencies:

```bash
npm install
```

Create a local environment file from the example:

```bash
cp .env.example .env
```

On Windows PowerShell, use:

```powershell
Copy-Item .env.example .env
```

Update `.env` with the URL of the running backend API:

```env
VITE_API_BASE_URL=http://localhost:8000/api
```

If no backend is available, the discovery screens use local demo event data. Login and event creation also keep a demo flow available when API requests fail.

## Start the development server

```bash
npm run dev
```

Vite will print the local URL, usually:

```text
http://localhost:5173
```

The browser reloads automatically when source files change.

## Available commands

```bash
npm run dev       # Start the local development server
npm run build     # Type-check and create a production build
npm run preview   # Preview the production build locally
```

Run the production build before opening a pull request:

```bash
npm run build
```

The generated files are placed in `dist/`.

## Application routes

| Route | Purpose |
| --- | --- |
| `/events/` | Public event discovery feed |
| `/events/:slug/` | Event details and ticket checkout flow |
| `/auth/` | Sign in and account creation |
| `/studio/` | Organizer dashboard |
| `/studio/create/` | Create a new event |
| `/verify/` | Gate ticket scanner |

The organizer, event creation, and gate scanner routes are protected. The frontend reads `spot_token` and `spot_role` from `localStorage` for the current session. Supported roles are `attendee`, `organizer`, `staff`, and `admin`.

## Backend API expectations

The API client uses `VITE_API_BASE_URL` as its base URL and automatically sends the stored JWT as a bearer token. The current API helpers expect these endpoints:

- `POST /auth/login/`
- `POST /auth/register/`
- `GET /auth/profile/`
- `GET /events/`
- `GET /events/:slug/`
- `GET /organizer/events/`
- `POST /organizer/events/`
- `PATCH /organizer/events/:id/`
- `DELETE /organizer/events/:id/`
- `POST /ticketing/checkout/`
- `POST /ticketing/orders/`
- `POST /ticketing/verify/`

Make sure the backend allows requests from the Vite development origin, normally `http://localhost:5173`, through its CORS configuration.

## Project structure

```text
src/
├── api/          API client and endpoint helpers
├── components/   Shared navigation, cards, footer, and route guards
├── pages/        Route-level screens
├── App.tsx       Application routing
├── index.css     Tailwind imports and global styles
└── main.tsx      React entry point
```

## Contributing

1. Create a feature branch.
2. Keep secrets out of Git; use `.env` locally and update `.env.example` when a new variable is required.
3. Run `npm run build` before submitting your changes.
4. Open a pull request with a short summary and screenshots for visual changes.
