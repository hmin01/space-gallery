"use client";

// Hook
import { useVisible } from "./PictureInfoSection.hooks";
// Type
import type { PropsWithChildren } from "react";

export default function PictureInfoSection({ children }: PropsWithChildren) {
  // 클릭 이벤트 핸들러
  const { visible, onClick } = useVisible();

  return (
    <section
      className={`absolute duration-200 backdrop-blur-md bg-black/60 h-full left-0 top-0 w-full ${visible ? "opacity-100" : "opacity-0"}`}
      onClick={onClick}
    >
      <div className="p-8">{children}</div>
    </section>
  );
}
