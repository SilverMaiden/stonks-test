// pages/favorites.tsx
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import MoviesGrid from "@component/components/MoviesGrid";
import { useHandleMovieActions } from "@component/hooks/useHandleMovieActions";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from ".";

const Favorites = () => {
  const favorites = useSelector((state: AppState) => state.favorites);

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
      <Stack marginY={"10%"}>
        <Heading size="2xl" textAlign="center">
          Favorite Movies
        </Heading>
        <Text color="gray.500" fontSize="lg" textAlign="center">
          View all your favorite movies!
        </Text>
      </Stack>

      <MoviesGrid movies={favorites} handleActions={handleActions} />
    </Flex>
  ) : null;
};

export default Favorites;
