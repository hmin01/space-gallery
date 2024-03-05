// Component
import Link from "next/link";
import { Picture } from "@components";
import PictureCardCover from "./PictureCardCover";
// Type
import type { PictureInfo } from "@/types/picture";

export default function PictureCard({ dataUrl, id, title, url }: PictureInfo) {
  return (
    <Link
      className="brightness-90 duration-300 hover:brightness-125 overflow-hidden relative rounded-xl ring-1 ring-zinc-800"
      href={`/photo/${id}`}
      key={id}
      shallow
    >
      <Picture dataUrl={dataUrl} isRatio={true} src={url} />
      <PictureCardCover>{title}</PictureCardCover>
    </Link>
  );
}
