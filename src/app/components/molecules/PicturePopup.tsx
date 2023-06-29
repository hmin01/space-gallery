"use client"

// Chakra ui
import { Box, Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
// Component
import PictureCard from "./PictureCard";
// React hook
import { useEffect, useMemo } from "react";
// Type
import { PictureInfo } from "../../../../servers/picture/type";

export default function PicturePopup({ info, onClose }: { info?: PictureInfo, onClose: () => void }): JSX.Element {
  // 팝업 오픈 상태
  const isOpen = useMemo(() => info === undefined ? false : true, [info]);

  useEffect(() => console.log(info), [info])

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(8px) hue-rotate(90deg)" />
      <ModalContent>
        <PictureCard info={info} />
      </ModalContent>
    </Modal>
  );
}