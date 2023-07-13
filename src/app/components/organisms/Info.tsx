"use client"

// Chakra hook
import { useDisclosure } from "@chakra-ui/react";
// Component
import { ShowInfoButton } from "@/components/atoms/ControlButton";
import { PictureInfoModal } from "@/components/molecules/Modal";
// Type
import type { PictureInfo } from "@/types/picture";

export default function Info({ info }: { info: PictureInfo }): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <ShowInfoButton onClick={onOpen} />
      <PictureInfoModal info={info} isOpen={isOpen} onClose={onClose} />
    </>
  );
}