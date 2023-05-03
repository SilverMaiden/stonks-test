import { SmallAddIcon, StarIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  IconButton,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface MovieCardImage {
  height: number;
  id: string;
  url: string;
  width: number;
}

export interface Movie {
  id: string;
  title: string;
  year: string;
  image: MovieCardImage;
}

interface MovieCardProps {
  movie: Movie;
  isFavorite: boolean;
  isWatched: boolean;
  isBookmarked: boolean;
  onAction: (actionType: string, movie: Movie) => void;
}

const MovieCard = ({
  movie,
  isFavorite,
  isWatched,
  isBookmarked,
  onAction,
}: MovieCardProps) => {
  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <Box
      bg={bgColor}
      borderWidth={1}
      borderRadius={8}
      boxShadow="lg"
      p={4}
      height={"500px"}
      overflow={"hidden"}
      className={isWatched ? "watched" : ""}
    >
      <Image
        height={"75%"}
        src={
          movie?.image?.url
            ? movie?.image?.url
            : "https://media-cache.cinematerial.com/p/500x/lc5nstq3/default-movie-poster.jpg?v=1456502005"
        }
        alt={movie?.title}
        borderRadius={8}
        marginBottom={2}
      />
      <Stack spacing={1}>
        <Text fontSize="lg" fontWeight="bold" noOfLines={2}>
          {movie?.title} ({movie?.year})
        </Text>
        <Stack direction="row">
          <IconButton
            icon={<StarIcon />}
            aria-label="Favorite"
            variant={isFavorite ? "solid" : "outline"}
            colorScheme="yellow"
            onClick={() =>
              onAction(isFavorite ? "removeFavorite" : "addFavorite", movie)
            }
          />
          <IconButton
            icon={<ViewIcon />}
            aria-label="Watched"
            variant={isWatched ? "solid" : "outline"}
            colorScheme="blue"
            onClick={() =>
              onAction(isWatched ? "removeWatched" : "addWatched", movie)
            }
          />
          <IconButton
            icon={<SmallAddIcon />}
            aria-label="Bookmark"
            variant={isBookmarked ? "solid" : "outline"}
            colorScheme="purple"
            onClick={() =>
              onAction(isBookmarked ? "removeBookmark" : "addBookmark", movie)
            }
          />
        </Stack>
      </Stack>

      <style jsx global>{`
        @media only screen and (max-width: 989px) {
          .movie-card-text {
            font-size: 14px;
          }

          .movie-card-icons {
            font-size: 16px;
            margin-top: 10px;
          }
        }
      `}</style>
    </Box>
  );
};

export default MovieCard;


