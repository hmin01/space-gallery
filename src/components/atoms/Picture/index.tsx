// Component
import Image from "next/image";
// Type
import type { PictureProps } from "./Picture.types";

export default function Picture({ dataUrl, priority, src }: PictureProps) {
  return <Image alt="picture" className="aspect-[4/3] object-cover" blurDataURL={dataUrl} height={576} placeholder="blur" priority={priority} src={src} width={768} />;
}
