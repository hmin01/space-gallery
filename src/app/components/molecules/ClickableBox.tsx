"use client"
// React hook
import { useCallback } from "react";
// Status
import { setSelectedInfo } from "@/status/picture";
// Type
import type { PictureInfo } from "@/types/picture";

export function ClickableBox({ children, info }: { children: React.ReactNode, info: PictureInfo }): JSX.Element {
  const { setInfo } = setSelectedInfo();

  /** [Event handler] 클릭 이벤트 */
  const onClick = useCallback((): void => setInfo(info), [info, setInfo]);

  return (
    <div className="brightness-90 cursor-pointer duration-300 hover:brightness-125" onClick={onClick}>{children}</div>
  );
}