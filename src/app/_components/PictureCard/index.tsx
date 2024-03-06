// Component
import { AspectRatio, Picture } from "@/components/atoms";
import Link from "next/link";
import PictureCardCover from "./PictureCardCover";
// Type
import type { PictureOverData } from "@/types/picture";

export default function PictureCard({ dataUrl, id, title, url }: PictureOverData) {
  return (
    <Link
      className="brightness-90 duration-300 hover:brightness-125 overflow-hidden relative rounded-xl ring-1 ring-zinc-800"
      href={`/picture/${id}`}
      scroll={false}
      shallow
    >
      {/* <AspectRatio> */}
      <Picture dataUrl={dataUrl} isRatio priority={false} src={url} />
      {/* </AspectRatio> */}
      <PictureCardCover>{title}</PictureCardCover>
    </Link>
  );
}
