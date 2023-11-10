"use client";

// Component (Library)
import { AspectRatio } from "@chakra-ui/react";
import Image from "next/image";
// Type
import type { PhotoProps } from "./Photo.types";

export default function Photo({
  blurDataUrl,
  priority,
  ratio,
  src,
}: PhotoProps) {
  return (
    <AspectRatio ratio={ratio ? ratio : 4 / 3}>
      <Image
        alt="picture"
        blurDataURL={
          blurDataUrl
            ? blurDataUrl
            : "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOM7AEAAUQA5/+cleQAAAAASUVORK5CYII="
        }
        height={900}
        placeholder="blur"
        priority={priority}
        src={src}
        width={1600}
      />
    </AspectRatio>
  );
}
