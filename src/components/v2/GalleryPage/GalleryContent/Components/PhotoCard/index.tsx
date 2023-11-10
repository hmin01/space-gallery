// Component (Common)
import { Photo } from "@/components/v2/Common";
// Component (Library)
import Link from "next/link";
// Component (Local)
import PhotoCardCover from "./PhotoCardCover";
// Type
import type { PhotoCardProps } from "./PhotoCard.types";

export default function PhotoCard({ info }: PhotoCardProps) {
  return (
    <Link href={`/photo/${info.id}`} key={info.id} shallow>
      <div className="brightness-90 duration-300 hover:brightness-125">
        <div className="overflow-hidden relative rounded-xl ring-1 ring-zinc-800">
          <Photo blurDataUrl={info.dataUrl} ratio={9 / 6} src={info.url} />
          <PhotoCardCover>{info.title}</PhotoCardCover>
        </div>
      </div>
    </Link>
  );
}
