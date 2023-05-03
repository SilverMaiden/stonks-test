import { useToast } from "@chakra-ui/react";
import { Movie } from "@component/components/MovieCard";
import { addFavorite, removeFavorite, addWatched, removeWatched, addBookmark, removeBookmark } from "@component/redux/actions/actions";
import { RootState } from "@component/redux/store";
import { useDispatch, useSelector } from "react-redux";

export function useHandleMovieActions() {
    const dispatch = useDispatch();
    const toast = useToast();
    const favorites: Movie[] = useSelector((state: RootState) => state.favorites);
    const watched: Movie[] = useSelector((state: RootState) => state.watched);
    const bookmarks: Movie[] = useSelector((state: RootState) => state.bookmarks);

    const handleActions = (actionType: string, movie: Movie) => {
      let actionResult;

      switch (actionType) {
        case "addFavorite":
          if (!favorites.some((fav) => fav?.id === movie?.id)) {
            dispatch(addFavorite(movie));
            actionResult = {
              type: "Added to favorites",
              message: `${movie.title} added to favorites.`,
            };
          }
          break;
        case "removeFavorite":
          dispatch(removeFavorite(movie));
          actionResult = {
            type: "Removed from Favorites",
            message: `${movie.title} was removed from your favorites.`,
          };
          break;
        case "addWatched":
          if (!watched.some((watch) => watch?.id === movie?.id)) {
            dispatch(addWatched(movie));
            actionResult = {
              type: "Added to Watched",
              message: `${movie.title} was added to your watched list.`,
            };
          }
          break;
        case "removeWatched":
          dispatch(removeWatched(movie));
          actionResult = {
            type: "Removed from Watched",
            message: `${movie.title} was removed from your watched list.`,
          };
          break;
        case "addBookmark":
          if (!bookmarks.some((book) => book?.id === movie?.id)) {
            dispatch(addBookmark(movie));
            actionResult = {
              type: "Added to Bookmarks",
              message: `${movie.title} was added to your bookmarks.`,
            };
          }
          break;
        case "removeBookmark":
          dispatch(removeBookmark(movie));
          actionResult = {
            type: "Removed from Bookmarks",
            message: `${movie.title} was removed from your bookmarks.`,
          };
          break;
        default:
          console.warn(`Invalid action type: ${actionType}`);
      }

      if (actionResult) {
        const { type, message } = actionResult;
        toast({
          title: type,
          description: message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    };

    return handleActions;
  }
