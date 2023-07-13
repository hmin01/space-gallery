"use client"

// Component
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
// React hook
import { useCallback, useEffect } from "react";
// Router
import { useRouter } from "next/navigation";
// Status
import { useDisplayInfoModal, useDisplayMainModal } from "@/status/modal";
// Type
import type { PhotoInfoProps } from "@/types/photo";

/** [Properties] For InfoModal */
interface InfoModalProps {
  info: PhotoInfoProps;
}
/** [Properties] For PhotoModal */
interface PhotoModalProps {
  backdrop?: string;
  children: React.ReactNode;
}

export function InfoModal({ info }: InfoModalProps): JSX.Element {
  // 상태 객체 및 함수
  const { show, setShow } = useDisplayInfoModal();

  /** [Event handler] 팝업 닫기 */
  const onClose = useCallback(() => setShow(false), [setShow]);

  return (
    <Modal isOpen={show} onClose={onClose} scrollBehavior="inside" size="full">
      <ModalContent bg="blackAlpha.400" backdropFilter="blur(10px)" color="white" maxWidth="6xl">
        <ModalHeader>{info.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{info.explanation}</ModalBody>
      </ModalContent>
    </Modal>
  );
}

export function PhotoModal({ backdrop, children }: PhotoModalProps): JSX.Element {
  // 라우터
  const router = useRouter();
  // 모달 상태
  const { show, setShow } = useDisplayMainModal();

  /** [Event handler] 모달 닫기 */
  const onCloseModal = useCallback(() => {
    router.push("/", { shallow: true });
    setShow(false);
  }, [router, setShow]);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Modal isCentered isOpen={show} onClose={onCloseModal} scrollBehavior="inside" size="6xl">
      {backdrop ? (
        <ModalOverlay bgImage={backdrop} bgRepeat="no-repeat" bgSize="cover" />
      ) : (
        <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(16px)" />
      )}
      <ModalContent maxHeight="full">
        <ModalBody height="full" overflowY="hidden" p="0">{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
}