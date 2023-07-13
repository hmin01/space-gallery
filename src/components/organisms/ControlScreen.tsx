"use client"

// Component
import { BackButton, NextCarouselButton, PrevCarouselButton } from "@/components/atoms/ControlButton";
// React hook
import { useCallback, useState } from "react";
// Router
import { useRouter } from "next/navigation";
// Type
import type { PhotoInfoProps } from "@/types/photo";
// Utilties
import { isToday } from "@/utilities/date";

export function ControlScreen({ info }: { info: PhotoInfoProps }): JSX.Element {
  // 라우터
  const router = useRouter();
  // 터치 이벤트 상태
  const [x, setX] = useState(0);

  /** [Event handler] 터치 시작 이벤트 */
  const onTouchStart = useCallback((e: any): void => setX(e.changedTouches[0].clientX), []);
  /** [Event handler] 터치 종료 이벤트 */
  const onTouchEnd = useCallback((e: any): void => {
    const currentPosX: number = e.changedTouches[0].clientX;
    // 차이가 160이상 나는 경우
    if (Math.abs(x - currentPosX) > 160) {
      const isNext: boolean = x < currentPosX;
      // 이동할 사진에 대한 타임스탬프
      const timestamp: number = isNext ? (info.timestamp + 86400) : (info.timestamp - 86400);
      // 마지막 사진일 경우, Next 이벤트 비활성화
      if (isNext && isToday(info.timestamp)) return;
      // 페이지 이동
      router.push(`/picture/${timestamp}`);
    }
  }, [info, x]);

  return (
    <div className="absolute h-full top-0 select-none w-full" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <BackButton />
      <div className="flex h-full items-center justify-between px-4 relative w-full">
        <NextCarouselButton timestamp={info.timestamp} />
        <PrevCarouselButton timestamp={info.timestamp} />
      </div>
    </div>
  );
}