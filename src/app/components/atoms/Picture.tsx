"use client"

// Component
import Image from "next/image";
import { AspectRatio } from '@chakra-ui/react';
// React hook
import { useCallback } from "react";
// Type
import type { PictureInfo } from "../../../../servers/picture/type";

export const ClickablePicture: React.FC<any> = ({ info, onOpen }: { info: PictureInfo, onOpen: (info: PictureInfo) => void }) => {
  /** [Event handler] 클릭 이벤트 */
  const onClick = useCallback((): void => onOpen(info), [info]);

  return (
    <div className="cursor-zoom-in overflow-hidden rounded-xl" onClick={onClick}>
      <Picture src={info.url} />
    </div>
  );
}

export const Picture: React.FC<any> = ({ ratio, src }: { ratio?: number, src: string }) => {
  return (
    <AspectRatio ratio={ratio ? ratio : 4 / 3}>
      <Image alt="picture" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAQAAAAD+Fb1AAAAEElEQVR42mNsPcMABoy4GQBuhAVJ2BJe8QAAAABJRU5ErkJggg==" height={900} placeholder="blur" src={src} width={900} />
    </AspectRatio>
  );
}