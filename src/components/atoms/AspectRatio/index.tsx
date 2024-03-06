"use client";

// Component
import { AspectRatio as ChakraAspectRatio } from "@chakra-ui/react";
// Type
import type AspectRatioProps from "./AspectRatio.types";

export default function AspectRatio({ children, ratio }: AspectRatioProps) {
  return <ChakraAspectRatio ratio={ratio}>{children}</ChakraAspectRatio>;
}
