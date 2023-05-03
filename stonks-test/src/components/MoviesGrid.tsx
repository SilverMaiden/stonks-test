import { Grid } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import MovieCard, { Movie } from "./MovieCard";

interface MoviesGridProps {
  movies: Movie[];
  handleActions: (actionType: string, movie: Movie) => void;
}

const MoviesGrid = ({ movies, handleActions }: MoviesGridProps) => {
  // Get favorites, watched, and bookmarks from Redux store
  const favorites: Movie[] = useSelector((state: RootState) => state.favorites);
  const watched: Movie[] = useSelector((state: RootState) => state.watched);
  const bookmarks: Movie[] = useSelector((state: RootState) => state.bookmarks);
  const isWatchedMovie = (movie: Movie) => watched.some((watch) => watch?.id === movie?.id);

  return (
    <Grid
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      gap={6}
      width={"100%"}
      mt={8}
    >
      {movies
        .sort((a, b) => {
          return isWatchedMovie(a) === isWatchedMovie(b) ? 0 : isWatchedMovie(a) ? 1 : -1;
        })
        .map((movie) => (
        <MovieCard
          key={movie?.id}
          movie={movie}
          isFavorite={favorites.some((favorite) => favorite?.id === movie?.id)}
          isWatched={watched.some((watch) => watch?.id === movie?.id)}
          isBookmarked={bookmarks.some((book) => book?.id === movie?.id)}
          onAction={handleActions}
        />
      ))}
    </Grid>
  );
};

export default MoviesGrid;
