"use client";

// Component
import {
  Modal as ChakraModal,
  ModalBody as ChakraModalBody,
  ModalContent as ChakraModalContent,
  ModalOverlay as ChakraModalOverlay,
} from "@chakra-ui/react";
// Type
import type { PropsWithChildren } from "react";

export default function PictureModal({ children }: PropsWithChildren) {
  return (
    <ChakraModal isCentered isOpen onClose={() => {}}>
      <ChakraModalOverlay bg="blackAlpha.400" />
      <ChakraModalContent maxHeight="full">
        <ChakraModalBody height="full" overflowY="hidden" p="0">
          {children}
        </ChakraModalBody>
      </ChakraModalContent>
    </ChakraModal>
  );
}
