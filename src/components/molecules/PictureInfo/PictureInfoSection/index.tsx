"use client";

// Component
import PictureInfoSectionHeader from "./PictureInfoSectionHeader";
// Hook
import { useVisible } from "./PictureInfoSection.hooks";
// Type
import type PicutreInfoSectionProps from "./PictureInfoSection.types";

export default function PictureInfoSection({ children, title }: PicutreInfoSectionProps) {
  // 클릭 이벤트 핸들러
  const { visible, onVisible, onUnVisible } = useVisible();

  return (
    <section className="absolute h-full left-0 top-0 w-full">
      <div className={`duration-200 backdrop-blur-md bg-black/60 h-full p-8 w-full ${visible ? "opacity-100" : "opacity-0"}`}>
        <PictureInfoSectionHeader onClose={onUnVisible}>{title}</PictureInfoSectionHeader>
        <p className="text-gray-100">{children}</p>
      </div>
      <>{!visible && <a className="absolute cursor-help h-full left-0 top-0 w-full" onClick={onVisible}></a>}</>
    </section>
  );
}
