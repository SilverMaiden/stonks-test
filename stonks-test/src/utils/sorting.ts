// utils/sorting.ts
import { Movie } from "../components/MovieCard";

export const sortMovies = (movies: Movie[], sortingOption: string): Movie[] => {
  return movies.sort((a, b) => {
    switch (sortingOption) {
      case "title-asc":
        if (!a.title || !b.title) return 0;
        return a.title.localeCompare(b.title);
      case "title-desc":
        if (!a.title || !b.title) return 0;
        return b.title.localeCompare(a.title);
      case "year-asc":
        return parseInt(a.year || "0") - parseInt(b.year || "0");
      case "year-desc":
        return parseInt(b.year || "0") - parseInt(a.year || "0");
      default:
        return 0;
    }
  });
};
