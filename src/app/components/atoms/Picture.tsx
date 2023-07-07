// Component
import Image from "next/image";
import AspectRatio from "@/components/atoms/AspectRatio";

export const Picture: React.FC<any> = ({ blurDataURL, priority, ratio, src }: { blurDataURL?: string, priority?: boolean, ratio?: number, src: string }) => {
  return (
    <AspectRatio ratio={ratio ? ratio : 4 / 3}>
      <Image alt="picture" blurDataURL={blurDataURL ? blurDataURL : "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOM7AEAAUQA5/+cleQAAAAASUVORK5CYII="} height={900} placeholder="blur" priority={priority} src={src} width={1600} />
    </AspectRatio>
  );
}