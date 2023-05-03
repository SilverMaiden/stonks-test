import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Input,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Movie } from "@component/components/MovieCard";
import MoviesGrid from "@component/components/MoviesGrid";
import { useHandleMovieActions } from "@component/hooks/useHandleMovieActions";
import { fetchData } from "@component/utils/moviesApi";
import { sortMovies } from "@component/utils/sorting";
import { filterWithTitle } from "@component/utils/utils";
import { useEffect, useState } from "react";
export interface AppState {
  favorites: Movie[];
  watched: Movie[];
  bookmarks: Movie[];
}
const Home = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  function clearLocalStorage() {
    localStorage.clear();
  }
  const [isLoading, setIsLoading] = useState(false);

  // Add a new state to store the sorting option
  const [sortingOption, setSortingOption] = useState("none");


  useEffect(() => {
    if (sortingOption === "none") {
      return;
    }

    const sortedMovies = sortMovies([...movies], sortingOption);
    setMovies(sortedMovies);
  }, [sortingOption, movies]);

  const handleSearch = async (searchQuery: string) => {
    try {
      setIsLoading(true);
      const data = await fetchData(searchQuery);
      setIsLoading(false);

      const filteredData = filterWithTitle(data.results);
      setMovies(filteredData);
    } catch (error) {
      setIsLoading(false);
      // Handle the error here
      console.error("Error fetching data:", error.message);
    }
  };
  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleActions = useHandleMovieActions();

  return (
    <Flex
      minHeight={"700px"}
      alignItems="center"
      justifyContent="center"
      direction={"column"}
    >
      <Box
        p={8}
        marginBottom={8} // Add margin to create space between search area and results area
        maxWidth="800px"
        width="600px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Stack spacing={4}>
          <Heading size="2xl" textAlign="center">
            Movie Night
          </Heading>
          <Text color="gray.500" fontSize="lg" textAlign="center">
            Search for movies by title and save them for later.
          </Text>
          <form>
            <HStack spacing={4}>
              <Input
                placeholder="Search for movies by title"
                size="lg"
                value={query}
                onChange={handleQueryChange}
              />
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  return handleSearch(query);
                }}
                size="md"
                type="submit"
              >
                {isLoading ? <Spinner /> : "Search"}
              </Button>
            </HStack>
          </form>
        </Stack>
      </Box>

      <MoviesGrid handleActions={handleActions} movies={movies} />
    </Flex>
  );
};

export default Home;
