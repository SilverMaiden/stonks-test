import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "@component/components/NavBar";
import "@component/styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../redux/store"; // Import the wrapper from your store

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <NavBar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default wrapper.withRedux(App); // Use the wrapper.withRedux() instead of <Provider>
