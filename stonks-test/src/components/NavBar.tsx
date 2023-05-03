// components/NavBar.tsx
import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MouseEvent, ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      onClick={(e: MouseEvent) => {
        e.preventDefault();
        router.push(href);
      }}
      display="block"
      px={3}
      py={2}
      borderRadius="md"
      fontWeight={isActive ? "bold" : "medium"}
      color={isActive ? "gray.200" : "white"}
      _hover={{ bg: "gray.700", textDecoration: "none" }}
    >
      {children}
    </Link>
  );
};

const NavBar = () => {
  return (
    <Flex
      as="nav"
      bg="gray.800"
      color="white"
      px={8}
      py={2}
      alignItems="center"
      justifyContent="space-between"
    >
      <Text fontSize="2xl" fontWeight="bold">
        Movie Night
      </Text>
      <Spacer />
      <Box display="flex">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/favorites">Favorites</NavLink>
        <NavLink href="/watched">Watched</NavLink> {/* Add this line */}
        <NavLink href="/bookmarks">Bookmarks</NavLink> {/* Add this line */}
      </Box>
    </Flex>
  );
};

export default NavBar;
