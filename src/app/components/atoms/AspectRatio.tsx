"use client"

// Component
import { AspectRatio as ChakraAspectRatio } from "@chakra-ui/react";

export default function AspectRatio({ children, ratio }: { children: React.ReactNode, ratio: number }): JSX.Element {
  return (
    <ChakraAspectRatio ratio={ratio ? ratio : (4 / 3)}>{children}</ChakraAspectRatio>
  );
}