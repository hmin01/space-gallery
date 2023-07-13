"use client"

// Type
import type { PictureInfo } from "@/types/picture";
import type { PropsWithChildren } from "react";
// Component
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export function PictureInfoModal({ info, isOpen, onClose }: { info: PictureInfo, isOpen: boolean, onClose: () => void }): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" size="full">
      <ModalContent bg="blackAlpha.400" backdropFilter="blur(10px)" color="white" maxWidth="7xl">
        <ModalHeader>{info.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{info.explanation}</ModalBody>
      </ModalContent>
    </Modal>
  );
}

export function TestModal({ children }: PropsWithChildren ): JSX.Element {
  const router = useRouter();

  return (
    <Modal isOpen={true} onClose={() => router.push("/")}>
      <ModalContent>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
}