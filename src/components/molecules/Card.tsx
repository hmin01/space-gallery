// Component
import Link from "next/link";
import { PhotoNamingCover } from "@/components/atoms/Cover";
import { BasicPhoto } from "@/components/atoms/Photo";
// Type
import type { PhotoInfoProps } from "@/types/photo";

export function PhotoCard({ info }: { info: PhotoInfoProps }): JSX.Element {
  return (
    <Link href={`/photo/${info.id}`}>
      <div className="brightness-90 duration-300 hover:brightness-125">
        <div className="overflow-hidden relative rounded-xl ring-1 ring-zinc-800">
          <BasicPhoto blurDataUrl={info.dataUrl} ratio={9 / 6} src={info.url} />
          <PhotoNamingCover title={info.title} />
        </div>
      </div>
    </Link>
  );
}