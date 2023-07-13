"use client"

import { CacheProvider } from "@chakra-ui/next-js";
// Chakra UI
import { ChakraProvider } from "@chakra-ui/react";
// Type
import type { PropsWithChildren } from "react";

const ChakraConfigProvder: React.FC<any> = ({ children }: PropsWithChildren) => {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
}

export default ChakraConfigProvder;