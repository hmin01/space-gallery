"use client";

// Component
import Image from "next/image";
// Type
import type { PictureProps } from "./Picture.types";

export default function Picture({
  dataUrl,
  isRatio,
  priority,
  src,
}: PictureProps) {
  return (
    <Image
      alt="picture"
      blurDataURL={
        dataUrl ??
        "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOM7AEAAUQA5/+cleQAAAAASUVORK5CYII="
      }
      className={isRatio ? "aspect-[4/3]" : undefined}
      height={600}
      placeholder="blur"
      priority={priority}
      src={src}
      style={{ objectFit: "cover" }}
      width={800}
    />
  );
}
