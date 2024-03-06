"use client";

// Component
import { Modal as ChakraModal, ModalBody as ChakraModalBody, ModalContent as ChakraModalContent, ModalOverlay as ChakraModalOverlay } from "@chakra-ui/react";
// Hook
import { useClose } from "./PictureModal.hooks";
// Type
import type PictureModalProps from "./PictureModal.types";

export default function PictureModal({ children, isHardNav }: PictureModalProps) {
  // 모달 닫기 핸들러
  const onClose = useClose(isHardNav);

  return (
    <ChakraModal isCentered isOpen onClose={onClose}>
      <ChakraModalOverlay bg={isHardNav ? "blackAlpha.400" : "blackAlpha.800"} backdropFilter="blur(16px)" />
      <ChakraModalContent bg="transparent" minHeight="100%" maxW="768" overflow="hidden">
        {children}
      </ChakraModalContent>
    </ChakraModal>
  );
}
