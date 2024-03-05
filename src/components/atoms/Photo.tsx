// Component
import Image from "next/image";
import AspectRatio from "@/components/atoms/AspectRatio";

/** [Properties] For BasicPhoto */
interface BasicPhotoProps {
  blurDataUrl?: string;
  priority?: boolean;
  ratio?: number;
  src: string;
}

export function BasicPhoto({
  blurDataUrl,
  priority,
  ratio,
  src,
}: BasicPhotoProps) {
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
