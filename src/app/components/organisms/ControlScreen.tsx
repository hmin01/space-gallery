"use client"

// Component
import { BackButton, NextCarouselButton, PrevCarouselButton } from "@/components/atoms/ControlButton";
import PictureInfo from "@/components/organisms/PictureInfo";
// Type
import type { PictureInfo as PictureInfoType } from "@/types/picture";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export function ControlScreen({ info }: { info: PictureInfoType }): JSX.Element {
  // 라우터
  const router = useRouter();
  // 터치 이벤트 상태
  const [x, setX] = useState(0);

  /** [Event handler] 터치 시작 이벤트 */
  const onTouchStart = useCallback((e: any) => setX(e.changedTouches.clientX), []);
  /** [Event handler] 터치 종료 이벤트 */
const onTouchEnd = useCallback((e: any) => {
  if (e.changedTouches.clientX > (x + 100)) router.push(`/picture/${info.timestamp - 86400}`);
  else if (e.changedTouches.clientX < (x - 100)) router.push(`/picture/${info.timestamp + 86400}`);
}, [x]);

  return (
    <div className="absolute h-full top-0 select-none w-full" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <BackButton />
      <div className="flex h-full items-center justify-between px-4 relative w-full">
        <NextCarouselButton timestamp={info.timestamp} />
        <PrevCarouselButton timestamp={info.timestamp} />
        <PictureInfo info={info} />
      </div>
    </div>
  );
}