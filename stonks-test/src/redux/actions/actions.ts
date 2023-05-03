import { Movie } from "@component/components/MovieCard";

export interface Action {
    type: string;
    movie: any;
  }

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const ADD_WATCHED = 'ADD_WATCHED';
export const REMOVE_WATCHED = 'REMOVE_WATCHED';
export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';

export const addFavorite = (movie: Movie) => ({
  type: ADD_FAVORITE,
  movie,
});

export const removeFavorite = (movie: Movie) => ({
  type: REMOVE_FAVORITE,
  movie,
});

export const addWatched = (movie: Movie) => ({
  type: ADD_WATCHED,
  movie,
});

export const removeWatched = (movie: Movie) => ({
  type: REMOVE_WATCHED,
  movie,
});

export const addBookmark = (movie: Movie) => ({
  type: ADD_BOOKMARK,
  movie,
});

export const removeBookmark = (movie: Movie) => ({
  type: REMOVE_BOOKMARK,
  movie,
});
