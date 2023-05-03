// utils/storage.ts

import { Movie } from "../components/MovieCard";

export const getFavorites = (): Movie[] => {
  const favoritesJSON = localStorage.getItem("favorites");
  return favoritesJSON ? JSON.parse(favoritesJSON) : [];
};

export const getWatched = (): Movie[] => {
  const watchedJSON = localStorage.getItem("watched");
  return watchedJSON ? JSON.parse(watchedJSON) : [];
};

export const getBookmarked = (): Movie[] => {
  const bookmarkedJSON = localStorage.getItem("bookmarked");
  return bookmarkedJSON ? JSON.parse(bookmarkedJSON) : [];
};
