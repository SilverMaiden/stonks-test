# MovieNight

MovieNight is a Next.js web application that allows users to search for movies by title, add or remove movies to their favorites or bookmarks, and mark or unmark movies as watched. The app is built using Chakra UI components, providing a responsive and visually appealing interface for both desktop and mobile devices. MovieNight uses Redux for state management, and it also stores favorited, watched, and bookmarked movies in the local storage, allowing users to return to their curated lists.

## Features

- Search for movies by title
- Add and remove movies to favorites, bookmarks, and watched lists
- Responsive design that looks great on both desktop and mobile devices
- Redux state management
- Local storage persistence for favorites, bookmarks, and watched lists

## Components

- `Home`: The main component where users can search for movies and view the results
- `MovieGrid`: A grid component displaying movie cards in a responsive layout
- `MovieCard`: A component displaying individual movie information and actions
- `NavBar`: A navigation bar for easy access to Favorites, Bookmarks, and Watched movies pages
- `Favorites`, `Bookmarks`, and `Watched` pages: Pages displaying the respective lists of movies

## Hooks

- `useHandleMovieActions` and `useLocalStorage: A custom React hook to deal with Redux actions and local storage related to movie lists (favorites, bookmarks, and watched)

## Future improvements

If more time were available, the following improvements could be implemented:

- Write comprehensive tests for components and functionality
- Further code cleanup and optimization
- Persist search data in local storage, allowing users to switch between different tabs (e.g., Favorites) without losing their search results

## Getting Started

To run MovieNight locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/silvermaiden/stonks-app.git

2. Change to the project directory:
```bash
cd stonks-app```bash

3. Install dependencies:
```bash
npm install```

4. Run the dev server:
```bash

npm run dev

Now, open your browser and navigate to http://localhost:3000 to view the MovieNight app.


