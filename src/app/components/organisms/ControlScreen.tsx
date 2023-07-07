// Component
import { BackButton, NextCarouselButton, PrevCarouselButton } from "@/components/atoms/ControlButton";
import PictureInfo from "@/components/organisms/PictureInfo";
// Type
import type { PictureInfo as PictureInfoType } from "@/types/picture";

export function ControlScreen({ info }: { info: PictureInfoType }): JSX.Element {
  return (
    <div className="absolute h-full top-0 select-none w-full">
      <BackButton />
      <div className="flex h-full items-center justify-between px-4 relative w-full">
        <NextCarouselButton date={info.date} />
        <PrevCarouselButton date={info.date} />
        <PictureInfo info={info} />
      </div>
    </div>
  );
}