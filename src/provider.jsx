// ./src/provider.tsx
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

export const WrapRootElement = ({ element }) => (
  // Or ChakraBaseProvider if you only want to compile the default Chakra theme tokens
  <ChakraProvider>{element}</ChakraProvider>
);