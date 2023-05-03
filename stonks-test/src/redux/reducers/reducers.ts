// reducers.ts
import { Movie } from "@component/components/MovieCard";
import { combineReducers } from "redux";
import {
  ADD_BOOKMARK,
  ADD_FAVORITE,
  ADD_WATCHED,
  Action,
  REMOVE_BOOKMARK,
  REMOVE_FAVORITE,
  REMOVE_WATCHED,
} from "../actions/actions";

const favoritesReducer = (state: Movie[] = [], action: Action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.movie];
    case REMOVE_FAVORITE:
      return state.filter((movie) => movie.id !== action.movie.id);
    default:
      return state;
  }
};

const watchedReducer = (state: Movie[] = [], action: Action) => {
  switch (action.type) {
    case ADD_WATCHED:
      return [...state, action.movie];
    case REMOVE_WATCHED:
      return state.filter((movie) => movie.id !== action.movie.id);
    default:
      return state;
  }
};

const bookmarksReducer = (state: Movie[] = [], action: Action) => {
  switch (action.type) {
    case ADD_BOOKMARK:
      return [...state, action.movie];
    case REMOVE_BOOKMARK:
      return state.filter((movie) => movie.id !== action.movie.id);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  watched: watchedReducer,
  bookmarks: bookmarksReducer,
});

export default rootReducer;
