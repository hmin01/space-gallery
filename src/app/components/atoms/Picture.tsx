// Component
import Image from "next/image";
import AspectRatio from "./AspectRatio";

export const Picture: React.FC<any> = ({ ratio, src }: { ratio?: number, src: string }) => {
  return (
    <AspectRatio ratio={ratio ? ratio : 4 / 3}>
      <Image alt="picture" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAQAAAAD+Fb1AAAAEElEQVR42mNsPcMABoy4GQBuhAVJ2BJe8QAAAABJRU5ErkJggg==" height={900} placeholder="blur" src={src} width={900} />
    </AspectRatio>
  );
}