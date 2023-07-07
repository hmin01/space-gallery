"use client"

// Type
import type { PictureInfo } from "@/types/picture";
// Component
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader } from "@chakra-ui/react";

export function PictureInfoModal({ info, isOpen, onClose }: { info: PictureInfo, isOpen: boolean, onClose: () => void }): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" size="full">
      <ModalContent bg="blackAlpha.300" backdropFilter="blur(10px) hue-rotate(90deg)" color="white" maxWidth="7xl">
        <ModalHeader>{info.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{info.explanation}</ModalBody>
      </ModalContent>
    </Modal>
  );
}