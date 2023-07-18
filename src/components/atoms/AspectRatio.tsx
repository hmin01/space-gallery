"use client"

// Component
import { AspectRatio as ChakraAspectRatio } from "@chakra-ui/react";

/** [Properties] For AspectRatio */
interface AspectRatioProps {
  children: React.ReactNode;
  ratio?: number;
}

export default function AspectRatio({ children, ratio }: AspectRatioProps): JSX.Element {
  return (
    <ChakraAspectRatio ratio={ratio ? ratio : (4 / 3)}>{children}</ChakraAspectRatio>
  );
}