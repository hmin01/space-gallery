"use client"

// Chakra ui
import { Box, Modal, ModalContent, ModalOverlay, Stack } from "@chakra-ui/react";
// Component
import { Picture } from "../atoms/Picture";
// React hook
import { useCallback, useMemo } from "react";
// Status
import { setSelectedInfo } from "@/app/status/picture";

export default function PicturePopup(): JSX.Element {
  // 선택된 정보
  const { info, setInfo } = setSelectedInfo();
  // 팝업 오픈 상태
  const isOpen = useMemo(() => info === null ? false : true, [info]);
  /** [Event handler] 팝업 닫기 */
  const onClose = useCallback((): void => setInfo(null), [setInfo]);

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(8px) hue-rotate(90deg)" />
      <ModalContent>
        <div className="rounded-t-md overflow-hidden">
          <Picture ratio={16 / 9} src={info?.url} />
        </div>
        <Stack my="4" spacing="2">
          <Box px="6">
            <h2 className="font-bold text-xl">{info?.title}</h2>
          </Box>
          <Box maxH={40} px="6" overflowY="scroll">
            <p className="text-sm">{info?.explanation}</p>
          </Box>
        </Stack>
      </ModalContent>
    </Modal>
  );
}