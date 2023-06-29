"use client"

// Component
import PictureList from "../molecules/PictureList";
import PicturePopup from "../molecules/PicturePopup";
// React hook
import { useCallback, useState } from "react";
// Type
import { PictureInfo } from "../../../../servers/picture/type";

export default function PictureGallery({ items }: { items: PictureInfo[] }): JSX.Element {
  // 선택된 사진 정보
  const [info, setInfo] = useState<PictureInfo | undefined>(undefined);

  /** [Event handler] 팝업 오픈 */
  const onOpen = useCallback((info: PictureInfo): void => setInfo(info), []);
  /** [Event handler] 팝업 닫기 */
  const onClose = useCallback((): void => setInfo(undefined), []);
  

  return (
    <>
      <PictureList items={items} onOpen={onOpen} />
      <PicturePopup info={info} onClose={onClose} />
    </>
  );
}