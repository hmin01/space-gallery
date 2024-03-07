// Component
import Image from "next/image";
// Type
import type { PictureData } from "@/types/picture";

export default function Picture({ url }: PictureData) {
  return (
    <Image
      alt="origin_picture"
      className="drop-shadow-lg object-contain"
      fill
      loading="eager"
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
      src={url}
    />
  );
}
