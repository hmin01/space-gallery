// Component
import Link from "next/link";
import { Picture } from "@/components/atoms/Picture";
import PictureCover from "@/components/atoms/PictureCover";
// Type
import type { PictureInfo } from "@/types/picture";

export default function PictureCard({ info }: { info: PictureInfo }): JSX.Element {
  return (
    <div className="brightness-90 cursor-pointer duration-300 hover:brightness-125">
      <Link href={`/picture/${info.timestamp}`}>
        <div className="overflow-hidden relative rounded-xl ring-1 ring-zinc-800">
          <Picture blurDataURL={info.dataUrl} ratio={9 / 6} src={info.url} />
          <PictureCover title={info.title} />
        </div>
      </Link>
    </div>
  );
}