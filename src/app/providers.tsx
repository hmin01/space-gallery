"use client";

// Component
import { ChakraProvider } from "@chakra-ui/react";
// Type
import type { PropsWithChildren } from "react";

export default function Providers({ children }: PropsWithChildren) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
