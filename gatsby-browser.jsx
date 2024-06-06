// gatsby-browser.jsx
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

// Import your extended theme from a location in `./src`

export const wrapRootElement = ({ element }) => (
  // Or ChakraBaseProvider if you only want to compile the default Chakra theme tokens
  <ChakraProvider>{element}</ChakraProvider>
);
