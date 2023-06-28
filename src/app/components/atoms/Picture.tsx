'use client'

// Component
import Image from "next/image";
import { AspectRatio } from '@chakra-ui/react';
// Type
import type { PictureImage } from "../../../../servers/picture/type";

export const Picture: React.FC<any> = ({ info }: { info: PictureImage }) => {
  return (
    <AspectRatio ratio={4 / 3}>
      <Image blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAQAAAAD+Fb1AAAAEElEQVR42mNsPcMABoy4GQBuhAVJ2BJe8QAAAABJRU5ErkJggg==" alt={info.id} height={900} placeholder="blur" src={info.url} width={900} />
    </AspectRatio>
  );
}