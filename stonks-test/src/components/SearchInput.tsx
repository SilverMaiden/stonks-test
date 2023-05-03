// components/SearchInput.tsx
import { Box, Button, Input, Spinner, Stack } from "@chakra-ui/react";
import { ChangeEventHandler, FormEventHandler } from "react";

interface SearchInputProps {
  query: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSubmit: FormEventHandler;
  isLoading: boolean;
}

const SearchInput = ({
  query,
  onChange,
  onSubmit,
  isLoading,
}: SearchInputProps) => (
  <Stack>
    <form onSubmit={onSubmit}>
      <Stack spacing={4}>
        <Input
          placeholder="Search for movies by title"
          size="lg"
          value={query}
          onChange={onChange}
        />
        <Button size="lg" type="submit">
          {isLoading ? <Spinner /> : "Search"}
        </Button>
      </Stack>
    </form>
  </Stack>
);

export default SearchInput;
