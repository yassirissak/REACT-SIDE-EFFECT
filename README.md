# React Side Effects (Vite)

A small React app that demonstrates side-effect handling with `useEffect` by fetching programming jokes from an external API.

## What This Project Does

- Fetches a programming joke on initial app mount.
- Shows a loading state during network requests.
- Lets the user fetch a new joke with a single button.
- Handles failed API requests with a user-friendly fallback message.

## Tech Stack

- Vite 6
- Vitest + Testing Library

## API

- Endpoint: `https://v2.jokeapi.dev/joke/Programming?type=single`
- Expected response shape: `{ joke: string }`

## Getting Started

1. Clone the repo.
2. Install dependencies:
   npm install
3. Start the dev server:
   npm run dev
4. Open the app at `http://localhost:5173`.

## Available Scripts

- `npm run dev`: Start Vite dev server.
- `npm run build`: Build production assets.
- `npm run test`: Run unit tests once.

## Side-Effect Design

- `App.jsx` owns `joke` and `loading` state.
- `fetchJoke()` performs API calls and updates UI state.
- `useEffect(() => fetchJoke(), [])` ensures first fetch runs on mount.
- `FetchButton` receives `fetchJoke` via props and calls it on click.
- `JokeDisplay` receives `joke` and `loading` and renders exactly one paragraph.

## Testing

Run:
npm run test


