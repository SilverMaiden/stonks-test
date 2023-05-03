// pages/favorites.tsx
import { Flex } from "@chakra-ui/react";
import MoviesGrid from "@component/components/MoviesGrid";
import { useHandleMovieActions } from "@component/hooks/useHandleMovieActions";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from ".";

const Favorites = () => {
  const bookmarks = useSelector((state: AppState) => state.bookmarks);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleActions = useHandleMovieActions();

  return isLoaded ? (
    <Flex
      minHeight={"700px"}
      alignItems="center"
      justifyContent="center"
      direction={"column"}
    >
      <MoviesGrid movies={bookmarks} handleActions={handleActions} />
    </Flex>
  ) : null;
};

export default Favorites;
